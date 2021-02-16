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

/**
* Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling.
*/
export class V1EmptyDirVolumeSource {
    /**
    * What type of storage medium should back this directory. The default is \"\" which means to use the node\'s default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
    */
    'medium'?: string;
    /**
    * Total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir
    */
    'sizeLimit'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "medium",
            "baseName": "medium",
            "type": "string"
        },
        {
            "name": "sizeLimit",
            "baseName": "sizeLimit",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1EmptyDirVolumeSource.attributeTypeMap;
    }
}

