/**
 * @api {get} /api/users/create Create User
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que registre um usuário no array users
 * - A request deve receber apenas o método POST
 * - A request deve receber um body com os dados do usuário
 * - O body vai seguir a interface IUserCreate, removendo o id
 * - Você deve corrigir a interface IUserCreate em src/types/user.d.ts
 */

import { NextApiRequest, NextApiResponse } from "next/types";
import { ApiMethod } from "@/decorators/method";
import { IUser, IUserCreate } from "@/types/user.d";

const users: IUser[] = [];

let idCounter = 0
export default ApiMethod("POST")(
	async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      idCounter++
      const body: IUserCreate = JSON.parse(req.body);
      users.push({
        id: idCounter,
        name: body.name,
        email: body.email,
      });
      return res.status(201).json(users);
    } catch (error) {
      console.log(error);
      return res.status(400).json(undefined);
    }
	},
);