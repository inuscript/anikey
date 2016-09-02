const convertEffect = require('../src/convert/effects')
const assert = require('assert')

describe('convertEffect', function () {
  it('only number', () => {
    let result = convertEffect({}, 2000)
    assert.deepEqual(result, {
      animationDuration: '2000ms',
      animationTimingFunction: 'linear'
    })
  })
  it('full options', () => {
    let result = convertEffect({}, {
      delay: 100,
      direction: 'alternate',
      duration: '300ms',
      easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
      fill: 'backwards',
      iterations: Infinity
    })
    assert.deepEqual(result, {
      animationDelay: '100ms',
      animationDirection: 'alternate',
      animationDuration: '300ms',
      animationTimingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)',
      animationFillMode: 'backwards',
      animationIterationCount: 'infinite'
    })
  })
  describe('Timing Number options', () => {
    it('convert Number and suffix ms', () => {
      let result = convertEffect({}, {
        delay: 123,
        duration: 456
      })
      assert.deepEqual(result, {
        animationDelay: '123ms',
        animationDuration: '456ms',
        animationTimingFunction: 'linear'
      })
    })
    it('accept with ms prefix', () => {
      let result = convertEffect({}, {
        delay: '123ms'
      })
      assert.deepEqual(result, {
        animationDelay: '123ms',
        animationTimingFunction: 'linear'
      })
    })
  })
  describe('Count number options', () => {
    it('convert Number to String', () => {
      let result = convertEffect({}, {
        iterations: 8
      })
      assert.deepEqual(result, {
        animationIterationCount: '8',
        animationTimingFunction: 'linear'
      })
    })
    it('convert Infinty', () => {
      let result = convertEffect({}, {
        iterations: Infinity
      })
      assert.deepEqual(result, {
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear'
      })
    })
  })
})