// Clase Producto
class Producto {
    constructor(nombre, categoria, precio, stock) {
        if (!nombre || typeof nombre !== "string") throw new Error("El nombre debe ser una cadena válida.");
        if (!categoria || typeof categoria !== "string") throw new Error("La categoría debe ser una cadena válida.");
        if (!precio || typeof precio !== "number" || precio <= 0) throw new Error("El precio debe ser un número mayor que 0.");
        if (!stock || typeof stock !== "number" || stock < 0) throw new Error("El stock debe ser un número no negativo.");

        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
}

// Variables iniciales
let productos = [
    new Producto("Laptop", "Tecnología", 800, 5),
    new Producto("Mouse", "Tecnología", 25, 50),
    new Producto("Silla", "Muebles", 120, 10),
    new Producto("Mesa", "Muebles", 200, 3),
];

// Método para agregar un nuevo producto
function agregarProducto(nombre, categoria, precio, stock) {
    try {
        const nuevoProducto = new Producto(nombre, categoria, precio, stock);
        productos.push(nuevoProducto);
        console.log("Producto agregado exitosamente:", nuevoProducto);
    } catch (error) {
        console.error("Error al agregar producto:", error.message);
    }
}

// Uso de un solo método de array: map
function procesarProductos() {
    return productos.map((producto) => {
        // Crear un nuevo objeto con información procesada
        return {
            nombre: producto.nombre,
            categoria: producto.categoria,
            bajoStock: producto.stock < 10 ? "Sí" : "No", // Identificar bajo stock
        };
    });
}

// Uso del proyecto
console.log("Productos procesados:");
console.log(procesarProductos());
agregarProducto("Teclado", "Tecnología", 30, 15);
console.log("Estado final de productos procesados:");
console.log(procesarProductos());
