import * as z from "zod";

export const SocioeconomicoSchema = z.object({
  residency_proof: z
  .any(),
  enrollment_proof: z
  .any(),
    deficiency:z
    .string({
      required_error: "messages.required",
    }),
      color:  z
      .string({
        required_error: "messages.required",
      }),
      gender: z
      .string({
        required_error: "messages.required",
      }),
      guidance: z
      .string({
        required_error: "messages.required",
      }),
      family:z.object({
        name: z
          .string({
            required_error: "messages.required",
          })
          .min(1, { message: "messages.required" }),
      }),
      
      children: z
      .string({
        required_error: "messages.required",
      }),
    
      schooling: z
      .string({
        required_error: "messages.required",
      }),

      employment_status: z
      .string({
        required_error: "messages.required",
      }),
    
      benefit: z
      .any({
        required_error: "messages.required",
      }),

      schollPublic: z
      .any({
        required_error: "messages.required",
      }),


     
      income: z.string({
        required_error: "messages.required",
      }).min(1, { message: "messages.required" }),
    
});

export type SocioeconomicoSchemaType = z.infer<typeof SocioeconomicoSchema>;

