import React, { useState } from "react";
import {
  EnterButtonstyled,
  GameTitle,
  Inputbarstyled,
  GameDescription,
  Answer,
} from "./style";
let randomNumber = Math.round(Math.random() * 100);

const GuessTheNumber = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState("");
  const [count] = useState(0);

  const onClick = () => {
    const userGuess = parseInt(value, setValue);

    setResults(<Answer className="alert alert-danger">Enter a number</Answer>);

    if (userGuess === randomNumber)
      setResults(<Answer className="alert alert-success">Correct!</Answer>);

    if (userGuess > randomNumber)
      setResults(
        <Answer className="Wrong-answer"> choose lower number </Answer>
      );

    if (userGuess < randomNumber)
      setResults(<Answer className="Wrong-answer"> Wrong guess !</Answer>);
  };

  return (
    <div>
      <GameTitle>Guess The Number game</GameTitle>
      <GameDescription>Guess a number between 1 and 100 </GameDescription>
      <EnterButtonstyled
        style={{ textAlign: "center" }}
        type="submit"
        onClick={onClick}
      >
        GUESS The Number
      </EnterButtonstyled>

      <Inputbarstyled
        value={value}
        type="number"
        onChange={(e) => setValue(e.target.value)}
      />
      <>
        {/* <EnterButtonstyled
          style={{ textAlign: "center" }}
          type="submit"
          onClick={onClick}
        >
          GUESS The Number
        </EnterButtonstyled> */}
      </>

      {results}
    </div>
  );
};

export default GuessTheNumber;
