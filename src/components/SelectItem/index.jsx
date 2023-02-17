import { forwardRef } from 'react';
import { Group, Avatar, Text, Select } from '@mantine/core';

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

const SelectItem = (
  ({ image, label, description, ...others }) => (
    <div  {...others}>
      <Group noWrap>
        <Avatar src={image} size={15} />

        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" opacity={0.65}>  
          </Text>
        </div>
      </Group>
    </div>
  )
);

export default function SelectComponent() {
  return (
    <Select
    
      placeholder="Escolha uma opção"
      itemComponent={SelectItem}
      data={data}
      searchable
      maxDropdownHeight={300}
      nothingFound="Nobody here"
      filter={(value, item) =>
        item.label.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.description.toLowerCase().includes(value.toLowerCase().trim())
      }
    />
  );
}