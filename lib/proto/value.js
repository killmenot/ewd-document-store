/*

 ----------------------------------------------------------------------------
 | ewd-document-store: Persistent JavaScript Objects and Document Database  |
 |                      using Global Storage                                |
 |                                                                          |
 | Copyright (c) 2016-17 M/Gateway Developments Ltd,                        |
 | Reigate, Surrey UK.                                                      |
 | All rights reserved.                                                     |
 |                                                                          |
 | http://www.mgateway.com                                                  |
 | Email: rtweed@mgateway.com                                               |
 |                                                                          |
 |                                                                          |
 | Licensed under the Apache License, Version 2.0 (the "License");          |
 | you may not use this file except in compliance with the License.         |
 | You may obtain a copy of the License at                                  |
 |                                                                          |
 |     http://www.apache.org/licenses/LICENSE-2.0                           |
 |                                                                          |
 | Unless required by applicable law or agreed to in writing, software      |
 | distributed under the License is distributed on an "AS IS" BASIS,        |
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. |
 | See the License for the specific language governing permissions and      |
 |  limitations under the License.                                          |
 ----------------------------------------------------------------------------

  16 March 2017

*/

module.exports = {
  enumerable: true,
  configurable: false,
  get: function() {
    var value = this.documentStore.db.get(this._node).data;
    if (value === 'true') value = true;
    if (value === 'false') value = false;
    if (this.documentStore.db.version().indexOf('GT.M') !== -1 && value.toString().indexOf('""') !== -1) {
      value = value.split('""').join('"');
    }
    return value;
  },
  set: function(value) {
    var node = this._node;
    this._set.call(this, value);
  }
};