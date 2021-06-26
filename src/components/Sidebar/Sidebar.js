import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    // trigger event
    useEffect(() => {
        let arrow = document.querySelectorAll(".arrow");
        for (var i = 0; i < arrow.length; i++) {
          arrow[i].addEventListener("click", (e)=>{
         let arrowParent = e.target.parentElement.parentElement;
         arrowParent.classList.toggle("showMenu");
          });
        }
        let sidebar = document.querySelector(".sidebar");
        let sidebarBtn = document.querySelector(".bx-menu-alt-left");


        let header = document.querySelector(".header");
        header.style.width = 'calc(100% - 260px)'
        header.style.left = '260px'
        sidebarBtn.addEventListener("click", ()=>{
          sidebar.classList.toggle("close");
          if (sidebar.classList.contains('close')) {
            header.style.width = 'calc(100% - 78px)'
            header.style.left = '78px'
            console.log('contain close')
          }
          else{
            header.style.width = 'calc(100% - 260px)'
            header.style.left = '260px'
            console.log('no')

          }
        });
    }, []);
   
    const menus = [
        {
            name: 'Dashboard',
            route: '/',
            icon: 'bx bx-grid-alt',
            childs:  []
        },
        {
          name: 'Components',
          route: '/',
          icon: 'bx bxs-component',
          childs:  [
              {
                  name: 'Button',
                  route: '/button',
                  icon: ''
              },
              {
                  name: 'Table',
                  route: '/table',
                  icon: ''
              },
              {
                name: 'Modal',
                route: '/modal',
                icon: ''
            }
          ]
        },
        {
            name: 'Catalog',
            route: '/',
            icon: 'bx bx-collection',
            childs:  [
                {
                    name: 'Category',
                    route: '/category',
                    icon: ''
                },
                {
                    name: 'Product',
                    route: '/product',
                    icon: ''
                }
            ]
        },
        {
          name: 'Sale',
          route: '/',
          icon: 'bx bx-cart',
          childs:  [
              {
                  name: 'Order',
                  route: '/order',
                  icon: ''
              },
              {
                  name: 'Shipping',
                  route: '/shipping',
                  icon: ''
              }
          ]
        },
        {
          name: 'Customer',
          route: '/',
          icon: 'bx bx-user',
          childs:  [
              {
                  name: 'Customer',
                  route: '/Customer',
                  icon: ''
              },
              {
                  name: 'Customer role',
                  route: '/role',
                  icon: ''
              }
          ]
        },
        {
          name: 'Promotions',
          route: '/',
          icon: 'bx bx-purchase-tag',
          childs:  [
              {
                  name: 'Discounts',
                  route: '/discount',
                  icon: ''
              },
              {
                  name: 'Affiliates',
                  route: '/Affiliates',
                  icon: ''
              }
          ]
        },
        {
          name: 'Setting',
          route: '/',
          icon: 'bx bx-cog',
          childs:  []
        }
    ]
    const sidebarTextClass = 'hover:bg-primary hover:text-white dark:text-white dark:hover:bg-black dark:hover:border-blue-500 dark:hover:text-gray-200 dark:hover:border-l-4'
    return (
        <div className="sidebar bg-primary text-white shadow-md dark:bg-black transition-al">
        <div className={`logo-details ${sidebarTextClass}`}>
          <i className='bx bxl-medium-old'></i>
          <span className="logo_name">TimeCms</span>
        </div>
        <ul className="nav-links">
            {
                menus && menus.map((menu, index) => (
                    menu.childs.length === 0 ?
                    <li key={index}>
                        {/* <a href={menu.path} className={sidebarTextClass}>
                        <i className={menu.icon} ></i>
                        <span className="link_name">{menu.name}</span>
                        </a> */}
                        <NavLink to={menu.route} className={sidebarTextClass} activeClassName="navlink-active">
                            <i className={menu.icon} ></i>
                            <span className="link_name">{menu.name}</span>
                        </NavLink>
                    </li> 
                    : 
                    <li key={index}>
                        <div className={`iocn-link ${sidebarTextClass}`}>
                          <a href="/">
                              <i className={menu.icon} ></i>
                              <span className="link_name">{menu.name}</span>
                          </a>
                          <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu text-white bg-primary dark:bg-black">
                          <li><a className="link_name" href="/">{menu.name}</a></li>
                          {
                          menu.childs.map((submenu, index) => (
                            <li key={index}>
                                <NavLink to={submenu.route} className="navlink" activeClassName="navlink-active">
                                  {submenu.name}
                                </NavLink>
                            </li>
                          ))
                          }
                        </ul>
                    </li>
                ))
            }
          <li>
        <div className="profile-details">
          <div className="profile-content">
            <img src="./avatar.png" alt="profile" />
          </div>
          <div className="name-job">
            <div className="profile_name">Tai Nguyen</div>
            <div className="job">Web Developer</div>
          </div>
          <i className='bx bx-log-out' ></i>
        </div>
      </li>
    </ul>
      </div>
    );
}

export default Sidebar;