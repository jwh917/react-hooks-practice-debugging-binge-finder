import React from "react";

function TVShow(props) {

  function handeClick(){
    props.selectShow(props)
  }

  return (
    <div>
      <br />
      <img src={props.show.image.medium} onClick={handeClick} alt="" />
    </div>
  );
}

export default TVShow;
