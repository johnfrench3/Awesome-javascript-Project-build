/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.24
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { IntOrString } from '../../types';
import { V1HTTPHeader } from './v1HTTPHeader';

/**
* HTTPGetAction describes an action based on HTTP Get requests.
*/
export class V1HTTPGetAction {
    /**
    * Host name to connect to, defaults to the pod IP. You probably want to set \"Host\" in httpHeaders instead.
    */
    'host'?: string;
    /**
    * Custom headers to set in the request. HTTP allows repeated headers.
    */
    'httpHeaders'?: Array<V1HTTPHeader>;
    /**
    * Path to access on the HTTP server.
    */
    'path'?: string;
    /**
    * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
    */
    'port': IntOrString;
    /**
    * Scheme to use for connecting to the host. Defaults to HTTP.  
    */
    'scheme'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "host",
            "baseName": "host",
            "type": "string"
        },
        {
            "name": "httpHeaders",
            "baseName": "httpHeaders",
            "type": "Array<V1HTTPHeader>"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "IntOrString"
        },
        {
            "name": "scheme",
            "baseName": "scheme",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1HTTPGetAction.attributeTypeMap;
    }
}

