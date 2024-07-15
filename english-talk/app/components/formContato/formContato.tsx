"use client";

import styles from "./formContato.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";

export function FormContato() {
  const { register, handleSubmit } = useForm();

  const resposta = (data: any) => console.log(data);

  return (
    <form className={styles.Container} onSubmit={handleSubmit(resposta)}>
      <label htmlFor="input"> Email</label>
      <input
        placeholder="Digite  seu email"
        type="email"
        {...register("email")}
      />
      <label htmlFor="textarea"> Sua sugestão</label>
      <textarea placeholder="Digite sua sugestão" {...register("sugestão")} />

      <button type="submit">enviar</button>
    </form>
  );
}
