import Fork from '../components/Fork'
import Header from '../components/header'
//import Todo from '../components/Todo'
import TodoItem from '../components/TodoItem'
import OutlinedCard from '../components/card'
import Newbox from '../components/box'

export default function Index({ stars }) {
	return (
		

		
		<main>
			
			<Header />
			<TodoItem />
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
