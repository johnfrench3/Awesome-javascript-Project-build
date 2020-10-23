/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.19.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1LabelSelector } from './v1LabelSelector';
import { V1ResourceRequirements } from './v1ResourceRequirements';
import { V1TypedLocalObjectReference } from './v1TypedLocalObjectReference';

/**
* PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
*/
export class V1PersistentVolumeClaimSpec {
    /**
    * AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
    */
    'accessModes'?: Array<string>;
    'dataSource'?: V1TypedLocalObjectReference;
    'resources'?: V1ResourceRequirements;
    'selector'?: V1LabelSelector;
    /**
    * Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
    */
    'storageClassName'?: string;
    /**
    * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
    */
    'volumeMode'?: string;
    /**
    * VolumeName is the binding reference to the PersistentVolume backing this claim.
    */
    'volumeName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accessModes",
            "baseName": "accessModes",
            "type": "Array<string>"
        },
        {
            "name": "dataSource",
            "baseName": "dataSource",
            "type": "V1TypedLocalObjectReference"
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "V1ResourceRequirements"
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "V1LabelSelector"
        },
        {
            "name": "storageClassName",
            "baseName": "storageClassName",
            "type": "string"
        },
        {
            "name": "volumeMode",
            "baseName": "volumeMode",
            "type": "string"
        },
        {
            "name": "volumeName",
            "baseName": "volumeName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1PersistentVolumeClaimSpec.attributeTypeMap;
    }
}

