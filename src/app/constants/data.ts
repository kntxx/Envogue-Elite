import React from "react";
import { IconType } from "react-icons";
import { AiFillCheckCircle } from "react-icons/ai";

interface Nav {
  logoImage: string;
  link: { id: string; name: string }[];
}

export const navbar: Nav = {
  logoImage: "/Logo.svg",
  link: [
    {
      id: "home",
      name: "Home",
    },
    {
      id: "about",
      name: "About",
    },
    {
      id: "products",
      name: "Products",
    },
  ],
};

interface Brand {
  name: string;
  image: string;
}

export const iconsbrand: Brand[] = [
  {
    name: "lv",
    image: "/iconb/lv.svg",
  },
  {
    name: "dior",
    image: "/iconb/dior.svg",
  },
  {
    name: "gucci",
    image: "/iconb/gucci.svg",
  },
  {
    name: "prada",
    image: "/iconb/prada.svg",
  },
  {
    name: "ysl",
    image: "/iconb/ysl.svg",
  },
];

export const newarr: Brand[] = [
  {
    name: "Luxurios Comfort",
    image: "/newarrival/newarr1.png",
  },
  {
    name: "Classic Elegance",
    image: "/newarrival/newarr2.png",
  },
  {
    name: "Effortless Style",
    image: "/newarrival/newarr3.png",
  },
  {
    name: "Luxurios Comfort",
    image: "/newarrival/newarr1.png",
  },
  {
    name: "Classic Elegance",
    image: "/newarrival/newarr2.png",
  },
  {
    name: "Effortless Style",
    image: "/newarrival/newarr3.png",
  },
];

interface ProductsImage extends Brand {
  price: string;
}

export const allProducts: ProductsImage[] = [
  {
    image: "/product/product1.png",
    name: "Lorem Ipsum",
    price: "$100",
  },
  {
    image: "/product/product2.png",
    name: "Lorem Ipsum",
    price: "$100",
  },
  {
    image: "/product/product3.png",
    name: "Lorem Ipsum",
    price: "$100",
  },
  {
    image: "/product/product4.png",
    name: "Lorem Ipsum",
    price: "$100",
  },
  {
    image: "/product/product1.png",
    name: "Lorem Ipsum",
    price: "$100",
  },
  {
    image: "/product/product2.png",
    name: "Lorem Ipsum",
    price: "$100",
  },
  {
    image: "/product/product3.png",
    name: "Lorem Ipsum",
    price: "$100",
  },
  {
    image: "/product/product4.png",
    name: "Lorem Ipsum",
    price: "$100",
  },
];

interface Blog {
  image: string;
  title: string;
  descri: string;
  link: string;
}

export const blog: Blog[] = [
  {
    image: "/blog/blog1.png",
    title: "The Art of Fashion Display Effortless Elegance",
    descri:
      "Our meticulously crafted mannequins bring life to our curated collection.",
    link: "Read Article",
  },
  {
    image: "/blog/blog2.png",
    title: "Timeless Wardrobe Essentials Elevate Your Style",
    descri:
      "Unveil the timeless appeal of wardrobe  essentials  gracefully hung on hangers. From classic blazers to chic dresses.",
    link: "Read Article",
  },
  {
    image: "/blog/blog3.png",
    title: "Elegance Redefined Timeless Fashion",
    descri:
      "Embrace the allure of sophistication with our curated collection of timeless fashion.",
    link: "Read Article",
  },
];

interface IconDefinition {
  icon: IconType;
  name: string;
}

export const icons: IconDefinition[] = [
  {
    icon: AiFillCheckCircle,
    name: "Exculive",
  },
  {
    icon: AiFillCheckCircle,
    name: "Free Events",
  },
  {
    icon: AiFillCheckCircle,
    name: "Large Discounts",
  },
];


