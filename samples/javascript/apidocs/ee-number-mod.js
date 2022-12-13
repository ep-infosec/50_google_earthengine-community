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

// [START earthengine__apidocs__ee_number_mod]
// Remainder with positive dividend.
print('Remainder of 12/5', ee.Number(12).mod(ee.Number(5)));  // 2
print('Remainder of 1/-2', ee.Number(1).mod(ee.Number(-2)));  // 1
print('Remainder of 1/2', ee.Number(1).mod(ee.Number(2)));  // 1
print('Remainder of 2/3', ee.Number(2).mod(ee.Number(3)));  // 2
print('Remainder of 5.5/2', ee.Number(5.5).mod(ee.Number(2)));  // 1.5

// Remainder with negative dividend.
print('Remainder of -12/5', ee.Number(-12).mod(ee.Number(5)));  // -2
print('Remainder of -1/2', ee.Number(-1).mod(ee.Number(2)));  // -1
print('Remainder of -4/2', ee.Number(-4).mod(ee.Number(2)));  // 0
// [END earthengine__apidocs__ee_number_mod]
