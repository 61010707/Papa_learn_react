import React from "react";
import Joke from "./joke";
import jokesData from "./jokeData";
const MyApp = () => {
  const jokeComponets = jokesData.map(jokedata => (
    <Joke
      // key most important
      key={jokedata.id}
      question={jokedata.question}
      answer={jokedata.punchLine}
    />
  ));
  return <div className="joke-list">{jokeComponets}</div>;
};
export default MyApp;
