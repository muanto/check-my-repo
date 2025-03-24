import React, { useState } from "react";
import axios from "axios";

export interface UsePushMoreIODataType {
  username: string;
  repositoryName: string;
}
export type UsePushMoreIOState = "idle" | "loading" | "success" | "error";

const pushMoreUrl0 = "https://pushmore.io/webhook/34LQgwoNxStyVqk9Tk3dmiwM";
const pushMoreUrl = "http://localhost:5500/send-telegram-message";

const usePushMoreIO = () => {
  const [state, setState] = useState<UsePushMoreIOState>("idle");
  const sendData = React.useCallback(async (data: UsePushMoreIODataType) => {
    setState("loading");
    try {
      const axiosInstance = axios.create({
        // withCredentials: false,
        // headers: {
        //   "Access-Control-Allow-Origin": "*",
        //   // "Content-Type": "application/x-www-form-urlencoded",
        // },
      });
      // var formdata = new FormData();
      // //add three variable to form
      // formdata.append("sender", data.username);
      // formdata.append("repoUrl", data.repositoryName);
      await axiosInstance.post(pushMoreUrl, { message: "testtest" });
      setState("success");
    } catch (error) {
      setState("error");
    }
  }, []);

  return { sendData, state };
};

export default usePushMoreIO;
