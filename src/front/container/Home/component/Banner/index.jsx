import style from "./style.module.scss";
import { parseJsonByString } from "@/common/utils"

const schema = parseJsonByString(localStorage.schema, {});


const Banner = () => {

	const title = schema?.children[0]?.attributes.title || 'This is the title area'
	const description = schema?.children[0]?.attributes.description || `This is the description area This is the description
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
