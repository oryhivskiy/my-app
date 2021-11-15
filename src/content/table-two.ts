export const COLUMNS_NAMES_TWO = [
  {
    Header: '#',
    id: 'index',
    accessor: (row: any, index: number) => index + 1,
  },
  {
    Header: 'Назва груп індикаторів',
    accessor: 'name',
  },
  {
    Header: 'Ваговий коефіцієнт',
    accessor: 'weight',
  },
];

export const TABLE_DATA_TWO = [
  {
    name: 'Макроекономічна',
    weight: 0.1005,
  },
  {
    name: 'Виробнича',
    weight: 0.0769,
  },
  {
    name: 'Фінансова',
    weight: 0.1127,
  },
  {
    name: 'Інвестиційна',
    weight: 0.0939,
  },
  {
    name: 'Зовнішньо-економічна',
    weight: 0.0901,
  },
  {
    name: 'Науково-технологічна',
    weight: 0.1183,
  },
  {
    name: 'Соціальна',
    weight: 0.0808,
  },
  {
    name: 'Демографічна',
    weight: 0.0836,
  },
  {
    name: 'Енергетична',
    weight: 0.1324,
  },
  {
    name: 'Продовольча',
    weight: 0.1108,
  },
]
