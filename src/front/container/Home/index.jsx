import Banner from "./component/Banner";
import Courses from "./component/Courses";
import Footer from "./component/Footer";
import { parseJsonByString } from "@/common/utils"

const listData = parseJsonByString(localStorage.getItem('homeData'), []);

const Home = () => {
	return (
		<div>
			<Banner />
			<Courses />
			<Footer/>
			{
				listData.map((item, index) => {
					return <div key={index} className="wrapper">测试代码</div>
				})
			}
		</div>
	);
};

export default Home;
