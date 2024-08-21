# E-commerce React App

Este proyecto es una aplicación de e-commerce desarrollada con React, que permite a los usuarios navegar por productos, ver detalles, agregar productos al carrito, y realizar el proceso de checkout. El proyecto utiliza `react-router-dom` para manejar la navegación y `context` para la gestión del estado del carrito.

## Tecnologías Utilizadas

- **React**: Biblioteca principal para la construcción de la interfaz de usuario.
- **React Router DOM**: Para la gestión de las rutas y la navegación dentro de la aplicación.
- **Context API**: Para manejar el estado global de la aplicación, en este caso, el carrito de compras.
- **CSS**: Para el estilo y diseño de la aplicación.

## Estructura del Proyecto

- **`/components`**: Contiene los componentes principales de la aplicación:
  - `NavBar`: Barra de navegación que permite a los usuarios acceder a diferentes secciones de la aplicación.
  - `ItemListContainer`: Contenedor que muestra una lista de productos, filtrados por categoría si es necesario.
  - `ItemDetailContainer`: Muestra los detalles de un producto específico.
  - `Nosotros`: Página estática que brinda información sobre la empresa.
  - `Contacto`: Página para que los usuarios se pongan en contacto con la empresa.
  - `Carrito`: Muestra los productos que el usuario ha agregado al carrito.
  - `Checkout`: Procesa la compra de los productos en el carrito.

- **`/context/CartContext`**: Proveedor de contexto que maneja el estado del carrito de compras.

- **`/main.css`**: Archivo de estilo principal para la aplicación.

