import React from 'react'
import Lottie from 'react-lottie'
import * as loadingAnimation from '../../assets/json/101335-parrot.json'

const defaultOptions = {
  animationData: loadingAnimation.default,
}

const Bird = () => {
  return (
    <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
  )
}

export default Bird