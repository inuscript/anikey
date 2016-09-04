import React from 'react'
import ReactDom from 'react-dom'
import singletonDom from 'singleton-dom'

import { Native, Aphrodite } from './binder'

const doAnimate = (label, keyframeInput, keyframeOption) => {
  const props = {
    label, keyframeInput, keyframeOption
  }
  return (
    <div key={label} style={{width: 400}} >
      <Native {...props} />
    </div>
  )
}
const ease = [0.25, 0.1, 0.25, 1]

const doms = () => {
  const input = {
    transform: ['translateX(0px)', 'translateX(100px)'],
  }
  const optionBase = {
    direction: 'alternate',
    duration: 500,
    iterations: Infinity,
  }
  return [
    doAnimate("Native", {
      ...input,
      easing: 'ease',
    }, {
      ...optionBase,
      easing: 'ease',
    }),
    doAnimate("Emulate", {
      ...input,
    }, {
      ...optionBase,
      easing: `cubic-bezier(
        ${ease[0] * ease[0]} ,
        ${ease[1] * ease[1]} ,
        ${ease[2] * ease[2]} ,
        ${ease[3] * ease[3]}
      )`
      // easing: `cubic-bezier(${0.25*0.25}, ${0.1*0.1}, ${0.25*0.25}, 1.0)`,

    }),
  ]
}

const Sandbox = () => {
  return <div>{doms()}</div>
}

export default () => {
  const dom = singletonDom('sample')
  ReactDom.render(
    <Sandbox/>, dom
  )
}