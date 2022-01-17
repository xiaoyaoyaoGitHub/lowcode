import { Button } from "antd";
import { useState } from "react";
import styles from "./style.module.scss";
const AreaList = () => {
	const [list, setList] = useState([]);
	const handleAddBtnClick = () => {
		const newList = [...list];
		newList.push({});
		setList(newList);
	};
	return (
		<div>
			<ul className={styles.list}>
				{list.map((item, index) => {
					return <li className={styles.item} key={index}> {index} 当前区块内容为空 </li>;
				})}
			</ul>
			<Button type="primary" onClick={handleAddBtnClick}>
				新增页面区块
			</Button>
		</div>
	);
};

export default AreaList;
