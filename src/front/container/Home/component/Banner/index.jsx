import style from "./style.module.scss";
import { parseJsonByString } from "@/common/utils";

const schema = parseJsonByString(localStorage.schema, {});

const Banner = ({ schema }) => {
	const { attributes = {} } = schema || {};
	const {
		title,
		description,
		showSmallPic,
		smallPicUrl,
		backgroundUrl,
		backgroundHeight,
	} = attributes || {};
	// const title =
	// 	schema?.attributes.title || "This is the title area";
	// const description =
	// 	schema?.attributes.description ||
	// 	`This is the description area This is the description
	// area This is the description area This is the
	// description area This is the description area`;

	const bgStyle = {
		backgroundImage: `url(${backgroundUrl})`,
	}

	return (
		<div className="wrapper">
			<div
				className={style.banner}
				style={bgStyle}
			>
				<div className={style.person}>
					{showSmallPic ? (
						<img
							// https://serverless-wangly-static-files.oss-cn-beijing.aliyuncs.com/images/avatar.jpeg
							src={smallPicUrl}
							className={style.avatar}
							alt="avatar"
						/>
					) : null}

					<div className={style.title}>{title}</div>
					<div className={style.description}>{description}</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
