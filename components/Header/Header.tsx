import { ActionIcon, Divider, Group, Indicator } from '@mantine/core';
import {
  IconBell,
  IconLayoutSidebarLeftCollapse,
  IconSettings,
} from '@tabler/icons-react';
import MenuUser from './MenuUser';

const Header = () => {
  return (
    <div className='flex justify-between px-4 py-[13.5px] border-b-[1px] border-gray-200 bg-white'>
      <ActionIcon size='lg' variant='transparent'>
        <IconLayoutSidebarLeftCollapse size='1.625rem' />
      </ActionIcon>
      <Group>
        <MenuUser />
        <Divider orientation='vertical' />
        <ActionIcon size='lg' variant='transparent'>
          <Indicator inline processing size={12}>
            <IconBell size='1.625rem' />
          </Indicator>
        </ActionIcon>
        <Divider orientation='vertical' />
        <ActionIcon size='lg' variant='transparent'>
          <IconSettings size='1.625rem' />
        </ActionIcon>
      </Group>
    </div>
  );
};

export default Header;
