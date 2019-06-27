import React from 'react'
import { storiesOf } from '@storybook/react'
import RoomColumn from './RoomColumn/RoomColumn'

storiesOf('Room', module).add('Room', () => (
  <RoomColumn height={20} roomId={2} date={'16-04-2019'} />
))
