import * as z from 'zod';

export const RegisterSchema = z
  .object({
    email: z
      .string({
        errorMap: () => {
          return { message: "Digite um e-mail válido" };
        },
      })
      .email(),
    password: z.string().min(3),
    checked: z.boolean().refine(value => value === true, {
      message: "O campo deve ser marcado",
      path: ["checked"],
    }),
    checkedTree: z.boolean().refine(value => value === true, {
      message: "O campo deve ser marcado",
      path: ["checkedTree"],
    }),
    checkedtWO: z.boolean().refine(value => value === true, {
      message: "O campo deve ser marcado",
      path: ["checkedtWO"],
    }),

    confirmPassword: z.string().min(3),
    name: z.string({
      errorMap: () => {
        return { message: "Digite um nome válido" }; // Corrigi a mensagem de erro para "Digite um nome válido"
      },
    }).min(3),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas precisam ser iguais",
  });

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
