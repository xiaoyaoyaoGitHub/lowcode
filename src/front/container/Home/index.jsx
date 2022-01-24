import Banner from "./component/Banner";
import List from "./component/List";
import Footer from "./component/Footer";
import { parseJsonByString } from "@/common/utils";

const schema = parseJsonByString(localStorage.schema, {});
const children = schema?.children || [];
const map = { Footer, Banner, List };
const render = (item, index) => {
	const Component = map[item.name];
	return Component ? <Component key={index} schema={item} /> : null;
};

const Home = () => {
	return <div>{children.map((item, index) => render(item, index))}</div>;
};

export default Home;
