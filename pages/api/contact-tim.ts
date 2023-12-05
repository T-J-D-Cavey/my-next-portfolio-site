import validator from "validator";
import { connectToDB } from "../../utils/mongo_connect";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseObject = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseObject>
) {
  if (req.method !== "POST") {
    res
      .status(400)
      .json({ message: "Expected a POST request but didn't get one..." });
    return;
  }

  const { name, email, message, newsletter } = req.body;

  if (
    !validator.isEmail(email) ||
    !name ||
    name.trim() === "" ||
    !message ||
    message.trim() === "" ||
    typeof newsletter !== "boolean"
  ) {
    res
      .status(422)
      .json({
        message:
          "Invalid input. Make sure name, email and message are correct.",
      });
    return;
  }

  const sanitizedData = {
    email: validator.escape(email),
    name: validator.escape(name),
    message: validator.escape(message),
    newsletter: newsletter,
  };
  const connectionString = `mongodb+srv://${process.env.MONGO_DB_USER_NAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_CLUSTER_NAME}.fabaugr.mongodb.net/${process.env.MONGO_DB_DATABASE_NAME}?retryWrites=true&w=majority`;
  let client;
  try {
    client = await connectToDB(connectionString);
  } catch (error) {
    res.status(500).json({ message: "Could not connect to database." });
    return;
  }

  if(!client) {
    res.status(500).json({ message: "Could not connect to database." });
    return;
  }
  
  const db = client.db();
  let result;
  try {
    result = await db.collection("messages").insertOne(sanitizedData);
  } catch (error) {
    client.close();
    res
      .status(500)
      .json({ message: "Could not store your details in our database." });
    return;
  }

  client.close();

  res.status(201).json({
    message: "Your message and details have been received.",
  });

  return;
}
