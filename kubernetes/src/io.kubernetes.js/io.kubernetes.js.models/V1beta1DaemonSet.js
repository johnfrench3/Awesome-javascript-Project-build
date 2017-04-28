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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1ObjectMeta', 'io.kubernetes.js/io.kubernetes.js.models/V1beta1DaemonSetSpec', 'io.kubernetes.js/io.kubernetes.js.models/V1beta1DaemonSetStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1ObjectMeta'), require('./V1beta1DaemonSetSpec'), require('./V1beta1DaemonSetStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1beta1DaemonSet = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1ObjectMeta, root.KubernetesJsClient.V1beta1DaemonSetSpec, root.KubernetesJsClient.V1beta1DaemonSetStatus);
  }
}(this, function(ApiClient, V1ObjectMeta, V1beta1DaemonSetSpec, V1beta1DaemonSetStatus) {
  'use strict';




  /**
   * The V1beta1DaemonSet model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1beta1DaemonSet
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1beta1DaemonSet</code>.
   * DaemonSet represents the configuration of a daemon set.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1beta1DaemonSet
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>V1beta1DaemonSet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1DaemonSet} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1DaemonSet} The populated <code>V1beta1DaemonSet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiVersion')) {
        obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
      }
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = V1ObjectMeta.constructFromObject(data['metadata']);
      }
      if (data.hasOwnProperty('spec')) {
        obj['spec'] = V1beta1DaemonSetSpec.constructFromObject(data['spec']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = V1beta1DaemonSetStatus.constructFromObject(data['status']);
      }
    }
    return obj;
  }

  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources
   * @member {String} apiVersion
   */
  exports.prototype['apiVersion'] = undefined;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds
   * @member {String} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * Standard object's metadata. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#metadata
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1ObjectMeta} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * The desired behavior of this daemon set. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#spec-and-status
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1DaemonSetSpec} spec
   */
  exports.prototype['spec'] = undefined;
  /**
   * The current status of this daemon set. This data may be out of date by some window of time. Populated by the system. Read-only. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#spec-and-status
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1DaemonSetStatus} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


