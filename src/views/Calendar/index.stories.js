import React from 'react'
import { storiesOf } from '@storybook/react'
import Calendar from './Calendar'

storiesOf('calendar', module).add('main calendar', () => {
  return (
    <div className="App">
      <Calendar />
    </div>
  )
})
