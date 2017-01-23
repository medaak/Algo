/*

  Ecrire la fonction scrambe qui mélange un mot sans déplacer
  la 1ere et la dernière lettre

*/
var assert = require('assert');
var scrambe = require('./scrambe');

describe('Cambrige Word Scrambe', function() {

    it('LOADED', function() {
        assert.equal(true, true);
    });

    it('hello 1', function() {
        assert.equal(scrambe('hello')[0], 'h');
    });

    it('hello 2', function() {
        assert.equal(scrambe('hello')[4], 'o');
    });

    it('london', function() {
        assert.equal(scrambe('london')[5], 'n');
    });

    it('hello not equal', function() {
        assert.notEqual(scrambe('hello'), 'hello');
    });

    it('london not equal', function() {
        assert.notEqual(scrambe('london'), 'london');
    });

    it('kayak', function() {
        assert.notEqual(scrambe('kayak'), 'kayak'); // :-)
    });

});
