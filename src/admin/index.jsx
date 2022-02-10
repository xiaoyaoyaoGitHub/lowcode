import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
// import {} from "react-router-dom";
import store from "./store";
import HomeManagement from "./container/HomeManagement";
import { Layout, Menu } from "antd";

import "normalize.css";
import "antd/dist/antd.min.css";
import styles from "./style.module.scss";

const { Header, Sider } = Layout;

const useCollapsed = () => {
	const [collapsed, setCollapsed] = useState(false);
	const toggleCollapsed = () => setCollapsed(!collapsed);
	return { collapsed, toggleCollapsed };
};

const Wrapper = () => {
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
				<div>
					{/* <Switch> */}
					{/* </Switch> */}
					<Routes>
						<Route
							path="/"
							element={<HomeManagement/>}
							exact
						></Route>
						<Route
							path="/setting"
							element={<div>setting</div>}
							exact
						></Route>
					</Routes>
				</div>
			</Layout>
		</Layout>
	);
};

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Wrapper></Wrapper>
		</Router>
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
