import styled from "styled-components";

export const GameTitle = styled.h1`
  text-align: center;
`;

export const GameDescription = styled.h3`
  text-align: center;
`;

export const Answer = styled.h2`
  text-align: center;
`;

//export const GameImage = styled.img`
// display: block;
//margin-left: auto;
//margin-right: auto;
//width: 50%;
//`;

export const container = styled.div`
  text-align: center;
`;

export const EnterButtonstyled = styled.button`
  font-size: 0.8em;
  margin-left: 57em;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-align: center;
`;

export const Inputbarstyled = styled.input`
  text-align: center;

  .wrong-answer {
    color: red;
  }

  .alert alert-success {
    color: green;
  }
`;
