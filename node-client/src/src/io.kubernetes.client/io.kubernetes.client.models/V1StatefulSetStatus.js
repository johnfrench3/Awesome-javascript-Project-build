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
import V1StatefulSetCondition from './V1StatefulSetCondition';





/**
* The V1StatefulSetStatus model module.
* @module io.kubernetes.client/io.kubernetes.client.models/V1StatefulSetStatus
* @version 0.3-SNAPSHOT
*/
export default class V1StatefulSetStatus {
    /**
    * Constructs a new <code>V1StatefulSetStatus</code>.
    * StatefulSetStatus represents the current state of a StatefulSet.
    * @alias module:io.kubernetes.client/io.kubernetes.client.models/V1StatefulSetStatus
    * @class
    * @param replicas {Number} replicas is the number of Pods created by the StatefulSet controller.
    */

    constructor(replicas) {
        

        
        

        this['replicas'] = replicas;

        
    }

    /**
    * Constructs a <code>V1StatefulSetStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:io.kubernetes.client/io.kubernetes.client.models/V1StatefulSetStatus} obj Optional instance to populate.
    * @return {module:io.kubernetes.client/io.kubernetes.client.models/V1StatefulSetStatus} The populated <code>V1StatefulSetStatus</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1StatefulSetStatus();

            
            
            

            if (data.hasOwnProperty('collisionCount')) {
                obj['collisionCount'] = ApiClient.convertToType(data['collisionCount'], 'Number');
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [V1StatefulSetCondition]);
            }
            if (data.hasOwnProperty('currentReplicas')) {
                obj['currentReplicas'] = ApiClient.convertToType(data['currentReplicas'], 'Number');
            }
            if (data.hasOwnProperty('currentRevision')) {
                obj['currentRevision'] = ApiClient.convertToType(data['currentRevision'], 'String');
            }
            if (data.hasOwnProperty('observedGeneration')) {
                obj['observedGeneration'] = ApiClient.convertToType(data['observedGeneration'], 'Number');
            }
            if (data.hasOwnProperty('readyReplicas')) {
                obj['readyReplicas'] = ApiClient.convertToType(data['readyReplicas'], 'Number');
            }
            if (data.hasOwnProperty('replicas')) {
                obj['replicas'] = ApiClient.convertToType(data['replicas'], 'Number');
            }
            if (data.hasOwnProperty('updateRevision')) {
                obj['updateRevision'] = ApiClient.convertToType(data['updateRevision'], 'String');
            }
            if (data.hasOwnProperty('updatedReplicas')) {
                obj['updatedReplicas'] = ApiClient.convertToType(data['updatedReplicas'], 'Number');
            }
        }
        return obj;
    }

    /**
    * collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
    * @member {Number} collisionCount
    */
    collisionCount = undefined;
    /**
    * Represents the latest available observations of a statefulset's current state.
    * @member {Array.<module:io.kubernetes.client/io.kubernetes.client.models/V1StatefulSetCondition>} conditions
    */
    conditions = undefined;
    /**
    * currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision.
    * @member {Number} currentReplicas
    */
    currentReplicas = undefined;
    /**
    * currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas).
    * @member {String} currentRevision
    */
    currentRevision = undefined;
    /**
    * observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet's generation, which is updated on mutation by the API Server.
    * @member {Number} observedGeneration
    */
    observedGeneration = undefined;
    /**
    * readyReplicas is the number of Pods created by the StatefulSet controller that have a Ready Condition.
    * @member {Number} readyReplicas
    */
    readyReplicas = undefined;
    /**
    * replicas is the number of Pods created by the StatefulSet controller.
    * @member {Number} replicas
    */
    replicas = undefined;
    /**
    * updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas)
    * @member {String} updateRevision
    */
    updateRevision = undefined;
    /**
    * updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision.
    * @member {Number} updatedReplicas
    */
    updatedReplicas = undefined;








}


