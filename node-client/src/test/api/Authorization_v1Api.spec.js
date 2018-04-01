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
    instance = new KubernetesJsClient.Authorization_v1Api();
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

  describe('Authorization_v1Api', function() {
    describe('createNamespacedLocalSubjectAccessReview', function() {
      it('should call createNamespacedLocalSubjectAccessReview successfully', function(done) {
        //uncomment below and update the code to test createNamespacedLocalSubjectAccessReview
        //instance.createNamespacedLocalSubjectAccessReview(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createSelfSubjectAccessReview', function() {
      it('should call createSelfSubjectAccessReview successfully', function(done) {
        //uncomment below and update the code to test createSelfSubjectAccessReview
        //instance.createSelfSubjectAccessReview(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createSelfSubjectRulesReview', function() {
      it('should call createSelfSubjectRulesReview successfully', function(done) {
        //uncomment below and update the code to test createSelfSubjectRulesReview
        //instance.createSelfSubjectRulesReview(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createSubjectAccessReview', function() {
      it('should call createSubjectAccessReview successfully', function(done) {
        //uncomment below and update the code to test createSubjectAccessReview
        //instance.createSubjectAccessReview(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAPIResources', function() {
      it('should call getAPIResources successfully', function(done) {
        //uncomment below and update the code to test getAPIResources
        //instance.getAPIResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
