import { Button } from "antd";
import {
	forwardRef,
	useState,
	useImperativeHandle,
	createRef,
	useMemo,
} from "react";
import styles from "./style.module.scss";
import AreaItem from "./../AreaItem";
// import { parseJsonByString } from "@/common/utils";

// let listData = parseJsonByString(localStorage.getItem("schema"), []);

let refs = [];

const AreaList = (props, ref) => {
	const [children, setChildren] = useState(props.children);

	useMemo(() => {
		refs = children.map((item) => createRef());
	}, [children]);

	/**
	 * 点击添加
	 */
	const addItemToChildren = () => {
		const newChildren = [...children];
		newChildren.push({});
		setChildren(newChildren);
	};

	useImperativeHandle(ref, () => {
		return {
			getSchema: () => {
				const schema = []
				children.map((child, index) => {
					schema.push(refs[index].current.getSchema())
				});
				return schema
			},
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
							ref={refs[index]}
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
