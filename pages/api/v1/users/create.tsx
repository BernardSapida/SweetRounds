// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  sucess: string;
  message: string;
  data: Array<number | string | Array<any>>;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { firstname, lastname, email, password, confirmPassword } = req.body;

  const response = await axios.post(
    `${process.env.NEXT_SERVER_URL}/api/v1/users/create.php`,
    {
      auth_provider: "Credentials",
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    }
  );

  const data = response.data;

  res.status(200).json(data);
}
