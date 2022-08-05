import { FC, useEffect, useRef, useState } from "react"
import styles from "./Socials.module.css"
import Github from "../../images/github.png"
import Instagram from "../../images/instagram.png"
import Linkedin from "../../images/linkedin.png"

const Socials: FC = () => {
	const [scrollChange, setScrollChange] = useState(false)
	const navRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		document.addEventListener("scroll", () => {
			if (window.scrollY >= (navRef.current?.offsetTop ?? 0)) {
				if (!scrollChange) {
					setScrollChange(!scrollChange)
				}
			}
		})
	})

	return (
		<nav
			id={styles.socials}
			aria-label="Social Media Links"
			data-scroll={scrollChange}
			ref={navRef}
		>
			<div className={styles.linkContainer}>
				<a
					href="https://github.com/jeffreyshum"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src={Github}
						className={styles.icon}
						alt="github"
						title="GitHub"
					></img>
				</a>
				<a
					href="https://www.instagram.com/jeffreyshum_/"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src={Instagram}
						className={styles.icon}
						alt="instagam"
						title="Instagram"
					></img>
				</a>
				<a
					href="https://www.linkedin.com/in/shumjeffrey"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src={Linkedin}
						className={styles.icon}
						alt="linkedin"
						title="LinkedIn"
					></img>
				</a>
			</div>
			<a className={styles.resume} href="resume.pdf">
				<h1>Resume</h1>
			</a>
		</nav>
	)
}

export default Socials
