import styles from "./style.module.scss";
import commonStyles from "../style.module.scss";
import { Input, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { cloneDeep } from "lodash";
const Footer = (props) => {
	const {
		attributes = {},
		changeAttributes,
		changeChildren,
		children = [],
	} = props || {};
	const { copyright, record } = attributes || {};
	/**
	 * 标题更改事件
	 */
	const handleCopyrightChange = (e) => {
		const {
			target: { value = "" },
		} = e || {};
		changeAttributes({
			copyright: value,
		});
	};
	/**
	 * 描述更改
	 */
	const handleRecordChange = (e) => {
		const {
			target: { value },
		} = e || {};
		changeAttributes({
			record: value,
		});
	};
	// 增加区块
	const addItemToChildren = () => {
		const newChildren = [...children];
		newChildren.push({
			name: "Item",
			attributes: {
				title: "",
				link: "",
			},
			children: [],
		});
		changeChildren(newChildren);
	};
	// 删除区块
	const deleteItemfromChildren = (index) => {
		const newChildren = [...children];
		newChildren.splice(index, 1);
		changeChildren(newChildren);
	};
	// 修改区块内容
	const changeChildrenItem = (index, key, value) => {
		console.log(children);
		const item = children[index];
		// console.log(item);
		const copyItem = cloneDeep(item);
		if (!copyItem.attributes) copyItem.attributes = {};
		copyItem.attributes[key] = value;
		// copyItem[key] = value;
		console.log(copyItem);
		children.splice(index, 1, copyItem);
		changeChildren(children);
	};
	return (
		<div className={commonStyles.wrapper}>
			<div className={styles.row}>
				<span className={styles.label}>版权信息</span>
				<Input
					className={styles.content}
					placeholder="请输入版权信息"
					value={copyright}
					onChange={handleCopyrightChange}
					type="text"
				/>
			</div>
			<div className={styles.row}>
				<span className={styles.label}>备案信息</span>
				<TextArea
					className={styles.content}
					row={2}
					placeholder="请输入备案信息"
					value={record}
					onChange={handleRecordChange}
					type="text"
				/>
			</div>
			<Button
				type="primary"
				className={styles.btn}
				onClick={addItemToChildren}
			>
				新增区块
			</Button>
			{children.map((item, index) => {
				const { title, link } = item.attributes || {};
				return (
					<div key={index} className={styles.area}>
						<div
							className={styles.delete}
							onClick={() => deleteItemfromChildren(index)}
						>
							x
						</div>
						<div className={styles.row}>
							<span className={styles.label}>标题</span>
							<Input
								className={styles.content}
								placeholder="请输入标题"
								value={title}
								onChange={(e) =>
									changeChildrenItem(
										index,
										"title",
										e.target.value
									)
								}
								type="text"
							/>
						</div>
						<div className={styles.row}>
							<span className={styles.label}>链接</span>
							<Input
								className={styles.content}
								placeholder="请输入跳转链接"
								value={link}
								onChange={(e) =>
									changeChildrenItem(
										index,
										"link",
										e.target.value
									)
								}
								type="text"
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Footer;
