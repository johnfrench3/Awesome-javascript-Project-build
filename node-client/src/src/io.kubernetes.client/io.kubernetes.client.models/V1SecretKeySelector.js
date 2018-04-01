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





/**
* The V1SecretKeySelector model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1SecretKeySelector
* @version 0.3-SNAPSHOT
*/
export default class V1SecretKeySelector {
    /**
    * Constructs a new <code>V1SecretKeySelector</code>.
    * SecretKeySelector selects a key of a Secret.
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1SecretKeySelector
    * @class
    * @param key {String} The key of the secret to select from.  Must be a valid secret key.
    */

    constructor(key) {
        

        
        

        this['key'] = key;

        
    }

    /**
    * Constructs a <code>V1SecretKeySelector</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1SecretKeySelector} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1SecretKeySelector} The populated <code>V1SecretKeySelector</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1SecretKeySelector();

            
            
            

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('optional')) {
                obj['optional'] = ApiClient.convertToType(data['optional'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * The key of the secret to select from.  Must be a valid secret key.
    * @member {String} key
    */
    key = undefined;
    /**
    * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
    * @member {String} name
    */
    name = undefined;
    /**
    * Specify whether the Secret or it's key must be defined
    * @member {Boolean} optional
    */
    optional = undefined;








}


