// @flow

import styled from 'styled-components'

const blue = 'dodgerblue';
const white = 'white';

const Button = styled.button`
    border: 3px solid ${blue};
    background-color: ${props => props.primary ? blue : white};
    color: ${props => props.primary ? white : blue};
    border-radius: 50px;
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    font-size: 1em;
    padding: 10px 20px;
`

export default Button;
