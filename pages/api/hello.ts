// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

// definicion de un type
type Data = {
  name: string;

}

export default function handler(req: NextApiRequest,
   res: NextApiResponse<Data>) { // NextApiResponse<string> -> res.status(200).json('resposta')'
  res.status(200).json({ name: 'John Doe' })
}
