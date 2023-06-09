import { useEffect } from "react";

const ChatBox = () => {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "145dabfd6a17f27872dec4568bbb867d1",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);
};

export default ChatBox;
