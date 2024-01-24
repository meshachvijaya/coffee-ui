type Product = {
  id: number;
  title: string;
  desc?: string;
  img: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Latte",
    desc: "Get a more game with our favourite latte",
    img: "/1.png",
    price: 22000,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4000,
      },
      {
        title: "Large",
        additionalPrice: 6000,
      },
    ],
  },
  {
    id: 2,
    title: "Espresso",
    desc: "Get a more game with our favourite latte",
    img: "/2.png",
    price: 18000,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4000,
      },
      {
        title: "Large",
        additionalPrice: 6000,
      },
    ],
  },
  {
    id: 3,
    title: "Americano",
    desc: "Get a more game with our favourite latte",
    img: "/3.png",
    price: 15000,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4000,
      },
      {
        title: "Large",
        additionalPrice: 6000,
      },
    ],
  },
];
