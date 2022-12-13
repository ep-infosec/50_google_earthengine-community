/**
 * Copyright 2022 The Google Earth Engine Community Authors
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

// [START earthengine__apidocs__ee_image_normalizeddifference]
// A Landsat 8 surface reflectance image.
var img = ee.Image('LANDSAT/LC08/C02/T1_L2/LC08_044034_20210508');

// Calculate normalized difference vegetation index: (NIR - Red) / (NIR + Red).
var nirBand = 'SR_B5';
var redBand = 'SR_B4';
var ndvi = img.normalizedDifference([nirBand, redBand]);

// Display NDVI result on the map.
Map.setCenter(-122.148, 37.377, 11);
Map.addLayer(ndvi, {min: 0, max: 0.5}, 'NDVI');
// [END earthengine__apidocs__ee_image_normalizeddifference]
