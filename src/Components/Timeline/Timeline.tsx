import { FC } from "react"
import Fade from "react-reveal/Fade"
import styles from "./Timeline.module.css"
import bxsciImage from "../../images/bronx-science.png"

const Timeline: FC = () => {
	return (
		<section id={styles.timelineContainer}>
			<h1>Curriculum Vitae</h1>
			<h2 className={styles.sectionHeading}>Education</h2>
			<div className={styles.barContainer}>
				<div className={styles.bar}></div>
			</div>
			{/* Bronx Science */}
			<div className={styles.item}>
				<div>
					<h1 className={styles.time} data-past>
						2016 - 2021
					</h1>
					<h2 className={styles.title}>
						The Bronx High School of Science
					</h2>
					<h3 className={styles.description}>Secondary Education</h3>
					<p className={styles.summary}>
						One of nine prestigious specialized high schools in New
						York City, with eight Nobel prize winning alumni (the
						most of any high school). The cirriculum puts great
						emphasis on the sciences, mathematics, and social
						issues.
					</p>
					<p className={styles.awards}>
						Graduated with an Advanced Regents Diploma
						<br />
						AP Scholar
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
				<p className={styles.summary}>
					A New York State Flagship University with distinctions in
					the humanities and the sciences. Stony Brook is renowned for
					research in fields including physics, mathematics, and
					medicine.
				</p>
				<p className={styles.awards}>
					Prospective Bachelor's Degree
					<br />
					College of Arts and Sciences Dean's List
					<br />
					Grade Point Average: 3.97
				</p>
			</div>
			<h2 className={styles.sectionHeading}>Experience</h2>
			{/* Teaching Assistant */}
			<div className={styles.item}>
				<h1 className={styles.time}>2022 - Current</h1>
				<h2 className={styles.title}>
					Undergraduate Teaching Assistant
				</h2>
				<h3 className={styles.description}>
					at Stony Brook University's Department of Applied
					Mathematics & Statistics
				</h3>
				<p className={styles.summary}>
					{" "}
					<p className={styles.awards}>
						Assist teaching material, grading assignments, and
						tutoring undergraduate students in{" "}
						<span className={styles.focusText}>
							AMS 103 -{" "}
							<em>Applied Mathematics in Modern Technology</em>
						</span>{" "}
						under the guidance and mentorship of Professor Matthew
						G. Reuter of Stony Brook University's Department of
						Applied Mathematics & Statistics.
						<br />
						<br />
						<b>
							<em>Class Topics Include</em>
						</b>
						: Algebra, Systems of Equations, Coordinate Systems,
						Base-n (including Binary), Modular Arithmetic,
						Probability, Encryption, Error-Correcting Codes, Graphs,
						Algorithms, Big-O Notation
					</p>
				</p>
			</div>
		</section>
	)
}

export default Timeline
