/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.6.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['io.kubernetes.js/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1HTTPHeader = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1HTTPHeader model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1HTTPHeader
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1HTTPHeader</code>.
   * HTTPHeader describes a custom header to be used in HTTP probes
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1HTTPHeader
   * @class
   * @param name {String} The header field name
   * @param value {String} The header field value
   */
  var exports = function(name, value) {
    var _this = this;

    _this['name'] = name;
    _this['value'] = value;
  };

  /**
   * Constructs a <code>V1HTTPHeader</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1HTTPHeader} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1HTTPHeader} The populated <code>V1HTTPHeader</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * The header field name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The header field value
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


