import React from "react";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createVocaFB } from "./redux/modules/voca";

import { StylesProvider } from "@mui/styles";
import { Input, Button } from "@mui/material";
import styled from "styled-components";

const Detail = (props) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const word = React.useRef(null);
  const info = React.useRef(null);
  const ex = React.useRef(null);

  const addvoca = () => {
    dispatch(
      createVocaFB({
        word: word.current.value,
        info: info.current.value,
        ex: ex.current.value,
      })
    );
    history.goBack("/");
  };

  return (
    <StylesProvider injectFirst>
      <DetailContainer>
        <H2>단어 추가하기</H2>
        <Div>
          <Inputitle>단어</Inputitle>
          <Input type="text" inputRef={word} />
        </Div>
        <Div>
          <Inputitle>설명</Inputitle>
          <Input type="text" inputRef={info} />
        </Div>
        <Div>
          <Inputitle>예시</Inputitle>
          <Input type="text" inputRef={ex} />
        </Div>
        <Button
          style={{
            backgroundColor: "#5c6bc0",
            color: "white",
            width: "70%",
            margin: "20px auto",
            padding: "10px",
            fontSize: "18px",
          }}
          variant="contained"
          onClick={addvoca}
        >
          저장하기
        </Button>
      </DetailContainer>
    </StylesProvider>
  );
};

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  margin: auto;
`;

const H2 = styled.h2`
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  margin-bottom: 30px;
`;

const Inputitle = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export default Detail;
