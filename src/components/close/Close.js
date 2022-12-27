import React from 'react'
import Lottie from 'react-lottie'
import * as loadingAnimation from '../../assets/json/9628-open-close-box.json'

const defaultOptions = {
    animationData: loadingAnimation.default,
}

const Close = (props) => {
  return (
    <Lottie width={props.width} options={defaultOptions} isClickToPauseDisabled={true} />
  )
}

export default Close