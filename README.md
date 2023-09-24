## Documentación de la Aplicación de Administración de Tareas hecha como proyecto final por el grupo 5.

  
  
  
  
  

## **Introducción**

  
  
  
  
  

**Descripción:**

  
  
  
  

Nuestra aplicacion es una potente herramienta de administración de tareas diseñada para ayudarte a mantener un control total sobre tus responsabilidades diarias, proyectos y metas personales. Con nuestra aplicacion, puedes gestionar y organizar tus tareas de manera eficiente, priorizarlas y hacer un seguimiento de tu progreso en un solo lugar.

  

Ya sea que trabajes en equipo o te organices por tu cuenta, nuestra aplicacion te brinda las herramientas necesarias para optimizar tu productividad y mantenerte enfocado en lo que realmente importa. Su interfaz intuitiva y amigable facilita la creación de tareas, lo que te permite personalizar tu flujo de trabajo según tus necesidades.

  

**Características Destacadas**

**Gestión de Tareas**: Crea, edita y elimina tareas de manera sencilla.

  

**Seguimiento de Progreso**: Haz un seguimiento de tus tareas completadas y pendientes para medir tu productividad.

  

Nuestra aplicacion está diseñada para adaptarse a tus necesidades, ya sea que lo utilices para tus proyectos profesionales, académicos o personales. ¡Simplifica tu vida y mejora tu productividad!

  
  
  
  
  
  
  

## Tecnologías Utilizadas

  
  
  
  
  

**Next.js**: Un framework de React que se utiliza para desarrollar la interfaz de usuario (UI) de la aplicación web. Next.js ofrece capacidades avanzadas de renderizado del lado del servidor (SSR) y generación de sitios estáticos, lo que mejora la velocidad y la eficiencia de la aplicación. [Next.js](https://nextjs.org/)

  
  
  

**Django**: Un marco de desarrollo web de alto nivel escrito en Python que se utiliza como el backend de la aplicación. Django proporciona una estructura sólida para crear aplicaciones web seguras y escalables. [Django](https://www.djangoproject.com/)

  
  
  

**Django Rest Framework (DRF)**: Una potente biblioteca que se utiliza para crear API REST en Django. DRF simplifica la creación de puntos finales de API y la gestión de solicitudes y respuestas. [Django Rest Framework (DRF)](https://www.django-rest-framework.org/)

  
  
  

**RESTful API**: La arquitectura de API utilizada en el proyecto, que sigue los principios de Representational State Transfer (REST) para la comunicación entre el frontend y el backend.

  
  
  

**Tokens de Autenticación**: La autenticación se basa en tokens de autenticación de un solo uso proporcionados por **Django Rest Framework** y la libreria **Django Rest Authtoken**. Esto garantiza la seguridad de las comunicaciones entre el cliente y el servidor. [Django Rest Auth Token](https://pypi.org/project/django-rest-authtoken/)

  
  
  

**SQLite**: La base de datos utilizada para almacenar y gestionar los datos de las tareas y los usuarios. [SQLite](https://www.sqlite.org/)

  
  
  

Estas tecnologías se han combinado de manera efectiva para crear una aplicación de administración de tareas robusta y eficiente que satisface las necesidades de los usuarios.

  
  
  
  
  
  
  

**Repositorio**: https://github.com/lkainn/ProyectoGrupo5V2

  
  
  
  
  
  
  

## Autenticación

  
  
  

**Funcionamiento**

A continuación, se describe el funcionamiento del sistema de autenticación:

  
  
  

**Registro de Usuarios**: Cuando un nuevo usuario se registra en la aplicación, se crea una cuenta en el backend utilizando Django. El usuario proporciona un nombre de usuario y una contraseña durante el registro.

  
  
  

**Inicio de Sesión**: Para iniciar sesión, el usuario debe proporcionar su nombre de usuario y contraseña. Cuando se envían estas credenciales al servidor, Django las valida. Si las credenciales son válidas, se genera un token de autenticación único para ese usuario.

  
  
  

**Token de Autenticación**: El token de autenticación es una cadena alfanumérica única que se asocia con el usuario autenticado. Este token actúa como una credencial de acceso y se utiliza para autenticar solicitudes posteriores al servidor. Los tokens de autenticación tienen una vida útil de un uso para mejorar la seguridad.

  
  
  

**Almacenamiento del Token**: El token de autenticación se almacena en el lado del cliente. Esto permite que el cliente se identifique en las futuras solicitudes al servidor. Cuando el usuario cierra sesion el token se elimina tanto localmente como en la base de datos.

  
  
  

**Solicitud Autenticada**: Cuando el cliente realiza una solicitud a una API protegida, se incluye el token de autenticación en el encabezado de la solicitud. El servidor verifica la autenticidad del token y, si es válido, permite que la solicitud se procese. Si el token ha caducado o es inválido, el servidor rechaza la solicitud y el cliente debe volver a autenticarse.

  
  
  

**Protección de Recursos**: El sistema de autenticación garantiza que solo los usuarios autenticados y autorizados tengan acceso a los recursos protegidos, como la creación y edición de tareas.

  
  
  
  

## Ventajas del Sistema de Autenticación

  
  
  

El uso de tokens de un solo uso con **Django Rest Authtoken** proporciona varias ventajas:

  
  
  

**Seguridad**: Los tokens de un solo uso mejoran la seguridad al evitar el almacenamiento prolongado de contraseñas en el lado del cliente y al proteger las comunicaciones entre el cliente y el servidor.

  
  
  

**Escalabilidad**: El sistema es escalable y puede manejar un gran número de usuarios y solicitudes simultáneas.

  
  
  

**Personalización**: **Django Rest Authtoken** permite personalizar la duración de vida de los tokens y las políticas de autenticación según las necesidades del proyecto.

  
  
  

Este sistema de autenticación robusto y seguro es fundamental para garantizar que la aplicación de administración de tareas proteja los datos y la privacidad de los usuarios.

  
  
  
  
  
  
  

## Uso de la Aplicación

  
  
  

**Creación de Tareas**

Los usuarios pueden crear nuevas tareas de manera sencilla. Para hacerlo, siguen estos pasos:

  
  
  

**Iniciar Sesión**: Los usuarios deben iniciar sesión en la aplicación utilizando sus credenciales.

  
  
  

**Acceder al Formulario de Creación**: Una vez autenticados, los usuarios pueden acceder al formulario de creación de tareas. Este formulario esta ubicado en la página principal de la aplicación y se accede a el haciendo click en el boton de agregar tareas.

  
  
  

**Completar el Formulario**: En el formulario de creación, los usuarios pueden ingresar los detalles de la tarea, como el título y la descripción.

  
  
  

**Enviar la Tarea**: Después de completar el formulario, los usuarios hacen clic en el botón "Agregar" para enviar la tarea. La aplicación valida los datos ingresados y crea la tarea en la base de datos asociada al usuario autenticado.

  
  
  

**Vista**: Una vez creada, la nueva tarea se agrega a la lista de tareas visibles.

  
  
  
  
  

## Edición y Eliminación de Tareas

  
  
  

Los usuarios pueden editar y eliminar tareas existentes de la siguiente manera:

  
  
  

**Edición de Tareas**

**Lista de Tareas**: Los usuarios deben acceder a la lista de tareas, donde pueden ver todas las tareas disponibles.

  
  
  

**Selección de Tarea**: Para editar una tarea, el usuario hace clic en la tarea específica que desea modificar. Esto abre un formulario de edición prellenado con los detalles de la tarea seleccionada.

  
  
  

**Modificación de Detalles**: El usuario modifica los detalles de la tarea según sea necesario, como el título o la descripción.

  
  
  

**Guardar Cambios**: Una vez realizados los cambios, el usuario hace clic en un botón "Guardar" para guardar las modificaciones. La tarea se actualiza en la base de datos con los nuevos detalles.

  
  
  
  
  
  

## Eliminación de Tareas

  
  
  
  

**Lista de Tareas**: Similar a la edición, los usuarios acceden a la lista de tareas.

  
  
  

**Selección de Tarea**: Para eliminar una tarea, el usuario hace clic en la tarea específica que desea eliminar.

  
  
  

**Confirmación**: La aplicación muestra una confirmación para asegurarse de que el usuario realmente desea eliminar la tarea.

  
  
  

**Eliminación**: Si el usuario confirma la eliminación, la tarea se elimina de la base de datos y se quita de la lista de tareas.

  
  
  
  
  
  

## Lista de Tareas

  
  
  
  

Los usuarios pueden ver y gestionar su lista de tareas de la siguiente manera:

  
  
  

**Filtros de Tareas**: La aplicación proporciona opciones para filtrar las tareas según su estado, como "completadas", "incompletas" o "todas". El usuario puede seleccionar el filtro deseado.

  
  
  

**Visualización de Tareas**: La lista de tareas se actualiza automáticamente para mostrar solo las tareas que cumplen con el filtro seleccionado.

  
  
  

**Detalles de Tareas**: Cada tarea se muestra en la lista con detalles como el título, la descripción y su estado (completada o incompleta).

  
  
  

**Acciones en Tareas**: Junto a cada tarea, los usuarios pueden ver opciones para editar, eliminar o marcar la tarea como completada o incompleta.

  
  
  
  
  
  

## Cierre de Sesión

  
  
  
  

Los usuarios pueden cerrar sesión en la aplicación siguiendo estos pasos:

  
  
  

**Botón de Cerrar Sesión**: En la interfaz de usuario, los usuarios pueden encontrar un botón etiquetado como "Cerrar Sesión."

  
  
  

**Click en Cerrar Sesión**: Al hacer clic en este botón, la aplicación finaliza la sesión del usuario y los redirige a la pantalla de inicio de sesión.

  
  
  

**Sesión Finalizada**: Una vez cerrada la sesión, el usuario ya no tendrá acceso a las funciones protegidas y deberá volver a autenticarse para utilizar la aplicación nuevamente.

  
  
  
  
  
  

## API de Tareas (para Desarrolladores)

  
  
  

La API de tareas proporciona funcionalidades para la gestión de tareas, incluyendo la creación, recuperación, actualización y eliminación de tareas. Utiliza autenticación basada en tokens de un solo uso para garantizar la seguridad de las operaciones.

  
  
  

**TaskListView**

  
  

La vista de lista de tareas (**TaskListView**) en la API es responsable de:

  
  

**Recuperar Tareas**: Proporciona una lista de todas las tareas asociadas al usuario autenticado.

  
  

**Crear Tarea**: Permite a los usuarios autenticados crear nuevas tareas enviando una solicitud POST con los detalles de la tarea, como el título y la descripción.

  
  
  
  

**TaskDetailView**

  
  

La vista de detalle de tareas (TaskDetailView) en la API se encarga de:

  
  

**Recuperar Tarea Específica**: Para recuperar los detalles específicos de una tarea, los usuarios pueden enviar una solicitud GET a la ruta `/api/tasks/{task_id}/`, donde {task_id} representa el identificador único de la tarea que desean recuperar. Además, deben incluir un encabezado de autorización con un token de autenticación válido en el formato *Authorization: Token {token}*.

Esto asegura que solo los usuarios autenticados puedan acceder a la información de la tarea.

  
  

Ejemplo de solicitud GET para recuperar una tarea específica:

  
  

    GET /api/tasks/1/

  
  

**Actualizar Tarea**: Los usuarios autenticados pueden actualizar los detalles de una tarea específica enviando una solicitud PUT o PATCH a la misma ruta mencionada anteriormente (`/api/tasks/{task_id}/`). Esto les permite modificar información como el título o la descripción de la tarea. Además, deben incluir un encabezado de autorización con un token de autenticación válido en el formato *Authorization: Token {token}* para garantizar que solo los propietarios de la tarea puedan modificarla.

  
  

Ejemplo de solicitud PUT para actualizar una tarea:

  
  

    PUT /api/tasks/1/

  
  

Ejemplo de solicitud PATCH para actualizar una tarea:

  
  

    PATCH /api/tasks/1/

  
  

Los datos actualizados deben enviarse en el cuerpo de la solicitud en formato JSON.

  
  

**Eliminar Tarea**: Para eliminar una tarea específica, los usuarios autenticados pueden enviar una solicitud DELETE a la ruta correspondiente (`/api/tasks/{task_id}/`) con el identificador único de la tarea que desean eliminar. Además, deben incluir un encabezado de autorización con un token de autenticación válido en el formato *Authorization: Token {token}*. Esto garantiza que solo el propietario de la tarea o los usuarios autorizados puedan eliminarla.

  
  

Ejemplo de solicitud DELETE para eliminar una tarea:

  
  

    DELETE /api/tasks/1/

  
  

**Endpoint de Registro**

  
  

La API cuenta con un endpoint de registro (`/auth/register/)` que permite a los usuarios crear nuevas cuentas. Los detalles de registro incluyen el nombre de usuario y la contraseña. Una vez registrado, el usuario puede utilizar las credenciales para iniciar sesión en la aplicación.

  
  
  
  

**Endpoint de Inicio de Sesión**

El endpoint de inicio de sesión (`/auth/login/`) en la API permite a los usuarios autenticarse proporcionando su nombre de usuario y contraseña. Después de la autenticación exitosa, la API devuelve un token de autenticación de un solo uso que debe incluirse en las solicitudes posteriores como encabezado para acceder a las funcionalidades protegidas. Al probar esta API con un username y password validos se obtiene como respuesta el token para dicho usuario. A continuacion un ejemplo en curl:

  
  

    url http://127.0.0.1:8000/auth/login/ --data 'username=john&password=foobar123' -v
    
    ...
    
    < HTTP/1.1 200 OK
    
    ...
    
    {"token":"As3pLIG8WeltLyZxoRcjQqu7wqPXhzFOMuxqFJjXa-Pb4tIMpzh-Ti21Nah4r38P"}

  
  
  
  

**Endpoint de Logout**

  
  

La funcionalidad de "Logout"(`/auth/logout/`) permite a los usuarios cerrar sesión en la aplicación. Al hacerlo, el token de autenticación utilizado para acceder a la API se invalida, lo que requiere que el usuario vuelva a iniciar sesión para realizar acciones autenticadas. A continuacion un ejemplo en curl:

  
  
  

    curl http://127.0.0.1:8000/auth/logout/ -v -H 'Authorization: Token {token}' -X DELETE
    
    ...
    
    HTTP/1.1 204 No Content

  
  
  
  
  
  
  

**Colaboradores:**

  

Agustin ***Agustin-Par*** • Collaborator

  
  

***NataliaMarielPuntillo*** • Collaborator

  
  

Lucas ***lkainn*** • Collaborator

  
  

***Pablo-vector*** • Collaborator

  
  

***crb85*** • Collaborator

  
  
  
  
  

**Información de Contacto**: via GitHub en el repositorio.

  
  

**Version**: 1.0

  
  

**Agradecimientos**: A todo el grupo 5 que hizo posible esta aplicacion.

