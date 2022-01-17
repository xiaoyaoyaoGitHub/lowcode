import React, { useState } from "react";
import styles from "./style.module.scss";
import { Layout, Menu } from "antd";

import AreaList from "./component/AreaList";
// import {
// 	MenuUnfoldOutlined,
// 	MenuFoldOutlined,
// 	UserOutlined,
// 	VideoCameraOutlined,
// } from "@ant-design/icons";
import "./../../style.scss";

const { Header, Sider, Content } = Layout;

const useCollapsed = () => {
	const [collapsed, setCollapsed] = useState(false);
	const toggleCollapsed = () => setCollapsed(!collapsed);
	return { collapsed, toggleCollapsed };
};

const HomeManagement = () => {
	// const [collapsed, setCollapsed] = useState(false);
	// const toggle = () => setCollapsed(!collapsed);
	const { collapsed, toggleCollapsed } = useCollapsed();
	const handleHomePageRedirect = () => (window.location.href = "/index.html");
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
					<AreaList/>
				</Content>
			</Layout>
		</Layout>
	);
};

export default HomeManagement;
