import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadVocaFB } from "./redux/modules/voca";

import { Card, CardContent, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";

const Main = (props) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const voca_list = useSelector((state) => state.voca.list);

  React.useEffect(() => {
    dispatch(loadVocaFB());
  }, []);

  return (
    <Container>
      {voca_list.map((list, index) => {
        return (
          <CardList>
            <CardItem key={index} style={{ borderRadius: "16px" }}>
              <CardContent>
                <Word>{list.word}</Word>
                <Info>{list.info}</Info>
                <Ex>{list.ex}</Ex>
              </CardContent>
            </CardItem>
          </CardList>
        );
      })}
      <ButtonDiv>
        <Fab
          style={{ backgroundColor: "#5c6bc0", color: "white" }}
          onClick={() => {
            history.push("/detail");
          }}
        >
          <AddIcon />
        </Fab>
      </ButtonDiv>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-width: 800px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 20px;
`;

const CardList = styled.div`
  display: flex;
  float: left;
`;

const CardItem = styled(Card)({
  margin: "20px",
  width: "30vw",
  minWidth: "300px",
  borderStyle: "solid",
  borderColor: "#5c6bc0",
});

const Word = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const Info = styled.p`
  font-size: 15px;
`;

const Ex = styled.p`
  font-size: 15px;
  color: blue;
`;

const ButtonDiv = styled.div`
  bottom: 10px;
  right: 10px;
  display: flex;
  position: fixed;
`;

export default Main;
