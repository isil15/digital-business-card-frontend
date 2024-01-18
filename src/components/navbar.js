// NavBar.js
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './navbar.css'; 
import { Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useAuth } from './AuthContext';

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const { isLoggedIn } = useAuth();
  return (
    <div className="navbar-container">
      <div className="menuIcon">
        <MenuOutlined
          style={{ color: "white", fontSize: 30 }}
          onClick={() => setOpenMenu(true)}
        />
      </div>
      <div className="headerMenu">
        <AppMenu isInline isLogged={isLoggedIn}/>
      </div>
      <Drawer
        style={{ background: '#000000' }}
        placement="left"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        closable={false}
      >
        <AppMenu isInline isLogged={isLoggedIn} />
      </Drawer>
    </div>
  );
}

function AppMenu({ isInline = false, isLogged }) {
  const menuItems = [
    { key: 'home', label: 'Home', to: '/home' },
    { key: 'about', label: 'About Me', to: '/about' },
  ];

  const rightMenuItems = [
    { key: 'buy', label: 'Buy', to: '/buy' },
    { key: 'login', label: isLogged ? 'Profile' : 'SignUp/Login', to: isLogged ? '/profile' : '/login' },
  ];


  return (
    <Menu
      style={{
        backgroundColor: 'rgb(193, 139, 217, 85)',
        fontSize: 20,
        color: 'white',
        border: 'none',
        display: 'flex',
        justifyContent: 'space-between'
      }}
      mode={isInline ? 'horizontal' : 'inline'}
      selectedKeys={[]}
    >
      {menuItems.map((item, index) => (
        <Menu.Item key={item.key}>
          <Link to={item.to}>{item.label}</Link>
        </Menu.Item>
      ))}

      <Menu.Item style={{ marginLeft: 'auto' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          {rightMenuItems.map((item) => (
            <Menu.Item key={item.key}>
              <Link to={item.to}>
                {item.label}
              </Link>
            </Menu.Item>
          ))}
        </div>
      </Menu.Item>
    </Menu>
  );
}

export default NavBar;
