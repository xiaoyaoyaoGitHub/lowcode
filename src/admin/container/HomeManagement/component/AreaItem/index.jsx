import styles from "./style.module.scss";
import { useState, forwardRef, useImperativeHandle, useEffect } from "react";
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
	const { index, removeItemFromChildren, item } = props || {};
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [schema, setSchema] = useState(item);
	const [tempSchema, setTempSchema] = useState(item);

	useEffect(() => {
		setSchema(item)
	}, [item])

	// preSchema = item;
	const showModal = () => {
		setIsModalVisible(true);
		setTempSchema(schema); // 根据schema 重置 tempSchema
	};

	const handleModalOkClick = () => {
		setIsModalVisible(false);
		setSchema(tempSchema);
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

	useImperativeHandle(ref, () => {
		return {
			getSchema: () => {
				return schema;
			},
			resetSchema: () => {
				setSchema(schema);
			},
		};
	});

	return (
		<li className={styles.item} key={index}>
			<span onClick={showModal} className={styles.content}>
				{schema.name || "当前区域内容为空"}
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

export default forwardRef(AreaItem);
