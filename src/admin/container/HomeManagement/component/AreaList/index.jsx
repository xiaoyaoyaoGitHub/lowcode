import { Button } from "antd";
import { forwardRef, useState, useImperativeHandle } from "react";
import styles from "./style.module.scss";
// import { parseJsonByString } from "@/common/utils";

// let listData = parseJsonByString(localStorage.getItem("schema"), []);

const AreaList = (props, ref) => {
	const [list, setList] = useState(JSON.parse(localStorage.schema)?.children.filter(item => item.name === 'Area') || []);
	/**
	 * 点击添加
	 */
	const handleAddBtnClick = () => {
		const newList = [...list];
		newList.push({});
		setList(newList);
	};
	/**
	 * 删除
	 * @param {number} idx 索引
	 */
	const handleDeleteBtnClick = (idx) => {
		const newList = [...list];
		newList.splice(idx, 1);
		setList(newList);
	};
	const handleSaveBtnClick = () => {
		const listsData = JSON.stringify(list);
		localStorage.setItem("homeData", listsData);
	};

	useImperativeHandle(ref, () => {
		return {
			list
		}
	});

	return (
		<div>
			<ul className={styles.list}>
				{list.map((item, index) => {
					return (
						<li className={styles.item} key={index}>
							<span className={styles.content}>
								{index}当前区块内容为空
							</span>
							<span className={styles.btn}>
								<Button
									onClick={() => handleDeleteBtnClick(index)}
									type="dashed"
									size="small"
									danger
								>
									删除
								</Button>
							</span>
						</li>
					);
				})}
			</ul>
			<Button type="primary" ghost onClick={handleAddBtnClick}>
				新增页面区块
			</Button>
			<Button
				type="primary"
				onClick={handleSaveBtnClick}
				className={styles.saveBtn}
			>
				保存区块配置
			</Button>
		</div>
	);
};

export default forwardRef(AreaList);
