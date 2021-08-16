import React from 'react';

function MainTitle(props) {
  return (
    <>
      <h1 className="main_title" style={props.style}>
        {props.title}
      </h1>
    </>
  );
}

export default MainTitle;
