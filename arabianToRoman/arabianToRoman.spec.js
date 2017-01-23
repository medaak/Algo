/*

  Ecrire la fonction arabianToRoman qui transforme un nombre arabe en un
  nombre romain.

*/

var assert = require('assert');
var arabianToRoman = require('./arabianToRoman.js');

describe('Convert arabian number to roman', function() {

    it('should be loaded', function() {
        assert.equal(true, true);
    });

    it('Zero (0)', function() {
        assert.deepEqual(arabianToRoman(0), '');
    });

    it('Un (1)', function() {
        assert.deepEqual(arabianToRoman(1), 'I');
    });

    it('Deux (2)', function() {
        assert.deepEqual(arabianToRoman(2), 'II');
    });

    it('Cinq (5)', function() {
        assert.deepEqual(arabianToRoman(5), 'V');
    });

    it('Dix (10)', function() {
        assert.deepEqual(arabianToRoman(10), 'X');
    });

    it('Dix-huit (18)', function() {
        assert.deepEqual(arabianToRoman(18), 'XVIII');
    });

    it('Cinquante (50)', function() {
        assert.deepEqual(arabianToRoman(50), 'L');
    });

    it('Null', function() {
        assert.deepEqual(arabianToRoman(null), 'NaN');
    });

    it('Nothing', function() {
        assert.deepEqual(arabianToRoman(), 'NaN');
    });

    it('String', function() {
        assert.deepEqual(arabianToRoman('3'), 'NaN');
    });

})
