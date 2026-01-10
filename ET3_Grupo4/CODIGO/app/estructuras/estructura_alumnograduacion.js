const estructura_alumnograduacion =
{
    entity: 'alumnograduacion',
    
    attributes:
    {
        alumnograduacion_login:
        {
            html:
            {
                tag: 'input',
                type : "text"
            },

            rules:
            {
                validations:
                {
                    ADD:
                    {
                        min_size: 4,
                        max_size: 15,
                        exp_reg: '^[A-Za-z]*$'
                    },

                    EDIT:
                    {
                        min_size: 4,
                        max_size: 15,
                        exp_reg: '^[A-Za-z]*$'
                    },

                    SEARCH:
                    {
                        max_size: 15,
                        exp_reg: '^[A-Za-z]*$'
                    }
                }  // fin validations
            } // fin rules
        }, // fin de este atributo y se rellena para los siguientes

        alumnograduacion_password:
        {
            html:
            {
                tag: 'input',
                type : "password"
            },

            rules:
            {
                validations:
                {
                    ADD:
                    {
                        min_size: 8,
                        max_size: 64,
                        exp_reg: '^[A-Za-z ]*$'
                    },

                    EDIT:
                    {
                        min_size: 8,
                        max_size: 64,
                        exp_reg: '^[A-Za-z ]*$'
                    },

                    SEARCH:
                    {
                        max_size: 64,
                        exp_reg: '^[A-Za-z ]*$'
                    }
                }  // fin validations
            } // fin rules
        }, // fin de este atributo y se rellena para los siguientes

        alumnograduacion_nombre:
        {
            html:
            {
                tag: 'input',
                type : "text"
            },

            rules:
            {
                validations:
                {
                    ADD:
                    {
                        min_size: 2,
                        max_size: 25,
                        exp_reg: '^[A-Za-zÑñÁÉÍÓÚáéíóúü ]*$'
                    },

                    EDIT:
                    {
                        min_size: 2,
                        max_size: 25,
                        exp_reg: '^[A-Za-zÑñÁÉÍÓÚáéíóúü ]*$'
                    },

                    SEARCH:
                    {
                        max_size: 25,
                        exp_reg: '^[A-Za-zÑñÁÉÍÓÚáéíóúü ]*$'
                    }
                }  // fin validations
            } // fin rules
        }, // fin de este atributo y se rellena para los siguientes

        alumnograduacion_apellidos:
        {
            html:
            {
                tag: 'input',
                type : "text"
            },

            rules:
            {
                validations:
                {
                    ADD:
                    {
                        min_size: 2,
                        max_size: 35,
                        exp_reg: '^[A-Za-zÑñÁÉÍÓÚáéíóúü ]*$'
                    },

                    EDIT:
                    {
                        min_size: 2,
                        max_size: 35,
                        exp_reg: '^[A-Za-zÑñÁÉÍÓÚáéíóúü ]*$'
                    },

                    SEARCH:
                    {
                        max_size: 35,
                        exp_reg: '^[A-Za-zÑñÁÉÍÓÚáéíóúü ]*$'
                    }
                }  // fin validations
            } // fin rules
        }, // fin de este atributo y se rellena para los siguientes

        alumnograduacion_titulacion:
        {
            html:
            {
                tag: 'select',
                options : ['GREI', 'GRIA', 'MEI', 'MIA', 'PCEO']
            },

            rules:
            {
                validations:
                {
                    ADD:
                    {
                        personalized: true
                    },

                    EDIT:
                    {
                        personalized: true
                    },

                    SEARCH:
                    {
                        max_size: 4,
                        exp_reg: '^[ACEGIMOPR]*$'
                    }
                }  // fin validations
            } // fin rules
        }, // fin de este atributo y se rellena para los siguientes

        alumnograduacion_dni:
        {
            html:
            {
                tag: 'input',
                type : "text"
            },

            is_pk: true,

            rules:
            {
                validations:
                {
                    ADD:
                    {
                        min_size: 9,
                        max_size: 9,
                        personalized: true
                    },

                    EDIT:
                    {
                        min_size: 9,
                        max_size: 9,
                        personalized: true
                    },

                    SEARCH:
                    {
                        max_size: 9,
                        exp_reg: '^[XYZ]?[0-9]*[A-Z]?$'
                    }
                }  // fin validations
            } // fin rules
        }, // fin de este atributo y se rellena para los siguientes

        alumnograduacion_telefono:
        {
            html:
            {
                tag: 'input',
                type : "text"
            },

            rules:
            {
                validations:
                {
                    ADD:
                    {
                        min_size: 9,
                        max_size: 9,
                        exp_reg: '^[0-9]*$'
                    },

                    EDIT:
                    {
                        min_size: 9,
                        max_size: 9,
                        exp_reg: '^[0-9]*$'
                    },

                    SEARCH:
                    {
                        max_size: 9,
                        exp_reg: '^[0-9]*$'
                    }
                }  // fin validations
            } // fin rules
        }, // fin de este atributo y se rellena para los siguientes

        alumnograduacion_direccion:
        {
            html:
            {
                tag: 'textarea',
                rows: 5,
                columns: 33
            },

            rules:
            {
                validations:
                {
                    ADD:
                    {
                        min_size: 20,
                        max_size: 100,
                        exp_reg: '^[0-9A-Za-zÑñÁÉÍÓÚáéíóúü ]*$'
                    },

                    EDIT:
                    {
                        min_size: 20,
                        max_size: 100,
                        exp_reg: '^[0-9A-Za-zÑñÁÉÍÓÚáéíóúü ]*$'
                    },

                    SEARCH:
                    {
                        max_size: 100,
                        exp_reg: '^[0-9A-Za-zÑñÁÉÍÓÚáéíóúü ]*$'
                    }
                }  // fin validations
            } // fin rules
        }, // fin de este atributo y se rellena para los siguientes

        alumnograduacion_email:
        {
            html:
            {
                tag: 'input',
                type : "text"
            },

            rules:
            {
                validations:
                {
                    ADD:
                    {
                        min_size: 8,
                        max_size: 40,
                        exp_reg: '^[0-9A-Za-z.-_]+@[0-9A-Za-z]+(\.[a-z]+)+$'
                    },

                    EDIT:
                    {
                        min_size: 8,
                        max_size: 40,
                        exp_reg: '^[0-9A-Za-z.-_]+@[0-9A-Za-z]+(\.[a-z]+)+$'
                    },

                    SEARCH:
                    {
                        max_size: 40,
                        exp_reg: '^[0-9A-Za-z]*@?[0-9A-Za-z]*(\.[a-z]+)*$'
                    }
                }  // fin validations
            } // fin rules
        }, // fin de este atributo y se rellena para los siguientes

        alumnograduacion_fotoacto:
        {
            html:
            {
                tag: 'input',
                type : "text"
            },

            is_null: true,

            rules:
            {
                validations:
                {
                    SEARCH:
                    {
                        max_size: 40,
                        exp_reg: '^[A-Za-z.]*$'
                    }
                }  // fin validations
            } // fin rules
        }, // fin de este atributo y se rellena para los siguientes

        nuevo_alumnograduacion_fotoacto:
        {
            html:
            {
                tag: 'input',
                type : "file"
            },

            rules:
            {
                validations:
                {
                    ADD:
                    {
                        min_size: 7,
                        max_size: 40,
                        no_file: true,
                        
                        max_size_file: [{max_size_file:2000000}, {type_file:'image/jpeg'}, {format_name_file:'^[a-zA-Z.]*$'}],
                        
                        type_file:[{max_size_file:2000000},{type_file:'image/jpeg'},{format_name_file:'^[a-zA-Z.]*$'}],

                        format_name_file:[{max_size_file:2000000},{type_file:'image/jpeg'},{format_name_file:'^[a-zA-Z.]*$'}]
                    },

                    EDIT:
                    {
                        min_size: 7,
                        max_size: 40,
                        
                        max_size_file: [{max_size_file:2000000}, {type_file:'image/jpeg'}, {format_name_file:'^[a-zA-Z.]*$'}],
                        
                        type_file:[{max_size_file:2000000},{type_file:'image/jpeg'},{format_name_file:'^[a-zA-Z.]*$'}],

                        format_name_file:[{max_size_file:2000000},{type_file:'image/jpeg'},{format_name_file:'^[a-zA-Z.]*$'}]
                    },
                }  // fin validations
            } // fin rules
        }, // fin de este atributo y se rellena para los siguientes
    } //fin attributes
} // fin estructura

const textos_alumnograduacion =
{
    ES:
    {
        // textos entidad alumnograduacion
        'text_titulo_page_alumnograduacion' : 'Gestión de Datos de Alumnos',
        'text_contenido_titulo_form_alumnograduacion_ADD': 'Añadir nuevo alumno',
        'text_contenido_titulo_form_alumnograduacion_EDIT': 'Modificar datos del alumno',
        'text_contenido_titulo_form_alumnograduacion_DELETE': 'Eliminar datos del alumno',
        'text_contenido_titulo_form_alumnograduacion_SHOWCURRENT': 'Información del alumno',
        'text_contenido_titulo_form_alumnograduacion_SEARCH': 'Buscar alumno',

        // atributos
        'alumnograduacion_login': 'Login',
        'alumnograduacion_password': 'Contraseña',
        'alumnograduacion_nombre': 'Nombre',
        'alumnograduacion_apellidos': 'Apellidos',
        'alumnograduacion_titulacion': 'Titulación',
        'alumnograduacion_dni': 'DNI',
        'alumnograduacion_telefono': 'Teléfono',
        'alumnograduacion_direccion': 'Dirección',
        'alumnograduacion_email': 'Correo Electrónico',
        'alumnograduacion_fotoacto': 'Foto',
        'nuevo_alumnograduacion_fotoacto': 'Nueva foto',

        'alumnograduacion_titulacion_GREI': 'GREI',
        'alumnograduacion_titulacion_GRIA': 'GRIA',
        'alumnograduacion_titulacion_MEI': 'MEI',
        'alumnograduacion_titulacion_MIA': 'MIA',
        'alumnograduacion_titulacion_PCEO': 'PCEO',

        // labels
        'label_alumnograduacion_login': 'Login',
        'label_alumnograduacion_password': 'Contraseña',
        'label_alumnograduacion_nombre': 'Nombre',
        'label_alumnograduacion_apellidos': 'Apellidos',
        'label_alumnograduacion_titulacion': 'Titulación',
        'label_alumnograduacion_dni': 'DNI/NIE',
        'label_alumnograduacion_telefono': 'Teléfono',
        'label_alumnograduacion_direccion': 'Dirección',
        'label_alumnograduacion_email': 'Correo Electrónico',
        'label_alumnograduacion_fotoacto': 'Foto',
        'label_nuevo_alumnograduacion_fotoacto': 'Nueva Foto',

        // errores validaciones formulario
        // ADD/EDIT

        'alumnograduacion_login_min_size_KO':'Login muy corto. Introduzca entre 4 y 15 caracteres',
        'alumnograduacion_login_max_size_KO':'Login muy largo. Introduzca entre 4 y 15 caracteres',
        'alumnograduacion_login_format_KO':'Formato incorrecto. Solo caracteres alfabeticos',

        'alumnograduacion_password_min_size_KO':'Contraseña muy corta. Introduzca entre 8 y 64 caracteres',
        'alumnograduacion_password_max_size_KO':'Contraseña muy larga. Introduzca entre 8 y 64 caracteres',
        'alumnograduacion_password_format_KO':'Formato incorrecto. Solo caracteres alfabeticos y espacios',

        'alumnograduacion_nombre_min_size_KO':'Nombre muy corto. Introduzca entre 2 y 25 caracteres',
        'alumnograduacion_nombre_max_size_KO':'Nombre muy largo. Introduzca entre 2 y 25 caracteres',
        'alumnograduacion_nombre_format_KO':'Formato incorrecto. Solo caracteres alfabeticos y espacios',

        'alumnograduacion_apellidos_min_size_KO':'Apellido muy corto. Introduzca entre 2 y 35 caracteres',
        'alumnograduacion_apellidos_max_size_KO':'Apellido muy largo. Introduzca entre 2 y 35 caracteres',
        'alumnograduacion_apellidos_format_KO':'Formato incorrecto. Solo caracteres alfabeticos y espacios',

        'alumnograduacion_dni_min_size_KO':'DNI/NIE muy corto. Introduzca 9 caracteres',
        'alumnograduacion_dni_max_size_KO':'DNI/NIE muy largo. Introduzca 9 caracteres',
        'alumnograduacion_dni_format_KO':'Formato incorrecto. Introduzca DNI (12345678A) o NIE (X2345678A)',
        'alumnograduacion_dni_nie_validate_KO':'Formato DNI incorrecto. Introduzca DNI (12345678A)',
        'alumnograduacion_nie_validate_KO':'Formato NIE incorrecto. Introduzca NIE (X2345678A)',

        'alumnograduacion_telefono_min_size_KO':'Telefono muy corto. Introduzca 9 numeros',
        'alumnograduacion_telefono_max_size_KO':'Telefono muy largo. Introduzca 9 numeros',
        'alumnograduacion_telefono_format_KO':'Formato incorrecto. Solo caracteres numericos',

        'alumnograduacion_direccion_min_size_KO':'Direccion muy corta. Introduzca entre 20 y 100 caracteres',
        'alumnograduacion_direccion_max_size_KO':'Direccion muy larga. Introduzca entre 20 y 100 caracteres',
        'alumnograduacion_direccion_format_KO':'Formato incorrecto. Solo caracteres alfanumericos y espacios',

        'alumnograduacion_email_min_size_KO':'Email muy corto. Introduzca entre 8 y 40 caracteres',
        'alumnograduacion_email_max_size_KO':'Email muy largo. Introduzca entre 8 y 40 caracteres',
        'alumnograduacion_email_format_KO':'Formato incorrecto. Introduzca direccion email (usuario@dominio)',

        'nuevo_alumnograduacion_fotoacto_not_exist_file_KO':'El fichero no existe. Debe subir una imagen',
        'nuevo_alumnograduacion_fotoacto_max_size_file_KO':'El tamaño del fichero es demasiado grande (Max: 2MB)',
        'nuevo_alumnograduacion_fotoacto_type_file_KO':'El tipo de fichero no esta permitido, solo admite .jpg',
        'nuevo_alumnograduacion_fotoacto_min_size_name_file_KO':'Nombre de fichero muy corto. Debe tener entre 7 y 40 caracteres',
        'nuevo_alumnograduacion_fotoacto_max_size_name_file_KO':'Nombre de fichero muy largo. Debe tener entre 7 y 40 caracteres',
        'nuevo_alumnograduacion_fotoacto_format_name_file_KO':'Formato de nombre incorrecto. Solo caracteres alfabeticos y puntos',

        //SEARCH
        'alumnograduacion_titulacion_max_size_KO':'Valor muy largo. Máximo 4 caracteres',
        'alumnograduacion_titulacion_format_KO':'Formato incorrecto. Solo caracteres alfabeticos',

        'alumnograduacion_fotoacto_max_size_name_file_KO':'Nombre de fichero muy largo. Introduzca hasta 40 caracteres',
        'alumnograduacion_fotoacto_format_name_file_KO':'Formato incorrecto. Solo caracteres alfabeticos y puntos'
    },
        
    EN:
    {
        // textos entidad alumnograduacion
        'text_titulo_page_alumnograduacion' : 'Manage Student Data',
        'text_contenido_titulo_form_alumnograduacion_ADD': 'Add New Student',
        'text_contenido_titulo_form_alumnograduacion_EDIT': 'Edit Student Information',
        'text_contenido_titulo_form_alumnograduacion_DELETE': 'Delete Student Information',
        'text_contenido_titulo_form_alumnograduacion_SHOWCURRENT': 'Student Details',
        'text_contenido_titulo_form_alumnograduacion_SEARCH': 'Search Student',

        // atributos
        'alumnograduacion_login': 'Login',
        'alumnograduacion_password': 'Password',
        'alumnograduacion_nombre': 'Name',
        'alumnograduacion_apellidos': 'Surname',
        'alumnograduacion_titulacion': 'Course',
        'alumnograduacion_dni': 'ID',
        'alumnograduacion_telefono': 'Phone Number',
        'alumnograduacion_direccion': 'Address',
        'alumnograduacion_email': 'E-mail Address',
        'alumnograduacion_fotoacto': 'Photo',
        'nuevo_alumnograduacion_fotoacto': 'New Photo',

        'alumnograduacion_titulacion_GREI': 'GREI',
        'alumnograduacion_titulacion_GRIA': 'GRIA',
        'alumnograduacion_titulacion_MEI': 'MEI',
        'alumnograduacion_titulacion_MIA': 'MIA',
        'alumnograduacion_titulacion_PCEO': 'PCEO',

        // labels
        'label_alumnograduacion_login': 'Login',
        'label_alumnograduacion_password': 'Password',
        'label_alumnograduacion_nombre': 'Name',
        'label_alumnograduacion_apellidos': 'Surname',
        'label_alumnograduacion_titulacion': 'Course',
        'label_alumnograduacion_dni': 'ID',
        'label_alumnograduacion_telefono': 'Phone Number',
        'label_alumnograduacion_direccion': 'Address',
        'label_alumnograduacion_email': 'E-mail Address',
        'label_alumnograduacion_fotoacto': 'Photo',
        'label_nuevo_alumnograduacion_fotoacto': 'New Photo',

        // errores validaciones formulario
        // ADD/EDIT

        'alumnograduacion_login_min_size_KO':'Login too short. Input between 4 and 15 characters',
        'alumnograduacion_login_max_size_KO':'Login too long. Input between 4 and 15 characters',
        'alumnograduacion_login_format_KO':'Invalid format. Only alphabetical characters allowed',

        'alumnograduacion_password_min_size_KO':'Password too short. Input between 8 and 64 characters',
        'alumnograduacion_password_max_size_KO':'Password too long. Input between 8 and 64 characters',
        'alumnograduacion_password_format_KO':'Invalid format. Only alphabetical characters and spaces allowed',

        'alumnograduacion_nombre_min_size_KO':'Name too short. Input between 2 and 25 characters',
        'alumnograduacion_nombre_max_size_KO':'Name too long. Input between 2 and 25 characters',
        'alumnograduacion_nombre_format_KO':'Invalid format. Only alphabetical characters and spaces allowed',

        'alumnograduacion_apellidos_min_size_KO':'Surame too short. Input between 2 and 35 characters',
        'alumnograduacion_apellidos_max_size_KO':'Surame too long. Input between 2 and 35 characters',
        'alumnograduacion_apellidos_format_KO':'Invalid format. Only alphabetical characters and spaces allowed',

        'alumnograduacion_dni_min_size_KO':'DNI/NIE too short. Input 9 characters',
        'alumnograduacion_dni_max_size_KO':'DNI/NIE too long. Input 9 characters',
        'alumnograduacion_dni_format_KO':'Invalid format. Input DNI (12345678A) or NIE (X2345678A)',
        'alumnograduacion_dni_nie_validate_KO':'Invalid DNI format. Input DNI (12345678A)',
        'alumnograduacion_nie_validate_KO':'Invalid NIE format. Input NIE (X2345678A)',

        'alumnograduacion_telefono_min_size_KO':'Phone number too short. Input 9 numbers',
        'alumnograduacion_telefono_max_size_KO':'Phone number too long. Input 9 numbers',
        'alumnograduacion_telefono_format_KO':'Invalid format. Only numbers allowed',

        'alumnograduacion_direccion_min_size_KO':'Address too short. Input between 20 and 100 characters',
        'alumnograduacion_direccion_max_size_KO':'Address too long. Input between 20 and 100 characters',
        'alumnograduacion_direccion_format_KO':'Invalid format. Only alphabetical characters and spaces allowed',

        'alumnograduacion_email_min_size_KO':'E-mail Address too short. Input between 8 and 40 characters',
        'alumnograduacion_email_max_size_KO':'E-mail Address too long. Input between 8 and 40 characters',
        'alumnograduacion_email_format_KO':'Invalid format. Input a valid address (user@domain)',

        'nuevo_alumnograduacion_fotoacto_not_exist_file_KO':'File not found. Please upload an image',
        'nuevo_alumnograduacion_fotoacto_max_size_file_KO':'The size of the file is too large (Max: 2MB)',
        'nuevo_alumnograduacion_fotoacto_type_file_KO':'Invalid file format. Only .jpg files allowed',
        'nuevo_alumnograduacion_fotoacto_min_size_name_file_KO':'File name too short. Input between 7 and 40 characters',
        'nuevo_alumnograduacion_fotoacto_max_size_name_file_KO':'File name too long. Input between 7 and 40 characters',
        'nuevo_alumnograduacion_fotoacto_format_name_file_KO':'Invalid name format. Only alphabetical characters and dots allowed',

        //SEARCH
        'alumnograduacion_titulacion_max_size_KO':'Input value too long. Input up to 4 characters',
        'alumnograduacion_titulacion_format_KO':'Invalid format. Only alphabetical characters allowed',

        'alumnograduacion_fotoacto_max_size_name_file_KO':'File name too long. Input up to 40 characters',
        'alumnograduacion_fotoacto_format_name_file_KO':'Invalid name format. Only alphabetical characters and dots allowed'
    }
}