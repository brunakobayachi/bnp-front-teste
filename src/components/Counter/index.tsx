import { useState, useEffect } from "react";

type CounterProps = {
	initialCount: number;
};

export const Counter: React.FC<CounterProps> = ({ initialCount }) => {
	const [count, setCount] = useState(initialCount);

	useEffect(() => {
		console.log("Componente montado!");
		window.dispatchEvent(new CustomEvent("onCounterMount"));
		return () => {
			console.log("Componente desmontado!");
			window.dispatchEvent(new CustomEvent("onCounterUnmount"));
		};
	}, []);

	useEffect(() => {
		console.log("Componente atualizado!");
		window.dispatchEvent(
			new CustomEvent("onCounterUpdate", {
				detail: {
					value: count,
				},
			}),
		);
	});

	const handleIncrement = () => {
		setCount(prevCount => prevCount + 1);
	};

	return (
		<div>
			<h2>Contador: {count}</h2>
			<button onClick={handleIncrement}>Incrementar +</button>
		</div>
	);
};
