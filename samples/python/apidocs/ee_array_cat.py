# Copyright 2021 The Google Earth Engine Community Authors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# [START earthengine__apidocs__ee_array_cat]
# Requires an explicit PixelType if no data.
empty = ee.Array([], ee.PixelType.int8())  # []
one = ee.Array([1])
two = ee.Array([2])

print(ee.Array.cat([empty]).getInfo())  # []
print(ee.Array.cat([empty, empty]).getInfo())  # []
print(ee.Array.cat([empty, one]).getInfo())  # [1]
print(ee.Array.cat([one, empty]).getInfo())  # [1]
print(ee.Array.cat([one, two]).getInfo())  # [1, 2]

print(ee.Array.cat([one, two], 0).getInfo())  # [1, 2]
print(ee.Array.cat([one, two], 1).getInfo())  # [[1, 2]]

a = ee.Array([0, 1, 2])
b = ee.Array([3, 4, 5])
print(ee.Array.cat([a, b]).getInfo())  # [0, 1, 2, 3, 4, 5]
print(ee.Array.cat([a, b], 0).getInfo())  # [0, 1, 2, 3, 4, 5]
print(ee.Array.cat([a, b], 1).getInfo())  # [[0, 3], [1, 4], [2, 5]]

c = ee.Array([[0], [1], [2]])
d = ee.Array([[3], [4], [5]])
print(ee.Array.cat([c, d]).getInfo())  # [[0], [1], [2], [3], [4], [5]]
print(ee.Array.cat([c, d], 0).getInfo())  # [[0], [1], [2], [3], [4], [5]]
print(ee.Array.cat([c, d], 1).getInfo())  # [[0, 3], [1, 4], [2, 5]]
print(ee.Array.cat([c, d], 2).getInfo())  # [[[0, 3]], [[1, 4]], [[2, 5]]]

e = ee.Array([[[0, 1], [2, 3]], [[4, 5], [6, 7]]])
f = ee.Array([[[10, 11], [12, 13]], [[14, 15], [16, 17]]])

# [[[0, 1], [2, 3]]
#  [[4, 5], [6, 7]]
#  [[10, 11], [12, 13]]
#  [[14, 15], [16, 17]]
print(ee.Array.cat([e, f], 0).getInfo())

# [[[0, 1], [2, 3], [10, 11], [12, 13]]
#  [[4, 5], [6, 7], [14, 15], [16, 17]]]
print(ee.Array.cat([e, f], 1).getInfo())

# [[[0, 1, 10, 11], [2, 3, 12, 13]]
#  [[4, 5, 14, 15], [6, 7, 16, 17]]]
print(ee.Array.cat([e, f], 2).getInfo())

# [[[[0, 10], [1, 11]], [[2, 12], [3, 13]]]
#  [[[4, 14], [5, 15]], [[6, 16], [7, 17]]]]
print(ee.Array.cat([e, f], 3).getInfo())
# [END earthengine__apidocs__ee_array_cat]