# Editor de PDF Interactivo con React

<a href="https://lucianolemos-draganddrop.vercel.app/" target="blank"> `URL del proyecto` </a>

![Vista previa](public/preview.png)

<br>

En este proyecto de desarrollo Front-End, el objetivo fue crear una aplicación interactiva y amigable que permitiera a los usuarios diseñar sus propios diseños de PDF mediante un intuitivo sistema de arrastrar y soltar elementos en un lienzo digital. La implementación se realizó utilizando tecnologías modernas y herramientas especializadas. A continuación, se detallan los aspectos más destacados del proyecto:

## Arquitectura y Estructura del Proyecto

La arquitectura del proyecto se diseñó para promover la reutilización y escalabilidad del código. Se organizó la lógica en _custom hooks_ y los componentes se dividieron en piezas autónomas, lo que facilitó el mantenimiento y futuras expansiones. La estructura de datos se mantuvo en el archivo fuente `app.jsx`, emulando una API que devolvería un JSON con los elementos y sus propiedades, proporcionando así un proyecto altamente configurable.

## Tecnologías y Herramientas Utilizadas

- **React con Vite**: Se utilizó el framework React como base para construir la interfaz de usuario, y Vite como el bundler, brindando un entorno de desarrollo rápido y eficiente.

- **TailwindCSS**: Para el diseño y posicionamiento de los elementos, se aprovechó la flexibilidad y eficiencia de TailwindCSS en la escritura del código CSS, acelerando el proceso de desarrollo.

- **react-beautiful-dnd**: En lugar de crear desde cero la funcionalidad de arrastrar y soltar elementos, se utilizó la biblioteca `react-beautiful-dnd`, lo que permitió una implementación sencilla y efectiva del intercambio de elementos en el lienzo.

- **uuidv4**: Se utilizó la librería `uuidv4` para garantizar la asignación de identificadores únicos a los elementos creados, evitando conflictos en la aplicación.

## Mejoras en la Experiencia del Usuario

- **SweetAlert 2**: Para mejorar la experiencia del usuario, se implementó la biblioteca `SweetAlert 2`. Esta herramienta muestra alertas visuales y atractivas cuando los usuarios intentan colocar elementos no válidos en áreas incorrectas del lienzo. Por ejemplo, si intentan arrastrar un elemento de texto en la zona del encabezado, se mostrará una alerta que les informará que solo las imágenes son válidas en esa área.

## Personalización de Iconos

- **Custom Hook `useGetIcon.js`**: Se creó un _custom hook_ llamado `useGetIcon.js` que permitió agregar fácilmente nuevos elementos al lienzo simplemente proporcionando el nombre del ícono Font Awesome deseado. Esta solución hizo que la aplicación sea más modular y adaptable para futuras expansiones.

## Mantenimiento y Calidad del Código

- **Eslint y Prettier**: Se utilizó `Eslint` como linter y `Prettier` para el formateo automático del código, asegurando un código limpio y consistente. Se configuró `eslint-config-prettier` para evitar conflictos y priorizar las decisiones de Prettier.

## Navegación y Accesibilidad

- **React Router**: Para mejorar la navegación y la accesibilidad de la aplicación, se implementó `React Router` junto con el componente `Link`, permitiendo a los usuarios acceder fácilmente a páginas específicas de la aplicación.

## Control de Versiones y Colaboración

- **Git**: Se utilizó Git como sistema de control de versiones para mantener un seguimiento claro de los cambios en el código y facilitar la colaboración con otros desarrolladores.

## Inspiración a través de Figma

- **Diseño en Figma**: Para obtener una guía clara y visual sobre el aspecto de la aplicación, se basó en el diseño proporcionado en Figma, lo que garantizó la coherencia en los estilos y la disposición de los elementos.

En resumen, este proyecto de Front-End se desarrolló con una arquitectura bien pensada y utilizando tecnologías y herramientas modernas que mejoraron la experiencia del usuario y facilitaron la expansión y el mantenimiento del código. La combinación de bibliotecas como `react-beautiful-dnd`, `uuidv4`, `SweetAlert 2` y `Font Awesome` permitió crear una aplicación altamente interactiva y personalizable. La utilización de `Eslint`, `Prettier` y `Git` garantizó la calidad del código y facilitó la colaboración con otros desarrolladores. Con todas estas decisiones y herramientas, el resultado fue una aplicación funcional que cumple con precisión el diseño proporcionado.

## 🔗 Links

<a href="https://lucianolemos.vercel.app/" target="blank"><img align="center" src="https://github.com/Lemos-Luciano/Portafolio/blob/main/Images/icons/personalweb.png" alt="Para más información contactar al https://www.linkedin.com/in/luciano-lemos" height="40" width="40" /> `URL Página web personal` </a>

<br>

<a href="https://lucianolemos.vercel.app/" target="blank"><img align="center" src="https://github.com/Lemos-Luciano/Portafolio/blob/main/Images/icons/128x128.png" alt="Para más información contactar al https://www.linkedin.com/in/luciano-lemos" height="40" width="40" /> `Instrucciones_Prueba_Tecnica` </a>

<br>

## 🤳🏽 Contacto

<a href="https://api.whatsapp.com/send/?phone=34604124841&text=Hola+Luciano%2C+he+visto+tu+curriculum+vitae+y+quer%C3%ADa+ponerme+en+contacto+contigo+por+una+oferta+de+trabajo.&type=phone_number&app_absent=0" target="blank"><img align="center" src="https://github.com/Lemos-Luciano/Portafolio/blob/main/Images/icons/1Whatsapp.png" alt="Para más información contactar al https://www.linkedin.com/in/luciano-lemos" height="40" width="40" /> `+34 604 12 48 41`</a>

<a href="mailto:llemos@uoc.edu?subject=Oferta%20de%20trabajo&body=Hola%20Luciano,%20he%20visto%20tus%20trabajos%20y%20quer%C3%ADa%20ponerme%20en%20contacto%20contigo%20por%20una%20oferta%20de%20trabajo.%0BPuedes%20ponerte%20en%20contacto%20con%20nosotros%20a%20trav%C3%A9s%20de%3A%0B%09Mail:%20[%20Completar%20]%0B%09Tel%C3%A9fono:%20[%20Completar%20]%0B%09Horarios:%20[%20Completar%20]%0B%0BMuchas%20gracias%20por%20tu%20tiempo%0B%0BSaludos" target="blank"><img align="center" src="https://github.com/Lemos-Luciano/Portafolio/blob/main/Images/icons/1Mail.png" alt="Para más información contactar al https://www.linkedin.com/in/luciano-lemos" height="40" width="40" /> `llemos@uoc.edu` </a>

<a href="https://www.linkedin.com/in/luciano-lemos" target="blank"><img align="center" src="https://github.com/Lemos-Luciano/Portafolio/blob/main/Images/icons/2linkedin.png" alt="Para más información contactar al https://www.linkedin.com/in/luciano-lemos" height="40" width="40" /> `https://www.linkedin.com/in/luciano-lemos` </a>

<a href="https://github.com/Lemos-Luciano" target="blank"><img align="center" src="https://github.com/Lemos-Luciano/Portafolio/blob/main/Images/icons/1Github.png" alt="Para más información contactar al https://www.linkedin.com/in/luciano-lemos" height="40" width="40" /> `https://github.com/Lemos-Luciano` </a>
