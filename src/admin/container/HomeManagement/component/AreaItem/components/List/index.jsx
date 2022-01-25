import styles from "./style.module.scss";
import commonStyles from "../style.module.scss";
import { Input, Switch, Button } from "antd";
const List = (props) => {
	const { children = [], changeChildren } = props || {};

	/**
	 * 标题更改事件
	 */
	const handleTitleChange = (e) => {};

	const addItemToChildren = () => {
		const newChildren = [...children];
		newChildren.push({});
		changeChildren(newChildren);
	};

	const deleteItemfromChildren = (index) => {
		const newChildren = [...children];
		newChildren.splice(index, 1);
		changeChildren(newChildren);
	};

	return (
		<div className={commonStyles.wrapper}>
			<Button
				type="primary"
				className={styles.btn}
				onClick={addItemToChildren}
			>
				新增页面
			</Button>
			{children.map((item, index) => {
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
								value={item.title}
								onChange={handleTitleChange}
								type="text"
							/>
						</div>
						<div className={styles.row}>
							<span className={styles.label}>描述</span>
							<Input
								className={styles.content}
								placeholder="请输入描述"
								value={item.desc}
								onChange={handleTitleChange}
								type="text"
							/>
						</div>
						<div className={styles.row}>
							<span className={styles.label}>图片地址</span>
							<Input
								className={styles.content}
								placeholder="请输入图片地址"
								value={item.imgUrl}
								onChange={handleTitleChange}
								type="text"
							/>
						</div>
						<div className={styles.row}>
							<span className={styles.label}>链接</span>
							<Input
								className={styles.content}
								placeholder="请输入跳转链接"
								value={item.link}
								onChange={handleTitleChange}
								type="text"
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default List;
