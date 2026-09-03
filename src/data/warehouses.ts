export interface StorageChamber {
  name: string;
  temperature: string;
  area: string;
  description: string;
}

export interface Warehouse {
  id: string;
  name: string;
  temperature: string;
  area: string;
  description: string;
  chambers: StorageChamber[];
  image: string;
  features: string[];
}

export const warehouses: Warehouse[] = [
  {
    id: 'warehouse-1',
    name: 'Склад №1 — холодильный комплекс',
    temperature: 'от 0°C до +8°C',
    area: '2 400 м²',
    description:
      'Современный холодильный склад с раздельными температурными зонами. Подходит для хранения молочной продукции, мяса, овощей и фруктов. Круглосуточный доступ к продукции, видеонаблюдение, контроль температуры.',
    image: '/images/warehouse-1.jpg',
    features: [
      'Круглосуточный доступ к продукции',
      'Видеонаблюдение 24/7',
      'Контроль температуры и влажности',
      'Погрузочные рампы',
    ],
    chambers: [
      {
        name: 'Камера А',
        temperature: '+2…+4°C',
        area: '600 м²',
        description: 'Для молочной продукции и скоропортящихся товаров.',
      },
      {
        name: 'Камера Б',
        temperature: '+4…+8°C',
        area: '800 м²',
        description: 'Для овощей, фруктов и напитков.',
      },
      {
        name: 'Камера В',
        temperature: '0…+2°C',
        area: '1 000 м²',
        description: 'Для мясной и рыбной продукции.',
      },
    ],
  },
  {
    id: 'warehouse-2',
    name: 'Склад №2 — морозильный комплекс',
    temperature: 'от −18°C до −25°C',
    area: '1 800 м²',
    description:
      'Морозильный склад с камерами глубокой заморозки. Идеален для хранения замороженных полуфабрикатов, мяса, рыбы и морепродуктов. Шоковая заморозка на территории.',
    image: '/images/warehouse-2.jpg',
    features: [
      'Глубокая заморозка до −25°C',
      'Шоковая заморозка',
      'Система аварийного оповещения',
      'Резервное электроснабжение',
    ],
    chambers: [
      {
        name: 'Морозильная камера 1',
        temperature: '−18°C',
        area: '900 м²',
        description: 'Стандартное хранение замороженной продукции.',
      },
      {
        name: 'Морозильная камера 2',
        temperature: '−25°C',
        area: '600 м²',
        description: 'Глубокая заморозка для длительного хранения.',
      },
      {
        name: 'Камера шоковой заморозки',
        temperature: 'до −35°C',
        area: '300 м²',
        description: 'Быстрая заморозка свежей продукции.',
      },
    ],
  },
  {
    id: 'office',
    name: 'Офисные помещения',
    temperature: 'Отапливаемые',
    area: 'от 25 м²',
    description:
      'Офисные помещения различной площади на территории логистического комплекса. Удобное расположение рядом со складами, парковка, охрана.',
    image: '/images/office.jpg',
    features: [
      'Гибкие площади',
      'Парковка для сотрудников',
      'Охрана территории',
      'Коммунальные услуги включены',
    ],
    chambers: [],
  },
];
