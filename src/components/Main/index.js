import React, { useEffect } from "react";

import "./Main.css";

let Main = () => {
  const onLoadedKakaoLib = () => {
    console.log("라이브러리를 정상적으로 다운로드 받았음...");

    window.Kakao.init(process.env.REACT_APP_KAKAO);
  };

  const onKakaoLogin = () => {
    console.log("카카오 로그인 버튼 클릭...");

    console.log(window.Kakao);
  };

  useEffect(() => {
    if (!document.getElementById("KakaoJSSDK")) {
      const scriptKakaoJS = document.createElement("script");

      scriptKakaoJS.async = true;

      scriptKakaoJS.crossorigin = "anonymous";

      scriptKakaoJS.src = "//developers.kakao.com/sdk/js/kakao.min.js";

      scriptKakaoJS.onload = () => {
        onLoadedKakaoLib();
      };

      document.body.appendChild(scriptKakaoJS);
    }
  }, []);

  return (
    <div className="Main">
      <div onClick={() => alert("google click")} className="img-wrap">
        <img src="/google.png" alt="img" />
      </div>

      <div onClick={onKakaoLogin} className="img-wrap">
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
