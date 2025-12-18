Definición Entrega ET3
Interfaces de Usuario
Curso 2025-2026

Tipología

Realización Grupo de cuatro personas (48 horas por persona)

Tiene una dedicación estimada de 192 horas.

Definición

Dada una representación de una entidad del back mediante la estructura proporcionada al final de este documento, se solicita que a partir de la misma:

Se cree dinámicamente la interfaz (interacción tal y como se ha explicado en la asignatura) de presentación de datos, altas, bajas, modificación, consulta y ver detalle (ADD, EDIT, SEARCH, SHOWCURRENT) con validación de campos individual en el formulario y a nivel de submit.


Debe existir un index.html donde se incluyan:

Un menú donde se invoque a una clase a la que se le pasa el nombre de una entidad, la cual instancia la clase de entidad si existe o una clase general, que lea la estructura de esa entidad (sea cual sea) y presente la interfaz de gestión de la entidad que representa,
css necesarios para su ejecución,
js necesarios para su ejecución, como mínimo:
la clase general que se instancia en el onload,
la clase abstracta para tratar cualquier entidad
la clase de creación de tablas, formularios y su manipulación
la clase de Validaciones generales
la clase de gestión de idiomas
Deben crearse las validaciones generales y estas deben incluir validaciones de fechas.

Debe poder crear como mínimo los siguientes campos de formulario:

input (en sus tipos de introducción de información “atributo type”)
textarea
select (simple y múltiple)
radio (simple y múltiple)
checkbox (simple y múltiple)

Deben disponerse los ficheros en una arquitectura de directorios que estructure de forma lógica y comprensible la organización de los ficheros. Puede usarse la que se estableció para la ET2 o modificarse si se considera adecuado.

Propósito

Utilizar la estructura html correspondiente a la Semana 8-CSS

Debe existir el método para crear la tabla de datos a la que se le pasen los datos a mostrar.

Debe existir un método CreateForm al que se le pase la acción a realizar y los datos de tupla si es necesario.

Debe colocarse una validación de campo de formulario por campo de formulario dependiente de la acción que se active tal y como se ha explicado para la ET2.

Debe existir una validación de submit por acción tal y como se ha explicado para la ET2.

Las validaciones de campos se realizan de forma automática sobre validaciones generales y si existen validaciones personalizadas se harán sobre la clase de entidad.

Al elegir la opción de menú se debe leer la estructura de datos de la entidad de la opción de menú y crear a partir de esta la interfaz para gestionar los datos de la misma.

En el soporte multiidioma se colocan automáticamente los valores de traducción en tiempo real (puesto que no se puede escribir ficheros desde JS) para textos de interfaz y en el caso de códigos de error se colocará el código de error seguido de -ES o -EN.

En la página index.html debe mostrarse (no estático en html) la información de un fichero ET3_Datos_NombreEquipo.js con una variable de tipo array con el nombre def_datos_NombreEquipo con la siguiente información por cada uno de los alumnos del grupo(este fichero debe estar a nivel de index.html) :

Entrega,
Nombre del alumno,
DNI
Horas dedicadas,

En la página index.html debe existir un icono que lleve a una página API.html en donde se describen las funciones y métodos desarrolladas indicando y describiendo para cada una de ellas los parámetros que utilizan y el output que devuelven a nivel de nombre, tipo de dato y descripción. Este fichero debe estar a nivel de index.html.

Debe existir un fichero IU.css que contenga todas las reglas de estilo aplicables en el interfaz. 

Se entrega en el ejercicio correspondiente en moovi.

Objetivos

1) Debe funcionar para cualquier estructura de entidad. Toda la información necesaria debe estar en la estructura de datos para cada entidad. Pueden utilizarse como base para probar la ET3 las tres entidades utilizadas en la ET2.

2) Los datos de los alumnos mostrados en la página index.html deben leerse del fichero ET3_Datos_NombreEquipo.js



Historias de usuario a cumplir

Particulares de entrega (Obligatorio. Si se incumple alguno de estos criterios la nota será 0)
1. Los ficheros tienen el nombre, formato y tipo indicado en la entrega
2. El directorio a entregar existe y tiene el nombre indicado en la entrega
3. El alumno ha indicado el número de horas utilizadas en la realización de la entrega


Por cada error en los ficheros o variables solicitadas : 0,1

Por cada error en la ejecución de la interfaz: 0,1

Por cada error en la apariencia de la interfaz : 0,1

Por cada error en la información de datos de los alumnos y de información de descripción de la API: 0,1

Si la estructuración de ficheros en directorio no es adecuada o justificable: 0,5





Forma de entrega

1) Solo el líder, colocar todo el código desarrollado en un directorio con nombre CODIGO

2) Crear un directorio con el nombre ET3_NombreEquipo y poner en su interior el directorio CODIGO

3) Comprimir el directorio ET3_NombreEquipo en formato .rar con el nombre ET3_NombreEquipo.rar

4) Subir el fichero ET3_NombreEquipo.rar al ejercicio ET3 en Moovi.



Modo de corrección

Se descomprime el fichero .rar proporcionado por el grupo.
Se coloca en un directorio de la máquina virtual. NO necesariamente en el directorio raíz.
Se verifica la información proporcionada a nivel de usuario y api.
Se verifica el funcionamiento para una entidad nueva usando las estructuras de datos definidas en la entrega con los datos de una entidad cualquiera.
Se verifica la presentación de la interfaz conforme a las indicaciones proporcionadas.


(SE ENTREGA ANTES DEL SÁBADO DÍA 11 DE ENERO A LAS 23:59 HORAS)


la estructura que define la entidad tiene dos propiedades principales:

entity: con el nombre de la entidad
attributes: Para cada atributo de la entidad. Con dos propiedades:
	html: define las características del elemento html que contiene el valor del atributo
	rules: define entre otras cosas (ajenas a este ejercicio) las validaciones que debe soportar ese atributo
		validations: se organiza en propiedades por acciones de bd (ADD,EDIT,DELETE,SEARCH)
			[accion] identifica las validaciones a realizar para ese atributo


VER LA ESTRUCTURA COMPLETA EN LA PÁGINA SIGUIENTE

const estructura_nombreentidad = {
    entity: 'nombredeentidad', 
// nombre de la entidad (obligatorio)
    attributes: { 
// conjunto de descripciones de atributos de la entidad (obligatorio)
        nombredeatributo :{ 
//nombre del atributo(obligatorio)

             html: {
                tag: 'tag html', 
//tag html (select, input, textarea, .....)
  options : ['valor1', 'valor2'], 
// options de un tag select. array con las options (obligatorio con tag select)
                type : "", 
// atributo de tag input (file, text, data, number,.... ) obligatorio con tag input
                rows: 0,
// atributo de tag textarea corresponde con las filas. Obligatorio con un textarea
                columns: 0,
// atributo de tag textarea corresponde con las columnas. Obligatorio con un textarea
                multiple: true, 
// atributo de valores multiples (input file, select, chechbox, ...). Obligatorio si puede coger multiples valores el atributo
                component_visible_size: 7, 
// atributo de longitud fisica del campo del formulario. Obligatorio si se quiere que tenga su tamaño adecuado
            },

            rules:{ 
// reglas de validacion (obligatorio)
                validations: { 
// conjunto de validaciones que se aplican al atributo (obligatorio)
                    nombreaccion:{ 
// indicación de la accion. No obligatorio si para el campo no hay validacion.(ADD, EDIT,SEARCH)
                        min_size: 8, 
// funcion atomica tamaño minimo, tiene el parametro de tamaño minimo del atributo (el que sea). No obligatorio sino se comprueba el tamaño minimo
                        max_size: 68, 
// funcion atomica tamaño maximo, tiene el parametro de tamaño maximo del atributo (el que sea). No obligatorio sino se comprueba el tamaño maximo
                        exp_reg: expresionregular, 
// funcion atomica para comprobar el formato del atributo, tiene el parametro de expresión regular del valor del atributo (el que sea). No obligatorio sino se comprueba el formato
                        no_file: true, 
// funcion atomica no existe fichero. no obligatorio si no se tiene que comprobar vacio
max_size_file:[{max_size_file:2000000},{type_file:'image/jpg'},{format_name_file:’expresionregular’}],
// funcion atomica para comprobar el tamaño maximo del objeto fichero, tiene todos las propiedades del objeto fichero. No obligatorio sino se comprueba el tamaño maximo
                        type_file:[{max_size_file:2000000},{type_file:'image/jpg'},{format_name_file:’expresionregular’}],
// funcion atomica para comprobar el tipo mime del objeto fichero, tiene todos las propiedades del objeto fichero. No obligatorio sino se comprueba el tipo mime
                        format_name_file:[{max_size_file:2000000},{type_file:'image/jpg'},{format_name_file:’expresionregular’}],
// funcion atomica para comprobar el formato del nombre del fichero en el objeto fichero, tiene todos las propiedades del objeto fichero. No obligatorio sino se comprueba el formato del nombre
                    personalized: true, // funcion personalizada. Indica que hay un metodo en la clase entidad correspondiente con el nombre specialized_test_nombreatributo(). No obligatorio si no hay funciones de validacion personalizadas
                    } // fin nombreaccion 
                }  // fin validations
            	} // fin rules
 }, // fin de este atributo y se rellena para los siguientes
}, //fin attributes
} // fin estructura
