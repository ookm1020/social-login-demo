import React from "react";
import KakaoLogin from "react-kakao-login";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.responseFail = this.responseFail.bind(this);
    this.responseKakao = this.responseKakao.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  // Google Login
  responseGoogle = res => {
    console.log("Google Success: ", res);
  };

  // Kakao Login
  responseKakao = res => {
    console.log("Kakao Success: ", res);
  };

  // Facebook Login
  responseFacebook = res => {
    console.log("Facebook Success: ", res);
  };

  // Login Fail
  responseFail = err => {
    console.error("Login Fail: ", err);
  };

  render() {
    return (
      <div className="Main">
        <div className="img-wrap" onClick={this.naverLogin}>
          <img src="/naver.png" alt="img" />
        </div>

        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE}
          onSuccess={this.responseGoogle}
          onFailure={this.responseFail}
          cookiePolicy={"single_host_origin"}
        />

        <KakaoLogin
          jsKey={process.env.REACT_APP_KAKAO}
          onSuccess={this.responseKakao}
          onFailure={this.responseFail}
          cookiePolicy={"single_host_origin"}
          getProfile="true"
        />

        <FacebookLogin
          appId={process.env.REACT_APP_FACEBOOK}
          fields="name,email,picture"
          callback={this.responseFacebook}
        />
      </div>
    );
  }
}

export default Main;
