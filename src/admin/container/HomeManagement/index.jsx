import React, { useRef, useState } from "react";
import styles from "./style.module.scss";
import { Layout, Menu, Button } from "antd";

import AreaList from "./component/AreaList";
import PageSetting from "./component/PageSetting";
import "./../../style.scss";

const { Header, Sider, Content } = Layout;

const useCollapsed = () => {
	const [collapsed, setCollapsed] = useState(false);
	const toggleCollapsed = () => setCollapsed(!collapsed);
	return { collapsed, toggleCollapsed };
};

const HomeManagement = () => {
	const { collapsed, toggleCollapsed } = useCollapsed();
	const handleHomePageRedirect = () => (window.location.href = "/index.html");
	
	const pageSettingRef = useRef();
	const areaListRef = useRef();

	const handleSaveBtnClick = () => {
		const currentList = JSON.stringify(areaListRef.current.list);
		const title = pageSettingRef.current.title;
		const description = pageSettingRef.current.description;
		console.log(currentList);
		localStorage.setItem('homeData', currentList);
		localStorage.setItem('title',title);
		localStorage.setItem('description', description)
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
					<PageSetting ref={pageSettingRef}/>
					<AreaList ref={areaListRef}/>
					<div className={styles.save}>
						 <Button type="primary" onClick={handleSaveBtnClick} >保存区块配置</Button>
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};

export default HomeManagement;
