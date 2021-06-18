import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ success: false, message: "Could not find data" });
};
