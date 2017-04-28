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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V2alpha1MetricStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V2alpha1MetricStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V2alpha1HorizontalPodAutoscalerStatus = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V2alpha1MetricStatus);
  }
}(this, function(ApiClient, V2alpha1MetricStatus) {
  'use strict';




  /**
   * The V2alpha1HorizontalPodAutoscalerStatus model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V2alpha1HorizontalPodAutoscalerStatus
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V2alpha1HorizontalPodAutoscalerStatus</code>.
   * HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V2alpha1HorizontalPodAutoscalerStatus
   * @class
   * @param currentMetrics {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V2alpha1MetricStatus>} currentMetrics is the last read state of the metrics used by this autoscaler.
   * @param currentReplicas {Number} currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.
   * @param desiredReplicas {Number} desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
   */
  var exports = function(currentMetrics, currentReplicas, desiredReplicas) {
    var _this = this;

    _this['currentMetrics'] = currentMetrics;
    _this['currentReplicas'] = currentReplicas;
    _this['desiredReplicas'] = desiredReplicas;


  };

  /**
   * Constructs a <code>V2alpha1HorizontalPodAutoscalerStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V2alpha1HorizontalPodAutoscalerStatus} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V2alpha1HorizontalPodAutoscalerStatus} The populated <code>V2alpha1HorizontalPodAutoscalerStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currentMetrics')) {
        obj['currentMetrics'] = ApiClient.convertToType(data['currentMetrics'], [V2alpha1MetricStatus]);
      }
      if (data.hasOwnProperty('currentReplicas')) {
        obj['currentReplicas'] = ApiClient.convertToType(data['currentReplicas'], 'Number');
      }
      if (data.hasOwnProperty('desiredReplicas')) {
        obj['desiredReplicas'] = ApiClient.convertToType(data['desiredReplicas'], 'Number');
      }
      if (data.hasOwnProperty('lastScaleTime')) {
        obj['lastScaleTime'] = ApiClient.convertToType(data['lastScaleTime'], 'Date');
      }
      if (data.hasOwnProperty('observedGeneration')) {
        obj['observedGeneration'] = ApiClient.convertToType(data['observedGeneration'], 'Number');
      }
    }
    return obj;
  }

  /**
   * currentMetrics is the last read state of the metrics used by this autoscaler.
   * @member {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V2alpha1MetricStatus>} currentMetrics
   */
  exports.prototype['currentMetrics'] = undefined;
  /**
   * currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.
   * @member {Number} currentReplicas
   */
  exports.prototype['currentReplicas'] = undefined;
  /**
   * desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
   * @member {Number} desiredReplicas
   */
  exports.prototype['desiredReplicas'] = undefined;
  /**
   * lastScaleTime is the last time the HorizontalPodAutoscaler scaled the number of pods, used by the autoscaler to control how often the number of pods is changed.
   * @member {Date} lastScaleTime
   */
  exports.prototype['lastScaleTime'] = undefined;
  /**
   * observedGeneration is the most recent generation observed by this autoscaler.
   * @member {Number} observedGeneration
   */
  exports.prototype['observedGeneration'] = undefined;



  return exports;
}));


