import { ProductInterfaceProps } from './../interfaces/Product';

import coffee1 from '../assets/CardCoffee/coffee-1.png';
import coffee2 from '../assets/CardCoffee/coffee-2.png';
import coffee3 from '../assets/CardCoffee/coffee-3.png';
import coffee4 from '../assets/CardCoffee/coffee-4.png';
import coffee5 from '../assets/CardCoffee/coffee-5.png';
import coffee6 from '../assets/CardCoffee/coffee-6.png';
import coffee7 from '../assets/CardCoffee/coffee-7.png';
import coffee8 from '../assets/CardCoffee/coffee-8.png';
import coffee9 from '../assets/CardCoffee/coffee-9.png';
import coffee10 from '../assets/CardCoffee/coffee-10.png';
import coffee11 from '../assets/CardCoffee/coffee-11.png';
import coffee12 from '../assets/CardCoffee/coffee-12.png';
import coffee13 from '../assets/CardCoffee/coffee-13.png';
import coffee14 from '../assets/CardCoffee/coffee-14.png';

export const productList: ProductInterfaceProps[] = [
  {
    id: 'produto-1',
    name: 'Expresso Tradicional',
    label: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    amount: 0,
    tags: [{ label: 'Tradicional' }],
    image: coffee1,
  },
  {
    id: 'produto-2',
    name: 'Expresso Americano',
    label: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    amount: 0,
    tags: [{ label: 'Tradicional' }],
    image: coffee2,
  },
  {
    id: 'produto-3',
    name: 'Expresso Cremoso',
    label: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    amount: 0,
    tags: [{ label: 'Tradicional' }],
    image: coffee3,
  },
  {
    id: 'produto-4',
    name: 'Expresso Gelado',
    label: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    amount: 0,
    tags: [{ label: 'Tradicional' }, { label: 'gelado' }],
    image: coffee4,
  },
  {
    id: 'produto-5',
    name: 'Café com Leite',
    label: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    amount: 0,
    tags: [{ label: 'Tradicional' }, { label: 'com leite' }],
    image: coffee5,
  },
  {
    id: 'produto-6',
    name: 'Latte',
    label: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    amount: 0,
    tags: [{ label: 'Tradicional' }, { label: 'com leite' }],
    image: coffee6,
  },
  {
    id: 'produto-7',
    name: 'Capuccino',
    label: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    amount: 0,
    tags: [{ label: 'Tradicional' }, { label: 'com leite' }],
    image: coffee7,
  },
  {
    id: 'produto-8',
    name: 'Macchiato',
    label: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    amount: 0,
    tags: [{ label: 'Tradicional' }, { label: 'com leite' }],
    image: coffee8,
  },
  {
    id: 'produto-9',
    name: 'Mocaccino',
    label: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    amount: 0,
    tags: [{ label: 'Tradicional' }, { label: 'com leite' }],
    image: coffee9,
  },
  {
    id: 'produto-10',
    name: 'Chocolate Quente',
    label: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    amount: 0,
    tags: [{ label: 'especial' }, { label: 'com leite' }],
    image: coffee10,
  },
  {
    id: 'produto-11',
    name: 'Cubano',
    label: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    amount: 0,
    tags: [{ label: 'especial' }, { label: 'alcoólico' }, { label: 'gelado' }],
    image: coffee11,
  },
  {
    id: 'produto-12',
    name: 'Havaiano',
    label: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    amount: 0,
    tags: [{ label: 'especial' }],
    image: coffee12,
  },
  {
    id: 'produto-13',
    name: 'Árabe',
    label: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    amount: 0,
    tags: [{ label: 'especial' }],
    image: coffee13,
  },
  {
    id: 'produto-14',
    name: 'Irlandês',
    label: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    amount: 0,
    tags: [{ label: 'especial' }, { label: 'alcoólico' }],
    image: coffee14,
  },
];
