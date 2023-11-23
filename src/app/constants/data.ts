import React from "react";
import { IconType } from "react-icons";
import { AiFillCheckCircle } from "react-icons/ai";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaTruck, FaHeadphones } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
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
    {
      id: "contact",
      name: "Contact",
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
    image: "/product/product5.png",
    name: "Lorem Ipsum",
    price: "$100",
  },
  {
    image: "/product/product6.png",
    name: "Lorem Ipsum",
    price: "$100",
  },
  {
    image: "/product/product7.png",
    name: "Lorem Ipsum",
    price: "$100",
  },
  {
    image: "/product/product8.png",
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
    title: "Timeless Style, Essential Wardrobe",
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

interface Teamdata {
  image: string;
  name: string;
  title: string;
  icon1: IconType;
  icon2: IconType;
  facebook: string;
  instagram: string;
}
export const teams: Teamdata[] = [
  {
    image: "/about/me.png",
    name: "Kent Joseph Gesoro",
    title: "Chief Executive Officer (CEO)",
    icon1: CiFacebook,
    icon2: CiInstagram,
    facebook: "#",
    instagram: "#",
  },
  {
    image: "/about/lando.png",
    name: "Rolando Parilla Jr.",
    title: "Product Designer",
    icon1: CiFacebook,
    icon2: CiInstagram,
    facebook: "#",
    instagram: "#",
  },
  {
    image: "/about/jm.png",
    name: "John Mar Alonzo",
    title: "Managing Director",
    icon1: CiFacebook,
    icon2: CiInstagram,
    facebook: "#",
    instagram: "#",
  },

  {
    image: "/about/rrose.png",
    name: "Mary Rose Enricoso",
    title: "Operations Manager",
    icon1: CiFacebook,
    icon2: CiInstagram,
    facebook: "#",
    instagram: "#",
  },
  {
    image: "/about/pearly1.png",
    name: "Pearly Rellon",
    title: "Data Analyst",
    icon1: CiFacebook,
    icon2: CiInstagram,
    facebook: "#",
    instagram: "#",
  },
  {
    image: "/about/alyza-1.png",
    name: "Alyza Antopina",
    title: "Finance Manager",
    icon1: CiFacebook,
    icon2: CiInstagram,
    facebook: "#",
    instagram: "#",
  },
];

interface Badgesdata {
  icon: IconType;
  title: string;
  description: string;
}

export const Badges: Badgesdata[] = [
  {
    icon: FaTruck,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $500",
  },
  {
    icon: FaHeadphones,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: IoShieldCheckmark,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];
