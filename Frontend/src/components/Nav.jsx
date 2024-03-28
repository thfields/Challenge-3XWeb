import { Layout, Menu, Flex } from "antd";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";

const { Sider, Content } = Layout;

function Nav() {
    return (
        <Layout>
            <Sider theme="dark">
                <Flex justify="center" style={{margin : 10}}>
                    <img src={logo} alt="Logo" style={{width : 120}}/>
                </Flex>
                <Menu mode="inline" theme="dark">
                    <Menu.Item key="home">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="tasks">
                        <Link to="/tasks">Tarefas</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Content style={{ minHeight: "97vh", margin: "10px" }}>
                <Outlet />
            </Content>
        </Layout>
    );
}

export default Nav;