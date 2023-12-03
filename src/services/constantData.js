export const messagesTypes = [
  {
    content: "Default",
    type: "default",
  },
  {
    content: "Success",
    type: "success",
  },
  {
    content: "Error",
    type: "error",
  },
  {
    content: "Info",
    type: "info",
  },
  {
    content: "Warning",
    type: "warning",
  },
];

export const positions = [
  {
    position: "top-left",
    id: "tl",
  },
  {
    position: "top-center",
    id: "tc",
  },
  {
    position: "top-right",
    id: "tr",
  },
  {
    position: "bottom-left",
    id: "bl",
  },
  {
    position: "bottom-center",
    id: "bc",
  },
  {
    position: "bottom-right",
    id: "br",
  },
];

export const themes = [
  {
    theme: "dark",
  },
  {
    theme: "light",
  },
  {
    theme: "colored",
  },
];

export const defaultOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

export const requiredOptions = {
  type: "default",
  messageContent: "",
  interval : 5000
};
