import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { SortableContainer } from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";

import {
	addPageChildrenAction,
	pageSortableChildrenAction,
} from "../../store/action";
import styles from "./style.module.scss";
import AreaItem from "./../AreaItem";

const AreaList = () => {
	const dispatch = useDispatch();
	// 从store中获取children
	const children = useSelector(
		(state) => state?.homeManagement?.schema?.children || []
	);
	/**
	 * 点击添加
	 */
	const addItemToChildren = () => {
		dispatch(addPageChildrenAction({}));
	};

	const SortableList = SortableContainer(({ children }) => {
		return (
			<ul className={styles.list}>
				{children.map((item, index) => {
					return <AreaItem index={index} value={index} key={index} />;
				})} 
			</ul>
		);
	});

	const onSortEnd = ({ oldIndex, newIndex }) => {
		// dispatch({})
		dispatch(
			pageSortableChildrenAction(arrayMoveImmutable(children, oldIndex, newIndex))
		);
	};

	return (
		<div>
			<SortableList distance={5} lockAxis={'y'} children={children} onSortEnd={onSortEnd} />
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
