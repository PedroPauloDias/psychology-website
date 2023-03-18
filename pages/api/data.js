const data = [
  {
    id: 1,
    title: 'Título 1',
    text: 'Texto 1',
    subtitle: 'Subtítulo 1',
    subText: 'Subtexto 1'
  },
  {
    id: 2,
    title: 'Título 2',
    text: 'Texto 2',
    subtitle: 'Subtítulo 2',
    subText: 'Subtexto 2'
  },
  {
    id: 3,
    title: 'Título 3',
    text: 'Texto 3',
    subtitle: 'Subtítulo 3',
    subText: 'Subtexto 3'
  }
];

export default function handler(req, res) {
  res.status(200).json(data);
}
