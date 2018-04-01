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
    instance = new KubernetesJsClient.V1beta1NonResourceAttributes();
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

  describe('V1beta1NonResourceAttributes', function() {
    it('should create an instance of V1beta1NonResourceAttributes', function() {
      // uncomment below and update the code to test V1beta1NonResourceAttributes
      //var instane = new KubernetesJsClient.V1beta1NonResourceAttributes();
      //expect(instance).to.be.a(KubernetesJsClient.V1beta1NonResourceAttributes);
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instane = new KubernetesJsClient.V1beta1NonResourceAttributes();
      //expect(instance).to.be();
    });

    it('should have the property verb (base name: "verb")', function() {
      // uncomment below and update the code to test the property verb
      //var instane = new KubernetesJsClient.V1beta1NonResourceAttributes();
      //expect(instance).to.be();
    });

  });

}));
