/* eslint-disable no-console */
import { sign } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

import userList from "../../../db/user.json";

type TBody = {
  email: string;
  password: string;
};

const secret = "almond";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body as TBody;

    const user = userList.find((u) => u.email === email && u.password === password);

    if (user) {
      if (password === user?.password) {
        try {
          // 토큰 유효시간 3H
          const accessToken = sign({ email, password }, secret, {
            expiresIn: "180m",
          });

          const cookie = serialize("token", accessToken, {
            httpOnly: true,
            maxAge: 60 * 60 * 3,
            sameSite: "lax",
            path: "/",
          });

          res
            .setHeader("Set-Cookie", cookie)
            .status(200)
            .json({ data: { result: true } });
        } catch (error) {
          console.error(error);

          res.status(500).json({ data: { code: 1000, message: "토큰 서명 실패" } });
        }
      } else {
        res.status(500).json({ data: { code: 1001, message: "비밀번호가 일치하지 않습니다." } });
      }
    } else {
      res.status(500).json({
        data: { code: 1002, message: "아이디와 비밀번호가 일치하지 않거나, 회원 정보가 없습니다." },
      });
    }
  } else {
    res.status(500).json({
      data: { code: 1003, message: "유효하지 않은 요청입니다." },
    });
  }
}
