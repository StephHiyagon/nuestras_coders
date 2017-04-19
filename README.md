# Nuestras coders
-------------------------------
Este trabajo se basa en generar todos los elementos desde el js; partiendo desde seleccionar la etiqueta body para anclar a esta los nodos creados.
Se hace uso del css para darle estilos: el tipo de letra, color, tamaño de las imágenes y ese overlay que oscurece la imagen original.

En el archivo .js se encuentra la función que crea cada elemento por medio de createElement, usamos createTextNode para colocar texto (se podría usar innerHTML), se hace uso del
appendChild para agregar nodos a un nodo padre, también veremos setAttribute para agregar "id" o "class". 
Se usa evento DOMContentLoaded para llamar a la función que cargará los nodos desde el js, en este caso es indistinto cargar primero el HTML y luego el js dado 
que todo es creado en js, se hizo sólo en forma de prueba, para este caso sería más conveniente usar solo el evento load (se usa para los proyectos Esquemas y La Cancha).

## Fuentes consultadas:
url(https://developer.mozilla.org/es/docs/Web/Reference/Events/DOMContentLoaded)

## Enlaces:
- La cancha: url (https://github.com/StephHiyagon/la_cancha)
- Esquema: url(https://github.com/StephHiyagon/esquemas)
