import { Button } from "antd";
import {
	forwardRef,
	useState,
	useImperativeHandle,
	useEffect,
	createRef,
	useMemo,
} from "react";
import { ReactSortable } from "react-sortablejs";
import styles from "./style.module.scss";
import AreaItem from "./../AreaItem";
// import { parseJsonByString } from "@/common/utils";

// let listData = parseJsonByString(localStorage.getItem("schema"), []);

let refs = [];

const AreaList = (props, ref) => {
	const [children, setChildren] = useState(props.children);

	// 监听是否变化
	useEffect(() => {
		setChildren(props.children);
	}, [props.children]);

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


	const changeAreaItem = (index,item) => {
		const newChildren = [...children];
		newChildren.splice(index, 1, item);
		setChildren(newChildren)
	}

	const removeItemFromChildren = (index) => {
		const newChildren = [...children];
		newChildren.splice(index, 1);
		setChildren(newChildren);
	};

	useImperativeHandle(ref, () => {
		return {
			getSchema: () => {
				const schema = [];
				children.map((child, index) =>
					schema.push(refs[index].current.getSchema())
				);
				return schema;
			},
			resetSchema: () => {
				setChildren(children);
				children.forEach((child, index) => {
					refs[index].current.resetSchema();
				});
			},
		};
	});

	return (
		<div>
			<ul className={styles.list}>
				<ReactSortable
					animation={200}
					delayOnTouchStart={true}
					delay={2}
					list={children}
					setList={setChildren}
				>
					{children.map((item, index) => {
						return (
							<AreaItem
								key={index}
								item={item}
								index={index}
								ref={refs[index]}
								changeAreaItem={changeAreaItem}
								removeItemFromChildren={removeItemFromChildren}
							/>
						);
					})}
				</ReactSortable>
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
