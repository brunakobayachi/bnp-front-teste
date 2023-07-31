import {
	createContext,
	useState,
	useContext,
	useEffect,
	useCallback,
} from "react";
import { IToastMessage } from "@/types/toast-message";
import { ToastMessage } from "@/components/ToastMessage";
import styles from "@/styles/context-api.module.css";

interface ToastContextProviderProp {
	children: React.ReactNode;
}

interface ToastContextType {
	addToast: (toast: IToastMessage) => void;
}

export const ToastContext = createContext({} as ToastContextType);

export function ToastContextProvider({ children }: ToastContextProviderProp) {
	const ToastTimeOutInMS = 3000;
	const [toasts, setToasts] = useState<IToastMessage[]>([]);
	const addToast = useCallback(
		(toast: IToastMessage) => {
			setToasts(toasts => [...toasts, toast]);
		},
		[setToasts],
	);

	useEffect(() => {
		if (toasts.length > 0) {
			const timer = setTimeout(
				() => setToasts(toasts => toasts.slice(1)),
				ToastTimeOutInMS,
			);
			return () => {
				clearTimeout(timer);
			};
		}
	}, [toasts]);

	useEffect(() => {
		window.addEventListener("deletedToast", (event: CustomEventInit) => {
			setToasts(
				toasts.filter(toast => {
					return toast.id != event.detail.value;
				}),
			);
		});
	});

	return (
		<ToastContext.Provider value={{ addToast }}>
			{children}
			<div className={styles["toast-container"]}>
				{toasts.map((toast, index) => (
					<ToastMessage key={index} content={toast} />
				))}
			</div>
		</ToastContext.Provider>
	);
}

export const useToast = () => {
	return useContext(ToastContext);
};
