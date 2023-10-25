import React from "react";
import questions from "../data.js";
import Question from "./Question";

function Questions() {
  return (
    <section className="w-8/12 max-md:w-11/12 h-fit my-32 bg-white flex flex-col align-middle justify-center pt-8">
      <h1 className="text-center text-5xl text-gray-700 m-4">Questions</h1>
      <div
        className="grid gap-8 h-fit  px-8 py-2 m-2 last:mb-20"
        style={{ gridTemplateRows: "auto 1fr" }}
      >
        {questions.map((question) => {
          return <Question question={question} key={question.id} />;
        })}
      </div>
    </section>
  );
}

export default Questions;
