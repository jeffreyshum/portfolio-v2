import { FC } from "react"
import Hero from "../Hero/Hero"
import Timeline from "../Timeline/Timeline"
import styles from "./App.module.css"

const App: FC = () => {
	return (
		<div className={styles.main}>
			<Hero />
			<Timeline />
		</div>
	)
}

export default App
