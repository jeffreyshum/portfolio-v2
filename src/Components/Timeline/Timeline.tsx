import { FC } from "react"
import styles from "./Timeline.module.css"

const Timeline: FC = () => {
	return (
		<section id={styles.timelineContainer}>
			<h1>Timeline</h1>
			<div className={styles.barContainer}>
				<div className={styles.bar}></div>
			</div>
		</section>
	)
}

export default Timeline
