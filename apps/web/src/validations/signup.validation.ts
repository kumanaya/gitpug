import * as z from "zod";

const signupValidation = z.object({
  username: z
    .string()
    .min(3, { message: "O nome de usuário deve ter pelo menos 3 caracteres." }),
  email: z.string().email({ message: "Insira um endereço de e-mail válido." }),
  password: z
    .string()
    .min(8, { message: "A senha deve ter pelo menos 8 caracteres." }),
});

export default signupValidation;
