// IIFE
// immediately invoked function expression
(function () {
  'use strict';

  function hello(name) {
    return `Hello ${name}`;
  }
  
  const tmp = 'test';
  
  globalThis.hello = hello;

}());