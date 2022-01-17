import style from "./style.module.scss";

const Banner = () => {

	const title = localStorage.getItem('title') || 'This is the title area'
	const description = localStorage.getItem('description') || `This is the description area This is the description
	area This is the description area This is the
	description area This is the description area`
	return (
		<div className="wrapper">
			<div className={style.banner}>
				<div className={style.person}>
					<img
						src="https://serverless-wangly-static-files.oss-cn-beijing.aliyuncs.com/images/avatar.jpeg"
						className={style.avatar}
						alt="avatar"
					/>
					<div className={style.title}>{title}</div>
					<div className={style.description}>
						{description}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
