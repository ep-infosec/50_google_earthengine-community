/**
 * Copyright 2021 The Google Earth Engine Community Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [START earthengine__apidocs__ee_image_reduceregion]
// A Landsat 8 surface reflectance image with SWIR1, NIR, and green bands.
var img = ee.Image('LANDSAT/LC08/C02/T1_L2/LC08_044034_20210508')
              .select(['SR_B6', 'SR_B5', 'SR_B3']);

// Santa Cruz Mountains ecoregion geometry.
var geom = ee.FeatureCollection('EPA/Ecoregions/2013/L4')
               .filter('us_l4name == "Santa Cruz Mountains"').geometry();

// Display layers on the map.
Map.setCenter(-122.08, 37.22, 9);
Map.addLayer(img, {min: 10000, max: 20000}, 'Landsat image');
Map.addLayer(geom, {color: 'white'}, 'Santa Cruz Mountains ecoregion');

// Calculate median band values within Santa Cruz Mountains ecoregion. It is
// good practice to explicitly define "scale" (or "crsTransform") and "crs"
// parameters of the analysis to avoid unexpected results from undesired
// defaults when e.g. reducing a composite image.
var stats = img.reduceRegion({
  reducer: ee.Reducer.median(),
  geometry: geom,
  scale: 30,  // meters
  crs: 'EPSG:3310',  // California Albers projection
});

// A dictionary is returned; keys are band names, values are the statistic.
print('Median band values, Santa Cruz Mountains ecoregion', stats);

// You can combine reducers to calculate e.g. mean and standard deviation
// simultaneously. The output dictionary keys are the concatenation of the band
// names and statistic names, separated by an underscore.
var reducer = ee.Reducer.mean().combine({
  reducer2: ee.Reducer.stdDev(),
  sharedInputs: true
});
var multiStats = img.reduceRegion({
  reducer: reducer,
  geometry: geom,
  scale: 30,
  crs: 'EPSG:3310',
});
print('Mean & SD band values, Santa Cruz Mountains ecoregion', multiStats);
// [END earthengine__apidocs__ee_image_reduceregion]
