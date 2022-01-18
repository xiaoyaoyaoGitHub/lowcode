import styles from "./style.module.scss";
import { useState } from "react";
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

const AreaItem = (props, ref) => {
	const { index, removeItemFromChildren, item, changeChildrenItem } =
		props || {};
	const [isModalVisible, setIsModalVisible] = useState(false);
	// const [schema, setSchema] = useState(item);
	const [tempSchema, setTempSchema] = useState(item);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleModalOkClick = () => {
		setIsModalVisible(false);
		changeChildrenItem(index, tempSchema);
	};

	const handleModalCancel = () => {
		setIsModalVisible(false);
		setTempSchema(item);
	};

	const handleChange = (value) => {
		const schema = {
			name: value,
			attributes: {},
			children: [],
		};
		setTempSchema(schema);
	};

	return (
		<li className={styles.item} key={index}>
			<span onClick={showModal} className={styles.content}>
				{index}当前区块内容为空
			</span>
			<span className={styles.btn}>
				<Button
					onClick={() => removeItemFromChildren(index)}
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
