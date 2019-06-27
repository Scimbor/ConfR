import styled from 'styled-components'
import { Colors } from '../../../../shared/Colors'

const { gray500: timeLineColor } = Colors

const Grid = styled.ul`
  position: absolute;
  top: 1.5px;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  li {
    position: relative;
    ::after,
    ::before {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      background-color: ${timeLineColor};
    }
    ::after {
      bottom: calc(-50%);
      height: 1.5px;
    }
    ::before {
      top: calc(50% - 2.4px);
      height: 3px;
    }
  }
`

export { Grid }
