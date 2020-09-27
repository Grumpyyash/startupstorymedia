import Axios from "axios";

export const sendContactMail = async (
  name,
  email,
  company,
  number,
  message
) => {
  const data = {
    name,
    email,
    company,
    number,
    message,
  };

  try {
    const res = await Axios.post("/api/contact", data);
    return res;
  } catch (err) {
    return err;
  }
};

export const sendSubscriber = async (email) => {
  const data = {
    email,
  };

  try {
    const res = await Axios.post("/api/newsletter", data);
    return res;
  } catch (err) {
    return err;
  }
};
