const assert     = require('assert')
const methods    = require('../index.js')
const expect     = require("chai").expect

describe('Testing function', () => {
    const pins = methods.generatePINs()

    it('should return 1000 pin numbers', () => {
        expect(pins.length).to.equal(1000)
    })

    it('Should not be two equals numbers in any pin', () => {
        pins.forEach(e => {
            expect(methods.checkContigousEquality(e)).to.equal(false)
        })
    })

    it('Should not be three incremetal numbers in any pin', () => {
        pins.forEach(e => {
            expect(methods.checkConsecutiveIncrements(e)).to.equal(false)
        })
    })

    it('Should return true when two equal numbers are found', () => {
        let numberRepeated = '1123'
        let numberNotRepeated = '3576'
        expect(methods.checkContigousEquality(numberRepeated)).to.equal(true)
        expect(methods.checkContigousEquality(numberNotRepeated)).to.equal(false)
    })

    it('Should return true when found consecutives incremental values', () => {
        let numberIncremental = '8345'
        let numberNotIncremental = '4679'
        expect(methods.checkConsecutiveIncrements(numberIncremental)).to.equal(true)
        expect(methods.checkConsecutiveIncrements(numberNotIncremental)).to.equal(false)
    })
})