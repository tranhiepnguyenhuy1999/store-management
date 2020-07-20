import { DesktopOutlined, FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Category from '../../feature/product_category';
import MainPage from '../mainPage';
import './frameMain.scss';
import CatAdd from '../../feature/product_category/catAdd';
import AddProduct from '../../feature/product/addProduct/addProduct';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
function FrameMain() {
    const [collapsed, setCollapsed] = useState(false)

    const onCollapse=()=>{
        setCollapsed(!collapsed)
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo">
                <img src='../../../public/asset/img/logo.png' alt='can"t load logo'></img>
            </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                    Staff
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                    Sell
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Product">
                    <Menu.Item key="3"><Link to='/product/add'>Product</Link></Menu.Item>
                  
                    <Menu.Item key="4"><Link to='/product/category'>Category</Link></Menu.Item>
                    
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />}> Docs</Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                    <Switch>
                        <Route exact path='/' component={MainPage} />
                        <Route exact path='/product/category' component={Category}></Route>
                        <Route  path='/product/category/add' component={CatAdd}></Route>
                        <Route  path='/product/category/:idCat' component={CatAdd}></Route>
                        <Route exact path='/product/add' component ={AddProduct}></Route>
                    </Switch>

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>This is website of convience store</Footer>
            </Layout>
      </Layout>
    )
}

export default FrameMain;
