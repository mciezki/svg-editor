export interface MenuCategory {
  categoryName: string;
  sizes: {
    w1: string;
    w2: string;
    w3: string;
  };
  meal: {
    name: string;
    description: string;
    prices: { c1: string; c2: string; c3: string };
  }[];
}

export const menuCategories: MenuCategory[] = [
  {
    categoryName: 'Pizza',
    sizes: {
      w1: '20cm',
      w2: '30cm',
      w3: '40cm',
    },
    meal: [
      {
        name: 'Capriciosa',
        description: 'ser, szynka, salami, pieczarki',
        prices: { c1: '20zl', c2: '30zl', c3: '40zl' },
      },
      {
        name: 'Capriciosa',
        description: 'ser, szynka, salami, pieczarki',
        prices: { c1: '20zl', c2: '30zl', c3: '40zl' },
      },
      {
        name: 'Capriciosa',
        description: 'ser, szynka, salami, pieczarki',
        prices: { c1: '20zl', c2: '30zl', c3: '40zl' },
      },
      {
        name: 'Capriciosa',
        description: 'ser, szynka, salami, pieczarki',
        prices: { c1: '20zl', c2: '30zl', c3: '40zl' },
      },
      {
        name: 'Capriciosa',
        description: 'ser, szynka, salami, pieczarki',
        prices: { c1: '20zl', c2: '30zl', c3: '40zl' },
      },
    ],
  },
  {
    categoryName: 'Pizza Mniam',
    sizes: {
      w1: '30cm',
      w2: '40cm',
      w3: '50cm',
    },
    meal: [
      {
        name: 'Capriciosa',
        description: 'ser, szynka, salami, pieczarki',
        prices: { c1: '20zl', c2: '30zl', c3: '40zl' },
      },
      {
        name: 'Capriciosa',
        description: 'ser, szynka, salami, pieczarki',
        prices: { c1: '20zl', c2: '30zl', c3: '40zl' },
      },
      {
        name: 'Capriciosa',
        description: 'ser, szynka, salami, pieczarki',
        prices: { c1: '20zl', c2: '30zl', c3: '40zl' },
      },
    ],
  },
  {
    categoryName: 'Burgerki',
    sizes: {
      w1: '',
      w2: '',
      w3: '',
    },
    meal: [
      {
        name: 'Cheeseburger',
        description: 'serowy burger',
        prices: { c1: ' ', c2: ' ', c3: '30zl' },
      },
      {
        name: 'Hamburger',
        description: 'szynka burger',
        prices: { c1: ' ', c2: ' ', c3: '40zl' },
      },
      {
        name: 'Vegeburger',
        description: 'sałata burger',
        prices: { c1: ' ', c2: ' ', c3: '50zl' },
      },
    ],
  },
  {
    categoryName: '',
    sizes: {
      w1: '',
      w2: '',
      w3: '',
    },
    meal: [
      {
        name: '',
        description: '',
        prices: { c1: '', c2: '', c3: '' },
      },
      {
        name: '',
        description: '',
        prices: { c1: '', c2: '', c3: '' },
      },
      {
        name: '',
        description: '',
        prices: { c1: '', c2: '', c3: '' },
      },
    ],
  },
];
