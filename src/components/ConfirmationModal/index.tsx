import styles from "./style.module.css";
import { Dispatch, SetStateAction } from "react";

interface ConfirmationModal {
	children: React.ReactNode;
	toggleModal: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModal> = ({
	toggleModal,
	children,
}) => {
	function handleToggleModal() {
		toggleModal();
	}

	return (
		<div
			data-modal-wrapper
			className={styles.wrapper}
			onClick={handleToggleModal}
		>
			<div
				data-modal-container
				onClick={e => {
					e.stopPropagation();
				}}
			>
				<header data-modal-header>
					<h2>Confirmação</h2>

					<button data-modal-close onClick={handleToggleModal}>X</button>
				</header>

				{children}

				<div data-modal-footer>
					<button data-modal-cancel onClick={handleToggleModal}>
						Cancelar
					</button>

					<button
						data-modal-confirm
						onClick={handleToggleModal}
						data-type="confirm"
					>
						Confirmar
					</button>
				</div>
			</div>
		</div>
	);
};
