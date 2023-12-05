import validator from "validator";
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseObject = {
  message: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseObject>
) {
  if(req.method !== "POST") {
    res.status(400).json({message: "Expected a POST request but didn't get one..."});
    return;
  }

  const {name, email, message, newsletter} = req.body;

  if (
    !validator.isEmail(email) ||
    !name ||
    name.trim() === "" ||
    !message ||
    message.trim() === "" ||
    typeof newsletter !== "boolean"
  ) {
    res.status(422).json({ message: "Invalid input. Make sure name, email and message are correct." });
    return;
  }

  const sanitizedData = {
    email: validator.escape(email),
    name: validator.escape(name),
    message: validator.escape(message),
    newsletter: newsletter
  };



console.log(sanitizedData);


  res.status(200).json({message: "this works!"});
  return;
}
