const assert     = require('assert')
const methods    = require('../index.js')
const expect     = require("chai").expect

describe('Testing function', () => {
    const pins = methods.generatePINs()

    it('should return 1000 numbers', () => {
        expect(pins.length).to.equal(1000)
    })

    it('Should not be two equals numbers', () => {
        pins.forEach(e => {
            expect(methods.twoSameDigits(e)).to.equal(false)
        })
    })

    it('Should not be three incremetal numbers', () => {
        pins.forEach(e => {
            expect(methods.threeIncrementalDigits(e)).to.equal(false)
        })
    })
})