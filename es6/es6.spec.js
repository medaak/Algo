/*

  Ecrire en ES6 la classe Player afin qu'elle valide les tests suivants

*/
var assert = require('assert');
var Player = require('./Player');

describe('EcmaScript6', () => {

    it('Loaded', () => {
        assert.equal(true, true);
    });

    it('New Player', () => {
        let player1 = new Player('Player 1');
        assert.equal(player1.name, 'Player 1');
    });

    it('Player say hello', () => {
        let player = new Player('Player');
        assert.equal(player.sayHello(), 'Hello my name is Player');
    });

    it('Player set age and get dog age', () => {
        let player = new Player('Player');
        player.age = 21;
        assert.equal(player.getDogAge(), 3);
    });

    it('Player sum', () => {
        let player = new Player('Player');
        const prices = [6, 8, 4];
        assert.equal(player.getSum(prices, 4), 22);
    });

});
