import Header from '../components/header'
import Frontpage from '../components/Frontpage'
import Todo from '../components/Todo'

export default function Index({ stars }) {
	return (
		<main>
			<Header />
			<Frontpage />
		</main>
	)
}

export async function getServerSideProps() {
	try {
		const res = await fetch(
			'https://api.github.com/repos/ooade/NextSimpleStarter'
		)
		const json = await res.json()

		return {
			props: {
				stars: json.stargazers_count,
			},
		}
	} catch (error) {
		return {
			props: {
				stars: 0,
			},
		}
	}
}
