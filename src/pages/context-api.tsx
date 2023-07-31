/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

import styles from "@/styles/context-api.module.css";
import { IToastMessage } from "@/types/toast-message";
import { useToast } from "@/contexts/ToastContext";

export default function ContextApi() {
	const messages: Array<IToastMessage> = [
		{
			id: "1",
			message: "Mensagem de sucesso",
			type: "success",
		},
		{
			id: "2",
			message: "Mensagem de erro",
			type: "error",
		},
	];
	const toast = useToast();
	function handleSuccessButtonClick() {
		toast.addToast(messages[0]);
	}

	function handleErrorButtonClick() {
		toast.addToast(messages[1]);
	}

	return (
		<>
			<div className={styles.container}>
				<button type="button" onClick={handleSuccessButtonClick}>
					Disparar mensagem de sucesso
				</button>
				<button type="button" onClick={handleErrorButtonClick}>
					Disparar mensagem de erro
				</button>
			</div>
		</>
	);
}
