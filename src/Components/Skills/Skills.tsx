import { FC } from "react"
import styles from "./Skills.module.css"
import reactIcon from "../../images/icons/react.png"
import jsIcon from "../../images/icons/javascript.png"
import tsIcon from "../../images/icons/typescript.png"
import nextIcon from "../../images/icons/nextjs.png"
import pythonIcon from "../../images/icons/python.png"
import javaIcon from "../../images/icons/java.png"

const Skills: FC = () => {
	return (
		<section id={styles.skillContainer}>
			<h1>Skills</h1>
			<h2>Programming</h2>
			<div className={styles.iconContainer}>
				<SkillIcon title="JavaScript" image={jsIcon} />
				<SkillIcon title="TypeScript" image={tsIcon} />
				<SkillIcon title="React" image={reactIcon} />
				<SkillIcon title="NextJS" image={nextIcon} />
				<SkillIcon title="Python" image={pythonIcon} />
				<SkillIcon title="Java" image={javaIcon} />
			</div>
		</section>
	)
}

const SkillIcon: FC<{ title: string; image: string }> = ({ title, image }) => {
	return (
		<div className={styles.card}>
			<img className={styles.cardImage} src={image} alt={title} />
			<p className={styles.cardTitle}>{title}</p>
		</div>
	)
}

export default Skills
