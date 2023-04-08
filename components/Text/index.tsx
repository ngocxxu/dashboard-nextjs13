import { Text } from '@mantine/core';
import React from 'react';
import { ButtonCustom1 } from '../Button';
import BreadcrumbsFeature from '../Breadcrumbs';
import { TTextHeader } from '@/typescript/General';

export const TextHeader = ({ titleText, titleButton, path }: TTextHeader) => {

  return (
    <div className={`${titleButton && 'flex justify-between items-center m-6'}`}>
      <div className={`${!titleButton && 'flex justify-between items-center m-6'}`}>
        <Text className='text-gray-600' fw={600} fz='25px'>
          {titleText}
        </Text>
        <BreadcrumbsFeature />
      </div>
      {titleButton && <ButtonCustom1 title={titleButton} path={path} />}
    </div>
  );
};
