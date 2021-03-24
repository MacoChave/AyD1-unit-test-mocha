const assert = require('chai').assert;
const app = require('../201020831')

// RESULTS
describe('201020831', function () {
    describe('imc_sistInter()', function () {
        it('imc_sistInter debería devolver un número', function () {
            let res = app.imc_sistInter(68, 165)
            assert.typeOf(res, 'number')
        })
    })
    describe('imc_sistIngles()', function () {
        it('imc_sistIngles debería devolver un número', function () {
            let res = app.imc_sistIngles(150, 65)
            assert.typeOf(res, 'number')
        })
    })
    describe('weightLevel()', function () {
        it('wightLevel devería devolver un string', function () {
            let res = app.weightLevel(20)
            assert.typeOf(res, 'string')
        })
        it('wightLevel debería ser Normal', function () {
            let res = app.weightLevel(20)
            assert.equal(res, 'Normal')
        })
    })
    describe('getForce()', function () {
        it('getForce devería devolver un número', function () {
            let res = app.getForce(50, 25)
            assert.typeOf(res, 'number')
        })
    })
    describe('getGravitionalForce()', function () {
        it('getGravitionalForce devería devolver un número', function () {
            let res = app.getGravitionalForce(5.98 * Math.pow(10, 24), 7.34 * Math.pow(10, 22), Math.pow(384.10, 3))
            assert.typeOf(res, 'number')
        })

        it('getGravitionalForce devería devolver un número', function () {
            let res = app.getGravitionalForce(5.98 * Math.pow(10, 24), 7.34 * Math.pow(10, 22), Math.pow(384.10, 3))
            assert.typeOf(res, 'number')
        })
    })
})