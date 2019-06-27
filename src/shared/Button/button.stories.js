import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'

storiesOf('Button', module)
  .add('Button', () => <Button>Sign In</Button>)
  .add('Button disabled', () => <Button disabled>Sign In</Button>)
  .add('All buttons', () => (
    <div>
      <Button>Sign In</Button>
      <br />
      <br />
      <Button disabled>Sign In</Button>
    </div>
  ))
