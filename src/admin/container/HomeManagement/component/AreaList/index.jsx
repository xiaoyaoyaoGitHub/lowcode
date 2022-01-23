import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux"
import { addPageChildrenAction } from "../../store/action"
import styles from "./style.module.scss";
import AreaItem from "./../AreaItem";

const AreaList = () => {
	const dispatch = useDispatch();
	// 从store中获取children
	const children = useSelector((state) => state?.homeManagement?.schema?.children || [])
	/**
	 * 点击添加
	 */
	const addItemToChildren = () => {
		dispatch(addPageChildrenAction({}))
	};

	return (
		<div>
			<ul className={styles.list}>
				{children.map((item, index) => {
					return (
						<AreaItem
							key={index}
							item={item}
							index={index}
							// changeAreaItem={changeAreaItem}
							// removeItemFromChildren={removeItemFromChildren}
						/>
					);
				})}
				{/* <ReactSortable
					animation={200}
					delayOnTouchStart={true}
					delay={2}
					list={children}
					setList={setChildren}
				>
					
				</ReactSortable> */}
			</ul>
			<Button type="primary" ghost onClick={addItemToChildren}>
				新增页面区块
			</Button>
		</div>
	);
};

export default AreaList;

// 监听是否变化
// useEffect(() => {
// 	setChildren(props.children);
// }, [props.children]);

// useMemo(() => {
// 	refs = children.map((item) => createRef());
// }, [children]);

// useImperativeHandle(ref, () => {
// 	return {
// 		getSchema: () => {
// 			const schema = [];
// 			children.map((child, index) =>
// 				schema.push(refs[index].current.getSchema())
// 			);
// 			return schema;
// 		},
// 		resetSchema: () => {
// 			setChildren(children);
// 			children.forEach((child, index) => {
// 				refs[index].current.resetSchema();
// 			});
// 		},
// 	};
// });
