import styles from "./style.module.scss";
import { Input, Switch } from "antd";
import { useState } from "react";
import TextArea from "antd/lib/input/TextArea";
const Banner = (props, ref) => {
	const { attributes = {}, changeAttribute } = props || {};
	const { title, description, showSmallPic } = attributes || {};
	// const [title, setTitle] = useState(attributes?.title || "");
	// const [description, setDescription] = useState(
	// 	attributes?.description || ""
	// );
	// const [showSmallPic, setShowSmallPic] = useState(
	// 	attributes?.showSmallPic || false
	// );
	console.log(showSmallPic);
	/**
	 * 标题更改事件
	 */
	const handleTitleChange = (e) => {
		const {
			target: { value = "" },
		} = e || {};
		// setTitle(value);
		changeAttribute("title", value);
	};
	/**
	 * 描述更改
	 */
	const handleDescriptionChange = (e) => {
		const {
			target: { value },
		} = e || {};
		// setDescription(value);
		changeAttribute("description", value);
	};

	const showSmallPicChange = (checked) => {
		// setShowSmallPic(checked);
		changeAttribute("showSmallPic", checked);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.row}>
				<span className={styles.label}>页面标题</span>
				<Input
					className={styles.content}
					placeholder="请输入页面标题"
					value={title}
					onChange={handleTitleChange}
					type="text"
				/>
			</div>
			<div className={styles.row}>
				<span className={styles.label}>页面描述</span>
				<TextArea
					className={styles.content}
					row={2}
					placeholder="请输入页面描述"
					value={description}
					onChange={handleDescriptionChange}
					type="text"
				/>
			</div>
			<div className={styles.row}>
				<span className={styles.label}>展示小图</span>
				<Switch checked={showSmallPic} onChange={showSmallPicChange} />
			</div>
		</div>
	);
};

export default Banner;
