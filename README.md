# Desafío 2 Estado de los componentes y eventos

---

## Validar Formulario

---

## Descripción

En este desafío pondremos en práctica los conceptos aprendidos para controlar los estados de nuestros componentes en React.
Para ello, un cliente nos solicita una aplicación en React que permita al usuario validar un formulario de registro utilizando los eventos onChange y onSubmit

---

### Requerimientos

1. Crea al menos 4 componentes, Registro, SocialButton, Formulario y Alert, donde el componente Registro importa todos los demás componentes.

2. En el componente Registro, se debe importar el componente SocialButton, para mostrar los botones de redes sociales.
   a. El icono se debe enviar mediante props desde el componente Registro

3. El componente Formulario debe tener un formulario con un campo para el nombre, email, contraseña y otro para la confirmación de la contraseña del usuario.
   a. Además, deberás almacenar los estados de los inputs a través de useState y relacionarlos con el evento onChange

4. Dentro del mismo componente Formulario se debe incluir un botón para procesar el formulario.
   a. El botón debe validar mediante el evento onSubmit que el email tenga su formato correcto, y que las contraseñas sean iguales.

5. Luego de presionar el botón para registrarse, el componente Alert debe mostrar un mensaje indicando al usuario si el registro fue exitoso o si los campos se encuentran vacíos.
   a. Utiliza los props para mostrar un mensaje de error o de éxito.
   b. Opcionalmente, puedes utilizar otro props para cambiar el color de la alerta (success o danger) según corresponda.
   c. Como recordatorio, debes tener un state en el componente App que almacene el mensaje de error o de éxito, y pasar mediante props al componente Alert y Registro.

6. Replicar el estilo de la aplicación usando Bootstrap, ya sea mediante react-bootstrap o su CDN.
   a. El color de fondo es opcional.
   b. Para los íconos revisa el cuadro de consideraciones y recomendaciones

7. Crear un repositorio en GitHub para alojar el proyecto y trabajar de manera colaborativa.
   a. Cada integrante del equipo deberá realizar al menos dos commits con distintas funcionalidades.

⌨️Escrito por [Diego Castillo](https://github.com/DICAVI86) y [Macarena Osses](https://github.com/Makaosva)
