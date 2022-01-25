import styles from "./style.module.scss";
import commonStyles from "../style.module.scss"
import { Input, Switch } from "antd";
import TextArea from "antd/lib/input/TextArea";
const Banner = (props) => {
	const { attributes = {}, changeAttributes } = props || {};
	const {
		title,
		description,
		showSmallPic = false,
		smallPicUrl = "",
		backgroundUrl = "",
		backgroundHeight,
	} = attributes || {};
	// const [title, setTitle] = useState(attributes?.title || "");
	// const [description, setDescription] = useState(
	// 	attributes?.description || ""
	// );
	// const [showSmallPic, setShowSmallPic] = useState(
	// 	attributes?.showSmallPic || false
	// );
	/**
	 * 标题更改事件
	 */
	const handleTitleChange = (e) => {
		const {
			target: { value = "" },
		} = e || {};
		// setTitle(value);
		changeAttributes({
			title: value,
		});
	};
	/**
	 * 描述更改
	 */
	const handleDescriptionChange = (e) => {
		const {
			target: { value },
		} = e || {};
		// setDescription(value);
		changeAttributes({
			description: value,
		});
	};

	const showSmallPicChange = (checked) => {
		// setShowSmallPic(checked);
		changeAttributes({
			showSmallPic: checked,
			smallPicUrl: !checked ? '': smallPicUrl
		})
		// changeAttribute("showSmallPic", checked);
		// if (!checked) ("smallPicUrl", "");
	};

	return (
		<div className={commonStyles.wrapper}>
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
			{showSmallPic ? (
				<div className={styles.row}>
					<span className={styles.label}>小图链接</span>
					<Input
						className={styles.content}
						row={2}
						placeholder="请输入图片链接"
						value={smallPicUrl}
						onChange={(e) =>
							changeAttributes({
								smallPicUrl: e.target.value
							})
						}
						type="text"
					/>
				</div>
			) : null}

			<div className={styles.row}>
				<span className={styles.label}>背景链接</span>
				<Input
					className={styles.content}
					row={2}
					placeholder="请输入背景图片链接"
					value={backgroundUrl}
					onChange={(e) =>
						changeAttributes({
							backgroundUrl: e.target.value
						})
					}
					type="text"
				/>
			</div>
			<div className={styles.row}>
				<span className={styles.label}>背景高度</span>
				<Input
					className={styles.content}
					row={2}
					placeholder="请输入背景图片的高度"
					value={backgroundHeight}
					onChange={(e) =>
						changeAttributes({
							backgroundHeight: e.target.value
						})
					}
					type="text"
				/>
			</div>
		</div>
	);
};

export default Banner;
