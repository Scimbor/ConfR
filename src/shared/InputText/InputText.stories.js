import React from 'react'
import { storiesOf } from '@storybook/react'

import InputText from './InputText'

storiesOf('InputText', module).add('default', () => <InputText id="text" />)
storiesOf('InputText', module).add('With Props', () => (
  <InputText
    id="text"
    required="required"
    label="Text"
    helper="Type anything you like"
  />
))
