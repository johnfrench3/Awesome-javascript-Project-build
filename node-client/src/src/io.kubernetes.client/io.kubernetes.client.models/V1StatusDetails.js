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
import V1StatusCause from './V1StatusCause';





/**
* The V1StatusDetails model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1StatusDetails
* @version 0.3-SNAPSHOT
*/
export default class V1StatusDetails {
    /**
    * Constructs a new <code>V1StatusDetails</code>.
    * StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1StatusDetails
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1StatusDetails</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1StatusDetails} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1StatusDetails} The populated <code>V1StatusDetails</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1StatusDetails();

            
            
            

            if (data.hasOwnProperty('causes')) {
                obj['causes'] = ApiClient.convertToType(data['causes'], [V1StatusCause]);
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = ApiClient.convertToType(data['group'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('retryAfterSeconds')) {
                obj['retryAfterSeconds'] = ApiClient.convertToType(data['retryAfterSeconds'], 'Number');
            }
            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
        }
        return obj;
    }

    /**
    * The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes.
    * @member {Array.<module:io.kubernetes.client/io.kubernetes.client.models/V1StatusCause>} causes
    */
    causes = undefined;
    /**
    * The group attribute of the resource associated with the status StatusReason.
    * @member {String} group
    */
    group = undefined;
    /**
    * The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
    * @member {String} kind
    */
    kind = undefined;
    /**
    * The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described).
    * @member {String} name
    */
    name = undefined;
    /**
    * If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action.
    * @member {Number} retryAfterSeconds
    */
    retryAfterSeconds = undefined;
    /**
    * UID of the resource. (when there is a single resource which can be described). More info: http://kubernetes.io/docs/user-guide/identifiers#uids
    * @member {String} uid
    */
    uid = undefined;








}


