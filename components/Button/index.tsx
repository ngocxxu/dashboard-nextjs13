import { TButtonCustom1 } from '@/typescript/General';
import { Button } from '@mantine/core';
import { useRouter } from 'next/router';
import React from 'react';

export const ButtonCustom1 = ({ title, path }: TButtonCustom1) => {
  const router = useRouter()

  return (
    <Button
      onClick={() => router.push(path)}
      className='bg-purple300 hover:bg-hoverPurple400'
      radius='xl'
      size='sm'
    >
      {title}
    </Button>
  );
};
