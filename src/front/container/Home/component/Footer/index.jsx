import styles from "./style.module.scss";

const Footer = (props) => {
	const { schema } = props || {};
	const { children, attributes } = schema || {};
	const { copyright, record } = attributes || {};
	return (
		<div className="wrapper">
			<div className={styles.footer}>
				<ul className={styles.list}>
					{children.map((item, index) => {
						const { attributes } = item || {};
						const { title, link } = attributes || {};
						return (
							<li data-test={title} className={styles.item} key={index}>
								<a className={styles.link} href={link} target="_blank">
									{title}
									{link}
								</a>
							</li>
						);
					})}
				</ul>
				<div className={styles.copyrights}>
					{copyright} {record}
				</div>
			</div>
		</div>
	);
};

export default Footer;
