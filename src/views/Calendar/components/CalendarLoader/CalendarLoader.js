import React from 'react'
import Loader from 'react-loader-spinner'
import { Colors } from './../../../../shared/Colors'
import { LoaderWrapper } from './CalendarLoader.style'

const { lightBlue600: loaderColor } = Colors

function CalendarLoader(props) {
  return (
    props.loading && (
      <LoaderWrapper height={props.height}>
        <Loader type="ThreeDots" color={loaderColor} height="150" width="150" />
      </LoaderWrapper>
    )
  )
}

export default CalendarLoader
