"use client"

import { PageBase } from "@/components/page-base";
import { Title } from "@/components/text";
import { Button } from "@/components/ui/button";
import { generateDocument } from "./utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  companyName: z.string(),
  phone: z.string(),
  description: z.string()
});

type Form = z.infer<typeof formSchema>;

export default function Docxtemplater() {
  const { register, handleSubmit } = useForm<Form>({
    defaultValues: {
      firstName: "Marcelo",
      lastName: "Castro",
      phone: "10988887777",
      description: "Teste",
      companyName: "Empresa"
    }
  });

  function onSubmit(data: Form) {
    generateDocument('https://docxtemplater.com/ang-example.docx', {
      first_name: data.firstName,
      last_name: data.lastName,
      organization: {
        companyName: data.companyName,
      },
      phone: data.phone,
      description: data.description,
    });
  }

  return (
    <PageBase className="space-y-3">
      <Title as='h2'>docxtemplater</Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-4 mb-3">
          <Input label="Nome" {...register("firstName")} />
          <Input label="Sobrenome" {...register("lastName")} />
          <Input label="Telefone" {...register("phone")} />
          <Input label="Nome da empresa" {...register("companyName")} />
          <Input label="Descrição" {...register("description")} />
        </div>

        <Button type="submit">Download</Button>
      </form>
    </PageBase>
  )
}