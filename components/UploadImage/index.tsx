import { ActionIcon } from '@mantine/core';
import { IconPencil } from '@tabler/icons-react';
import Image from 'next/image';

const UploadImage = () => {
  return (
    <div>
      <div className='relative'>
        <div className='h-full relative'>
          <Image
            src='/assets/img/upload-img.jpg'
            alt='upload-img'
            width='0'
            height='0'
            sizes='100vw'
            className='w-full h-auto'
          />
        </div>

        <ActionIcon
          className='absolute top-1 right-1 bg-purple300 hover:bg-hoverPurple400'
          variant='filled'
        >
          <IconPencil />
        </ActionIcon>
      </div>
      <div className='flex justify-center items-center gap-4 md:flex-wrap mt-4'>
        {Array(6)
          .fill(0)
          .map((_, idx) => (
            <div className='relative' key={idx}>
              <Image
                src='/assets/img/upload-img.jpg'
                alt='upload-img'
                width={80}
                height={80}
              />
              <ActionIcon
                className='absolute top-1 right-1 bg-purple300 hover:bg-hoverPurple400'
                variant='filled'
                size='xs'
              >
                <IconPencil />
              </ActionIcon>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UploadImage;
