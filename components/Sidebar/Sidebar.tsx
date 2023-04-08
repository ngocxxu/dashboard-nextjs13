import { NavLink } from '@mantine/core';
import {
  IconBuildingStore,
  IconChevronRight,
  IconLayoutDashboard,
  IconShoppingCart,
  IconStar,
  IconUsers,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ScriptProps } from 'next/script';
import React from 'react';
import Header from '../Header/Header';
import dayjs from 'dayjs';
import { ADD_PRODUCT_ROUTE, DASHBOARD_ROUTE, NEW_ORDER_ROUTE, ORDERS_ROUTE, ORDER_DETAIL_ROUTE, ORDER_HISTORY_ROUTE, PRODUCTS_ROUTE, PRODUCT_LIST_ROUTE, REVIEWS_ROUTE, USERS_ROUTE, USER_LIST_ROUTE, USER_PROFILE_ROUTE } from '@/utils/consts';

const Sidebar: React.FC<ScriptProps> = ({ children }) => {
  const router = useRouter();
  const { slug } = router.query;

  const data = [
    {
      icon: IconLayoutDashboard,
      label: 'Dashboard',
      path: DASHBOARD_ROUTE,
    },
    {
      icon: IconUsers,
      label: 'Users',
      rightSection: <IconChevronRight size='1rem' stroke={1.5} />,
      children: [
        { label: 'User List', path: USER_LIST_ROUTE },
        {
          label: 'User Profile',
          path: `${USER_PROFILE_ROUTE}/${slug}`,
        },
      ],
      path: USERS_ROUTE,
    },
    {
      icon: IconBuildingStore,
      label: 'Products',
      rightSection: <IconChevronRight size='1rem' stroke={1.5} />,
      children: [
        { label: 'Add Product', path: ADD_PRODUCT_ROUTE },
        { label: 'Product List', path: PRODUCT_LIST_ROUTE },
      ],
      path: PRODUCTS_ROUTE,
    },
    {
      icon: IconShoppingCart,
      label: 'Orders',
      rightSection: <IconChevronRight size='1rem' stroke={1.5} />,
      children: [
        { label: 'New Order', path: NEW_ORDER_ROUTE },
        { label: 'Order History', path: ORDER_HISTORY_ROUTE },
        { label: 'Order Detail', path: ORDER_DETAIL_ROUTE },
      ],
      path: ORDERS_ROUTE,
    },
    {
      icon: IconStar,
      label: 'Reviews',
      path: REVIEWS_ROUTE,
    },
  ];

  const items = data.map((item, index) => (
    <Link href={item.path} passHref legacyBehavior key={index}>
      <NavLink
        classNames={{
          root: 'py-4',
          label: `uppercase text-md ${
            router.pathname === `${item.path}` ? 'text-black' : 'text-gray-400'
          }`,
        }}
        key={item.label}
        active={router.pathname === `${item.path}`}
        label={item.label}
        icon={<item.icon size='1rem' stroke={1.5} />}
        childrenOffset={28}
      >
        {item.children &&
          item.children.map((item, idx) => (
            <Link href={item.path} passHref legacyBehavior key={idx}>
              <NavLink
                classNames={{
                  label: `uppercase text-md ${
                    router.pathname === `${item.path}`
                      ? 'text-black'
                      : 'text-gray-400'
                  }`,
                }}
                active={router.pathname === `${item.path}`}
                key={idx}
                label={item.label}
              />
            </Link>
          ))}
      </NavLink>
    </Link>
  ));

  return (
    <div className='flex'>
      <div className='w-[300px] h-screen bg-white border-r-[1px] flex flex-col justify-between'>
        <div>
          <Link href={DASHBOARD_ROUTE} passHref legacyBehavior>
            <div className='ml-3 my-4'>
              <div className='flex'>
                <Image
                  src='/assets/img/logoo.png'
                  alt='logo'
                  width='30'
                  height='30'
                />
                <p className='text-2xl font-bold text-gray-500 ml-2'>Bono</p>
              </div>
            </div>
          </Link>

          {/* NavLink */}
          {items}
        </div>
        
        <div className='text-center text-sm mb-2 text-gray500'>
          © {dayjs().year()} All rights reserved.
        </div>
      </div>

      <main className='w-full bg-gray100'>
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
