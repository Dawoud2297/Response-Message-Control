import { toast } from "react-toastify";
import { defaultOptions } from "../services/constantData";

export const showMessage = (type, message, options = {}) => {
  let toastEmitter;

  switch (type) {
    case "success":
      toastEmitter = toast.success;
      break;
    case "error":
      toastEmitter = toast.error;
      break;
    case "info":
      toastEmitter = toast.info;
      break;
    case "warning":
      toastEmitter = toast.warn;
      break;
    default:
      toastEmitter = toast;
      break;
  }

  toastEmitter(message, {
    ...defaultOptions,
    ...options,
  });
};
