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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1JobSpec', 'io.kubernetes.js/io.kubernetes.js.models/V1ObjectMeta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1JobSpec'), require('./V1ObjectMeta'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V2alpha1JobTemplateSpec = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1JobSpec, root.KubernetesJsClient.V1ObjectMeta);
  }
}(this, function(ApiClient, V1JobSpec, V1ObjectMeta) {
  'use strict';




  /**
   * The V2alpha1JobTemplateSpec model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V2alpha1JobTemplateSpec
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V2alpha1JobTemplateSpec</code>.
   * JobTemplateSpec describes the data a Job should have when created from a template
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V2alpha1JobTemplateSpec
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>V2alpha1JobTemplateSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V2alpha1JobTemplateSpec} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V2alpha1JobTemplateSpec} The populated <code>V2alpha1JobTemplateSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = V1ObjectMeta.constructFromObject(data['metadata']);
      }
      if (data.hasOwnProperty('spec')) {
        obj['spec'] = V1JobSpec.constructFromObject(data['spec']);
      }
    }
    return obj;
  }

  /**
   * Standard object's metadata of the jobs created from this template. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#metadata
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1ObjectMeta} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * Specification of the desired behavior of the job. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#spec-and-status
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1JobSpec} spec
   */
  exports.prototype['spec'] = undefined;



  return exports;
}));


