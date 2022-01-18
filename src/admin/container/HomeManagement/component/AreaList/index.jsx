import { Button } from "antd";
import { forwardRef, useState, useImperativeHandle } from "react";
import styles from "./style.module.scss";
import AreaItem from "./../AreaItem";
// import { parseJsonByString } from "@/common/utils";

// let listData = parseJsonByString(localStorage.getItem("schema"), []);

const AreaList = (props, ref) => {
	const [children, setChildren] = useState(props.children);
	/**
	 * 点击添加
	 */
	const addItemToChildren = () => {
		const newChildren = [...children];
		newChildren.push({});
		setChildren(newChildren);
	};

	/**
	 * 点击删除
	 */
	const removeItemFromChildren = (idx) => {
		const newChildren = [...children];
		newChildren.splice(idx, 1);
		setChildren(newChildren);
	};

	const changeChildrenItem = (index, child) => {
		const newChildren = [...children];
		newChildren.splice(index, 1, child);
		setChildren(newChildren);
	};

	useImperativeHandle(ref, () => {
		return {
			children,
		};
	});

	return (
		<div>
			<ul className={styles.list}>
				{children.map((item, index) => {
					return (
						<AreaItem
							key={index}
							item={item}
							index={index}
							changeChildrenItem={changeChildrenItem}
							removeItemFromChildren={removeItemFromChildren}
						/>
					);
				})}
			</ul>
			<Button type="primary" ghost onClick={addItemToChildren}>
				新增页面区块
			</Button>
			{/* <Button
				type="primary"
				onClick={handleSaveBtnClick}
				className={styles.saveBtn}
			>
				保存区块配置
			</Button> */}
		</div>
	);
};

export default forwardRef(AreaList);
