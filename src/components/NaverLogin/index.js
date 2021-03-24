import React, { useEffect } from "react";

import "./NaverLogin.css";

let NaverLogin = () => {
  const onLoadedNaverLib = () => {
    const naverLogin = new window.naver.LoginWithNaverId({
      callbackUrl: "http://localhost:3000/",
      clientId: process.env.REACT_APP_NAVER,
      isPopup: true,
      loginButton: { color: "green", type: 1, height: 60 },
    });

    window.naver.successCallback = (res) => {
      onNaverLoginSuccess(res);
    };

    window.naver.failureCallback = (err) => {
      onNaverLoginFailure(err);
    };

    naverLogin.init();

    if (window.opener) {
      naverLogin.getLoginStatus((status) => {
        if (status) {
          window.opener.naver.successCallback(naverLogin);
        } else {
          window.opener.naver.failureCallback();
        }

        window.close();
      });
    }
  };

  const onNaverLoginSuccess = (res) => {
    const { accessToken } = res.accessToken;

    console.log("Naver: ", res);

    localStorage.setItem("access_token", accessToken);
  };

  const onNaverLoginFailure = (err) => {
    console.log(err);
  };

  useEffect(() => {
    if (!document.getElementById("NaverJSSDK")) {
      const scriptNaverJS = document.createElement("script");

      scriptNaverJS.id = "NaverJSSDK";

      scriptNaverJS.async = true;

      scriptNaverJS.crossorigin = "anonymous";

      scriptNaverJS.src = "//static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js";

      scriptNaverJS.onload = () => {
        onLoadedNaverLib();
      };

      document.body.appendChild(scriptNaverJS);
    }
  }, []);

  return <div id="naverIdLogin" className="img-wrap"></div>;
};

export default NaverLogin;
