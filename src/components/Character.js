// Write your Character component here
import styled from 'styled-components'

const StyledDiv = styled.div`
font-size: large;
color: #2e557c;
`

const Character = (props) => {
    return <StyledDiv>{props.name}</StyledDiv>
}

export default Character
