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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KubernetesJsClient);
  }
}(this, function(expect, KubernetesJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KubernetesJsClient.V1ObjectReference();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V1ObjectReference', function() {
    it('should create an instance of V1ObjectReference', function() {
      // uncomment below and update the code to test V1ObjectReference
      //var instane = new KubernetesJsClient.V1ObjectReference();
      //expect(instance).to.be.a(KubernetesJsClient.V1ObjectReference);
    });

    it('should have the property apiVersion (base name: "apiVersion")', function() {
      // uncomment below and update the code to test the property apiVersion
      //var instane = new KubernetesJsClient.V1ObjectReference();
      //expect(instance).to.be();
    });

    it('should have the property fieldPath (base name: "fieldPath")', function() {
      // uncomment below and update the code to test the property fieldPath
      //var instane = new KubernetesJsClient.V1ObjectReference();
      //expect(instance).to.be();
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instane = new KubernetesJsClient.V1ObjectReference();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KubernetesJsClient.V1ObjectReference();
      //expect(instance).to.be();
    });

    it('should have the property namespace (base name: "namespace")', function() {
      // uncomment below and update the code to test the property namespace
      //var instane = new KubernetesJsClient.V1ObjectReference();
      //expect(instance).to.be();
    });

    it('should have the property resourceVersion (base name: "resourceVersion")', function() {
      // uncomment below and update the code to test the property resourceVersion
      //var instane = new KubernetesJsClient.V1ObjectReference();
      //expect(instance).to.be();
    });

    it('should have the property uid (base name: "uid")', function() {
      // uncomment below and update the code to test the property uid
      //var instane = new KubernetesJsClient.V1ObjectReference();
      //expect(instance).to.be();
    });

  });

}));
