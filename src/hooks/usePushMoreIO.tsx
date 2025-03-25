import React, { useState } from "react";
import axios from "axios";

export interface UsePushMoreIODataType {
  username: string;
  repositoryName: string;
}
export type UsePushMoreIOState = "idle" | "loading" | "success" | "error";

// const pushMoreUrl = "https://pushmore.io/webhook/34LQgwoNxStyVqk9Tk3dmiwM";
const pushMoreUrl = "http://localhost:5500/send-telegram-message";

const usePushMoreIO = () => {
  const [state, setState] = useState<UsePushMoreIOState>("idle");
  const sendData = React.useCallback(async (data: UsePushMoreIODataType) => {
    setState("loading");
    try {
      // await fetch(pushMoreUrl, {
      //   method: "POST",
      //   body: JSON.stringify(data),
      // });

      await axios.post(pushMoreUrl, data);
      setState("success");
    } catch (error) {
      setState("error");
    }
  }, []);

  return { sendData, state };
};

export default usePushMoreIO;
