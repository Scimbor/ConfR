import React from 'react'
import { Colors } from '../Colors'

const { black: defaultIconColor } = Colors
const defaultIconWidth = 24
const defaultIconHeight = 24

const CloseIcon = ({
  style = {},
  fill = `${defaultIconColor}`,
  width = `${defaultIconWidth}`,
  height = `${defaultIconHeight}`,
  viewBox = `0 0 24 24`,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    width={width}
    height={height}
    viewBox={viewBox}>
    <path
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      fill={fill}
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)

export default CloseIcon
