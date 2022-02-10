import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./style.module.scss";
import { Layout, Button } from "antd";
import { parseJsonByString } from "@/common/utils";
import AreaList from "./component/AreaList";
import { getChangeSchemaAction } from "./store/action";
import "@/admin/style.scss";

const { Content } = Layout;

const useStore = () => {
	const dispatch = useDispatch();
	/**
	 * 读取store中的数据
	 */
	const schema = useSelector((state) => state?.homeManagement?.schema);
	const changeSchema = (schema) => {
		dispatch(getChangeSchemaAction(schema));
	};

	return { changeSchema, schema };
};

const HomeManagement = () => {
	const { changeSchema, schema } = useStore();

	const handleSaveBtnClick = () => {
		localStorage.schema = JSON.stringify(schema);
	};

	const handleResetBtnClick = () => {
		const newSchema = parseJsonByString(localStorage.schema, {});
		changeSchema(newSchema);
	};

	return (
		<Content className={styles.content}>
			{/* <PageSetting ref={pageSettingRef} /> */}
			<AreaList />
			<div className={styles.save}>
				<Button type="primary" onClick={handleSaveBtnClick}>
					保存区块配置
				</Button>
				<Button
					className={styles.reset}
					type="primary"
					onClick={handleResetBtnClick}
				>
					重置区块配置
				</Button>
			</div>
		</Content>
	);
};

export default HomeManagement;
