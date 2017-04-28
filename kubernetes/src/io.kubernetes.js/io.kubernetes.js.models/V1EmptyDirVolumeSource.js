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
    root.KubernetesJsClient.V1EmptyDirVolumeSource = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1EmptyDirVolumeSource model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1EmptyDirVolumeSource
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1EmptyDirVolumeSource</code>.
   * Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1EmptyDirVolumeSource
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>V1EmptyDirVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1EmptyDirVolumeSource} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1EmptyDirVolumeSource} The populated <code>V1EmptyDirVolumeSource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('medium')) {
        obj['medium'] = ApiClient.convertToType(data['medium'], 'String');
      }
    }
    return obj;
  }

  /**
   * What type of storage medium should back this directory. The default is \"\" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir
   * @member {String} medium
   */
  exports.prototype['medium'] = undefined;



  return exports;
}));


