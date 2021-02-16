/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.20.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1alpha1Overhead } from './v1alpha1Overhead';
import { V1alpha1Scheduling } from './v1alpha1Scheduling';

/**
* RuntimeClassSpec is a specification of a RuntimeClass. It contains parameters that are required to describe the RuntimeClass to the Container Runtime Interface (CRI) implementation, as well as any other components that need to understand how the pod will be run. The RuntimeClassSpec is immutable.
*/
export class V1alpha1RuntimeClassSpec {
    'overhead'?: V1alpha1Overhead;
    /**
    * RuntimeHandler specifies the underlying runtime and configuration that the CRI implementation will use to handle pods of this class. The possible values are specific to the node & CRI configuration.  It is assumed that all handlers are available on every node, and handlers of the same name are equivalent on every node. For example, a handler called \"runc\" might specify that the runc OCI runtime (using native Linux containers) will be used to run the containers in a pod. The RuntimeHandler must be lowercase, conform to the DNS Label (RFC 1123) requirements, and is immutable.
    */
    'runtimeHandler': string;
    'scheduling'?: V1alpha1Scheduling;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "overhead",
            "baseName": "overhead",
            "type": "V1alpha1Overhead"
        },
        {
            "name": "runtimeHandler",
            "baseName": "runtimeHandler",
            "type": "string"
        },
        {
            "name": "scheduling",
            "baseName": "scheduling",
            "type": "V1alpha1Scheduling"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1RuntimeClassSpec.attributeTypeMap;
    }
}

