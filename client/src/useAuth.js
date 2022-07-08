import { useState, useEffect } from "react";
import axios from "axios";

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
      .post("https://topify-web.herokuapp.com/login", {
        code,
      })
      .then(function (res) {
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);

        //remove the code section from the url
        window.history.pushState({}, null, "/");
      })
      .catch(() => {
        //catch any errors
        window.location = "/";
      });
  }, [code]);

  useEffect(
    function () {
      if (!refreshToken || !expiresIn) return;

      const interval = setInterval(() => {
        axios
          .post("https://topify-web.herokuapp.com/refresh", {
            refreshToken,
          })
          .then(function (res) {
            setAccessToken(res.data.accessToken);
            setExpiresIn(res.data.expiresIn);
          })
          .catch(() => {
            window.location = "/";
          });
        //one minute before 1 hour
      }, (expiresIn - 60) * 1000);

      return () => clearInterval(interval);
    },
    [refreshToken, expiresIn]
  );

  return accessToken;
}
