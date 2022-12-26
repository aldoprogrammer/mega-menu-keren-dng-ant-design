import React, { useState } from 'react';
import './App.css';
import { Menu, Space, Typography, Tag, Card } from 'antd';
import { ShopOutlined } from '@ant-design/icons';
import { ApiOutlined, FullscreenExitOutlined, FullscreenOutlined, HomeOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons/lib/icons';

function App () {
  return (
    <div>
      <Menu 
        mode='horizontal'
        items={[
          {
            label: 'Fashion',
            key: 'Fashion',
            icon: <ShopOutlined />,
            children: [
              {
                label: 'Men',
                key: 'Men',
                icon: <UserOutlined/>
              },
              {
                label: 'Women',
                key: 'Women',
                icon: <UserOutlined/>
              },
              {
                label: 'Kids',
                key: 'Kids',
                icon: <TeamOutlined />
              },
            ],
          },
          {
            label: 'Home Decor',
            key: 'Home Decor',
            icon: <HomeOutlined/>,
            children: [
              {
                label: 'Gaming Dari Hape',
                key: 'Gaming Dari Hape',
                icon: <FullscreenExitOutlined/>
              },
              {
                label: 'Pc / PS 2 & 3',
                key: 'Pc / PS 2 & 3',
                icon: <FullscreenOutlined />
              },
            ],
          },
          {
            label: 'Economics',
            key: 'Economics',
            icon: <ApiOutlined/>,
            children: [
              {
                label: <MegaMenu />,
                key: "MegaMenu",
                style: {
                  height: "fit-content",
                  backgroundColor: 'white'

                }
              }
            ]
          },
        ]}
      ></Menu>
      </div>

  );

function MegaMenu() {
  const [selectedKeys, setSelectedKeys] = useState([])
  const onMenuItemClick = (item) => {
    setSelectedKeys([item.key]);
    console.log('Selected Mega Item', item.key);
  };
  return <div style={{ backgroundColor: "white", paddingLeft:'0', paddingRight:'0'}}>
    <Typography.Title level={3}>Menu Nya Banyak Gess</Typography.Title>
    <Space direction="horizontal" size={12}>
    <Tag color="red">Diskon 50%</Tag>
    <Space direction="horizontal">
    <Menu 
    onClick={onMenuItemClick}
    selectedKeys={selectedKeys}
      items={[
        {
          label: 'Men',
          key: 'Men',
          type: "group",
        },
        {
          label: 'Women',
          key: 'Women1',
          icon: <UserOutlined/>
        },
        {
          label: 'Kids',
          key: 'Kids1',
          icon: <TeamOutlined />
        },
        {
          label: 'Men',
          key: 'Men1',
          icon: <UserOutlined/>
        },
        {
          label: 'Women',
          key: 'Women2',
          icon: <UserOutlined/>
        },
        {
          label: 'Kids',
          key: 'Kids2',
          icon: <TeamOutlined />
        },
        ]} />
    <Menu 
    onClick={onMenuItemClick}
    selectedKeys={selectedKeys}
    items={[
        {
          label: 'Kids',
          key: 'Kids2',
          type: "group",
        },
        {
          label: 'Women',
          key: 'Women3',
          icon: <UserOutlined/>
        },
        {
          label: 'Kids3',
          key: 'Kids',
          icon: <TeamOutlined />
        },
        {
          label: 'Men4',
          key: 'Men',
          icon: <UserOutlined/>
        },
        {
          label: 'Women4',
          key: 'Women',
          icon: <UserOutlined/>
        },
        {
          label: 'Kids4',
          key: 'Kids4',
          icon: <TeamOutlined />
        },
        ]} />
    <Menu
    onClick={onMenuItemClick}
    selectedKeys={selectedKeys}
     items={[
        {
          label: 'Women5',
          key: 'Women',
          type: "group",
        },
        {
          label: 'Women5',
          key: 'Women5',
          icon: <UserOutlined/>
        },
        {
          label: 'Kids5',
          key: 'Kids5',
          icon: <TeamOutlined />
        },
        ]} />
        </Space>
        <Card title="Mega Menu Card" style={{ boxShadow: "none", border: 'none'}}>
          Ini adalah tempat detail barang ya gess
          
        </Card>
        </Space>
  </div>;
}

}

export default App;