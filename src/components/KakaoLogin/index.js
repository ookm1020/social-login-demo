import React, { useEffect } from "react";

// utils
import loadLib from "../../utils/loadLib";

import "./KakaoLogin.css";

let KakaoLogin = () => {
  const onLoadedKakaoLib = () => {
    window.Kakao.init(process.env.REACT_APP_KAKAO);
  };

  const onKakaoLogin = () => {
    window.Kakao.Auth.login({
      success: (res) => {
        const { access_token, refresh_token } = res;

        console.log("Kakao: ", res);

        localStorage.setItem("access_token", access_token);

        localStorage.setItem("refresh_token", refresh_token);

        getKakaoInfo();
      },
      fail: (err) => {
        console.log("fail error: ", err);

        alert("Kakao Login Fail");
      },
    });
  };

  const getKakaoInfo = () => {
    // docs
    // https://developers.kakao.com/docs/latest/ko/reference/rest-api-reference

    window.Kakao.API.request({
      url: "/v1/api/talk/profile",
      success: (res) => {
        console.log("Kakao Info success: ", res);
      },
      fail: (err) => {
        console.log("Kakao Info error: ", err);
      },
    });
  };

  useEffect(() => {
    const url = "//developers.kakao.com/sdk/js/kakao.min.js";

    loadLib("Kakao", url, onLoadedKakaoLib);
  }, []);

  return (
    <div onClick={onKakaoLogin} className="img-wrap">
      <img src="/kakao.png" alt="img" />
    </div>
  );
};

export default KakaoLogin;
