import styled from "styled-components";


const Square = (props) => {
    return (
        <Wrapper>
            <button onClick={() => props.onClick()}>{props.value}</button>
        </Wrapper>
    )
}

export default Square;

const Wrapper = styled.div`
    button {
        width: 100px;
        height: 100px;
        border: 5.56757px solid #FFFFFF;
        border-radius: 30px;
        background: #FF0266;
        cursor: pointer;
        color: white;
        font-size: 40px;
    }
`