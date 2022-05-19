import styled from "styled-components"
import Board from "./components/Board";

function App() {
  return (
    <AppContainer>
		<h1>X va O o'yinini o'ynaymiz</h1>
		<Board />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
	width: 100%;
	height: 100vh;
	background: #FF0266;
	position: absolute;

	h1 {
		text-align: center;
		color: white;
	}
`