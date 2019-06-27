import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Select } from './RoomSelect.style'
import uuid from 'uuid/v4'

function RoomSelect(props) {
  return (
    <Select value={props.room} onChange={props.handleRoomChange}>
      <FormattedMessage id={props.textId}>
        {txt => (
          <option value="" hidden key={uuid()}>
            {txt}
          </option>
        )}
      </FormattedMessage>
      {props.rooms.map(room => (
        <option key={uuid()} value={room.name}>
          {room.name}
        </option>
      ))}
    </Select>
  )
}

export default RoomSelect
