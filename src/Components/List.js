import React from "react";

function List(props) {
  console.log(props.day);
  return (
    <div>
      {props.day} {props.index}
      <button onClick={() => props.delete(props.index)}>Delete</button>
    </div>
  );
}

export default List;
