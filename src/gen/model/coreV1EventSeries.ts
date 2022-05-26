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

/**
* EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
*/
export class CoreV1EventSeries {
    /**
    * Number of occurrences in this series up to the last heartbeat time
    */
    'count'?: number;
    /**
    * Time of the last occurrence observed
    */
    'lastObservedTime'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        },
        {
            "name": "lastObservedTime",
            "baseName": "lastObservedTime",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return CoreV1EventSeries.attributeTypeMap;
    }
}

