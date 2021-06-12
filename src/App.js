import Routes from "./Routes";
import styled from "styled-components";
import { ProvideAuth } from "./Hooks/useAuth";
import { Provider } from "react-redux";
import { store } from "./Store";
import "./App.css";

function App() {
  return (
    <ProvideAuth>
      <Provider store={store}>
        <AppContainer className="App">
          <Routes />
        </AppContainer>
      </Provider>
    </ProvideAuth>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
