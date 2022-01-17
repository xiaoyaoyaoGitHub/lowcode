import styles from "./style.module.scss";
import { Input } from "antd";
import { forwardRef, useState, useImperativeHandle } from "react";
import TextArea from "antd/lib/input/TextArea";
const PageSetting = (props, ref) => {
	const [title, setTitle] = useState(localStorage.title || '');
	const [description, setDescription] = useState(localStorage.description || '');
	/**
	 * 标题更改事件
	 */
	const handleTitleChange = (e) => {
		const {
			target: { value = "" },
		} = e || {};
		setTitle(value);
	};
	/**
	 * 描述更改
	 */
	const handleDescriptionChange = (e) => {
		const {
			target: { value },
		} = e || {};
		setDescription(value);
	};
    // 需通过该hook传递
	useImperativeHandle(ref,() => {
		return {
			title,
			description,
		};
	});

	return (
		<div>
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
		</div>
	);
};

export default forwardRef(PageSetting);
