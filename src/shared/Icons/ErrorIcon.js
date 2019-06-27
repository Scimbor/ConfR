import React from 'react'
import { Colors } from '../Colors'

const { yellowA700: defaultIconColor } = Colors
const defaultIconWidth = 24
const defaultIconHeight = 24

const ErrorIcon = ({
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
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
      d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
      fill={fill}
    />
  </svg>
)

export default ErrorIcon
