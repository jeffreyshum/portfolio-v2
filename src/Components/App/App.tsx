import { FC } from "react"
import Hero from "../Hero/Hero"
import Socials from "../Socials/Socials"
import Timeline from "../Timeline/Timeline"
import styles from "./App.module.css"

const App: FC = () => {
	return (
		<div className={styles.main}>
			<Hero />
			<Socials />
			<Timeline />
		</div>
	)
}

export default App