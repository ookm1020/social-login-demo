import React, { useEffect } from "react";

import "./Main.css";

let Main = () => {
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

  const onLoadedKakaoLib = () => {
    window.Kakao.init("f048e8cc24946b058a6d9c8d2113b0d5");

    console.log("Kakao Init Complete...");
  };

  const onKakaoLogin = () => {
    window.Kakao.Auth.login({
      success: (res) => {
        console.log("success response: ", res);

        alert("Kakao Login Success");
      },
      fail: (err) => {
        console.log("fail error: ", err);

        alert("Kakao Login Fail");
      },
    });
  };

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
