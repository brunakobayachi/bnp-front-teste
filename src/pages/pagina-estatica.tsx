/**
 * Página estática
 *
 * - Atualmente o conteúdo é gerado no momento em que a requisição é feita
 * - Você deve transformar essa página em uma página estática
 * - A página deve ser gerada no momento da build
 * - A página deve ser atualizada a cada 1 minuto
 */

//https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation

import styles from "@/styles/lista.module.css";
import { ICity } from "@/types/city.d";
import type {
	InferGetStaticPropsType,
	GetStaticProps,
} from "next";

export default function Lista({
	list,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2>Lista de cidades</h2>

				<div data-list-container>
					{list.map(city => (
						<div data-list-item key={city.id}>
							{city.name}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export const getStaticProps: GetStaticProps<{ list: ICity[] }> = async () => {
	const response = await fetch("http://localhost:8080/api/cities/10");
	const list = await response.json();
	return {
		props: {
			list,
		},
		revalidate: 2,
	};
};

// export async function getStaticPaths() {
// 	const response = await fetch("http://localhost:8080/api/cities/10");
// 	const list = await response.json();

// 	const paths = list.map((city: any) => ({
// 		params: {
// 			id: city.id,
// 		},
// 	}));
//   return {paths, fallback: false}
// }
