import React from 'react'
import { Dropdown, Space, Divider } from 'antd';
import items from './Items';
import Right from '../img/icons/right.png'
import Smartphone from '../img/catalog-icons/smartphone.svg'
import laptop from '../img/catalog-icons/laptop.svg'
import tablet from '../img/catalog-icons/tablet.svg'
import PC from '../img/catalog-icons/pc.svg'
import TV from '../img/catalog-icons/tv.svg'
import watch from '../img/catalog-icons/watch.svg'
import audio from '../img/catalog-icons/audio.svg'
import console from '../img/catalog-icons/console.svg'
import photo from '../img/catalog-icons/photo.svg'
import kids from '../img/catalog-icons/kids.svg'
import sale from '../img/catalog-icons/sale.svg'


export default function ProductList() {
    return (
      <div className='product-list'>
        <Dropdown
          menu={items}
          trigger={['click']}
          placement='right'
        >
          <a href='' className='catalog-nav' onClick={(e) => e.preventDefault()}>
            <Space className='catalog-item' style={{ alignItems: 'center' }}>
              <div className='catalog-list'>
                <img src={Smartphone} alt="Smartphone" /> Smartphone
              </div>
              <img src={Right} alt="Right Arrow" style={{ marginLeft: 'auto' }} />
            </Space>
          </a>
          
        </Dropdown>
        <Divider style={{marginTop: '8px'}}/>
  
        <Dropdown
          menu={items}
          trigger={['click']}
          placement='right'
        >
          <a href='' className='catalog-nav' onClick={(e) => e.preventDefault()}>
            <Space className='catalog-item' style={{ alignItems: 'center', gap: '230px' }}>
              <div className='catalog-list'>
                <img src={laptop} alt="Laptop" /> Laptop
              </div>
              <img src={Right} alt="Right Arrow" style={{ marginLeft: 'auto' }} />
            </Space>
          </a>
        </Dropdown>
        <Divider style={{marginTop: '8px'}}/>

        <Dropdown
          menu={items}
          trigger={['click']}
          placement='right'
        >
          <a href='' className='catalog-nav' onClick={(e) => e.preventDefault()}>
            <Space className='catalog-item' style={{ alignItems: 'center', gap: '235px' }}>
              <div className='catalog-list'>
                <img src={tablet} alt="Laptop" /> Tablet
              </div>
              <img src={Right} alt="Right Arrow" style={{ marginLeft: 'auto' }} />
            </Space>
          </a>
        </Dropdown>
        <Divider style={{marginTop: '8px'}}/>

        <Dropdown
          menu={items}
          trigger={['click']}
          placement='right'
        >
          <a href='' className='catalog-nav' onClick={(e) => e.preventDefault()}>
            <Space className='catalog-item' style={{ alignItems: 'center', gap: '270px' }}>
              <div className='catalog-list'>
                <img src={PC} alt="Laptop" /> PC
              </div>
              <img src={Right} alt="Right Arrow" style={{ marginLeft: 'auto' }} />
            </Space>
          </a>
        </Dropdown>
        <Divider style={{marginTop: '8px'}}/>

        <Dropdown
          menu={items}
          trigger={['click']}
          placement='right'
        >
          <a href='' className='catalog-nav' onClick={(e) => e.preventDefault()}>
            <Space className='catalog-item' style={{ alignItems: 'center', gap: '75px' }}>
              <div className='catalog-list'>
                <img src={TV} alt="Laptop" /> TVs and Multimedia
              </div>
              <img src={Right} alt="Right Arrow" style={{ marginLeft: 'auto' }} />
            </Space>
          </a>
        </Dropdown>
        <Divider style={{marginTop: '8px'}}/>

        <Dropdown
          menu={items}
          trigger={['click']}
          placement='right'
        >
          <a href='' className='catalog-nav' onClick={(e) => e.preventDefault()}>
            <Space className='catalog-item' style={{ alignItems: 'center', gap: '150px' }}>
              <div className='catalog-list'>
                <img src={watch} alt="Laptop" /> Smart-watch
              </div>
              <img src={Right} alt="Right Arrow" style={{ marginLeft: 'auto' }} />
            </Space>
          </a>
        </Dropdown>
        <Divider style={{marginTop: '8px'}}/>

        <Dropdown
          menu={items}
          trigger={['click']}
          placement='right'
        >
          <a href='' className='catalog-nav' onClick={(e) => e.preventDefault()}>
            <Space className='catalog-item' style={{ alignItems: 'center', gap: '235px' }}>
              <div className='catalog-list'>
                <img src={audio} alt="Laptop" /> Audio
              </div>
              <img src={Right} alt="Right Arrow" style={{ marginLeft: 'auto' }} />
            </Space>
          </a>
        </Dropdown>
        <Divider style={{marginTop: '8px'}}/>

        <Dropdown
          menu={items}
          trigger={['click']}
          placement='right'
        >
          <a href='' className='catalog-nav' onClick={(e) => e.preventDefault()}>
            <Space className='catalog-item' style={{ alignItems: 'center', gap: '135px' }}>
              <div className='catalog-list'>
                <img src={console} alt="Laptop" /> Game console
              </div>
              <img src={Right} alt="Right Arrow" style={{ marginLeft: 'auto' }} />
            </Space>
          </a>
        </Dropdown>
        <Divider style={{marginTop: '8px'}}/>

        <Dropdown
          menu={items}
          trigger={['click']}
          placement='right'
        >
          <a href='' className='catalog-nav' onClick={(e) => e.preventDefault()}>
            <Space className='catalog-item' style={{ alignItems: 'center', gap: '110px' }}>
              <div className='catalog-list' style={{lineHeight: '2.1'}}>
                <img src={photo} alt="Laptop" /> Photo and video
              </div>
              <img src={Right} alt="Right Arrow" style={{ marginLeft: 'auto' }} />
            </Space>
          </a>
        </Dropdown>
        <Divider style={{marginTop: '8px'}}/>

        <Dropdown
          menu={items}
          trigger={['click']}
          placement='right'
        >
          <a href='' className='catalog-nav' onClick={(e) => e.preventDefault()}>
            <Space className='catalog-item' style={{ alignItems: 'center', gap: '240px' }}>
              <div className='catalog-list'>
                <img src={kids} alt="Laptop" /> KIDS
              </div>
              <img src={Right} alt="Right Arrow" style={{ marginLeft: 'auto' }} />
            </Space>
          </a>
        </Dropdown>
        <Divider style={{marginTop: '8px'}}/>

        <Dropdown
          menu={items}
          trigger={['click']}
          placement='right'
        >
          <a href='' className='catalog-nav' onClick={(e) => e.preventDefault()}>
            <Space className='catalog-item' style={{ alignItems: 'center', gap: '235px', marginBottom: '0px' }}>
              <div className='catalog-list' style={{color:'red'}}>
                <img src={sale} alt="Laptop" /> SALE
              </div>
              <img src={Right} alt="Right Arrow" style={{ marginLeft: 'auto' }} />
            </Space>
          </a>
        </Dropdown>
        <Divider style={{marginTop: '8px', marginBottom: '0px'}}/>
      </div>
    );
  }