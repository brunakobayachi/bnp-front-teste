/**
 * @api {get} /api/users Read list
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que retorne uma lista de usuários
 * - A request deve receber apenas o método GET
 * - A lista deve conter pelo menos 2 usuários
 * - Cada usuário deve ter um id, nome e email
 * - Utilize a interface IUser para tipar os dados
 */

import { NextApiRequest, NextApiResponse } from "next/types";
import { ApiMethod } from "@/decorators/method";
import { IUser } from "@/types/user.d";
import { faker } from "@faker-js/faker/locale/pt_BR";

export default ApiMethod("GET")(
	async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const users: Array<IUser> = [];
  
      for (let i = 0; i < 3; i++) {
        users.push({
          id: i + 1,
          name: faker.person.firstName(),
          email: faker.internet.email(),
        });
      }
      return res.status(200).json(users);
    } catch (error) {
      console.log(error)
      return res.status(400).json(undefined);
    }
	},
);
