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

// [START earthengine__apidocs__ee_array_eq]
var empty = ee.Array([], ee.PixelType.int8());
print(empty.eq(empty));  // []

print(ee.Array([0]).eq(ee.Array([1])));  // 0
print(ee.Array([0]).eq(ee.Array([0])));  // 1

print(ee.Array([1.1]).eq(ee.Array([1.1])));  // 1
print(ee.Array([1.1]).float().eq(ee.Array([1.1])));  // 0
print(ee.Array([1.1]).double().eq(ee.Array([1.1])));  // 1

print(ee.Array([1]).int8().eq(ee.Array([1])));  // 1
print(ee.Array([1]).int8().eq(ee.Array([1]).int32()));  // 1
// [END earthengine__apidocs__ee_array_eq]
