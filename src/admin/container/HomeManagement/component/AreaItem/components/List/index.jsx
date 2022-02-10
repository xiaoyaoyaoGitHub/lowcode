import styles from "./style.module.scss";
import commonStyles from "../style.module.scss";
import { cloneDeep } from "lodash"
import { Input, Button } from "antd";
const List = (props) => {
	const { children = [], changeChildren } = props || {};

	const addItemToChildren = () => {
		const newChildren = [...children];
		newChildren.push({
			name: "Item",
			attributes: {
				title: "",
				description: "",
				imageUrl: "",
				link: "",
			},
			children: [],
		});
		changeChildren(newChildren);
	};

	/**
	 * 删除
	 * @param {number} index 索引
	 */
	const deleteItemfromChildren = (index) => {
		const newChildren = [...children];
		newChildren.splice(index, 1);
		changeChildren(newChildren);
	};


	/**
	 * 更改单个属性
	 * @param {索引} index 
	 * @param {属性名} key 
	 * @param {属性值} value 
	 */
	const changeChildrenItem = (index, key, value) => {
		const newChildren = cloneDeep(children);
		const originItem = newChildren[index];
		const item = cloneDeep(originItem);
		if(!item.attributes)  item.attributes = {};
		item.attributes[key] = value;
		newChildren.splice(index, 1, item);
		changeChildren(newChildren)
	}

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
				const { title, description, imageUrl, link } =
					item.attributes || {};
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
								onChange={(e) => changeChildrenItem(index, 'title', e.target.value)}
								type="text"
							/>
						</div>
						<div className={styles.row}>
							<span className={styles.label}>描述</span>
							<Input
								className={styles.content}
								placeholder="请输入描述"
								value={description}
								onChange={(e) => changeChildrenItem(index, 'description', e.target.value)}
								type="text"
							/>
						</div>
						<div className={styles.row}>
							<span className={styles.label}>图片地址</span>
							<Input
								className={styles.content}
								placeholder="请输入图片地址"
								value={imageUrl}
								onChange={(e) => changeChildrenItem(index, 'imageUrl', e.target.value)}

								type="text"
							/>
						</div>
						<div className={styles.row}>
							<span className={styles.label}>链接</span>
							<Input
								className={styles.content}
								placeholder="请输入跳转链接"
								value={link}
								onChange={(e) => changeChildrenItem(index, 'link', e.target.value)}
								
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
