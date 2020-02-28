/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.15.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { ExtensionsV1beta1IDRange } from './extensionsV1beta1IDRange';

/**
* SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use SupplementalGroupsStrategyOptions from policy API Group instead.
*/
export class ExtensionsV1beta1SupplementalGroupsStrategyOptions {
    /**
    * ranges are the allowed ranges of supplemental groups.  If you would like to force a single supplemental group then supply a single range with the same start and end. Required for MustRunAs.
    */
    'ranges'?: Array<ExtensionsV1beta1IDRange>;
    /**
    * rule is the strategy that will dictate what supplemental groups is used in the SecurityContext.
    */
    'rule'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ranges",
            "baseName": "ranges",
            "type": "Array<ExtensionsV1beta1IDRange>"
        },
        {
            "name": "rule",
            "baseName": "rule",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ExtensionsV1beta1SupplementalGroupsStrategyOptions.attributeTypeMap;
    }
}

