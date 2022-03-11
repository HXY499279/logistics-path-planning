import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import user from '../../../../assets/user.png'
import { useState } from 'react'
import styles from './index.module.css'

const { SubMenu } = Menu

export const Header = () => {
  const [current, setcurrent] = useState('home')
  const handleClick = (e) => {
    setcurrent(e.key)
  }
  return (
    <div className={styles["header"]}>
      <div className={styles["menu-wrap"]}>
        <Menu subMenuCloseDelay={0.2}>
          <Menu
            className={styles["header-left"]}
            onClick={handleClick}
            selectedKeys={current}
          >
            <Menu.Item key="home">
              <Link to="/user">首页</Link>
            </Menu.Item>
            <Menu.Item key="tddisplay">
              <Link to="/user/tddisplay">二维展示</Link>
            </Menu.Item>
          </Menu>
          <div className={styles["header-right"]}>
            <SubMenu
              key="user"
              popupOffse={(0, 10, 10)}
              icon={<img src={user} className={styles["header-image"]} />}
            >
              <Menu.Item key="msgcenter">
                {' '}
                <Link to="/user/msgcenter">消息中心</Link>
              </Menu.Item>
              <Menu.Item key="percenter">
                <Link to="/user/percenter">个人中心</Link>
              </Menu.Item>
              <Menu.Item key="logyout">退出登录</Menu.Item>
            </SubMenu>
          </div>
        </Menu>
      </div>
    </div>
  )
}
