import styles from "./style.module.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getChangeChildAction, getPageDeleteChildAction } from "../../store/action";
import { Button, Modal, Select } from "antd";

const { Option } = Select;

const SELECT_OPTIONS = [
	{
		name: "Banner 组件",
	},
	{
		name: "List 组件",
	},
	{
		name: "Footer 组件",
	},
];

const AreaItem = (props) => {
	const { index } = props || {};
	const dispatch = useDispatch();
	const item = useSelector(
		(state) => state?.homeManagement?.schema?.children[index] || {}
	);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [tempSchema, setTempSchema] = useState(item);

	// preSchema = item;
	const showModal = () => {
		setIsModalVisible(true);
		setTempSchema(item); // 根据schema 重置 tempSchema
	};

	const handleModalOkClick = () => {
		setIsModalVisible(false);
		// 改变schema内容 --todo
		
		dispatch(getChangeChildAction(index,tempSchema));
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

	const removeItemFromChildren = () => {
		dispatch(getPageDeleteChildAction(index))
	}

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

export default AreaItem;

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
