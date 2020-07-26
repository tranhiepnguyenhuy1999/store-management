import { BarsOutlined, DesktopOutlined, HomeOutlined, MenuUnfoldOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import BillDetail from '../../feature/bill/billDetail';
import Bill from '../../feature/bill/index';
import Customer from '../../feature/customer';
import AddCustomer from '../../feature/customer/addCus';
import Product from '../../feature/product';
import AddProduct from '../../feature/product/addProduct/addProduct';
import Category from '../../feature/product_category';
import CatAdd from '../../feature/product_category/catAdd';
import Sale from '../../feature/sale';
import MainPage from '../mainPage';
import './frameMain.scss';
import AddReceipt from '../../feature/receipt/addReceipt';
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
                    <Menu.Item key="1" icon={<HomeOutlined  />}>
                        <Link to='/'>
                            MainPage 
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                    <Link to ='/receipt'>
                        Receipt
                    </Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MenuUnfoldOutlined/>} title="Product">
                    
                    <Menu.Item key="3" icon={<BarsOutlined />}><Link to='/product'>Product</Link></Menu.Item>
                  
                    <Menu.Item key="4"  icon={<BarsOutlined />}><Link to='/product/category'>Category</Link></Menu.Item>
                    
                    </SubMenu>
                    <Menu.Item key="5" icon ={<ShoppingCartOutlined />}><Link to='/sale'>Sale</Link></Menu.Item>
                    <Menu.Item key="6" icon ={<ShoppingCartOutlined />}><Link to='/bill'>Bill</Link></Menu.Item>
                    <Menu.Item key="7" icon ={<ShoppingCartOutlined />}><Link to='/customer'>Customer</Link></Menu.Item>
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
                        <Route exact path='/product/category/add' component={CatAdd}></Route>
                        <Route exact path='/product/category/:idCat' component={CatAdd}></Route>
                        <Route exact path='/product/add' component ={AddProduct}></Route>
                        <Route exact path='/product' component ={Product}></Route>
                        <Route exact path='/product/:idProd' component ={AddProduct}></Route>
                        <Route exact path='/sale' component={Sale}></Route>
                        <Route exact path='/bill' component={Bill}/>
                        <Route exact path='/bill/:idBill' component={BillDetail}/>
                        <Route exact path='/customer/add' component={AddCustomer}/>
                        <Route exact path='/customer/:idCus' component={AddCustomer}/>
                        <Route exact path='/customer' component={Customer}/>
                        <Route  exact path='/receipt' component={AddReceipt}></Route>
                    </Switch>

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>This is website of convience store</Footer>
            </Layout>
      </Layout>
    )
}

export default FrameMain;
