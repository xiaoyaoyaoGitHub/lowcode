import styles from "./style.module.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SortableElement } from "react-sortable-hoc";

import {
	getChangeChildAction,
	getPageDeleteChildAction,
} from "../../store/action";
import { Button, Modal, Select } from "antd";

const { Option } = Select;

const SELECT_OPTIONS = [
	{
		name: "Banner",
	},
	{
		name: "List",
	},
	{
		name: "Footer",
	},
];

const useStore = (index) => {
	const dispatch = useDispatch();
	const item = useSelector(
		(state) => state?.homeManagement?.schema?.children[index] || {}
	);

	// 更改
	const changePageChild = (temp) =>
		dispatch(getChangeChildAction(index, temp));

	// 删除
	const removeItemFromChildren = () => {
		dispatch(getPageDeleteChildAction(index));
	};
	return { item, changePageChild, removeItemFromChildren };
};

const AreaItem = (props) => {
	const { value: index } = props || {};
	const { item, changePageChild, removeItemFromChildren } = useStore(index);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [tempSchema, setTempSchema] = useState(item);

	// preSchema = item;
	const showModal = () => {
		setIsModalVisible(true);
		setTempSchema(item); // 根据schema 重置 tempSchema
	};

	const handleModalOkClick = () => {
		setIsModalVisible(false);
		changePageChild(tempSchema);
	};

	const handleModalCancel = () => {
		setIsModalVisible(false);
	};

	const handleChange = (value) => {
		const schema = {
			name: value,
			attributes: {},
			children: [],
		};
		// select更改是保存临时的选项
		setTempSchema(schema);
	};

	return (
		<li className={styles.item} key={index}>
			<span onClick={showModal} className={styles.content}>
				{item.name || "当前区域内容为空"}
			</span>
			<span className={styles.btn}>
				<Button
					onClick={removeItemFromChildren}
					type="dashed"
					size="small"
					danger
				>
					删除
				</Button>
			</span>
			<Modal
				title="选择组件"
				visible={isModalVisible}
				onOk={handleModalOkClick}
				onCancel={handleModalCancel}
			>
				<Select
					value={tempSchema.name}
					className={styles.selector}
					onChange={handleChange}
				>
					{SELECT_OPTIONS.map((item, key) => {
						return (
							<Option key={key} value={item.name}>
								{item.name}
							</Option>
						);
					})}
				</Select>
			</Modal>
		</li>
	);
};

export default SortableElement(AreaItem);

// useImperativeHandle(ref, () => {
// 	return {
// 		getSchema: () => {
// 			return schema;
// 		},
// 		resetSchema: () => {
// 			setSchema(schema);
// 		},
// 	};
// });

// useEffect(() => {
// 	setSchema(item);
// }, [item]);
