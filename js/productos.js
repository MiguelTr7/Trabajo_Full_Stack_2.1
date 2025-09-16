// Base de datos de productos
const productos = [
  {
    id: "F001",
    nombre: "Martillo de Uña 16oz",
    precio: 6990,
    imagen: "images/martillo.png",
    descripcion: "Martillo de uña de 16oz con mango ergonómico antideslizante. Ideal para trabajos de carpintería y construcción general.",
    especificaciones: [
      { etiqueta: "Peso", valor: "16 oz (450g)" },
      { etiqueta: "Material", valor: "Acero al carbono" },
      { etiqueta: "Mango", valor: "Fibra de vidrio antideslizante" },
      { etiqueta: "Tipo", valor: "Uña curva" },
      { etiqueta: "Uso", valor: "Carpintería y construcción" },
      { etiqueta: "SKU", valor: "F001-MU16" }
    ]
  },
  {
    id: "F002",
    nombre: "Taladro Percutor 13mm 750W",
    precio: 44990,
    imagen: "images/taladro-percutor.png",
    descripcion: "Taladro percutor ideal para hogar y obra: 2 modos (rotación/percusión), mandril 13mm, velocidad variable y reversa para atornillar/desatornillar.",
    especificaciones: [
      { etiqueta: "Potencia", valor: "750 W" },
      { etiqueta: "Velocidad", valor: "0–3000 rpm" },
      { etiqueta: "Golpes por minuto", valor: "0–48.000 gpm" },
      { etiqueta: "Matriz", valor: "Hormigón, madera y metal" },
      { etiqueta: "Incluye", valor: "Tope de profundidad y empuñadura lateral" },
      { etiqueta: "SKU", valor: "F002-TP13" }
    ]
  },
  {
    id: "F003",
    nombre: "Atornillador Inalámbrico 12V",
    precio: 29990,
    imagen: "images/atornillador-inalambrico.png",
    descripcion: "Atornillador inalámbrico compacto de 12V con batería de litio. Perfecto para trabajos de montaje y mantenimiento doméstico.",
    especificaciones: [
      { etiqueta: "Voltaje", valor: "12V DC" },
      { etiqueta: "Batería", valor: "Litio-ion 1.5 Ah" },
      { etiqueta: "Torque máximo", valor: "25 Nm" },
      { etiqueta: "Velocidad", valor: "0-250 rpm" },
      { etiqueta: "Mandril", valor: "10mm sin llave" },
      { etiqueta: "SKU", valor: "F003-AI12" }
    ]
  },
  {
    id: "F004",
    nombre: "Set Llaves Mixtas (12 pzs)",
    precio: 18990,
    imagen: "images/llaves-mixtas-set.png",
    descripcion: "Set de 12 llaves mixtas de acero al cromo vanadio. Medidas métricas desde 8mm hasta 19mm. Incluye organizador plástico.",
    especificaciones: [
      { etiqueta: "Material", valor: "Acero al cromo vanadio" },
      { etiqueta: "Medidas", valor: "8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19mm" },
      { etiqueta: "Acabado", valor: "Cromado espejo" },
      { etiqueta: "Incluye", valor: "Organizador plástico" },
      { etiqueta: "Norma", valor: "DIN 3113" },
      { etiqueta: "SKU", valor: "F004-LM12" }
    ]
  },
  {
    id: "F005",
    nombre: "Cemento 25 kg",
    precio: 5490,
    imagen: "images/cemento-saco-25kg.png",
    descripcion: "Cemento Portland grado corriente de 25kg. Ideal para obras de albañilería, hormigones y morteros de uso general.",
    especificaciones: [
      { etiqueta: "Peso", valor: "25 kg" },
      { etiqueta: "Tipo", valor: "Portland Grado Corriente" },
      { etiqueta: "Resistencia", valor: "25 MPa a 28 días" },
      { etiqueta: "Uso", valor: "Albañilería, hormigones, morteros" },
      { etiqueta: "Norma", valor: "NCh148" },
      { etiqueta: "SKU", valor: "F005-C25" }
    ]
  },
  {
    id: "F006",
    nombre: "Escalera Aluminio 6 peldaños",
    precio: 59990,
    imagen: "images/escalera-aluminio.png",
    descripcion: "Escalera de aluminio tipo tijera con 6 peldaños antideslizantes. Estructura liviana pero resistente, ideal para trabajos en altura.",
    especificaciones: [
      { etiqueta: "Material", valor: "Aluminio anodizado" },
      { etiqueta: "Peldaños", valor: "6 unidades antideslizantes" },
      { etiqueta: "Altura máxima", valor: "1.8 metros" },
      { etiqueta: "Peso máximo", valor: "120 kg" },
      { etiqueta: "Peso escalera", valor: "8.5 kg" },
      { etiqueta: "SKU", valor: "F006-EA6" }
    ]
  }
];

// Función para obtener un producto por ID
function obtenerProductoPorId(id) {
  return productos.find(producto => producto.id === id);
}

// Función para formatear precio (agregar puntos de miles)
function formatearPrecio(precio) {
  return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}