import { useState } from "react";
import styled from "styled-components";
import Square from "./Square";


const Board = () => {

    const [square, setSquare] = useState(Array(9).fill(null))
    const [X, setX] = useState(true)

    const winner = calculateWinner(square)
    let status;
    if(winner) {
        status = "G'olib: " + winner
    } else {
        status = "O'yinchining aylanishi : " + (X ? 'X' : 'O')
    }

    const renderSquare = (i) => {
        return (
            <Square value={square[i]} onClick = {() => handleClick(i)} />
        )
    }

    const handleClick = (i) => {
        const squares = square.slice()

        if(squares[i] === null) {
            squares[i] = X ? 'X' : 'O'
            setSquare(squares)
            setX(!X)
        } else {
            alert ("Faqat 1 marotaba bosing !!!")
        }
    }

    function calculateWinner(square) {
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]

        for(let i = 0; i < lines.length; i++) {
            const [a,b,c] = lines[i];

            if(square[a] && square[a] === square[b] && square[b] === square[c]) {
                return square[a]
            }
        }

        return null
    }

    return (
        <Wrapper>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>

            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>

            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>

            <div className="status">
                <button onClick={() => window.location.reload()}>Start game</button>
                {status}
            </div>
            
        </Wrapper>
    )
}

export default Board;

const Wrapper = styled.div`
    .board-row {
        padding-top: 20px;
        display: flex;
        align-content: center;
        justify-content: center;
        gap: 20px;
    }

    .status {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        margin-top: 30px;
        font-size: 30px;
        color: white;

        @media (max-width: 600px) {
            font-size: 20px;
        }

        button {
            width: 100px;
            height: 40px;
            border: 1px solid white;
            color: white;
            background-color: transparent;
            border-radius: 20px 5px 20px 5px;
            cursor: pointer;
        }
    }
`