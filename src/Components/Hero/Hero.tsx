import { FC } from "react"
import styles from "./Hero.module.css"

const Hero: FC = () => {
	return (
		<section id={styles.heroContainer}>
			<div className={styles.headline}>
				<h2>Hi, I'm</h2>
				<h1>Jeffrey Shum.</h1>
				<h3>
					I'm a software developer with a passion for{" "}
					<span className={styles.highlightWord}>mathematics</span>{" "}
					and <span className={styles.highlightWord}>education</span>.
				</h3>
			</div>
		</section>
	)
}

export default Hero
