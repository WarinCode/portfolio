import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

export const optionNotify = {
  theme: "colored",
  icon: true,
  autoClose: 1300,
};

export const notify = (msg, changeIcon) => {
  if (changeIcon === "success") {
    toast.success(msg, optionNotify);
  } else if (changeIcon === "info") {
    toast.info(msg, optionNotify);
  } else if (changeIcon === "warn") {
    toast.warn(msg, optionNotify);
  } else if (changeIcon === "error") {
    toast.error(msg, optionNotify);
  }
};

export const settingReactLoading = {
  css: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  type: [
    "blank",
    "balls",
    "bars",
    "bubbles",
    "cubes",
    "cylon",
    "spin",
    "spinningBubbles",
    "spokes",
  ],
  color: "#5c3194",
  width: 350,
  height: 350,
  reference: () => "https://www.npmjs.com/package/react-loading",
};
