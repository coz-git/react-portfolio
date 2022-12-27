import React from 'react'
import Lottie from 'react-lottie'
import * as loadingAnimation from '../../assets/json/112253-plane.json'

const defaultOptions = {
  animationData: loadingAnimation.default,
}

const Planet = () => {
  return (
    <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
  )
}

export default Planet