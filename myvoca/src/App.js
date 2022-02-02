import React from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { StylesProvider } from "@mui/styles";
import styled from "styled-components";
import "./style.css";

import Main from "./Main";
import Detail from "./Detail";

function App() {
  const history = useHistory();

  return (
    <div className="App">
      <StylesProvider injectFirst>
        <Header
          onClick={() => {
            history.push("/");
          }}
        >
          MY VOCA
        </Header>
        <Containers>
          <Route path="/" exact component={Main}></Route>
          <Route path="/detail" component={Detail}></Route>
        </Containers>
      </StylesProvider>
    </div>
  );
}

const Header = styled.div`
  top: 0;
  width: 100%;
  height: 10vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5c6bc0;
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

const Containers = styled.div`
  width: 100%;
  margin-top: 10vh;
`;

export default App;
