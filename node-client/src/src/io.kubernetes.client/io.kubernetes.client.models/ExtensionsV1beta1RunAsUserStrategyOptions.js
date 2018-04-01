/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.10.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import ExtensionsV1beta1IDRange from './ExtensionsV1beta1IDRange';





/**
* The ExtensionsV1beta1RunAsUserStrategyOptions model module.
* @module io.kubernetes.client/io.kubernetes.client.models/ExtensionsV1beta1RunAsUserStrategyOptions
* @version 0.3-SNAPSHOT
*/
export default class ExtensionsV1beta1RunAsUserStrategyOptions {
    /**
    * Constructs a new <code>ExtensionsV1beta1RunAsUserStrategyOptions</code>.
    * Run A sUser Strategy Options defines the strategy type and any options used to create the strategy.
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/ExtensionsV1beta1RunAsUserStrategyOptions
    * @class
    * @param rule {String} Rule is the strategy that will dictate the allowable RunAsUser values that may be set.
    */

    constructor(rule) {
        

        
        

        this['rule'] = rule;

        
    }

    /**
    * Constructs a <code>ExtensionsV1beta1RunAsUserStrategyOptions</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/ExtensionsV1beta1RunAsUserStrategyOptions} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/ExtensionsV1beta1RunAsUserStrategyOptions} The populated <code>ExtensionsV1beta1RunAsUserStrategyOptions</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExtensionsV1beta1RunAsUserStrategyOptions();

            
            
            

            if (data.hasOwnProperty('ranges')) {
                obj['ranges'] = ApiClient.convertToType(data['ranges'], [ExtensionsV1beta1IDRange]);
            }
            if (data.hasOwnProperty('rule')) {
                obj['rule'] = ApiClient.convertToType(data['rule'], 'String');
            }
        }
        return obj;
    }

    /**
    * Ranges are the allowed ranges of uids that may be used.
    * @member {Array.<module:io.kubernetes.client/io.kubernetes.client.models/ExtensionsV1beta1IDRange>} ranges
    */
    ranges = undefined;
    /**
    * Rule is the strategy that will dictate the allowable RunAsUser values that may be set.
    * @member {String} rule
    */
    rule = undefined;








}


