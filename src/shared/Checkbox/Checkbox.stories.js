import React from 'react'
import { storiesOf } from '@storybook/react'
import CheckboxComponent from './Checkbox'

storiesOf('Checkbox', module).add('Checkbox', () => (
  <CheckboxComponent text={'This is checkbox'} />
))
