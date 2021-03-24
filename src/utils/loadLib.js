/*
Parameter type

name: string,
url: string,
callback: function

*/
const loadLib = (name, url, callback) => {
  if (!document.getElementById(`${name}JSSDK`)) {
    const script = document.createElement("script");

    script.id = `${name}JSSDK`;

    script.async = true;

    script.crossorigin = "anonymous";

    script.src = url;

    script.onload = () => {
      callback();
    };

    document.body.appendChild(script);
  }
};

export default loadLib;
