import React, { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
function Question(props) {
  const [expand, setExpand] = useState(false);

  return (
    <article className="bg-white border-2 border-gray-200  h-max drop-shadow-md p-4 flex-row">
      <div className="flex justify-between">
        <h1 className="text-xl font-[450] text-gray-700 capitalize">
          {props.question.title}
        </h1>
        <button
          className="text-green-950 text-4xl"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          {expand ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
        </button>
      </div>
      {expand && (
        <div className="text-gray-600 mt-2 leading-8">
          {props.question.info}
        </div>
      )}
    </article>
  );
}

export default Question;
