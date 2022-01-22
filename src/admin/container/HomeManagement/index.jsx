import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import styles from "./style.module.scss";
import { Layout, Menu, Button } from "antd";
import { parseJsonByString } from "@/common/utils";
import AreaList from "./component/AreaList";
// import PageSetting from "./component/PageSetting";
import "@/admin/style.scss";

const { Header, Sider, Content } = Layout;

const useCollapsed = () => {
	const [collapsed, setCollapsed] = useState(false);
	const toggleCollapsed = () => setCollapsed(!collapsed);
	return { collapsed, toggleCollapsed };
};


const HomeManagement = () => {
	const dispatch = useDispatch();
	const { collapsed, toggleCollapsed } = useCollapsed();
	const handleHomePageRedirect = () => (window.location.href = "/index.html");
	// const [schema, setSchema] = useState(initSchema);

	/**
	 * 读取store中的数据
	 */
	const schema = useSelector((state) => state?.homeManagement?.schema)

	const handleSaveBtnClick = () => {
		localStorage.schema = JSON.stringify(schema);
	};
	
	const handleResetBtnClick = () => {
		const newSchema = parseJsonByString(localStorage.schema, {});
		const action = {
			type:'CHANGE_SCHEMA',
			value:newSchema
		}
		dispatch(action)
	}

	return (
		<Layout>
			<Sider
				className={styles.sidebar}
				trigger={null}
				collapsible
				collapsed={collapsed}
			>
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={["admin-home"]}
				>
					<Menu.Item key="admin-home">
						<span className="iconfont">&#xe7c6;</span>
						首页内容管理
					</Menu.Item>
					<Menu.Item
						onClick={handleHomePageRedirect}
						key="admin-back"
					>
						<span className="iconfont">&#xe609;</span>
						返回用户界面
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout>
				<Header className={styles.header}>
					{collapsed ? (
						<span className="iconfont" onClick={toggleCollapsed}>
							&#xe62c;
						</span>
					) : (
						<span className="iconfont" onClick={toggleCollapsed}>
							&#xe629;
						</span>
					)}
				</Header>
				<Content className={styles.content}>
					{/* <PageSetting ref={pageSettingRef} /> */}
					<AreaList
						children={schema.children || []}
					/>
					<div className={styles.save}>
						<Button type="primary" onClick={handleSaveBtnClick}>
							保存区块配置
						</Button>
						<Button className={styles.reset} type="primary" onClick={handleResetBtnClick}>
							重置区块配置
						</Button>
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};

export default HomeManagement;
