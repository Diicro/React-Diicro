export let products = [
  {
    id: "Collar-Cascabel",
    title: "Collar Cascabel",
    price: 15000,
    description:
      "En FachaPets, nos preocupamos por el bienestar y estilo de nuestros amigos felinos. Nuestro collar de cascabel es la elección perfecta para mantener a tu gato seguro y agregar un toque de encanto a su apariencia.",
    category: "gatos",
    stock: 7,
    img: "https://res.cloudinary.com/drye76tii/image/upload/v1708972688/React-p/alex-nicolopoulos-hxn2HjZHyQE-unsplash_kdowte.jpg",
  },
  {
    id: "Disfraz-de-Fantasma",
    title: "Disfraz de Fantasma",
    price: 18000,
    description:
      "En FachaPets, nos encanta consentir a nuestros amigos peludos. ¿Por qué no hacer que tu perro sea el alma de la fiesta con nuestro disfraz de fantasma espeluznante? Este atuendo no solo mantendrá a tu perro abrigado, sino que también le dará un toque misterioso y divertido.",
    category: "perros",
    stock: 6,
    img: "https://res.cloudinary.com/drye76tii/image/upload/v1708972951/React-p/karsten-winegeart-IeT84oak7HQ-unsplash_tjb6b7.jpg",
  },
  {
    id: "Pañoleta-Amarilla",
    title: "Pañoleta Amarilla",
    price: 14000,
    description:
      "En FachaPets, sabemos que los gatos son criaturas llenas de misterio y encanto. Nuestra pañoleta con estampado de pez es el accesorio perfecto para que tu felino se sienta como un auténtico aventurero marino.",
    category: "gatos",
    stock: 8,
    img: "https://res.cloudinary.com/drye76tii/image/upload/v1708972642/React-p/jae-park-7GX5aICb5i4-unsplash_vd7l3k.jpg",
  },
  {
    id: "Gafas-con-Estilo",
    title: "Gafas con Estilo",
    price: 22000,
    description:
      "En FachaPets, creemos que los gatos también merecen lucir a la moda. Nuestras gafas con lentes redondos no solo protegerán los ojos de tu felino, sino que también le darán un toque de estilo único.",
    category: "gatos",
    stock: 6,
    img: "https://res.cloudinary.com/drye76tii/image/upload/v1708972652/React-p/raoul-droog-yMSecCHsIBc-unsplash_pwk1rn.jpg",
  },
  {
    id: "Pijama-de-Bananas",
    title: "Pijama de Bananas",
    price: 20000,
    description:
      "En FachaPets, sabemos que tu peludo es parte de la familia. Por eso, nos esforzamos por ofrecerte productos que combinen comodidad, calidad y diversión. Nuestro pijama para perros con estampado de bananas es perfecto para mantener a tu compañero de cuatro patas abrigado y con estilo.",
    category: "perros",
    stock: 8,
    img: "https://res.cloudinary.com/drye76tii/image/upload/v1708972963/React-p/karsten-winegeart-Qb7D1xw28Co-unsplash_luy2d1.jpg",
  },
  {
    id: "Camisa-2x1-Roja",
    title: "Camisa 2x1 Roja",
    price: 21000,
    description:
      "En FachaPets, celebramos el amor y la conexión entre los peludos. Nuestra camisa 2x1 para perros en pareja es la manera perfecta de mostrar que tus compañeros caninos son más que mascotas, ¡son familia!",
    category: "perros",
    stock: 4,
    img: "https://res.cloudinary.com/drye76tii/image/upload/v1708972943/React-p/karsten-winegeart-YzxeHEzBZ6I-unsplash_ta1ysn.jpg",
  },
];
export const getItem = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);
      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(
            `No hemos encontrado el articulo,estamos trabajando para tener ${id}`
          );
        }
      }, 2000);
    } else {
      alert("No hay productos existentes");
    }
  });
};
