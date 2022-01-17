import style from "./style.module.scss";

const Banner = () => {
	return (
		<div className="wrapper">
			<div className={style.banner}>
				<div className={style.person}>
					<img
						src="https://serverless-wangly-static-files.oss-cn-beijing.aliyuncs.com/images/avatar.jpeg"
						className={style.avatar}
						alt="avatar"
					/>
					<div className={style.title}>This is the title area</div>
					<div className={style.description}>
						This is the description area This is the description
						area This is the description area This is the
						description area This is the description area
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
