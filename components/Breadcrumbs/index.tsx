import React from 'react';
import { Breadcrumbs, Anchor } from '@mantine/core';
import { useRouter } from 'next/router';

const BreadcrumbsFeature = () => {
  const router = useRouter();

  const getFirstNameUrl = router.pathname.split('/')[1];

  const getTitleFromFirstNameUrl = (path: string) => {
    let firstOrSecondPathname;
    
    if (path.split('/').length === 2) {
      return (firstOrSecondPathname = path
        .split('/')[1]
        .replace(/^\w/, (c) => c.toUpperCase()));
    }

    firstOrSecondPathname = path.split('/')[2];
    return firstOrSecondPathname
      .split('-')
      .map((word) => word.replace(/^\w/, (c) => c.toUpperCase()))
      .join(' ');
  };

  const items = [
    { title: 'Home', href: '/' },
    {
      title: `${getTitleFromFirstNameUrl(router.pathname)}`,
      href: `/${getFirstNameUrl}`,
    },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <Breadcrumbs separator='>' mt='xs'>
      {items}
    </Breadcrumbs>
  );
};

export default BreadcrumbsFeature;
