import { FC } from "react"
import Fade from "react-reveal/Fade"
import styles from "./Timeline.module.css"
import bxsciImage from "../../images/bronx-science.png"

const Timeline: FC = () => {
	return (
		<section id={styles.timelineContainer}>
			<h1>Timeline</h1>
			<div className={styles.barContainer}>
				<div className={styles.bar}></div>
			</div>
			{/* Bronx Science */}
			<div className={styles.item}>
				<div>
					<h1 className={styles.time}>2016 - 2021</h1>
					<h2 className={styles.title}>
						The Bronx High School of Science
					</h2>
					<h3 className={styles.description}>Secondary Education</h3>
					<p className={styles.summary}>
						One of the nine prestigious specialized high schools in
						New York City, with eight Nobel prize winning alumni
						(the most of any high school). The cirriculum puts great
						emphasis on the sciences, mathematics, and social
						issues.
					</p>
					<p className={styles.awards}>
						Graduated with an Advanced Regents Diploma
						<br />
						Grade Point Average: 94.49%
					</p>
				</div>
				<Fade bottom>
					<img
						src={bxsciImage}
						alt="Bronx Science"
						className={styles.card}
						id={styles.bxsci}
					/>
				</Fade>
			</div>
			{/* Stony Brook */}
			<div className={styles.item}>
				<h1 className={styles.time}>2021 - Current</h1>
				<h2 className={styles.title}>Stony Brook University</h2>
				<h3 className={styles.description}>
					Higher Education - Undergraduate
				</h3>
				<p className={styles.summary}></p>
				<p className={styles.awards}>
					Prospective Bachelors Degree
					<br />
					Grade Point Average: 3.97
				</p>
			</div>
		</section>
	)
}

export default Timeline
