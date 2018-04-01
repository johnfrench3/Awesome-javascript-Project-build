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
* The V1NonResourceAttributes model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1NonResourceAttributes
* @version 0.3-SNAPSHOT
*/
export default class V1NonResourceAttributes {
    /**
    * Constructs a new <code>V1NonResourceAttributes</code>.
    * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1NonResourceAttributes
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1NonResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1NonResourceAttributes} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1NonResourceAttributes} The populated <code>V1NonResourceAttributes</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1NonResourceAttributes();

            
            
            

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('verb')) {
                obj['verb'] = ApiClient.convertToType(data['verb'], 'String');
            }
        }
        return obj;
    }

    /**
    * Path is the URL path of the request
    * @member {String} path
    */
    path = undefined;
    /**
    * Verb is the standard HTTP verb
    * @member {String} verb
    */
    verb = undefined;








}


