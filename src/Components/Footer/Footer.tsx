import { FC } from "react"
import styles from "./Footer.module.css"
import reactIcon from "../../images/react.png"

const Footer: FC = () => {
	return (
		<footer id={styles.footer}>
			<p>
				Built with{" "}
				<a href="https://reactjs.org/" target="_blanK" rel="noreferrer">
					<img className={styles.react} src={reactIcon} alt="react" />
				</a>
				<br />
				Copyright © {new Date().getFullYear()} Jeffrey Shum. All Rights
				Reserved.
			</p>
			<div className={styles.linkContainer}>
				<a href="https://icons8.com" target="_blank" rel="noreferrer">
					Icons by Icons8
				</a>
			</div>
		</footer>
	)
}

export default Footer
