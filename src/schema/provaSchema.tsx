import * as z from 'zod';


export const ProvaSchema = z.object({
  questionOne: z.string().min(1, {
    message: "A pergunta 1 é obrigatória",
  }),

  questionTwo: z.string().min(1, {
    message: "A pergunta 2 é obrigatória",
  }),

  questionThree: z.string().min(1, {
    message: "A pergunta 3 é obrigatória",
  }),

  questionFour: z.string().min(1, {
    message: "A pergunta 4 é obrigatória",
  }),

  questionFive: z.string().min(1, {
    message: "A pergunta 5 é obrigatória",
  }),

  questionSix: z.string().min(1, {
    message: "A pergunta 6 é obrigatória",
  }),

  questionSeven: z.string().min(1, {
    message: "A pergunta 7 é obrigatória",
  }),

  questionEight: z.string().min(1, {
    message: "A pergunta 8 é obrigatória",
  }),

  questionNine: z.string().min(1, {
    message: "A pergunta 9 é obrigatória",
  }),

  questionTen: z.string().min(1, {
    message: "A pergunta 10 é obrigatória",
  }),

  questionEleven: z.string().min(1, {
    message: "A pergunta 11 é obrigatória",
  }),

  questionTwelve: z.string().min(1, {
    message: "A pergunta 12 é obrigatória",
  }),

  questionThirteen: z.string().min(1, {
    message: "A pergunta 13 é obrigatória",
  }),

  questionFourteen: z.string().min(1, {
    message: "A pergunta 14 é obrigatória",
  }),
  questionquinze: z.string().min(1, {
    message: "A pergunta 15 é obrigatória",
  }),
});

export type ProvaSchemaType = z.infer<typeof ProvaSchema>;
