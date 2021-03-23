import React, { useEffect } from "react";

import "./Main.css";

let Main = () => {
  useEffect(() => {
    if (!document.getElementById("KakaoJSSDK")) {
      const scriptKakaoJS = document.createElement("script");

      scriptKakaoJS.id = "KakaoJSSDK";

      scriptKakaoJS.async = true;

      scriptKakaoJS.crossorigin = "anonymous";

      scriptKakaoJS.src = "//developers.kakao.com/sdk/js/kakao.min.js";

      scriptKakaoJS.onload = () => {
        onLoadedKakaoLib();
      };

      document.body.appendChild(scriptKakaoJS);
    }

    if (!document.getElementById("GoogleJSSDK")) {
      const scriptGoogleJS = document.createElement("script");

      scriptGoogleJS.id = "GoogleJSSDK";

      scriptGoogleJS.async = true;

      scriptGoogleJS.crossorigin = "anonymous";

      scriptGoogleJS.src = "//apis.google.com/js/api.js";

      scriptGoogleJS.onload = () => {
        onLoadedGoogleLib();
      };

      document.body.appendChild(scriptGoogleJS);
    }

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

  const onLoadedKakaoLib = () => {
    window.Kakao.init(process.env.REACT_APP_KAKAO);

    console.log("Kakao Init Complete...");
  };

  const onLoadedGoogleLib = () => {
    window.gapi.load("auth2", function () {
      window.gapi.auth2.init({
        client_id: process.env.REACT_APP_GOOGLE,
      });
    });

    console.log("Google Init Complete...");
  };

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

    console.log("Naver Init and dosen't Custom Button Complete...");
  };

  const onKakaoLogin = () => {
    window.Kakao.Auth.login({
      success: (res) => {
        console.log("success response: ", res);

        const { access_token, refresh_token } = res;

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

  const onGoogleLogin = () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance();

    // get token and profile
    GoogleAuth.signIn().then(
      (res) => {
        const { access_token, id_token } = res.tc;

        localStorage.setItem("access_token", access_token);

        localStorage.setItem("id_token", id_token);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const onNaverLoginSuccess = (res) => {
    const { accessToken } = res.accessToken;

    localStorage.setItem("access_token", accessToken);
  };

  const onNaverLoginFailure = (err) => {
    console.log(err);
  };

  const getKakaoInfo = () => {
    // get profile
    window.Kakao.API.request({
      url: "/v1/api/talk/profile",
      success: (res) => {
        console.log("getInfo success: ", res);
      },
      fail: (err) => {
        console.log("getInfo err: ", err);
      },
    });
  };

  return (
    <div className={window.opener ? "Main hidden" : "Main"}>
      <div onClick={onGoogleLogin} className="img-wrap">
        <img src="/google.png" alt="img" />
      </div>

      <div onClick={onKakaoLogin} className="img-wrap">
        <img src="/kakao.png" alt="img" />
      </div>

      <div onClick={() => alert("facebook click")} className="img-wrap">
        <img src="/facebook.png" alt="img" />
      </div>

      <div id="naverIdLogin" className="img-wrap"></div>
    </div>
  );
};

export default Main;
