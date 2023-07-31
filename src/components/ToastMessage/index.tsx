import { useState } from "react";

import { IToastMessage } from "@/types/toast-message.d";
import styles from "./style.module.css";

type ToastMessageProps = {
	content: IToastMessage;
};

export const ToastMessage: React.FC<ToastMessageProps> = ({
	content: data,
}) => {
	function deletedToast() {
		window.dispatchEvent(
			new CustomEvent("deletedToast", {
				detail: {
					value: data.id,
				},
			}),
		);
	}

	return (
		<div
			className={styles.container}
			data-toast-type={data.type}
			data-toast-id={data.id}
		>
			<span data-content>{data.message}</span>

			<span data-close onClick={deletedToast}>
				╳
			</span>
		</div>
	);
};
