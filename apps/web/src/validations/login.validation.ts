import * as z from "zod";

const loginValidation = z.object({
  username: z
    .string()
    .email({ message: "Insira um endereço de e-mail válido." }),
  password: z
    .string()
    .min(0, { message: "A senha deve ter pelo menos 8 caracteres." }),
});

export default loginValidation;
