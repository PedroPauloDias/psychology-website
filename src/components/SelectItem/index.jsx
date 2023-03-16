import {  useState } from 'react';
import { createStyles, UnstyledButton, Menu, Image, Group } from '@mantine/core';


const data = [
  {
    image: 'https://cdn-icons-png.flaticon.com/512/174/174879.png',
    label: 'Whatsapp',
    value: 'Whatsapp',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/480px-Telegram_logo.svg.png',
    label: 'Telegram ',
    value: 'Telegram',
    
  },
  {
    image: 'https://images.vexels.com/media/users/3/208106/isolated/preview/25f90f676b6ea88a5683158d91007907-icone-de-toque-de-celular.png',
    label: 'Telefone',
    value: 'Telefone ',
  },
 

];




export default function SelectComponent() {
  const useStyles = createStyles((theme) => ({
    control: {
      width: '100%',
      height:'100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 15px',
      borderRadius: theme.radius.md,
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
      }`,
      transition: 'background-color 150ms ease',
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[opened ? 5 : 6]
          : opened
          ? theme.colors.gray[0]
          : theme.white,
  
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
      },
    },
  
    label: {
      fontWeight: 100,
      fontSize: theme.fontSizes.md,
      fontFamily: 'Inter',
    },
  
    icon: {
      transition: 'transform 150ms ease',
      transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
    },
 
  }));
 
    const [opened, setOpened] = useState(false);
    const { classes } = useStyles({ opened });
    const [selected, setSelected] = useState(data[0]);
    const items = data.map((item) => (
      <Menu.Item
        icon={<Image src={item.image} width={18} height={18}  alt =''/>}
        onClick={() => setSelected(item)}
        key={item.label}
      >
        {item.label}
      </Menu.Item>
    ));
  
    return (
      <Menu
        onOpen={() => setOpened(true)}
        onClose={() => setOpened(false)}
        radius="md"
        width="target"
      >
        <Menu.Target>
          <UnstyledButton className={classes.control}>
            <Group spacing="xs">
              <Image src={selected.image} width={22} height={22} alt=''/>
              <span className={classes.label}>{selected.label}</span>
            </Group>
            <x size={16} className={classes.icon} stroke={1.5} />
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>{items}</Menu.Dropdown>
      </Menu>)

}