import React from "react";

import "./Main.css";

let Main = () => {
  return (
    <div className="Main">
      <div onClick={() => alert("google click")} className="img-wrap">
        <img src="/google.png" alt="img" />
      </div>

      <div onClick={() => alert("kakao click")} className="img-wrap">
        <img src="/kakao.png" alt="img" />
      </div>

      <div onClick={() => alert("facebook click")} className="img-wrap">
        <img src="/facebook.png" alt="img" />
      </div>

      <div onClick={() => alert("naver click")} className="img-wrap">
        <img src="/naver.png" alt="img" />
      </div>
    </div>
  );
};

export default Main;
