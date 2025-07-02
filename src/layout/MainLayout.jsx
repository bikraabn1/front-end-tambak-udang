import React from 'react'
import { AppShell, Drawer, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <div className='max-w-screen min-h-screen'>
      <AppShell
        header={{ height: { base: 48, sm: 60, lg: 76 } }}
        padding="xl"
      >
        <AppShell.Header>
          <Navbar isOpen={opened} toggle={toggle} />
        </AppShell.Header>

        <Drawer offset={8} radius="md" opened={opened} onClose={close} overlayProps={{ backgroundOpacity: 0.5, blur: 4 }} scrollAreaComponent={ScrollArea.Autosize}>
          <Sidebar onClose={close}/>
        </Drawer>

        <AppShell.Main margin={0}>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </div>
  )
}

export default MainLayout
