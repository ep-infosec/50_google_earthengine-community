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

# [START earthengine__apidocs__ee_dictionary_remove]
# A dictionary (e.g. results of ee.Image.reduceRegion of an S2 image).
dic = ee.Dictionary({
    'B1': 182,
    'B2': 219,
    'B3': 443
})

print('Dictionary with selected keys removed:',
      dic.remove(['B2', 'B3']).getInfo())

dic_subset = dic.remove(**{'selectors': ['B2', 'B3', 'Region'],
                          'ignoreMissing': True})
print('Set ignoreMissing as true to avoid an unmatched key error:',
      dic_subset.getInfo())
# [END earthengine__apidocs__ee_dictionary_remove]
