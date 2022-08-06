import { FC } from "react"
import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"
import Skills from "../Skills/Skills"
import Socials from "../Socials/Socials"
import Timeline from "../Timeline/Timeline"
import styles from "./App.module.css"

const App: FC = () => {
	return (
		<div className={styles.main}>
			<Hero />
			<Socials />
			<Timeline />
			<Skills />
			<Footer />
		</div>
	)
}

export default App
