/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.6.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1AWSElasticBlockStoreVolumeSource', 'io.kubernetes.js/io.kubernetes.js.models/V1AzureDiskVolumeSource', 'io.kubernetes.js/io.kubernetes.js.models/V1AzureFileVolumeSource', 'io.kubernetes.js/io.kubernetes.js.models/V1CephFSVolumeSource', 'io.kubernetes.js/io.kubernetes.js.models/V1CinderVolumeSource', 'io.kubernetes.js/io.kubernetes.js.models/V1FCVolumeSource', 'io.kubernetes.js/io.kubernetes.js.models/V1FlexVolumeSource', 'io.kubernetes.js/io.kubernetes.js.models/V1FlockerVolumeSource', 'io.kubernetes.js/io.kubernetes.js.models/V1GCEPersistentDiskVolumeSource', 'io.kubernetes.js/io.kubernetes.js.models/V1GlusterfsVolumeSource', 'io.kubernetes.js/io.kubernetes.js.models/V1HostPathVolumeSource', 'io.kubernetes.js/io.kubernetes.js.models/V1ISCSIVolumeSource', 'io.kubernetes.js/io.kubernetes.js.models/V1NFSVolumeSource', 'io.kubernetes.js/io.kubernetes.js.models/V1ObjectReference', 'io.kubernetes.js/io.kubernetes.js.models/V1PhotonPersistentDiskVolumeSource', 'io.kubernetes.js/io.kubernetes.js.models/V1PortworxVolumeSource', 'io.kubernetes.js/io.kubernetes.js.models/V1QuobyteVolumeSource', 'io.kubernetes.js/io.kubernetes.js.models/V1RBDVolumeSource', 'io.kubernetes.js/io.kubernetes.js.models/V1ScaleIOVolumeSource', 'io.kubernetes.js/io.kubernetes.js.models/V1VsphereVirtualDiskVolumeSource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1AWSElasticBlockStoreVolumeSource'), require('./V1AzureDiskVolumeSource'), require('./V1AzureFileVolumeSource'), require('./V1CephFSVolumeSource'), require('./V1CinderVolumeSource'), require('./V1FCVolumeSource'), require('./V1FlexVolumeSource'), require('./V1FlockerVolumeSource'), require('./V1GCEPersistentDiskVolumeSource'), require('./V1GlusterfsVolumeSource'), require('./V1HostPathVolumeSource'), require('./V1ISCSIVolumeSource'), require('./V1NFSVolumeSource'), require('./V1ObjectReference'), require('./V1PhotonPersistentDiskVolumeSource'), require('./V1PortworxVolumeSource'), require('./V1QuobyteVolumeSource'), require('./V1RBDVolumeSource'), require('./V1ScaleIOVolumeSource'), require('./V1VsphereVirtualDiskVolumeSource'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1PersistentVolumeSpec = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1AWSElasticBlockStoreVolumeSource, root.KubernetesJsClient.V1AzureDiskVolumeSource, root.KubernetesJsClient.V1AzureFileVolumeSource, root.KubernetesJsClient.V1CephFSVolumeSource, root.KubernetesJsClient.V1CinderVolumeSource, root.KubernetesJsClient.V1FCVolumeSource, root.KubernetesJsClient.V1FlexVolumeSource, root.KubernetesJsClient.V1FlockerVolumeSource, root.KubernetesJsClient.V1GCEPersistentDiskVolumeSource, root.KubernetesJsClient.V1GlusterfsVolumeSource, root.KubernetesJsClient.V1HostPathVolumeSource, root.KubernetesJsClient.V1ISCSIVolumeSource, root.KubernetesJsClient.V1NFSVolumeSource, root.KubernetesJsClient.V1ObjectReference, root.KubernetesJsClient.V1PhotonPersistentDiskVolumeSource, root.KubernetesJsClient.V1PortworxVolumeSource, root.KubernetesJsClient.V1QuobyteVolumeSource, root.KubernetesJsClient.V1RBDVolumeSource, root.KubernetesJsClient.V1ScaleIOVolumeSource, root.KubernetesJsClient.V1VsphereVirtualDiskVolumeSource);
  }
}(this, function(ApiClient, V1AWSElasticBlockStoreVolumeSource, V1AzureDiskVolumeSource, V1AzureFileVolumeSource, V1CephFSVolumeSource, V1CinderVolumeSource, V1FCVolumeSource, V1FlexVolumeSource, V1FlockerVolumeSource, V1GCEPersistentDiskVolumeSource, V1GlusterfsVolumeSource, V1HostPathVolumeSource, V1ISCSIVolumeSource, V1NFSVolumeSource, V1ObjectReference, V1PhotonPersistentDiskVolumeSource, V1PortworxVolumeSource, V1QuobyteVolumeSource, V1RBDVolumeSource, V1ScaleIOVolumeSource, V1VsphereVirtualDiskVolumeSource) {
  'use strict';




  /**
   * The V1PersistentVolumeSpec model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1PersistentVolumeSpec
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1PersistentVolumeSpec</code>.
   * PersistentVolumeSpec is the specification of a persistent volume.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1PersistentVolumeSpec
   * @class
   */
  var exports = function() {
    var _this = this;

























  };

  /**
   * Constructs a <code>V1PersistentVolumeSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1PersistentVolumeSpec} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1PersistentVolumeSpec} The populated <code>V1PersistentVolumeSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accessModes')) {
        obj['accessModes'] = ApiClient.convertToType(data['accessModes'], ['String']);
      }
      if (data.hasOwnProperty('awsElasticBlockStore')) {
        obj['awsElasticBlockStore'] = V1AWSElasticBlockStoreVolumeSource.constructFromObject(data['awsElasticBlockStore']);
      }
      if (data.hasOwnProperty('azureDisk')) {
        obj['azureDisk'] = V1AzureDiskVolumeSource.constructFromObject(data['azureDisk']);
      }
      if (data.hasOwnProperty('azureFile')) {
        obj['azureFile'] = V1AzureFileVolumeSource.constructFromObject(data['azureFile']);
      }
      if (data.hasOwnProperty('capacity')) {
        obj['capacity'] = ApiClient.convertToType(data['capacity'], {'String': 'String'});
      }
      if (data.hasOwnProperty('cephfs')) {
        obj['cephfs'] = V1CephFSVolumeSource.constructFromObject(data['cephfs']);
      }
      if (data.hasOwnProperty('cinder')) {
        obj['cinder'] = V1CinderVolumeSource.constructFromObject(data['cinder']);
      }
      if (data.hasOwnProperty('claimRef')) {
        obj['claimRef'] = V1ObjectReference.constructFromObject(data['claimRef']);
      }
      if (data.hasOwnProperty('fc')) {
        obj['fc'] = V1FCVolumeSource.constructFromObject(data['fc']);
      }
      if (data.hasOwnProperty('flexVolume')) {
        obj['flexVolume'] = V1FlexVolumeSource.constructFromObject(data['flexVolume']);
      }
      if (data.hasOwnProperty('flocker')) {
        obj['flocker'] = V1FlockerVolumeSource.constructFromObject(data['flocker']);
      }
      if (data.hasOwnProperty('gcePersistentDisk')) {
        obj['gcePersistentDisk'] = V1GCEPersistentDiskVolumeSource.constructFromObject(data['gcePersistentDisk']);
      }
      if (data.hasOwnProperty('glusterfs')) {
        obj['glusterfs'] = V1GlusterfsVolumeSource.constructFromObject(data['glusterfs']);
      }
      if (data.hasOwnProperty('hostPath')) {
        obj['hostPath'] = V1HostPathVolumeSource.constructFromObject(data['hostPath']);
      }
      if (data.hasOwnProperty('iscsi')) {
        obj['iscsi'] = V1ISCSIVolumeSource.constructFromObject(data['iscsi']);
      }
      if (data.hasOwnProperty('nfs')) {
        obj['nfs'] = V1NFSVolumeSource.constructFromObject(data['nfs']);
      }
      if (data.hasOwnProperty('persistentVolumeReclaimPolicy')) {
        obj['persistentVolumeReclaimPolicy'] = ApiClient.convertToType(data['persistentVolumeReclaimPolicy'], 'String');
      }
      if (data.hasOwnProperty('photonPersistentDisk')) {
        obj['photonPersistentDisk'] = V1PhotonPersistentDiskVolumeSource.constructFromObject(data['photonPersistentDisk']);
      }
      if (data.hasOwnProperty('portworxVolume')) {
        obj['portworxVolume'] = V1PortworxVolumeSource.constructFromObject(data['portworxVolume']);
      }
      if (data.hasOwnProperty('quobyte')) {
        obj['quobyte'] = V1QuobyteVolumeSource.constructFromObject(data['quobyte']);
      }
      if (data.hasOwnProperty('rbd')) {
        obj['rbd'] = V1RBDVolumeSource.constructFromObject(data['rbd']);
      }
      if (data.hasOwnProperty('scaleIO')) {
        obj['scaleIO'] = V1ScaleIOVolumeSource.constructFromObject(data['scaleIO']);
      }
      if (data.hasOwnProperty('storageClassName')) {
        obj['storageClassName'] = ApiClient.convertToType(data['storageClassName'], 'String');
      }
      if (data.hasOwnProperty('vsphereVolume')) {
        obj['vsphereVolume'] = V1VsphereVirtualDiskVolumeSource.constructFromObject(data['vsphereVolume']);
      }
    }
    return obj;
  }

  /**
   * AccessModes contains all ways the volume can be mounted. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#access-modes
   * @member {Array.<String>} accessModes
   */
  exports.prototype['accessModes'] = undefined;
  /**
   * AWSElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1AWSElasticBlockStoreVolumeSource} awsElasticBlockStore
   */
  exports.prototype['awsElasticBlockStore'] = undefined;
  /**
   * AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1AzureDiskVolumeSource} azureDisk
   */
  exports.prototype['azureDisk'] = undefined;
  /**
   * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1AzureFileVolumeSource} azureFile
   */
  exports.prototype['azureFile'] = undefined;
  /**
   * A description of the persistent volume's resources and capacity. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#capacity
   * @member {Object.<String, String>} capacity
   */
  exports.prototype['capacity'] = undefined;
  /**
   * CephFS represents a Ceph FS mount on the host that shares a pod's lifetime
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1CephFSVolumeSource} cephfs
   */
  exports.prototype['cephfs'] = undefined;
  /**
   * Cinder represents a cinder volume attached and mounted on kubelets host machine More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1CinderVolumeSource} cinder
   */
  exports.prototype['cinder'] = undefined;
  /**
   * ClaimRef is part of a bi-directional binding between PersistentVolume and PersistentVolumeClaim. Expected to be non-nil when bound. claim.VolumeName is the authoritative bind between PV and PVC. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#binding
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1ObjectReference} claimRef
   */
  exports.prototype['claimRef'] = undefined;
  /**
   * FC represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1FCVolumeSource} fc
   */
  exports.prototype['fc'] = undefined;
  /**
   * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. This is an alpha feature and may change in future.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1FlexVolumeSource} flexVolume
   */
  exports.prototype['flexVolume'] = undefined;
  /**
   * Flocker represents a Flocker volume attached to a kubelet's host machine and exposed to the pod for its usage. This depends on the Flocker control service being running
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1FlockerVolumeSource} flocker
   */
  exports.prototype['flocker'] = undefined;
  /**
   * GCEPersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1GCEPersistentDiskVolumeSource} gcePersistentDisk
   */
  exports.prototype['gcePersistentDisk'] = undefined;
  /**
   * Glusterfs represents a Glusterfs volume that is attached to a host and exposed to the pod. Provisioned by an admin. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1GlusterfsVolumeSource} glusterfs
   */
  exports.prototype['glusterfs'] = undefined;
  /**
   * HostPath represents a directory on the host. Provisioned by a developer or tester. This is useful for single-node development and testing only! On-host storage is not supported in any way and WILL NOT WORK in a multi-node cluster. More info: http://kubernetes.io/docs/user-guide/volumes#hostpath
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1HostPathVolumeSource} hostPath
   */
  exports.prototype['hostPath'] = undefined;
  /**
   * ISCSI represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1ISCSIVolumeSource} iscsi
   */
  exports.prototype['iscsi'] = undefined;
  /**
   * NFS represents an NFS mount on the host. Provisioned by an admin. More info: http://kubernetes.io/docs/user-guide/volumes#nfs
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1NFSVolumeSource} nfs
   */
  exports.prototype['nfs'] = undefined;
  /**
   * What happens to a persistent volume when released from its claim. Valid options are Retain (default) and Recycle. Recycling must be supported by the volume plugin underlying this persistent volume. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#recycling-policy
   * @member {String} persistentVolumeReclaimPolicy
   */
  exports.prototype['persistentVolumeReclaimPolicy'] = undefined;
  /**
   * PhotonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1PhotonPersistentDiskVolumeSource} photonPersistentDisk
   */
  exports.prototype['photonPersistentDisk'] = undefined;
  /**
   * PortworxVolume represents a portworx volume attached and mounted on kubelets host machine
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1PortworxVolumeSource} portworxVolume
   */
  exports.prototype['portworxVolume'] = undefined;
  /**
   * Quobyte represents a Quobyte mount on the host that shares a pod's lifetime
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1QuobyteVolumeSource} quobyte
   */
  exports.prototype['quobyte'] = undefined;
  /**
   * RBD represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1RBDVolumeSource} rbd
   */
  exports.prototype['rbd'] = undefined;
  /**
   * ScaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1ScaleIOVolumeSource} scaleIO
   */
  exports.prototype['scaleIO'] = undefined;
  /**
   * Name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
   * @member {String} storageClassName
   */
  exports.prototype['storageClassName'] = undefined;
  /**
   * VsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1VsphereVirtualDiskVolumeSource} vsphereVolume
   */
  exports.prototype['vsphereVolume'] = undefined;



  return exports;
}));


