// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseObject = {
  message: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseObject>
) {
  // res.status(200).json({ name: 'John Doe' })
  res.status(200).json({message: "this works!"})
}
