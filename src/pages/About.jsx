import { useOutletContext } from "react-router-dom"

const AboutPage = () => {
	const {text} = useOutletContext();

	return (
		<div>
			This is AboutPage. My {text}
		</div>
	)
}

export default AboutPage