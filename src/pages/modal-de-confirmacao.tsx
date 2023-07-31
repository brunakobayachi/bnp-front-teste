/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from "react";

import styles from "@/styles/modal.module.css";
import { ConfirmationModal } from "@/components/ConfirmationModal";

export default function Home() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function handleToggleModal() {
		setModalIsOpen(!modalIsOpen);
	}

	return (
		<>
			<main className={styles.container}>
				<button type="button" onClick={handleToggleModal}>
					Abrir modal de confirmação
				</button>
			</main>

			{modalIsOpen && (
				<ConfirmationModal toggleModal={handleToggleModal}>
					<div className={styles.modal}>
						<div>Você gosta de Pokémon?</div>
						<img
							src="https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg"
							alt=""
						/>
					</div>
				</ConfirmationModal>
			)}
		</>
	);
}
