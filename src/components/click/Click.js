import React from 'react'
import Lottie from 'react-lottie'
import * as loadingAnimation from '../../assets/json/68620-click.json'

const defaultOptions = {
    animationData: loadingAnimation.default,
}

const Click = () => {
  return (
    <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
  )
}

export default Click