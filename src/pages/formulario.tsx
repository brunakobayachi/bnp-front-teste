/**
 * Formulário
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
 */

import styles from "@/styles/formulario.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
interface Inputs {
	name: string;
	email: string;
}

export default function Form() {
	const { register, handleSubmit, formState, reset } = useForm<Inputs>();

	const submitForm: SubmitHandler<Inputs> = async (data, e) => {
		try {
      const response = await fetch("http://localhost:8080/api/users/create", {
				method: "POST",
				body: JSON.stringify(data),
			});
      const users = await response.json();
			e?.target.reset()
      console.log(users)
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<form onSubmit={handleSubmit(submitForm)}>
					{formState.errors.name && (
						<span className={styles.error}>The name is required.</span>
					)}
					<input
						type="text"
						placeholder="Name"
						{...register("name", { required: true })}
						aria-invalid={formState.errors.name ? "true" : "false"}
					/>

					{formState.errors.email && (
						<span className={styles.error}>The email is required.</span>
					)}
					<input
						type="email"
						placeholder="E-mail"
						{...register("email", {
							required: true,
							pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
						})}
					/>

					<button
						type="submit"
						data-type="confirm"
						disabled={!formState.isValid}
					>
						Enviar
					</button>
				</form>
			</div>
		</div>
	);
}
