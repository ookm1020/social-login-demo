import React from "react";

// components
import GoogleLogin from "../GoogleLogin";
import KakaoLogin from "../KakaoLogin";
import NaverLogin from "../NaverLogin";

import "./Main.css";

let Main = () => {
  return (
    <div className={window.opener ? "Main hidden" : "Main"}>
      <GoogleLogin />
      <KakaoLogin />
      <NaverLogin />
    </div>
  );
};

export default Main;
