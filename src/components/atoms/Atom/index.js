import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const StyledAtom = styled.span`
  // font-family: ${font('primary')};
  // color: ${palette({ grayscale: 0 }, 1)};
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 35px;
line-height: 52px;
/* identical to box height */

letter-spacing: 0.02em;

color: #000000;
`

StyledAtom.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

StyledAtom.defaultProps = {
  palette: 'grayscale',
}

const Atom = ({ ...props }) => {
  return (
    <StyledAtom {...props} />
  )
}

export default Atom
