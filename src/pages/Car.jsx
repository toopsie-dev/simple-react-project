import { useParams } from 'react-router-dom'

const CarPage = () => {
	const { id } = useParams()

	return (
		<div className="Car">
				This is Car with an id of {id}
		</div>
	)
}

export default CarPage