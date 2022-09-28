export enum CoffeeType {
  TRADICIONAL = 'TRADICIONAL',
  ESPECIAL = 'ESPECIAL',
  COM_LEITE = 'COM LEITE',
  ALCOOLICO = 'ALCOÓLICO',
  GELADO = 'GELADO',
}

export interface Coffee {
  id: number
  image: string
  name: string
  description: string
  types: CoffeeType[]
  price: number
}

export const coffeeList: Coffee[] = [
  {
    id: 1,
    image: 'expresso',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    types: [CoffeeType.TRADICIONAL],
    price: 9.9,
  },
  {
    id: 2,
    image: 'americano',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    types: [CoffeeType.TRADICIONAL],
    price: 9.9,
  },
  {
    id: 3,
    image: 'expressoCremoso',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    types: [CoffeeType.TRADICIONAL],
    price: 9.9,
  },
  {
    id: 4,
    image: 'cafeGelado',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    types: [CoffeeType.TRADICIONAL, CoffeeType.GELADO],
    price: 9.9,
  },
  {
    id: 5,
    image: 'cafeComLeite',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    types: [CoffeeType.TRADICIONAL, CoffeeType.COM_LEITE],
    price: 9.9,
  },
  {
    id: 6,
    image: 'latte',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    types: [CoffeeType.TRADICIONAL, CoffeeType.COM_LEITE],
    price: 9.9,
  },
  {
    id: 7,
    image: 'capuccino',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    types: [CoffeeType.TRADICIONAL, CoffeeType.COM_LEITE],
    price: 9.9,
  },
  {
    id: 8,
    image: 'macchiato',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    types: [CoffeeType.TRADICIONAL, CoffeeType.COM_LEITE],
    price: 9.9,
  },
  {
    id: 9,
    image: 'mochaccino',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    types: [CoffeeType.TRADICIONAL, CoffeeType.COM_LEITE],
    price: 9.9,
  },
  {
    id: 10,
    image: 'chocolateQuente',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    types: [CoffeeType.ESPECIAL, CoffeeType.COM_LEITE],
    price: 9.9,
  },
  {
    id: 11,
    image: 'cubano',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    types: [CoffeeType.ESPECIAL, CoffeeType.ALCOOLICO, CoffeeType.GELADO],
    price: 9.9,
  },
  {
    id: 12,
    image: 'havaiano',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    types: [CoffeeType.ESPECIAL],
    price: 9.9,
  },
  {
    id: 13,
    image: 'arabe',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    types: [CoffeeType.ESPECIAL],
    price: 9.9,
  },
  {
    id: 14,
    image: 'irlandes',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    types: [CoffeeType.ESPECIAL, CoffeeType.ALCOOLICO],
    price: 9.9,
  },
]
