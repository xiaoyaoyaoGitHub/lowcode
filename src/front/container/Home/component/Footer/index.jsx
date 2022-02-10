import styles from "./style.module.scss";

const Footer = (props) => {
	const { schema } = props || {};
	const { copyright, record } = schema.attributes || {};
	return (
		<div className="wrapper">
			<div className={styles.footer}>
				<ul className={styles.list}>
					<li className={styles.item}>
						<a className={styles.link} href="/admin.html">
							进入管理页
						</a>
					</li>
				</ul>
				<div className={styles.copyrights}>
				{copyright} {record}
				</div>
			</div>
		</div>
	);
};

export default Footer;
