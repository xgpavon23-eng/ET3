////////////////////// DEFINICIONES DE TESTS /////////////////////////

/*
 Formato 8 campos: 'Entidad' 'Campo' 'Tipo Campo' 'Nº Def_text' 'Descripcion_test' 'accion' 'resultado_esperado_string/boolean' 'mensaje_respuesta'
*/

let alumnograduacion_def_tests = Array(
    // alumnograduacion_login - login alfabéticos sin acentos ni ñ , min 4 max 15
    //ADD
    Array('alumnograduacion', 'alumnograduacion_login', 'input', 1, 'campo obligatorio', 'ADD', 'login_obligatorio_KO', 'El login es obligatorio'),
    Array('alumnograduacion', 'alumnograduacion_login', 'input', 2, 'cumple tamaño minimo', 'ADD', 'login_min_size_KO', 'El login debe tener al menos 4 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_login', 'input', 3, 'cumple tamaño maximo', 'ADD', 'login_max_size_KO', 'El login no puede tener más de 15 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_login', 'input', 4, 'cumple formato', 'ADD', 'login_format_KO', 'El login solo puede contener letras sin acentos ni ñ'),
    Array('alumnograduacion', 'alumnograduacion_login', 'input', 5, 'es correcto', 'ADD', true, 'Login correcto'),

    // EDIT
    Array('alumnograduacion', 'alumnograduacion_login', 'input', 6, 'campo vacío es válido', 'EDIT', true, 'Login correcto'),
    Array('alumnograduacion', 'alumnograduacion_login', 'input', 7, 'cumple tamaño minimo si tiene valor', 'EDIT', 'login_min_size_KO', 'El login debe tener al menos 4 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_login', 'input', 8, 'cumple tamaño maximo si tiene valor', 'EDIT', 'login_max_size_KO', 'El login no puede tener más de 15 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_login', 'input', 9, 'cumple formato si tiene valor', 'EDIT', 'login_format_KO', 'El login solo puede contener letras sin acentos ni ñ'),

    // SEARCH
    Array('alumnograduacion', 'alumnograduacion_login', 'input', 10, 'búsqueda por patrón válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('alumnograduacion', 'alumnograduacion_login', 'input', 11, 'búsqueda por patrón inválido', 'SEARCH', 'login_search_format_KO', 'Para búsqueda, el login solo puede contener letras sin acentos ni ñ'),

    // alumnograduacion_password - password alfabéticos y espacios sin acentos ni ñ , min 8 max 64
    Array('alumnograduacion', 'alumnograduacion_password', 'input', 12, 'campo obligatorio', 'ADD', 'password_obligatorio_KO', 'La contraseña es obligatoria'),
    Array('alumnograduacion', 'alumnograduacion_password', 'input', 13, 'cumple tamaño minimo', 'ADD', 'password_min_size_KO', 'La contraseña debe tener al menos 8 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 'input', 14, 'cumple tamaño maximo', 'ADD', 'password_max_size_KO', 'La contraseña no puede tener más de 64 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 'input', 15, 'cumple formato', 'ADD', 'password_format_KO', 'La contraseña solo puede contener letras y espacios sin acentos ni ñ'),
    Array('alumnograduacion', 'alumnograduacion_password', 'input', 16, 'es correcto', 'ADD', true, 'Password correcto'),

    // EDIT
    Array('alumnograduacion', 'alumnograduacion_password', 'input', 17, 'campo vacío es válido', 'EDIT', true, 'Password correcto'),
    Array('alumnograduacion', 'alumnograduacion_password', 'input', 18, 'cumple tamaño minimo si tiene valor', 'EDIT', 'password_min_size_KO', 'La contraseña debe tener al menos 8 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 'input', 19, 'cumple tamaño maximo si tiene valor', 'EDIT', 'password_max_size_KO', 'La contraseña no puede tener más de 64 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_password', 'input', 20, 'cumple formato si tiene valor', 'EDIT', 'password_format_KO', 'La contraseña solo puede contener letras y espacios sin acentos ni ñ'),

    // SEARCH
    Array('alumnograduacion', 'alumnograduacion_password', 'input', 21, 'búsqueda por patrón válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('alumnograduacion', 'alumnograduacion_password', 'input', 22, 'búsqueda por patrón inválido', 'SEARCH', 'password_search_format_KO', 'Para búsqueda, la contraseña solo puede contener letras y espacios sin acentos ni ñ'),

    // alumnograduacion_nombre - nombre alfabéticos con acentos , ñ y espacios, min 2 max 25
    //ADD
    Array('alumnograduacion', 'alumnograduacion_nombre', 'input', 23, 'campo obligatorio', 'ADD', 'nombre_obligatorio_KO', 'El nombre es obligatorio'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 'input', 24, 'cumple tamaño minimo', 'ADD', 'nombre_min_size_KO', 'El nombre debe tener al menos 2 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 'input', 25, 'cumple tamaño maximo', 'ADD', 'nombre_max_size_KO', 'El nombre no puede tener más de 25 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 'input', 26, 'cumple formato', 'ADD', 'nombre_format_KO', 'El nombre solo puede contener letras, espacios, ñ y acentos'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 'input', 27, 'es correcto', 'ADD', true, 'Nombre correcto'),

    // EDIT
    Array('alumnograduacion', 'alumnograduacion_nombre', 'input', 28, 'campo vacío es válido', 'EDIT', true, 'Nombre correcto'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 'input', 29, 'cumple tamaño minimo si tiene valor', 'EDIT', 'nombre_min_size_KO', 'El nombre debe tener al menos 2 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 'input', 30, 'cumple tamaño maximo si tiene valor', 'EDIT', 'nombre_max_size_KO', 'El nombre no puede tener más de 25 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 'input', 31, 'cumple formato si tiene valor', 'EDIT', 'nombre_format_KO', 'El nombre solo puede contener letras, espacios, ñ y acentos'),

    // SEARCH
    Array('alumnograduacion', 'alumnograduacion_nombre', 'input', 32, 'búsqueda por patrón válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 'input', 33, 'búsqueda por patrón inválido', 'SEARCH', 'nombre_search_format_KO', 'Para búsqueda, el nombre solo puede contener letras, espacios, ñ y acentos'),

    // alumnograduacion_apellidos - apellidos alfabéticos con acentos , ñ y espacios, min 2 max 35
    //ADD
    Array('alumnograduacion', 'alumnograduacion_apellidos', 'input', 34, 'campo obligatorio', 'ADD', 'apellidos_obligatorio_KO', 'Los apellidos son obligatorios'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 'input', 35, 'cumple tamaño minimo', 'ADD', 'apellidos_min_size_KO', 'Los apellidos deben tener al menos 2 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 'input', 36, 'cumple tamaño maximo', 'ADD', 'apellidos_max_size_KO', 'Los apellidos no pueden tener más de 35 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 'input', 37, 'cumple formato', 'ADD', 'apellidos_format_KO', 'Los apellidos solo pueden contener letras, espacios, ñ y acentos'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 'input', 38, 'es correcto', 'ADD', true, 'Apellidos correctos'),

    // EDIT
    Array('alumnograduacion', 'alumnograduacion_apellidos', 'input', 39, 'campo vacío es válido', 'EDIT', true, 'Apellidos correctos'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 'input', 40, 'cumple tamaño minimo si tiene valor', 'EDIT', 'apellidos_min_size_KO', 'Los apellidos deben tener al menos 2 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 'input', 41, 'cumple tamaño maximo si tiene valor', 'EDIT', 'apellidos_max_size_KO', 'Los apellidos no pueden tener más de 35 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 'input', 42, 'cumple formato si tiene valor', 'EDIT', 'apellidos_format_KO', 'Los apellidos solo pueden contener letras, espacios, ñ y acentos'),

    // SEARCH
    Array('alumnograduacion', 'alumnograduacion_apellidos', 'input', 43, 'búsqueda por patrón válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 'input', 44, 'búsqueda por patrón inválido', 'SEARCH', 'apellidos_search_format_KO', 'Para búsqueda, los apellidos solo pueden contener letras, espacios, ñ y acentos'),

    // alumnograduacion_titulacion - titulacion valores posibles GREI, GRIA, MEI, MIA o PCEO
    //ADD
    Array('alumnograduacion', 'alumnograduacion_titulacion', 'radio', 45, 'campo obligatorio', 'ADD', 'titulacion_obligatorio_KO', 'La titulación es obligatoria'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 'radio', 46, 'valor no permitido', 'ADD', 'titulacion_format_KO', 'La titulación debe ser GREI, GRIA, MEI, MIA o PCEO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 'radio', 47, 'valor GREI correcto', 'ADD', true, 'Titulación correcta'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 'radio', 48, 'valor GRIA correcto', 'ADD', true, 'Titulación correcta'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 'radio', 49, 'valor MEI correcto', 'ADD', true, 'Titulación correcta'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 'radio', 50, 'valor MIA correcto', 'ADD', true, 'Titulación correcta'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 'radio', 51, 'valor PCEO correcto', 'ADD', true, 'Titulación correcta'),

    // EDIT
    Array('alumnograduacion', 'alumnograduacion_titulacion', 'radio', 52, 'campo vacío es válido', 'EDIT', true, 'Titulación correcta'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 'radio', 53, 'valor no permitido si tiene valor', 'EDIT', 'titulacion_format_KO', 'La titulación debe ser GREI, GRIA, MEI, MIA o PCEO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 'radio', 54, 'valor correcto en EDIT', 'EDIT', true, 'Titulación correcta'),

    // SEARCH
    Array('alumnograduacion', 'alumnograduacion_titulacion', 'radio', 55, 'búsqueda por valor exacto válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 'radio', 56, 'búsqueda por valor no permitido', 'SEARCH', 'titulacion_search_format_KO', 'Para búsqueda, la titulación debe ser GREI, GRIA, MEI, MIA o PCEO'),

    // alumnograduacion_dni - dni/nie formato nif o nie con letras válidas para los números
    //ADD
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 57, 'campo obligatorio', 'ADD', 'dni_obligatorio_KO', 'El DNI/NIE es obligatorio'),
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 58, 'longitud exacta', 'ADD', 'dni_size_KO', 'El DNI/NIE debe tener exactamente 9 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 59, 'formato DNI inválido', 'ADD', 'dni_format_KO', 'Formato DNI inválido (8 números + letra)'),
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 60, 'formato NIE inválido', 'ADD', 'nie_format_KO', 'Formato NIE inválido (X/Y/Z + 7 números + letra)'),
    //problema con los casos generales 
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 61, 'formato general inválido', 'ADD', 'dni_format_KO', 'Formato de DNI/NIE inválido'),
    //
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 62, 'letra DNI inválida', 'ADD', 'dni_letra_KO', 'Letra del DNI incorrecta'),
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 63, 'letra NIE inválida', 'ADD', 'nie_letra_KO', 'Letra del NIE incorrecta'),
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 64, 'DNI correcto', 'ADD', true, 'DNI correcto'),
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 65, 'NIE correcto', 'ADD', true, 'NIE correcto'),

    // EDIT
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 66, 'campo obligatorio en EDIT', 'EDIT', 'dni_obligatorio_KO', 'El DNI/NIE es obligatorio'),
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 67, 'DNI correcto en EDIT', 'EDIT', true, 'DNI correcto'),

    // SEARCH
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 68, 'búsqueda por valor exacto válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('alumnograduacion', 'alumnograduacion_dni', 'input', 69, 'búsqueda por formato inválido', 'SEARCH', 'dni_search_format_KO', 'Para búsqueda, el DNI/NIE debe tener 9 caracteres'),

    // alumnograduacion_telefono - telefono 9 digitos 0-9
    //ADD
    Array('alumnograduacion', 'alumnograduacion_telefono', 'input', 70, 'campo obligatorio', 'ADD', 'telefono_obligatorio_KO', 'El teléfono es obligatorio'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 'input', 71, 'longitud exacta', 'ADD', 'telefono_size_KO', 'El teléfono debe tener exactamente 9 dígitos'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 'input', 72, 'formato numérico', 'ADD', 'telefono_format_KO', 'El teléfono solo puede contener números'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 'input', 73, 'es correcto', 'ADD', true, 'Teléfono correcto'),

    // EDIT
    Array('alumnograduacion', 'alumnograduacion_telefono', 'input', 74, 'campo vacío es válido', 'EDIT', true, 'Teléfono correcto'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 'input', 75, 'longitud exacta si tiene valor', 'EDIT', 'telefono_size_KO', 'El teléfono debe tener exactamente 9 dígitos'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 'input', 76, 'formato numérico si tiene valor', 'EDIT', 'telefono_format_KO', 'El teléfono solo puede contener números'),

    // SEARCH
    Array('alumnograduacion', 'alumnograduacion_telefono', 'input', 77, 'búsqueda por patrón numérico válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 'input', 78, 'búsqueda por patrón no numérico', 'SEARCH', 'telefono_search_format_KO', 'Para búsqueda, el teléfono solo puede contener números'),

    // alumnograduacion_direccion - direccion alfanuméricos con acentos y ñ , max 100
    //ADD
    Array('alumnograduacion', 'alumnograduacion_direccion', 'textarea', 79, 'campo obligatorio', 'ADD', 'direccion_obligatorio_KO', 'La dirección es obligatoria'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 'textarea', 80, 'tamaño máximo', 'ADD', 'direccion_max_size_KO', 'La dirección no puede tener más de 100 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 'textarea', 81, 'formato alfanumérico', 'ADD', 'direccion_format_KO', 'La dirección solo puede contener caracteres alfanuméricos con acentos y ñ'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 'textarea', 82, 'es correcto', 'ADD', true, 'Dirección correcta'),

    // EDIT
    Array('alumnograduacion', 'alumnograduacion_direccion', 'textarea', 83, 'campo vacío es válido', 'EDIT', true, 'Dirección correcta'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 'textarea', 84, 'tamaño máximo si tiene valor', 'EDIT', 'direccion_max_size_KO', 'La dirección no puede tener más de 100 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 'textarea', 85, 'formato alfanumérico si tiene valor', 'EDIT', 'direccion_format_KO', 'La dirección solo puede contener caracteres alfanuméricos con acentos y ñ'),

    // SEARCH
    Array('alumnograduacion', 'alumnograduacion_direccion', 'textarea', 86, 'búsqueda por patrón válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 'textarea', 87, 'búsqueda por patrón inválido', 'SEARCH', 'direccion_search_format_KO', 'Para búsqueda, la dirección solo puede contener caracteres alfanuméricos con acentos y ñ'),

    // alumnograduacion_email - email formato email max 40
    //ADD
    Array('alumnograduacion', 'alumnograduacion_email', 'input', 88, 'campo obligatorio', 'ADD', 'email_obligatorio_KO', 'El email es obligatorio'),
    Array('alumnograduacion', 'alumnograduacion_email', 'input', 89, 'tamaño máximo', 'ADD', 'email_max_size_KO', 'El email no puede tener más de 40 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_email', 'input', 90, 'formato email', 'ADD', 'email_format_KO', 'Formato email inválido'),
    Array('alumnograduacion', 'alumnograduacion_email', 'input', 91, 'es correcto', 'ADD', true, 'Email correcto'),

    // EDIT
    Array('alumnograduacion', 'alumnograduacion_email', 'input', 92, 'campo vacío es válido', 'EDIT', true, 'Email correcto'),
    Array('alumnograduacion', 'alumnograduacion_email', 'input', 93, 'tamaño máximo si tiene valor', 'EDIT', 'email_max_size_KO', 'El email no puede tener más de 40 caracteres'),
    Array('alumnograduacion', 'alumnograduacion_email', 'input', 94, 'formato email si tiene valor', 'EDIT', 'email_format_KO', 'Formato email inválido'),

    // SEARCH
    Array('alumnograduacion', 'alumnograduacion_email', 'input', 95, 'búsqueda por patrón email válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('alumnograduacion', 'alumnograduacion_email', 'input', 96, 'búsqueda por patrón email inválido', 'SEARCH', 'email_search_format_KO', 'Para búsqueda, formato de email inválido'),

    // alumnograduacion_fotoacto - SEARCH
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 'input', 97, 'búsqueda por nombre archivo válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 'input', 98, 'búsqueda por nombre archivo inválido', 'SEARCH', 'fotoacto_search_format_KO', 'Para búsqueda, el nombre de archivo solo puede contener letras sin acentos ni ñ ni espacios y punto'),

    // nuevo_alumnograduacion_fotoacto - SEARCH
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 99, 'campo obligatorio en ADD', 'ADD', 'fotoacto_obligatorio_KO', 'La foto del acto es obligatoria'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 100, 'existe fichero', 'ADD', 'fotoacto_not_exist_file_KO', 'Debe seleccionar un archivo de foto'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 101, 'cumple nombre fichero', 'ADD', 'fotoacto_format_name_file_KO', 'El nombre del archivo solo puede contener letras sin acentos ni ñ ni espacios y punto'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 102, 'cumple tipo fichero', 'ADD', 'fotoacto_type_file_KO', 'El tipo de archivo debe ser JPG/JPEG'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 103, 'cumple tamaño máximo fichero', 'ADD', 'fotoacto_max_size_file_KO', 'El tamaño del archivo no puede superar 2MB'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 104, 'cumple tamaño mínimo nombre fichero', 'ADD', 'fotoacto_min_size_name_KO', 'El nombre del archivo debe tener al menos 7 caracteres'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 105, 'cumple tamaño máximo nombre fichero', 'ADD', 'fotoacto_max_size_name_KO', 'El nombre del archivo no puede tener más de 40 caracteres'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 106, 'fichero ok', 'ADD', true, 'OK'),

    // nuevo_alumnograduacion_fotoacto - EDIT
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 107, 'campo vacío es válido', 'EDIT', true, 'OK'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 108, 'cumple nombre fichero si tiene valor', 'EDIT', 'fotoacto_format_name_file_KO', 'El nombre del archivo solo puede contener letras sin acentos ni ñ ni espacios y punto'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 109, 'cumple tipo fichero si tiene valor', 'EDIT', 'fotoacto_type_file_KO', 'El tipo de archivo debe ser JPG/JPEG'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 110, 'cumple tamaño máximo fichero si tiene valor', 'EDIT', 'fotoacto_max_size_file_KO', 'El tamaño del archivo no puede superar 2MB'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 111, 'cumple tamaño mínimo nombre fichero si tiene valor', 'EDIT', 'fotoacto_min_size_name_KO', 'El nombre del archivo debe tener al menos 7 caracteres'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 'inputfile', 112, 'cumple tamaño máximo nombre fichero si tiene valor', 'EDIT', 'fotoacto_max_size_name_KO', 'El nombre del archivo no puede tener más de 40 caracteres')
);

//////////////////// PRUEBAS NO FILE ///////////////////

/*
 Formato 7 campos: 'Entidad' 'Campo' 'Nº Def_text' 'Nº prueba' 'accion' 'valores_aProbar' 'codError/true'
*/

let alumnograduacion_tests_fields = Array(
    // alumnograduacion_login - login alfabéticos sin acentos ni ñ , min 4 max 15
    //ADD
    Array('alumnograduacion', 'alumnograduacion_login', 1, 1, 'ADD', [{ 'alumnograduacion_login': '' }], 'login_obligatorio_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 2, 2, 'ADD', [{ 'alumnograduacion_login': 'aa' }], 'login_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 3, 3, 'ADD', [{ 'alumnograduacion_login': 'usuariomuylargo123' }], 'login_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 4, 4, 'ADD', [{ 'alumnograduacion_login': 'usuario@' }], 'login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 4, 5, 'ADD', [{ 'alumnograduacion_login': 'usuarioñ' }], 'login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 4, 6, 'ADD', [{ 'alumnograduacion_login': 'usuario123' }], 'login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 5, 7, 'ADD', [{ 'alumnograduacion_login': 'usuario' }], true),
    Array('alumnograduacion', 'alumnograduacion_login', 5, 8, 'ADD', [{ 'alumnograduacion_login': 'alumno' }], true),

    // EDIT
    Array('alumnograduacion', 'alumnograduacion_login', 6, 9, 'EDIT', [{ 'alumnograduacion_login': '' }], true),
    Array('alumnograduacion', 'alumnograduacion_login', 7, 10, 'EDIT', [{ 'alumnograduacion_login': 'aa' }], 'login_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 8, 11, 'EDIT', [{ 'alumnograduacion_login': 'usuariomuylargo123' }], 'login_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 9, 12, 'EDIT', [{ 'alumnograduacion_login': 'usuario@' }], 'login_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_login', 9, 13, 'EDIT', [{ 'alumnograduacion_login': 'usuario' }], true),

    // SEARCH
    Array('alumnograduacion', 'alumnograduacion_login', 10, 14, 'SEARCH', [{ 'alumnograduacion_login': 'user' }], true),
    Array('alumnograduacion', 'alumnograduacion_login', 11, 15, 'SEARCH', [{ 'alumnograduacion_login': 'user@' }], 'login_search_format_KO'),

    // alumnograduacion_password - password alfabéticos y espacios sin acentos ni ñ , min 8 max 64
    //ADD
    Array('alumnograduacion', 'alumnograduacion_password', 12, 16, 'ADD', [{ 'alumnograduacion_password': '' }], 'password_obligatorio_KO'),
    Array('alumnograduacion', 'alumnograduacion_password', 13, 17, 'ADD', [{ 'alumnograduacion_password': 'abc' }], 'password_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_password', 14, 18, 'ADD', [{ 'alumnograduacion_password': 'a'.repeat(65) }], 'password_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_password', 15, 19, 'ADD', [{ 'alumnograduacion_password': 'Passwordñ' }], 'password_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_password', 15, 20, 'ADD', [{ 'alumnograduacion_password': 'Password123' }], 'password_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_password', 16, 21, 'ADD', [{ 'alumnograduacion_password': 'PasswordValido' }], true),
    Array('alumnograduacion', 'alumnograduacion_password', 16, 22, 'ADD', [{ 'alumnograduacion_password': 'Mi Password' }], true),

    // EDIT
    Array('alumnograduacion', 'alumnograduacion_password', 17, 23, 'EDIT', [{ 'alumnograduacion_password': '' }], true),
    Array('alumnograduacion', 'alumnograduacion_password', 18, 24, 'EDIT', [{ 'alumnograduacion_password': 'abc' }], 'password_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_password', 19, 25, 'EDIT', [{ 'alumnograduacion_password': 'a'.repeat(65) }], 'password_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_password', 20, 26, 'EDIT', [{ 'alumnograduacion_password': 'Nuevañññ' }], 'password_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_password', 20, 27, 'EDIT', [{ 'alumnograduacion_password': 'NuevaPasswordValida' }], true),

    // SEARCH
    Array('alumnograduacion', 'alumnograduacion_password', 21, 28, 'SEARCH', [{ 'alumnograduacion_password': 'pass' }], true),
    Array('alumnograduacion', 'alumnograduacion_password', 22, 29, 'SEARCH', [{ 'alumnograduacion_password': 'pass123' }], 'password_search_format_KO'),

    // alumnograduacion_nombre - nombre alfabéticos con acentos , ñ y espacios, min 2 max 25
    //ADD
    Array('alumnograduacion', 'alumnograduacion_nombre', 23, 30, 'ADD', [{ 'alumnograduacion_nombre': '' }], 'nombre_obligatorio_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 24, 31, 'ADD', [{ 'alumnograduacion_nombre': 'a' }], 'nombre_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 25, 32, 'ADD', [{ 'alumnograduacion_nombre': 'a'.repeat(26) }], 'nombre_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 26, 33, 'ADD', [{ 'alumnograduacion_nombre': 'Ana123' }], 'nombre_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 26, 34, 'ADD', [{ 'alumnograduacion_nombre': 'María@' }], 'nombre_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 27, 35, 'ADD', [{ 'alumnograduacion_nombre': 'Ana' }], true),
    Array('alumnograduacion', 'alumnograduacion_nombre', 27, 36, 'ADD', [{ 'alumnograduacion_nombre': 'María' }], true),

    // EDIT
    Array('alumnograduacion', 'alumnograduacion_nombre', 28, 37, 'EDIT', [{ 'alumnograduacion_nombre': '' }], true),
    Array('alumnograduacion', 'alumnograduacion_nombre', 29, 38, 'EDIT', [{ 'alumnograduacion_nombre': 'a' }], 'nombre_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 30, 39, 'EDIT', [{ 'alumnograduacion_nombre': 'a'.repeat(26) }], 'nombre_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 31, 40, 'EDIT', [{ 'alumnograduacion_nombre': 'Ana123' }], 'nombre_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_nombre', 31, 41, 'EDIT', [{ 'alumnograduacion_nombre': 'María Edit' }], true),

    // SEARCH
    Array('alumnograduacion', 'alumnograduacion_nombre', 32, 42, 'SEARCH', [{ 'alumnograduacion_nombre': 'Mar' }], true),
    Array('alumnograduacion', 'alumnograduacion_nombre', 33, 43, 'SEARCH', [{ 'alumnograduacion_nombre': 'Mar123' }], 'nombre_search_format_KO'),

    // alumnograduacion_apellidos - apellidos alfabéticos con acentos , ñ y espacios, min 2 max 35
    //ADD
    Array('alumnograduacion', 'alumnograduacion_apellidos', 34, 44, 'ADD', [{ 'alumnograduacion_apellidos': '' }], 'apellidos_obligatorio_KO'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 35, 45, 'ADD', [{ 'alumnograduacion_apellidos': 'a' }], 'apellidos_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 36, 46, 'ADD', [{ 'alumnograduacion_apellidos': 'a'.repeat(36) }], 'apellidos_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 37, 47, 'ADD', [{ 'alumnograduacion_apellidos': 'Pérez123' }], 'apellidos_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 37, 48, 'ADD', [{ 'alumnograduacion_apellidos': 'Pérez@' }], 'apellidos_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 38, 49, 'ADD', [{ 'alumnograduacion_apellidos': 'García' }], true),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 38, 50, 'ADD', [{ 'alumnograduacion_apellidos': 'López Martínez' }], true),

    // EDIT
    Array('alumnograduacion', 'alumnograduacion_apellidos', 39, 51, 'EDIT', [{ 'alumnograduacion_apellidos': '' }], true),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 40, 52, 'EDIT', [{ 'alumnograduacion_apellidos': 'a' }], 'apellidos_min_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 41, 53, 'EDIT', [{ 'alumnograduacion_apellidos': 'a'.repeat(36) }], 'apellidos_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 42, 54, 'EDIT', [{ 'alumnograduacion_apellidos': 'Pérez123' }], 'apellidos_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 42, 55, 'EDIT', [{ 'alumnograduacion_apellidos': 'García López' }], true),

    // SEARCH
    Array('alumnograduacion', 'alumnograduacion_apellidos', 43, 56, 'SEARCH', [{ 'alumnograduacion_apellidos': 'Garc' }], true),
    Array('alumnograduacion', 'alumnograduacion_apellidos', 44, 57, 'SEARCH', [{ 'alumnograduacion_apellidos': 'Garc123' }], 'apellidos_search_format_KO'),

    // alumnograduacion_titulacion - titulacion valores posibles GREI, GRIA, MEI, MIA o PCEO
    //ADD
    Array('alumnograduacion', 'alumnograduacion_titulacion', 45, 58, 'ADD', [{ 'alumnograduacion_titulacion': '' }], 'titulacion_obligatorio_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 46, 59, 'ADD', [{ 'alumnograduacion_titulacion': 'INVALIDO' }], 'titulacion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 47, 60, 'ADD', [{ 'alumnograduacion_titulacion': 'GREI' }], true),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 48, 61, 'ADD', [{ 'alumnograduacion_titulacion': 'GRIA' }], true),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 49, 62, 'ADD', [{ 'alumnograduacion_titulacion': 'MEI' }], true),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 50, 63, 'ADD', [{ 'alumnograduacion_titulacion': 'MIA' }], true),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 51, 64, 'ADD', [{ 'alumnograduacion_titulacion': 'PCEO' }], true),

    // EDIT
    Array('alumnograduacion', 'alumnograduacion_titulacion', 52, 65, 'EDIT', [{ 'alumnograduacion_titulacion': '' }], true),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 53, 66, 'EDIT', [{ 'alumnograduacion_titulacion': 'INVALID' }], 'titulacion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 54, 67, 'EDIT', [{ 'alumnograduacion_titulacion': 'MEI' }], true),

    // SEARCH
    Array('alumnograduacion', 'alumnograduacion_titulacion', 55, 68, 'SEARCH', [{ 'alumnograduacion_titulacion': 'GREI' }], true),
    Array('alumnograduacion', 'alumnograduacion_titulacion', 56, 69, 'SEARCH', [{ 'alumnograduacion_titulacion': 'Z' }], 'titulacion_search_format_KO'),

    // alumnograduacion_dni - dni/nie formato nif o nie con letras válidas para los números
    //ADD
    Array('alumnograduacion', 'alumnograduacion_dni', 57, 70, 'ADD', [{ 'alumnograduacion_dni': '' }], 'dni_obligatorio_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 58, 71, 'ADD', [{ 'alumnograduacion_dni': '12345678' }], 'dni_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 59, 72, 'ADD', [{ 'alumnograduacion_dni': '1234567A9' }], 'dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 60, 73, 'ADD', [{ 'alumnograduacion_dni': 'X12345678' }], 'nie_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 61, 74, 'ADD', [{ 'alumnograduacion_dni': '12345A678' }], 'dni_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 62, 75, 'ADD', [{ 'alumnograduacion_dni': '12345678A' }], 'dni_letra_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 63, 76, 'ADD', [{ 'alumnograduacion_dni': 'X1234567A' }], 'nie_letra_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 64, 77, 'ADD', [{ 'alumnograduacion_dni': '12345678Z' }], true),
    Array('alumnograduacion', 'alumnograduacion_dni', 65, 78, 'ADD', [{ 'alumnograduacion_dni': 'X1234567L' }], true),

    // EDIT
    Array('alumnograduacion', 'alumnograduacion_dni', 66, 79, 'EDIT', [{ 'alumnograduacion_dni': '' }], 'dni_obligatorio_KO'),
    Array('alumnograduacion', 'alumnograduacion_dni', 67, 80, 'EDIT', [{ 'alumnograduacion_dni': '12345678Z' }], true),

    // SEARCH
    Array('alumnograduacion', 'alumnograduacion_dni', 68, 81, 'SEARCH', [{ 'alumnograduacion_dni': '12345678Z' }], true),
    Array('alumnograduacion', 'alumnograduacion_dni', 69, 82, 'SEARCH', [{ 'alumnograduacion_dni': '12345678' }], 'dni_search_format_KO'),

    // alumnograduacion_telefono - telefono 9 digitos 0-9
    //ADD
    Array('alumnograduacion', 'alumnograduacion_telefono', 70, 83, 'ADD', [{ 'alumnograduacion_telefono': '' }], 'telefono_obligatorio_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 71, 84, 'ADD', [{ 'alumnograduacion_telefono': '12345678' }], 'telefono_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 72, 85, 'ADD', [{ 'alumnograduacion_telefono': '123abc789' }], 'telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 73, 86, 'ADD', [{ 'alumnograduacion_telefono': '123456789' }], true),

    // EDIT
    Array('alumnograduacion', 'alumnograduacion_telefono', 74, 87, 'EDIT', [{ 'alumnograduacion_telefono': '' }], true),
    Array('alumnograduacion', 'alumnograduacion_telefono', 75, 88, 'EDIT', [{ 'alumnograduacion_telefono': '12345678' }], 'telefono_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 76, 89, 'EDIT', [{ 'alumnograduacion_telefono': '123abc789' }], 'telefono_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_telefono', 76, 90, 'EDIT', [{ 'alumnograduacion_telefono': '987654321' }], true),

    // SEARCH
    Array('alumnograduacion', 'alumnograduacion_telefono', 77, 91, 'SEARCH', [{ 'alumnograduacion_telefono': '123' }], true),
    Array('alumnograduacion', 'alumnograduacion_telefono', 78, 92, 'SEARCH', [{ 'alumnograduacion_telefono': '12a' }], 'telefono_search_format_KO'),

    // alumnograduacion_direccion - direccion alfanuméricos con acentos y ñ , max 100
    //ADD
    Array('alumnograduacion', 'alumnograduacion_direccion', 79, 93, 'ADD', [{ 'alumnograduacion_direccion': '' }], 'direccion_obligatorio_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 80, 94, 'ADD', [{ 'alumnograduacion_direccion': 'a'.repeat(101) }], 'direccion_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 81, 95, 'ADD', [{ 'alumnograduacion_direccion': 'Calle@Mayor' }], 'direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 82, 96, 'ADD', [{ 'alumnograduacion_direccion': 'Calle Mayor 123' }], true),

    // EDIT
    Array('alumnograduacion', 'alumnograduacion_direccion', 83, 97, 'EDIT', [{ 'alumnograduacion_direccion': '' }], true),
    Array('alumnograduacion', 'alumnograduacion_direccion', 84, 98, 'EDIT', [{ 'alumnograduacion_direccion': 'a'.repeat(101) }], 'direccion_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 85, 99, 'EDIT', [{ 'alumnograduacion_direccion': 'Calle@Edit' }], 'direccion_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_direccion', 85, 100, 'EDIT', [{ 'alumnograduacion_direccion': 'Calle Edit 123' }], true),

    // SEARCH
    Array('alumnograduacion', 'alumnograduacion_direccion', 86, 101, 'SEARCH', [{ 'alumnograduacion_direccion': 'Calle' }], true),
    Array('alumnograduacion', 'alumnograduacion_direccion', 87, 102, 'SEARCH', [{ 'alumnograduacion_direccion': 'Calle@' }], 'direccion_search_format_KO'),

    // alumnograduacion_email - email formato email max 40
    //ADD
    Array('alumnograduacion', 'alumnograduacion_email', 88, 103, 'ADD', [{ 'alumnograduacion_email': '' }], 'email_obligatorio_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 89, 104, 'ADD', [{ 'alumnograduacion_email': 'a'.repeat(41) }], 'email_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 90, 105, 'ADD', [{ 'alumnograduacion_email': 'usuario@ejemplo' }], 'email_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 91, 106, 'ADD', [{ 'alumnograduacion_email': 'usuario@ejemplo.com' }], true),

    // EDIT
    Array('alumnograduacion', 'alumnograduacion_email', 92, 107, 'EDIT', [{ 'alumnograduacion_email': '' }], true),
    Array('alumnograduacion', 'alumnograduacion_email', 93, 108, 'EDIT', [{ 'alumnograduacion_email': 'a'.repeat(41) }], 'email_max_size_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 94, 109, 'EDIT', [{ 'alumnograduacion_email': 'usuario@ejemplo' }], 'email_format_KO'),
    Array('alumnograduacion', 'alumnograduacion_email', 94, 110, 'EDIT', [{ 'alumnograduacion_email': 'edit@universidad.es' }], true),

    // SEARCH
    Array('alumnograduacion', 'alumnograduacion_email', 95, 111, 'SEARCH', [{ 'alumnograduacion_email': '@universidad' }], true),
    Array('alumnograduacion', 'alumnograduacion_email', 96, 112, 'SEARCH', [{ 'alumnograduacion_email': 'usuario#' }], 'email_search_format_KO'),

    // nuevo_alumnograduacion_fotoacto (campo file para subida) - alfabéticos (sin acentos ni ñ ni espacios) y ".", Min 7 max 40 , solo .jpg y tamaño fichero menor que 2000000 bytes
    //ADD
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 97, 113, 'SEARCH', [{ 'alumnograduacion_fotoacto': 'foto' }], true),
    Array('alumnograduacion', 'alumnograduacion_fotoacto', 98, 114, 'SEARCH', [{ 'alumnograduacion_fotoacto': 'fotoñ' }], 'fotoacto_search_format_KO')
);

//////////////////// PRUEBAS FILE ///////////////////

/*
 Formato 8 campos: 'Entidad' 'Campo' 'Nº Def_text' 'Nº prueba' 'accion' 'parámetro_aProbar' 'valores_parámetro_aProbar' 'codError/true'
*/

let alumnograduacion_tests_files = Array(
    // nuevo_alumnograduacion_fotoacto 
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 99, 1, 'ADD', 'not_exist_file', [], 'fotoacto_obligatorio_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 100, 2, 'ADD', 'not_exist_file', [], 'fotoacto_not_exist_file_KO'),

    // ADD - Validación nombre archivo
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 101, 3, 'ADD', 'format_name_file', [{ 'format_name_file': 'fotoñ.jpg' }], 'fotoacto_format_name_file_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 101, 4, 'ADD', 'format_name_file', [{ 'format_name_file': 'foto con espacios.jpg' }], 'fotoacto_format_name_file_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 101, 5, 'ADD', 'format_name_file', [{ 'format_name_file': 'foto@.jpg' }], 'fotoacto_format_name_file_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 101, 6, 'ADD', 'format_name_file', [{ 'format_name_file': 'foto123.jpg' }], 'fotoacto_format_name_file_KO'),

    // ADD - Validación tipo archivo
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 102, 7, 'ADD', 'type_file', [{ 'type_file': 'image/png' }], 'fotoacto_type_file_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 102, 8, 'ADD', 'type_file', [{ 'type_file': 'application/pdf' }], 'fotoacto_type_file_KO'),

    // ADD - Validación tamaño archivo
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 103, 9, 'ADD', 'max_size_file', [{ 'max_size_file': 2000001 }], 'fotoacto_max_size_file_KO'),

    // ADD - Validación tamaño nombre archivo
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 104, 10, 'ADD', 'min_size_name', [{ 'format_name_file': 'a.jpg' }], 'fotoacto_min_size_name_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 105, 11, 'ADD', 'max_size_name', [{ 'format_name_file': 'a'.repeat(41) }], 'fotoacto_max_size_name_KO'),

    // ADD - Archivos válidos
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 106, 12, 'ADD', 'valid_file', [{ 'format_name_file': 'fotoabcd.jpg' }, { 'type_file': 'image/jpeg' }, { 'max_size_file': 1500000 }], true),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 106, 13, 'ADD', 'valid_file', [{ 'format_name_file': 'imagenABC.jpg' }, { 'type_file': 'image/jpeg' }, { 'max_size_file': 2000000 }], true),

    // EDIT - Campo opcional
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 107, 14, 'EDIT', 'not_exist_file', [], true),

    // EDIT - Si tiene archivo, debe ser válido
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 108, 15, 'EDIT', 'format_name_file', [{ 'format_name_file': 'fotoñ.jpg' }], 'fotoacto_format_name_file_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 109, 16, 'EDIT', 'type_file', [{ 'type_file': 'image/png' }], 'fotoacto_type_file_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 110, 17, 'EDIT', 'max_size_file', [{ 'max_size_file': 2000001 }], 'fotoacto_max_size_file_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 111, 18, 'EDIT', 'min_size_name', [{ 'format_name_file': 'a.jpg' }], 'fotoacto_min_size_name_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 112, 19, 'EDIT', 'max_size_name', [{ 'format_name_file': 'a'.repeat(41) }], 'fotoacto_max_size_name_KO'),
    Array('alumnograduacion', 'nuevo_alumnograduacion_fotoacto', 112, 20, 'EDIT', 'valid_file', [{ 'format_name_file': 'nuevafoto.jpg' }, { 'type_file': 'image/jpeg' }, { 'max_size_file': 1000000 }], true)
);


//////////////////////definiciones articulo/////////////////////////
let articulo_def_tests = Array(
    // CodigoA - autoincremental numérico, max 11
    //ADD
    Array('articulo', 'CodigoA', 'input', 1, 'campo autoincremental vacío es válido', 'ADD', true, 'Código correcto'),
    Array('articulo', 'CodigoA', 'input', 2, 'formato numérico si tiene valor', 'ADD', 'codigo_format_KO', 'Formato inválido. Solo números'),
    Array('articulo', 'CodigoA', 'input', 3, 'es correcto', 'ADD', true, 'Código correcto'),
    //EDIT
    Array('articulo', 'CodigoA', 'input', 4, 'campo obligatorio en EDIT', 'EDIT', 'codigo_min_size_KO', 'Código obligatorio'),
    Array('articulo', 'CodigoA', 'input', 5, 'formato numérico', 'EDIT', 'codigo_format_KO', 'Formato inválido. Solo números'),
    Array('articulo', 'CodigoA', 'input', 6, 'es correcto', 'EDIT', true, 'Código correcto'),
    //SEARCH
    Array('articulo', 'CodigoA', 'input', 7, 'búsqueda por patrón numérico válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('articulo', 'CodigoA', 'input', 8, 'búsqueda por patrón no numérico', 'SEARCH', 'codigo_search_format_KO', 'Formato de búsqueda inválido. Solo números'),

    // AutoresA - texto, alfabéticos con acentos, ñ y espacios, min 2 max 200
    //ADD
    Array('articulo', 'AutoresA', 'textarea', 9, 'cumple tamaño minimo', 'ADD', 'autores_min_size_KO', 'Tamaño muy corto. Debe estar entre 2 y 200 caracteres'),
    Array('articulo', 'AutoresA', 'textarea', 10, 'cumple tamaño maximo', 'ADD', 'autores_max_size_KO', 'Tamaño muy grande. Debe estar entre 2 y 200 caracteres'),
    Array('articulo', 'AutoresA', 'textarea', 11, 'cumple formato', 'ADD', 'autores_format_KO', 'Formato inválido. Solo letras, espacios, ñ y acentos'),
    Array('articulo', 'AutoresA', 'textarea', 12, 'es correcto', 'ADD', true, 'Autores correctos'),
    //EDIT
    Array('articulo', 'AutoresA', 'textarea', 13, 'campo vacío es válido', 'EDIT', true, 'Autores correctos'),
    Array('articulo', 'AutoresA', 'textarea', 14, 'cumple tamaño minimo si tiene valor', 'EDIT', 'autores_min_size_KO', 'Tamaño muy corto. Debe estar entre 2 y 200 caracteres'),
    Array('articulo', 'AutoresA', 'textarea', 15, 'cumple tamaño maximo si tiene valor', 'EDIT', 'autores_max_size_KO', 'Tamaño muy grande. Debe estar entre 2 y 200 caracteres'),
    Array('articulo', 'AutoresA', 'textarea', 16, 'cumple formato si tiene valor', 'EDIT', 'autores_format_KO', 'Formato inválido. Solo letras, espacios, ñ y acentos'),
    //SEARCH
    Array('articulo', 'AutoresA', 'textarea', 17, 'búsqueda por patrón válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('articulo', 'AutoresA', 'textarea', 18, 'búsqueda por patrón inválido', 'SEARCH', 'autores_search_format_KO', 'Formato de búsqueda inválido. Solo letras, espacios, ñ y acentos'),

    // TituloA - texto, alfanumérico, min 1 max 100
    //ADD
    Array('articulo', 'TituloA', 'input', 19, 'cumple tamaño minimo', 'ADD', 'tituloA_min_size_KO', 'Tamaño muy corto. Mínimo 1 caracter'),
    Array('articulo', 'TituloA', 'input', 20, 'cumple tamaño maximo', 'ADD', 'tituloA_max_size_KO', 'Tamaño muy grande. Máximo 100 caracteres'),
    Array('articulo', 'TituloA', 'input', 21, 'es correcto', 'ADD', true, 'Título artículo correcto'),
    //EDIT
    Array('articulo', 'TituloA', 'input', 22, 'campo vacío es válido', 'EDIT', true, 'Título artículo correcto'),
    Array('articulo', 'TituloA', 'input', 23, 'cumple tamaño minimo si tiene valor', 'EDIT', 'tituloA_min_size_KO', 'Tamaño muy corto. Mínimo 1 caracter'),
    Array('articulo', 'TituloA', 'input', 24, 'cumple tamaño maximo si tiene valor', 'EDIT', 'tituloA_max_size_KO', 'Tamaño muy grande. Máximo 100 caracteres'),
    //SEARCH
    Array('articulo', 'TituloA', 'input', 25, 'búsqueda por patrón válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('articulo', 'TituloA', 'input', 26, 'búsqueda por patrón inválido', 'SEARCH', 'tituloA_search_format_KO', 'Formato de búsqueda inválido. Solo caracteres alfanuméricos'),

    // TituloR - texto, alfanumérico, min 1 max 100
    //ADD
    Array('articulo', 'TituloR', 'input', 27, 'cumple tamaño minimo', 'ADD', 'tituloR_min_size_KO', 'Tamaño muy corto. Mínimo 1 caracter'),
    Array('articulo', 'TituloR', 'input', 28, 'cumple tamaño maximo', 'ADD', 'tituloR_max_size_KO', 'Tamaño muy grande. Máximo 100 caracteres'),
    Array('articulo', 'TituloR', 'input', 29, 'es correcto', 'ADD', true, 'Título revista correcto'),
    //EDIT
    Array('articulo', 'TituloR', 'input', 30, 'campo vacío es válido', 'EDIT', true, 'Título revista correcto'),
    Array('articulo', 'TituloR', 'input', 31, 'cumple tamaño minimo si tiene valor', 'EDIT', 'tituloR_min_size_KO', 'Tamaño muy corto. Mínimo 1 caracter'),
    Array('articulo', 'TituloR', 'input', 32, 'cumple tamaño maximo si tiene valor', 'EDIT', 'tituloR_max_size_KO', 'Tamaño muy grande. Máximo 100 caracteres'),
    //SEARCH
    Array('articulo', 'TituloR', 'input', 33, 'búsqueda por patrón válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('articulo', 'TituloR', 'input', 34, 'búsqueda por patrón inválido', 'SEARCH', 'tituloR_search_format_KO', 'Formato de búsqueda inválido. Solo caracteres alfanuméricos'),

    // ISSN - formato xxxx-xxxx , "{0-9}4-{0-9}4" max 9
    //ADD
    Array('articulo', 'ISSN', 'input', 35, 'longitud exacta', 'ADD', 'issn_size_KO', 'Longitud incorrecta. Debe tener 9 caracteres'),
    Array('articulo', 'ISSN', 'input', 36, 'formato válido', 'ADD', 'issn_format_KO', 'Formato inválido. Debe ser 1234-5678'),
    Array('articulo', 'ISSN', 'input', 37, 'es correcto', 'ADD', true, 'ISSN correcto'),
    //EDIT
    Array('articulo', 'ISSN', 'input', 38, 'campo vacío es válido', 'EDIT', true, 'ISSN correcto'),
    Array('articulo', 'ISSN', 'input', 39, 'longitud exacta si tiene valor', 'EDIT', 'issn_size_KO', 'Longitud incorrecta. Debe tener 9 caracteres'),
    Array('articulo', 'ISSN', 'input', 40, 'formato válido si tiene valor', 'EDIT', 'issn_format_KO', 'Formato inválido. Debe ser 1234-5678'),
    //SEARCH
    Array('articulo', 'ISSN', 'input', 41, 'búsqueda por valor exacto válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('articulo', 'ISSN', 'input', 42, 'búsqueda por formato inválido', 'SEARCH', 'issn_search_format_KO', 'Formato de búsqueda inválido. Debe ser ISSN válido'),

    // VolumenR - numérico positivo, min 1, max 4
    //ADD
    Array('articulo', 'VolumenR', 'input', 43, 'número positivo', 'ADD', 'volumen_positivo_KO', 'Debe ser un número positivo'),
    Array('articulo', 'VolumenR', 'input', 44, 'tamaño máximo', 'ADD', 'volumen_max_size_KO', 'Tamaño muy grande. Máximo 4 dígitos'),
    Array('articulo', 'VolumenR', 'input', 45, 'es correcto', 'ADD', true, 'Volumen correcto'),
    //EDIT
    Array('articulo', 'VolumenR', 'input', 46, 'campo vacío es válido', 'EDIT', true, 'Volumen correcto'),
    Array('articulo', 'VolumenR', 'input', 47, 'número positivo si tiene valor', 'EDIT', 'volumen_positivo_KO', 'Debe ser un número positivo'),
    Array('articulo', 'VolumenR', 'input', 48, 'tamaño máximo si tiene valor', 'EDIT', 'volumen_max_size_KO', 'Tamaño muy grande. Máximo 4 dígitos'),
    //SEARCH
    Array('articulo', 'VolumenR', 'input', 49, 'búsqueda por patrón numérico válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('articulo', 'VolumenR', 'input', 50, 'búsqueda por patrón no numérico', 'SEARCH', 'volumen_search_format_KO', 'Formato de búsqueda inválido. Solo números'),

    // PagIniA - numérico, positivo, min 1 , max 4
    //ADD
    Array('articulo', 'PagIniA', 'input', 51, 'número positivo', 'ADD', 'pagIni_positivo_KO', 'Debe ser un número positivo'),
    Array('articulo', 'PagIniA', 'input', 52, 'tamaño máximo', 'ADD', 'pagIni_max_size_KO', 'Tamaño muy grande. Máximo 4 dígitos'),
    Array('articulo', 'PagIniA', 'input', 53, 'es correcto', 'ADD', true, 'Página inicial correcta'),
    //EDIT
    Array('articulo', 'PagIniA', 'input', 54, 'campo vacío es válido', 'EDIT', true, 'Página inicial correcta'),
    Array('articulo', 'PagIniA', 'input', 55, 'número positivo si tiene valor', 'EDIT', 'pagIni_positivo_KO', 'Debe ser un número positivo'),
    Array('articulo', 'PagIniA', 'input', 56, 'tamaño máximo si tiene valor', 'EDIT', 'pagIni_max_size_KO', 'Tamaño muy grande. Máximo 4 dígitos'),
    //SEARCH
    Array('articulo', 'PagIniA', 'input', 57, 'búsqueda por patrón numérico válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('articulo', 'PagIniA', 'input', 58, 'búsqueda por patrón no numérico', 'SEARCH', 'pagIni_search_format_KO', 'Formato de búsqueda inválido. Solo números'),

    // PagFinA - numérico, positivo, mayor o igual que PagIniA , max 4
    //ADD
    Array('articulo', 'PagFinA', 'input', 59, 'número positivo', 'ADD', 'pagFin_positivo_KO', 'Debe ser un número positivo'),
    Array('articulo', 'PagFinA', 'input', 60, 'tamaño máximo', 'ADD', 'pagFin_max_size_KO', 'Tamaño muy grande. Máximo 4 dígitos'),
    Array('articulo', 'PagFinA', 'input', 61, 'mayor o igual que página inicial', 'ADD', 'pagFin_mayor_igual_KO', 'Debe ser mayor o igual que la página inicial'),
    Array('articulo', 'PagFinA', 'input', 62, 'es correcto', 'ADD', true, 'Página final correcta'),
    //EDIT
    Array('articulo', 'PagFinA', 'input', 63, 'campo vacío es válido', 'EDIT', true, 'Página final correcta'),
    Array('articulo', 'PagFinA', 'input', 64, 'número positivo si tiene valor', 'EDIT', 'pagFin_positivo_KO', 'Debe ser un número positivo'),
    Array('articulo', 'PagFinA', 'input', 65, 'tamaño máximo si tiene valor', 'EDIT', 'pagFin_max_size_KO', 'Tamaño muy grande. Máximo 4 dígitos'),
    Array('articulo', 'PagFinA', 'input', 66, 'mayor o igual que página inicial si tiene valor', 'EDIT', 'pagFin_mayor_igual_KO', 'Debe ser mayor o igual que la página inicial'),
    //SEARCH
    Array('articulo', 'PagFinA', 'input', 67, 'búsqueda por patrón numérico válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('articulo', 'PagFinA', 'input', 68, 'búsqueda por patrón no numérico', 'SEARCH', 'pagFin_search_format_KO', 'Formato de búsqueda inválido. Solo números'),

    // FechaPublicacionR - fecha, obligatorio '0000-00-00'
    //ADD
    Array('articulo', 'FechaPublicacionR', 'input', 69, 'formato fecha válido', 'ADD', 'fecha_format_KO', 'Formato fecha inválido. Debe ser AAAA-MM-DD'),
    Array('articulo', 'FechaPublicacionR', 'input', 70, 'es correcto', 'ADD', true, 'Fecha correcta'),
    //EDIT
    Array('articulo', 'FechaPublicacionR', 'input', 71, 'campo vacío es válido', 'EDIT', true, 'Fecha correcta'),
    Array('articulo', 'FechaPublicacionR', 'input', 72, 'formato fecha válido si tiene valor', 'EDIT', 'fecha_format_KO', 'Formato fecha inválido. Debe ser AAAA-MM-DD'),
    //SEARCH
    Array('articulo', 'FechaPublicacionR', 'input', 73, 'búsqueda por patrón fecha válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('articulo', 'FechaPublicacionR', 'input', 74, 'búsqueda por patrón fecha inválido', 'SEARCH', 'fecha_search_format_KO', 'Formato de búsqueda inválido. Solo números y guiones'),

    // EstadoA - valores posibles: 'Enviado','Revision','Publicado'
    //ADD
    Array('articulo', 'EstadoA', 'radio', 75, 'valor permitido', 'ADD', 'estado_format_KO', 'Valor no permitido. Debe ser Enviado, Revisión o Publicado'),
    Array('articulo', 'EstadoA', 'radio', 76, 'es correcto', 'ADD', true, 'Estado correcto'),
    //EDIT
    Array('articulo', 'EstadoA', 'radio', 77, 'campo vacío es válido', 'EDIT', true, 'Estado correcto'),
    Array('articulo', 'EstadoA', 'radio', 78, 'valor permitido si tiene valor', 'EDIT', 'estado_format_KO', 'Valor no permitido. Debe ser Enviado, Revisión o Publicado'),
    //SEARCH
    Array('articulo', 'EstadoA', 'radio', 79, 'búsqueda por valor exacto válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('articulo', 'EstadoA', 'radio', 80, 'búsqueda por valor no permitido', 'SEARCH', 'estado_search_format_KO', 'Valor de búsqueda no permitido. Debe ser Enviado, Revisión o Publicado'),

    // FicheropdfA - SOLO para SEARCH - alfabéticos (sin acentos ni ñ ni espacios) y ".", Min 7 max 20
    Array('articulo', 'FicheropdfA', 'input', 81, 'búsqueda por nombre archivo válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('articulo', 'FicheropdfA', 'input', 82, 'búsqueda por nombre archivo inválido', 'SEARCH', 'ficheropdf_search_format_KO', 'Formato de búsqueda inválido. Solo letras sin acentos ni ñ ni espacios y punto'),

    // nuevo_FicheropdfA (campo file para subida) - alfabéticos (sin acentos ni ñ ni espacios) y ".", Min 7 max 20 , solo pdf y tamaño fichero menor que 2000000 bytes
    //ADD
    Array('articulo', 'nuevo_FicheropdfA', 'file', 83, 'existe fichero', 'ADD', 'ficheropdf_min_size_KO', 'El fichero no existe. Debe subir un PDF'),
    Array('articulo', 'nuevo_FicheropdfA', 'file', 84, 'cumple nombre fichero', 'ADD', 'ficheropdf_format_name_file_KO', 'El nombre de fichero no cumple formato'),
    Array('articulo', 'nuevo_FicheropdfA', 'file', 85, 'cumple tipo fichero', 'ADD', 'ficheropdf_type_file_KO', 'El tipo de fichero no está permitido'),
    Array('articulo', 'nuevo_FicheropdfA', 'file', 86, 'cumple tamaño máximo fichero', 'ADD', 'ficheropdf_max_size_file_KO', 'El tamaño del fichero es muy grande'),
    Array('articulo', 'nuevo_FicheropdfA', 'file', 87, 'cumple tamaño mínimo nombre fichero', 'ADD', 'ficheropdf_min_size_name_KO', 'El tamaño del nombre de fichero es muy pequeño'),
    Array('articulo', 'nuevo_FicheropdfA', 'file', 88, 'cumple tamaño máximo nombre fichero', 'ADD', 'ficheropdf_max_size_name_KO', 'El tamaño del nombre de fichero es muy grande'),
    Array('articulo', 'nuevo_FicheropdfA', 'file', 89, 'fichero ok', 'ADD', true, 'OK'),
    //EDIT
    Array('articulo', 'nuevo_FicheropdfA', 'file', 90, 'campo vacío es válido', 'EDIT', true, 'OK'),
    Array('articulo', 'nuevo_FicheropdfA', 'file', 91, 'cumple nombre fichero si tiene valor', 'EDIT', 'ficheropdf_format_name_file_KO', 'El nombre de fichero no cumple formato'),
    Array('articulo', 'nuevo_FicheropdfA', 'file', 92, 'cumple tipo fichero si tiene valor', 'EDIT', 'ficheropdf_type_file_KO', 'El tipo de fichero no está permitido'),
    Array('articulo', 'nuevo_FicheropdfA', 'file', 93, 'cumple tamaño máximo fichero si tiene valor', 'EDIT', 'ficheropdf_max_size_file_KO', 'El tamaño del fichero es muy grande'),
    Array('articulo', 'nuevo_FicheropdfA', 'file', 94, 'cumple tamaño mínimo nombre fichero si tiene valor', 'EDIT', 'ficheropdf_min_size_name_KO', 'El tamaño del nombre de fichero es muy pequeño'),
    Array('articulo', 'nuevo_FicheropdfA', 'file', 95, 'cumple tamaño máximo nombre fichero si tiene valor', 'EDIT', 'ficheropdf_max_size_name_KO', 'El tamaño del nombre de fichero es muy grande')
);

////////////////////pruebas no file articulo///////////////////
let articulo_tests_fields = Array(
    // CodigoA - ADD
    Array('articulo', 'CodigoA', 1, 1, 'ADD', [{ 'CodigoA': '' }], true),
    Array('articulo', 'CodigoA', 2, 2, 'ADD', [{ 'CodigoA': '123A' }], 'codigo_format_KO'),
    Array('articulo', 'CodigoA', 3, 3, 'ADD', [{ 'CodigoA': '12345' }], true),
    //EDIT
    Array('articulo', 'CodigoA', 4, 4, 'EDIT', [{ 'CodigoA': '' }], 'codigo_min_size_KO'),
    Array('articulo', 'CodigoA', 5, 5, 'EDIT', [{ 'CodigoA': '123A' }], 'codigo_format_KO'),
    Array('articulo', 'CodigoA', 6, 6, 'EDIT', [{ 'CodigoA': '12345' }], true),
    //SEARCH
    Array('articulo', 'CodigoA', 7, 7, 'SEARCH', [{ 'CodigoA': '123' }], true),
    Array('articulo', 'CodigoA', 8, 8, 'SEARCH', [{ 'CodigoA': '12A' }], 'codigo_search_format_KO'),

    // AutoresA - ADD
    Array('articulo', 'AutoresA', 9, 9, 'ADD', [{ 'AutoresA': 'A' }], 'autores_min_size_KO'),
    Array('articulo', 'AutoresA', 10, 10, 'ADD', [{ 'AutoresA': 'a'.repeat(201) }], 'autores_max_size_KO'),
    Array('articulo', 'AutoresA', 11, 11, 'ADD', [{ 'AutoresA': 'Autor123' }], 'autores_format_KO'),
    Array('articulo', 'AutoresA', 11, 12, 'ADD', [{ 'AutoresA': 'Autor@' }], 'autores_format_KO'),
    Array('articulo', 'AutoresA', 12, 13, 'ADD', [{ 'AutoresA': 'Juan Pérez' }], true),
    Array('articulo', 'AutoresA', 12, 14, 'ADD', [{ 'AutoresA': 'María García López' }], true),
    //EDIT
    Array('articulo', 'AutoresA', 13, 15, 'EDIT', [{ 'AutoresA': '' }], true),
    Array('articulo', 'AutoresA', 14, 16, 'EDIT', [{ 'AutoresA': 'A' }], 'autores_min_size_KO'),
    Array('articulo', 'AutoresA', 15, 17, 'EDIT', [{ 'AutoresA': 'a'.repeat(201) }], 'autores_max_size_KO'),
    Array('articulo', 'AutoresA', 16, 18, 'EDIT', [{ 'AutoresA': 'Autor Edit123' }], 'autores_format_KO'),
    Array('articulo', 'AutoresA', 16, 19, 'EDIT', [{ 'AutoresA': 'Ana Martínez' }], true),
    //SEARCH
    Array('articulo', 'AutoresA', 17, 20, 'SEARCH', [{ 'AutoresA': 'Pérez' }], true),
    Array('articulo', 'AutoresA', 18, 21, 'SEARCH', [{ 'AutoresA': ';' }], 'autores_search_format_KO'),

    // TituloA - ADD
    Array('articulo', 'TituloA', 19, 22, 'ADD', [{ 'TituloA': '' }], 'tituloA_min_size_KO'),
    Array('articulo', 'TituloA', 20, 23, 'ADD', [{ 'TituloA': 'a'.repeat(101) }], 'tituloA_max_size_KO'),
    Array('articulo', 'TituloA', 21, 24, 'ADD', [{ 'TituloA': 'Análisis de Sistemas' }], true),
    Array('articulo', 'TituloA', 21, 25, 'ADD', [{ 'TituloA': 'Machine Learning 2023' }], true),
    //EDIT
    Array('articulo', 'TituloA', 22, 26, 'EDIT', [{ 'TituloA': '' }], true),
    Array('articulo', 'TituloA', 23, 27, 'EDIT', [{ 'TituloA': 'a'.repeat(101) }], 'tituloA_max_size_KO'),
    Array('articulo', 'TituloA', 24, 28, 'EDIT', [{ 'TituloA': 'Nuevo Título Editado' }], true),
    //SEARCH
    Array('articulo', 'TituloA', 25, 29, 'SEARCH', [{ 'TituloA': 'Análisis' }], true),
    Array('articulo', 'TituloA', 26, 30, 'SEARCH', [{ 'TituloA': ';' }], 'tituloA_search_format_KO'),

    // TituloR - ADD
    Array('articulo', 'TituloR', 27, 31, 'ADD', [{ 'TituloR': '' }], 'tituloR_min_size_KO'),
    Array('articulo', 'TituloR', 28, 32, 'ADD', [{ 'TituloR': 'a'.repeat(101) }], 'tituloR_max_size_KO'),
    Array('articulo', 'TituloR', 29, 33, 'ADD', [{ 'TituloR': 'Journal of Science' }], true),
    Array('articulo', 'TituloR', 29, 34, 'ADD', [{ 'TituloR': 'IEEE Transactions' }], true),
    //EDIT
    Array('articulo', 'TituloR', 30, 35, 'EDIT', [{ 'TituloR': '' }], true),
    Array('articulo', 'TituloR', 31, 36, 'EDIT', [{ 'TituloR': 'a'.repeat(101) }], 'tituloR_max_size_KO'),
    Array('articulo', 'TituloR', 32, 37, 'EDIT', [{ 'TituloR': 'Revista Editada' }], true),
    //SEARCH
    Array('articulo', 'TituloR', 33, 38, 'SEARCH', [{ 'TituloR': 'Journal' }], true),
    Array('articulo', 'TituloR', 34, 39, 'SEARCH', [{ 'TituloR': ';' }], 'tituloR_search_format_KO'),

    // ISSN - ADD
    Array('articulo', 'ISSN', 35, 40, 'ADD', [{ 'ISSN': '12345678' }], 'issn_size_KO'),
    Array('articulo', 'ISSN', 35, 41, 'ADD', [{ 'ISSN': '1234567890' }], 'issn_size_KO'),
    Array('articulo', 'ISSN', 36, 42, 'ADD', [{ 'ISSN': '1234-56A8' }], 'issn_format_KO'),
    Array('articulo', 'ISSN', 36, 43, 'ADD', [{ 'ISSN': 'AAAA-BBBB' }], 'issn_format_KO'),
    Array('articulo', 'ISSN', 37, 44, 'ADD', [{ 'ISSN': '1234-5678' }], true),
    Array('articulo', 'ISSN', 37, 45, 'ADD', [{ 'ISSN': '9876-5432' }], true),
    //EDIT
    Array('articulo', 'ISSN', 38, 46, 'EDIT', [{ 'ISSN': '' }], true),
    Array('articulo', 'ISSN', 39, 47, 'EDIT', [{ 'ISSN': '12345678' }], 'issn_size_KO'),
    Array('articulo', 'ISSN', 40, 48, 'EDIT', [{ 'ISSN': '1234-56A8' }], 'issn_format_KO'),
    Array('articulo', 'ISSN', 40, 49, 'EDIT', [{ 'ISSN': '5555-6666' }], true),
    //SEARCH
    Array('articulo', 'ISSN', 41, 50, 'SEARCH', [{ 'ISSN': '1234-5678' }], true),
    Array('articulo', 'ISSN', 42, 51, 'SEARCH', [{ 'ISSN': ';' }], 'issn_search_format_KO'),

    // VolumenR - ADD
    Array('articulo', 'VolumenR', 43, 52, 'ADD', [{ 'VolumenR': '0' }], 'volumen_positivo_KO'),
    Array('articulo', 'VolumenR', 43, 53, 'ADD', [{ 'VolumenR': '-1' }], 'volumen_positivo_KO'),
    Array('articulo', 'VolumenR', 44, 54, 'ADD', [{ 'VolumenR': '12345' }], 'volumen_max_size_KO'),
    Array('articulo', 'VolumenR', 45, 55, 'ADD', [{ 'VolumenR': '12' }], true),
    Array('articulo', 'VolumenR', 45, 56, 'ADD', [{ 'VolumenR': '5' }], true),
    //EDIT
    Array('articulo', 'VolumenR', 46, 57, 'EDIT', [{ 'VolumenR': '' }], true),
    Array('articulo', 'VolumenR', 47, 58, 'EDIT', [{ 'VolumenR': '0' }], 'volumen_positivo_KO'),
    Array('articulo', 'VolumenR', 48, 59, 'EDIT', [{ 'VolumenR': '12345' }], 'volumen_max_size_KO'),
    Array('articulo', 'VolumenR', 48, 60, 'EDIT', [{ 'VolumenR': '8' }], true),
    //SEARCH
    Array('articulo', 'VolumenR', 49, 61, 'SEARCH', [{ 'VolumenR': '1' }], true),
    Array('articulo', 'VolumenR', 50, 62, 'SEARCH', [{ 'VolumenR': 'la' }], 'volumen_search_format_KO'),

    // PagIniA - ADD
    Array('articulo', 'PagIniA', 51, 63, 'ADD', [{ 'PagIniA': '0' }], 'pagIni_positivo_KO'),
    Array('articulo', 'PagIniA', 51, 64, 'ADD', [{ 'PagIniA': '-5' }], 'pagIni_positivo_KO'),
    Array('articulo', 'PagIniA', 52, 65, 'ADD', [{ 'PagIniA': '12345' }], 'pagIni_max_size_KO'),
    Array('articulo', 'PagIniA', 53, 66, 'ADD', [{ 'PagIniA': '15' }], true),
    Array('articulo', 'PagIniA', 53, 67, 'ADD', [{ 'PagIniA': '1' }], true),
    //EDIT
    Array('articulo', 'PagIniA', 54, 68, 'EDIT', [{ 'PagIniA': '' }], true),
    Array('articulo', 'PagIniA', 55, 69, 'EDIT', [{ 'PagIniA': '0' }], 'pagIni_positivo_KO'),
    Array('articulo', 'PagIniA', 56, 70, 'EDIT', [{ 'PagIniA': '12345' }], 'pagIni_max_size_KO'),
    Array('articulo', 'PagIniA', 56, 71, 'EDIT', [{ 'PagIniA': '25' }], true),
    //SEARCH
    Array('articulo', 'PagIniA', 57, 72, 'SEARCH', [{ 'PagIniA': '1' }], true),
    Array('articulo', 'PagIniA', 58, 73, 'SEARCH', [{ 'PagIniA': ';' }], 'pagIni_search_format_KO'),

    // PagFinA - ADD
    Array('articulo', 'PagFinA', 59, 74, 'ADD', [{ 'PagFinA': '0' }], 'pagFin_positivo_KO'),
    Array('articulo', 'PagFinA', 60, 75, 'ADD', [{ 'PagFinA': '12345' }], 'pagFin_max_size_KO'),
    Array('articulo', 'PagFinA', 61, 76, 'ADD', [{ 'PagIniA': '10' }, { 'PagFinA': '5' }], 'pagFin_mayor_igual_KO'),
    Array('articulo', 'PagFinA', 62, 77, 'ADD', [{ 'PagIniA': '10' }, { 'PagFinA': '15' }], true),
    Array('articulo', 'PagFinA', 62, 78, 'ADD', [{ 'PagIniA': '5' }, { 'PagFinA': '5' }], true),
    //EDIT
    Array('articulo', 'PagFinA', 63, 79, 'EDIT', [{ 'PagFinA': '' }], true),
    Array('articulo', 'PagFinA', 64, 80, 'EDIT', [{ 'PagFinA': '0' }], 'pagFin_positivo_KO'),
    Array('articulo', 'PagFinA', 65, 81, 'EDIT', [{ 'PagFinA': '12345' }], 'pagFin_max_size_KO'),
    Array('articulo', 'PagFinA', 66, 82, 'EDIT', [{ 'PagIniA': '20' }, { 'PagFinA': '15' }], 'pagFin_mayor_igual_KO'),
    Array('articulo', 'PagFinA', 66, 83, 'EDIT', [{ 'PagIniA': '20' }, { 'PagFinA': '25' }], true),
    //SEARCH
    Array('articulo', 'PagFinA', 67, 84, 'SEARCH', [{ 'PagFinA': '30' }], true),
    Array('articulo', 'PagFinA', 68, 85, 'SEARCH', [{ 'PagFinA': ';' }], 'pagFin_search_format_KO'),

    // FechaPublicacionR - ADD
    Array('articulo', 'FechaPublicacionR', 69, 86, 'ADD', [{ 'FechaPublicacionR': '2023-13-01' }], 'fecha_format_KO'),
    Array('articulo', 'FechaPublicacionR', 69, 87, 'ADD', [{ 'FechaPublicacionR': '2023/01/01' }], 'fecha_format_KO'),
    Array('articulo', 'FechaPublicacionR', 70, 88, 'ADD', [{ 'FechaPublicacionR': '2023-12-01' }], true),
    Array('articulo', 'FechaPublicacionR', 70, 89, 'ADD', [{ 'FechaPublicacionR': '2024-01-15' }], true),
    //EDIT
    Array('articulo', 'FechaPublicacionR', 71, 90, 'EDIT', [{ 'FechaPublicacionR': '' }], true),
    Array('articulo', 'FechaPublicacionR', 72, 91, 'EDIT', [{ 'FechaPublicacionR': '2023-13-01' }], 'fecha_format_KO'),
    Array('articulo', 'FechaPublicacionR', 72, 92, 'EDIT', [{ 'FechaPublicacionR': '2024-06-30' }], true),
    //SEARCH
    Array('articulo', 'FechaPublicacionR', 73, 93, 'SEARCH', [{ 'FechaPublicacionR': '2023-12' }], true),
    Array('articulo', 'FechaPublicacionR', 74, 94, 'SEARCH', [{ 'FechaPublicacionR': ';' }], 'fecha_search_format_KO'),

    // EstadoA - ADD
    Array('articulo', 'EstadoA', 75, 95, 'ADD', [{ 'EstadoA': 'Pendiente' }], 'estado_format_KO'),
    Array('articulo', 'EstadoA', 76, 96, 'ADD', [{ 'EstadoA': 'Enviado' }], true),
    Array('articulo', 'EstadoA', 76, 97, 'ADD', [{ 'EstadoA': 'Revision' }], true),
    Array('articulo', 'EstadoA', 76, 98, 'ADD', [{ 'EstadoA': 'Publicado' }], true),
    //EDIT
    Array('articulo', 'EstadoA', 77, 99, 'EDIT', [{ 'EstadoA': '' }], true),
    Array('articulo', 'EstadoA', 78, 100, 'EDIT', [{ 'EstadoA': 'Aprobado' }], 'estado_format_KO'),
    Array('articulo', 'EstadoA', 78, 101, 'EDIT', [{ 'EstadoA': 'Publicado' }], true),
    //SEARCH
    Array('articulo', 'EstadoA', 79, 102, 'SEARCH', [{ 'EstadoA': 'Enviado' }], true),
    Array('articulo', 'EstadoA', 80, 103, 'SEARCH', [{ 'EstadoA': ';' }], 'estado_search_format_KO'),

    // FicheropdfA - SEARCH
    Array('articulo', 'FicheropdfA', 81, 104, 'SEARCH', [{ 'FicheropdfA': 'articulo' }], true),
    Array('articulo', 'FicheropdfA', 82, 105, 'SEARCH', [{ 'FicheropdfA': ';' }], 'ficheropdf_search_format_KO')
);

/////////////////////////////////////pruebas file articulo/////////////////////////////////
let articulo_tests_files = Array(
    // nuevo_FicheropdfA - ADD
    Array('articulo', 'nuevo_FicheropdfA', 83, 1, 'ADD', 'existe', [], 'ficheropdf_min_size_KO'),
    Array('articulo', 'nuevo_FicheropdfA', 84, 2, 'ADD', 'format_name_file', [{ 'format_name_file': 'artículo.pdf' }], 'ficheropdf_format_name_file_KO'),
    Array('articulo', 'nuevo_FicheropdfA', 84, 3, 'ADD', 'format_name_file', [{ 'format_name_file': 'articulo con espacios.pdf' }], 'ficheropdf_format_name_file_KO'),
    Array('articulo', 'nuevo_FicheropdfA', 84, 4, 'ADD', 'format_name_file', [{ 'format_name_file': 'articulo@.pdf' }], 'ficheropdf_format_name_file_KO'),
    Array('articulo', 'nuevo_FicheropdfA', 84, 5, 'ADD', 'format_name_file', [{ 'format_name_file': 'articulo123.pdf' }], 'ficheropdf_format_name_file_KO'),
    Array('articulo', 'nuevo_FicheropdfA', 85, 6, 'ADD', 'type_file', [{ 'type_file': 'image/jpeg' }], 'ficheropdf_type_file_KO'),
    Array('articulo', 'nuevo_FicheropdfA', 85, 7, 'ADD', 'type_file', [{ 'type_file': 'application/msword' }], 'ficheropdf_type_file_KO'),
    Array('articulo', 'nuevo_FicheropdfA', 86, 8, 'ADD', 'max_size_file', [{ 'max_size_file': 2000001 }], 'ficheropdf_max_size_file_KO'),
    Array('articulo', 'nuevo_FicheropdfA', 87, 9, 'ADD', 'min_size_name', [{ 'format_name_file': 'a.pdf' }], 'ficheropdf_min_size_name_KO'),
    Array('articulo', 'nuevo_FicheropdfA', 88, 10, 'ADD', 'max_size_name', [{ 'format_name_file': 'a'.repeat(21) }], 'ficheropdf_max_size_name_KO'),
    Array('articulo', 'nuevo_FicheropdfA', 89, 11, 'ADD', 'empty_file', [{ 'format_name_file': 'articuloA.pdf' }, { 'type_file': 'application/pdf' }, { 'max_size_file': 1500000 }], true),
    Array('articulo', 'nuevo_FicheropdfA', 89, 12, 'ADD', 'empty_file', [{ 'format_name_file': 'docABCDE.pdf' }, { 'type_file': 'application/pdf' }, { 'max_size_file': 2000000 }], true),

    // nuevo_FicheropdfA - EDIT
    Array('articulo', 'nuevo_FicheropdfA', 90, 13, 'EDIT', 'existe', [], true),
    Array('articulo', 'nuevo_FicheropdfA', 91, 14, 'EDIT', 'format_name_file', [{ 'format_name_file': 'nuevoñ.pdf' }], 'ficheropdf_format_name_file_KO'),
    Array('articulo', 'nuevo_FicheropdfA', 91, 15, 'EDIT', 'format_name_file', [{ 'format_name_file': 'nuevo con espacios.pdf' }], 'ficheropdf_format_name_file_KO'),
    Array('articulo', 'nuevo_FicheropdfA', 92, 16, 'EDIT', 'type_file', [{ 'type_file': 'image/png' }], 'ficheropdf_type_file_KO'),
    Array('articulo', 'nuevo_FicheropdfA', 92, 17, 'EDIT', 'type_file', [{ 'type_file': 'text/plain' }], 'ficheropdf_type_file_KO'),
    Array('articulo', 'nuevo_FicheropdfA', 93, 18, 'EDIT', 'max_size_file', [{ 'max_size_file': 2000001 }], 'ficheropdf_max_size_file_KO'),
    Array('articulo', 'nuevo_FicheropdfA', 94, 19, 'EDIT', 'min_size_name', [{ 'format_name_file': 'b.pdf' }], 'ficheropdf_min_size_name_KO'),
    Array('articulo', 'nuevo_FicheropdfA', 95, 20, 'EDIT', 'max_size_name', [{ 'format_name_file': 'a'.repeat(21) }], 'ficheropdf_max_size_name_KO'),
    Array('articulo', 'nuevo_FicheropdfA', 95, 21, 'EDIT', 'empty_file', [{ 'format_name_file': 'nuevoDoc.pdf' }, { 'type_file': 'application/pdf' }, { 'max_size_file': 1800000 }], true)
);


//////////////////////definiciones/////////////////////////
/*
     Formato 7 campos: 'Entidad' 'Campo' 'Nº Def_text' 'Descripcion_test' 'accion' 'resultado_esperado_string/boolean' 'mensaje_respuesta'
*/
//////////////////////definiciones/////////////////////////
/*
 Formato 8 campos: 'Entidad' 'Campo' 'Tipo Campo' 'Nº Def_text' 'Descripcion_test' 'accion' 'resultado_esperado_string/boolean' 'mensaje_respuesta'
*/
let ubicacion_def_tests = Array(
    // id_site - autoincremental numérico, max 11
    //ADD
    Array('ubicacion', 'id_site', 'input', 1, 'campo autoincremental vacío es válido', 'ADD', true, 'ID Site correcto'),
    Array('ubicacion', 'id_site', 'input', 2, 'formato numérico si tiene valor', 'ADD', 'id_site_format_KO', 'Formato ID Site inválido. Solo números'),
    //EDIT
    Array('ubicacion', 'id_site', 'input', 3, 'campo obligatorio en EDIT', 'EDIT', 'id_site_min_size_KO', 'ID Site es obligatorio'),
    Array('ubicacion', 'id_site', 'input', 4, 'formato numérico', 'EDIT', 'id_site_format_KO', 'Formato ID Site inválido. Solo números'),
    Array('ubicacion', 'id_site', 'input', 5, 'es correcto', 'EDIT', true, 'ID Site correcto'),
    //SEARCH
    Array('ubicacion', 'id_site', 'input', 6, 'búsqueda por patrón numérico válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('ubicacion', 'id_site', 'input', 7, 'búsqueda por patrón no numérico', 'SEARCH', 'id_site_search_format_KO', 'Formato de búsqueda inválido. Solo números'),

    // site_latitud - decimal(9,6) NOT NULL, de -90 a 90
    //ADD
    Array('ubicacion', 'site_latitud', 'input', 8, 'campo obligatorio', 'ADD', 'latitud_min_size_KO', 'Latitud es obligatoria'),
    Array('ubicacion', 'site_latitud', 'input', 9, 'formato decimal válido', 'ADD', 'latitud_format_KO', 'Formato latitud inválido. Debe ser decimal entre -90 y 90'),
    Array('ubicacion', 'site_latitud', 'input', 10, 'rango válido', 'ADD', 'latitud_format_KO', 'Latitud fuera de rango. Debe estar entre -90 y 90'),
    Array('ubicacion', 'site_latitud', 'input', 11, 'es correcto', 'ADD', true, 'Latitud correcta'),
    //EDIT
    Array('ubicacion', 'site_latitud', 'input', 12, 'campo vacío es válido', 'EDIT', true, 'Latitud correcta'),
    Array('ubicacion', 'site_latitud', 'input', 13, 'formato decimal válido si tiene valor', 'EDIT', 'latitud_format_KO', 'Formato latitud inválido. Debe ser decimal entre -90 y 90'),
    //SEARCH
    Array('ubicacion', 'site_latitud', 'input', 14, 'búsqueda por patrón decimal válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('ubicacion', 'site_latitud', 'input', 15, 'búsqueda por patrón no decimal', 'SEARCH', 'latitud_search_format_KO', 'Formato de búsqueda inválido. Solo números y punto decimal'),

    // site_longitud - decimal(9,6) NOT NULL, de -180 a 180
    //ADD
    Array('ubicacion', 'site_longitud', 'input', 16, 'campo obligatorio', 'ADD', 'longitud_min_size_KO', 'Longitud es obligatoria'),
    Array('ubicacion', 'site_longitud', 'input', 17, 'formato decimal válido', 'ADD', 'longitud_format_KO', 'Formato longitud inválido. Debe ser decimal entre -180 y 180'),
    Array('ubicacion', 'site_longitud', 'input', 18, 'rango válido', 'ADD', 'longitud_format_KO', 'Longitud fuera de rango. Debe estar entre -180 y 180'),
    Array('ubicacion', 'site_longitud', 'input', 19, 'es correcto', 'ADD', true, 'Longitud correcta'),
    //EDIT
    Array('ubicacion', 'site_longitud', 'input', 20, 'campo vacío es válido', 'EDIT', true, 'Longitud correcta'),
    Array('ubicacion', 'site_longitud', 'input', 21, 'formato decimal válido si tiene valor', 'EDIT', 'longitud_format_KO', 'Formato longitud inválido. Debe ser decimal entre -180 y 180'),
    //SEARCH
    Array('ubicacion', 'site_longitud', 'input', 22, 'búsqueda por patrón decimal válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('ubicacion', 'site_longitud', 'input', 23, 'búsqueda por patrón no decimal', 'SEARCH', 'longitud_search_format_KO', 'Formato de búsqueda inválido. Solo números y punto decimal'),

    // site_altitude - numérico, obligatorio, max 4
    //ADD
    Array('ubicacion', 'site_altitude', 'input', 24, 'campo obligatorio', 'ADD', 'altitude_min_size_KO', 'Altitud es obligatoria'),
    Array('ubicacion', 'site_altitude', 'input', 25, 'formato numérico', 'ADD', 'altitude_format_KO', 'Formato inválido. Solo números'),
    Array('ubicacion', 'site_altitude', 'input', 26, 'rango válido', 'ADD', 'altitude_format_KO', 'Altitud fuera de rango. Máximo 4 dígitos'),
    Array('ubicacion', 'site_altitude', 'input', 27, 'es correcto', 'ADD', true, 'Altitud correcta'),
    //EDIT
    Array('ubicacion', 'site_altitude', 'input', 28, 'campo vacío es válido', 'EDIT', true, 'Altitud correcta'),
    Array('ubicacion', 'site_altitude', 'input', 29, 'formato numérico si tiene valor', 'EDIT', 'altitude_format_KO', 'Formato inválido. Solo números'),
    //SEARCH
    Array('ubicacion', 'site_altitude', 'input', 30, 'búsqueda por patrón numérico válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('ubicacion', 'site_altitude', 'input', 31, 'búsqueda por patrón no numérico', 'SEARCH', 'altitude_search_format_KO', 'Formato de búsqueda inválido. Solo números'),

    // site_locality - alfanumérico, obligatorio, max 40
    //ADD
    Array('ubicacion', 'site_locality', 'input', 32, 'campo obligatorio', 'ADD', 'locality_min_size_KO', 'Localidad es obligatoria.'),
    Array('ubicacion', 'site_locality', 'input', 33, 'tamaño máximo', 'ADD', 'locality_max_size_KO', 'Tamaño muy grande. Máximo 40 caracteres'),
    Array('ubicacion', 'site_locality', 'input', 34, 'formato alfanumérico', 'ADD', 'locality_format_KO', 'Formato inválido. Solo caracteres alfanuméricos con acentos y espacios'),
    Array('ubicacion', 'site_locality', 'input', 35, 'es correcto', 'ADD', true, 'Localidad correcta'),
    //EDIT
    Array('ubicacion', 'site_locality', 'input', 36, 'campo vacío es válido', 'EDIT', true, 'Localidad correcta'),
    Array('ubicacion', 'site_locality', 'input', 37, 'tamaño máximo si tiene valor', 'EDIT', 'locality_max_size_KO', 'Tamaño muy grande. Máximo 40 caracteres'),
    Array('ubicacion', 'site_locality', 'input', 38, 'formato alfanumérico si tiene valor', 'EDIT', 'locality_format_KO', 'Formato inválido. Solo caracteres alfanuméricos con acentos y espacios'),
    //SEARCH
    Array('ubicacion', 'site_locality', 'input', 39, 'búsqueda por patrón válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('ubicacion', 'site_locality', 'input', 40, 'búsqueda por patrón inválido', 'SEARCH', 'locality_search_format_KO', 'Formato de búsqueda inválido. Solo caracteres alfanuméricos con acentos y espacios'),

    // site_provider_login - alfanumérico, obligatorio, max 30
    //ADD
    Array('ubicacion', 'site_provider_login', 'input', 41, 'campo obligatorio', 'ADD', 'provider_login_min_size_KO', 'Proveedor Login es obligatorio'),
    Array('ubicacion', 'site_provider_login', 'input', 42, 'tamaño máximo', 'ADD', 'provider_login_max_size_KO', 'Tamaño muy grande. Máximo 30 caracteres'),
    Array('ubicacion', 'site_provider_login', 'input', 43, 'formato alfanumérico', 'ADD', 'provider_login_format_KO', 'Formato inválido. Solo caracteres alfanuméricos sin espacios'),
    Array('ubicacion', 'site_provider_login', 'input', 44, 'es correcto', 'ADD', true, 'Proveedor Login correcto'),
    //EDIT
    Array('ubicacion', 'site_provider_login', 'input', 45, 'campo vacío es válido', 'EDIT', true, 'Proveedor Login correcto'),
    Array('ubicacion', 'site_provider_login', 'input', 46, 'tamaño máximo si tiene valor', 'EDIT', 'provider_login_max_size_KO', 'Tamaño muy grande. Máximo 30 caracteres'),
    Array('ubicacion', 'site_provider_login', 'input', 47, 'formato alfanumérico si tiene valor', 'EDIT', 'provider_login_format_KO', 'Formato inválido. Solo caracteres alfanuméricos sin espacios'),
    //SEARCH
    Array('ubicacion', 'site_provider_login', 'input', 48, 'búsqueda por patrón válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('ubicacion', 'site_provider_login', 'input', 49, 'búsqueda por patrón inválido', 'SEARCH', 'provider_login_search_format_KO', 'Formato de búsqueda inválido. Solo caracteres alfanuméricos sin espacios'),

    // Campos de fotos para SEARCH - alfabéticos (sin acentos ni ñ ni espacios) y ".", Min 7 max 50
    Array('ubicacion', 'site_north_photo', 'input', 50, 'búsqueda por nombre archivo válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('ubicacion', 'site_north_photo', 'input', 51, 'búsqueda por nombre archivo inválido', 'SEARCH', 'north_photo_search_format_KO', 'Formato de búsqueda inválido. Solo letras sin acentos ni ñ ni espacios y punto'),
    Array('ubicacion', 'site_south_photo', 'input', 52, 'búsqueda por nombre archivo válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('ubicacion', 'site_south_photo', 'input', 53, 'búsqueda por nombre archivo inválido', 'SEARCH', 'south_photo_search_format_KO', 'Formato de búsqueda inválido. Solo letras sin acentos ni ñ ni espacios y punto'),
    Array('ubicacion', 'site_east_photo', 'input', 54, 'búsqueda por nombre archivo válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('ubicacion', 'site_east_photo', 'input', 55, 'búsqueda por nombre archivo inválido', 'SEARCH', 'east_photo_search_format_KO', 'Formato de búsqueda inválido. Solo letras sin acentos ni ñ ni espacios y punto'),
    Array('ubicacion', 'site_west_photo', 'input', 56, 'búsqueda por nombre archivo válido', 'SEARCH', true, 'Búsqueda correcta'),
    Array('ubicacion', 'site_west_photo', 'input', 57, 'búsqueda por nombre archivo inválido', 'SEARCH', 'west_photo_search_format_KO', 'Formato de búsqueda inválido. Solo letras sin acentos ni ñ ni espacios y punto'),

    // Campos file para subida - alfabéticos (sin acentos ni ñ ni espacios) y ".", Min 7 max 50, solo png y tamaño fichero menor que 2000000 bytes
    //ADD (obligatorios) - Para todas las imágenes
    Array('ubicacion', 'nuevo_site_north_photo', 'file', 58, 'existe fichero', 'ADD', 'north_photo_not_exist_file_KO', 'El fichero no existe. Debe subir una foto norte'),
    Array('ubicacion', 'nuevo_site_north_photo', 'file', 59, 'cumple nombre fichero', 'ADD', 'north_photo_format_name_file_KO', 'El nombre de fichero no cumple formato'),
    Array('ubicacion', 'nuevo_site_north_photo', 'file', 60, 'cumple tipo fichero', 'ADD', 'north_photo_type_file_KO', 'El tipo de fichero no está permitido'),
    Array('ubicacion', 'nuevo_site_north_photo', 'file', 61, 'cumple tamaño máximo fichero', 'ADD', 'north_photo_max_size_file_KO', 'El tamaño del fichero es muy grande'),
    Array('ubicacion', 'nuevo_site_north_photo', 'file', 62, 'cumple tamaño mínimo nombre fichero', 'ADD', 'north_photo_min_size_name_KO', 'El tamaño del nombre de fichero es muy pequeño'),
    Array('ubicacion', 'nuevo_site_north_photo', 'file', 63, 'cumple tamaño máximo nombre fichero', 'ADD', 'north_photo_max_size_name_KO', 'El tamaño del nombre de fichero es muy grande'),
    Array('ubicacion', 'nuevo_site_north_photo', 'file', 64, 'fichero ok', 'ADD', true, 'OK'),

    //EDIT (opcionales) - Para todas las imágenes
    Array('ubicacion', 'nuevo_site_north_photo', 'file', 65, 'campo vacío es válido', 'EDIT', true, 'OK'),
    Array('ubicacion', 'nuevo_site_north_photo', 'file', 66, 'cumple nombre fichero si tiene valor', 'EDIT', 'north_photo_format_name_file_KO', 'El nombre de fichero no cumple formato'),
    Array('ubicacion', 'nuevo_site_north_photo', 'file', 67, 'cumple tipo fichero si tiene valor', 'EDIT', 'north_photo_type_file_KO', 'El tipo de fichero no está permitido'),
    Array('ubicacion', 'nuevo_site_north_photo', 'file', 68, 'cumple tamaño máximo fichero si tiene valor', 'EDIT', 'north_photo_max_size_file_KO', 'El tamaño del fichero es muy grande'),
    Array('ubicacion', 'nuevo_site_north_photo', 'file', 69, 'cumple tamaño mínimo nombre fichero si tiene valor', 'EDIT', 'north_photo_min_size_name_KO', 'El tamaño del nombre de fichero es muy pequeño'),
    Array('ubicacion', 'nuevo_site_north_photo', 'file', 70, 'cumple tamaño máximo nombre fichero si tiene valor', 'EDIT', 'north_photo_max_size_name_KO', 'El tamaño del nombre de fichero es muy grande'),
    Array('ubicacion', 'nuevo_site_north_photo', 'file', 71, 'fichero ok', 'EDIT', true, 'OK')
);

////////////////////pruebas no file///////////////////
/*
     Formato 7 campos: 'Entidad' 'Campo' 'Nº Def_text' 'Nº prueba' 'accion' 'valores_aProbar' 'codError/true'
*/
let ubicacion_tests_fields = Array(
    // id_site - NumDef 1-7
    Array('ubicacion', 'id_site', 1, 1, 'ADD', [{ 'id_site': '' }], true),
    Array('ubicacion', 'id_site', 2, 2, 'ADD', [{ 'id_site': '12a' }], 'id_site_format_KO'),
    Array('ubicacion', 'id_site', 3, 3, 'EDIT', [{ 'id_site': '' }], 'id_site_min_size_KO'),
    Array('ubicacion', 'id_site', 4, 4, 'EDIT', [{ 'id_site': '12a' }], 'id_site_format_KO'),
    Array('ubicacion', 'id_site', 5, 5, 'EDIT', [{ 'id_site': '123' }], true),
    Array('ubicacion', 'id_site', 6, 6, 'SEARCH', [{ 'id_site': '1' }], true),
    Array('ubicacion', 'id_site', 7, 7, 'SEARCH', [{ 'id_site': '12a' }], 'id_site_search_format_KO'),

    // site_latitud - NumDef 8-15
    Array('ubicacion', 'site_latitud', 8, 8, 'ADD', [{ 'site_latitud': '' }], 'latitud_min_size_KO'),
    Array('ubicacion', 'site_latitud', 9, 9, 'ADD', [{ 'site_latitud': 'abc' }], 'latitud_format_KO'),
    Array('ubicacion', 'site_latitud', 10, 10, 'ADD', [{ 'site_latitud': '95.123456' }], 'latitud_format_KO'),
    Array('ubicacion', 'site_latitud', 11, 11, 'ADD', [{ 'site_latitud': '40.4172' }], true),
    Array('ubicacion', 'site_latitud', 12, 12, 'EDIT', [{ 'site_latitud': '' }], true),
    Array('ubicacion', 'site_latitud', 13, 13, 'EDIT', [{ 'site_latitud': '100.5' }], 'latitud_format_KO'),
    Array('ubicacion', 'site_latitud', 14, 14, 'SEARCH', [{ 'site_latitud': '40' }], true),
    Array('ubicacion', 'site_latitud', 15, 15, 'SEARCH', [{ 'site_latitud': '40a' }], 'latitud_search_format_KO'),

    // site_longitud - NumDef 16-23
    Array('ubicacion', 'site_longitud', 16, 16, 'ADD', [{ 'site_longitud': '' }], 'longitud_min_size_KO'),
    Array('ubicacion', 'site_longitud', 17, 17, 'ADD', [{ 'site_longitud': 'abc' }], 'longitud_format_KO'),
    Array('ubicacion', 'site_longitud', 18, 18, 'ADD', [{ 'site_longitud': '190.123456' }], 'longitud_format_KO'),
    Array('ubicacion', 'site_longitud', 19, 19, 'ADD', [{ 'site_longitud': '-3.70325' }], true),
    Array('ubicacion', 'site_longitud', 20, 20, 'EDIT', [{ 'site_longitud': '' }], true),
    Array('ubicacion', 'site_longitud', 21, 21, 'EDIT', [{ 'site_longitud': '200.5' }], 'longitud_format_KO'),
    Array('ubicacion', 'site_longitud', 22, 22, 'SEARCH', [{ 'site_longitud': '-3' }], true),
    Array('ubicacion', 'site_longitud', 23, 23, 'SEARCH', [{ 'site_longitud': '120b' }], 'longitud_search_format_KO'),

    // site_altitude - NumDef 24-31
    Array('ubicacion', 'site_altitude', 24, 24, 'ADD', [{ 'site_altitude': '' }], 'altitude_min_size_KO'),
    Array('ubicacion', 'site_altitude', 25, 25, 'ADD', [{ 'site_altitude': 'abc' }], 'altitude_format_KO'),
    Array('ubicacion', 'site_altitude', 26, 26, 'ADD', [{ 'site_altitude': '10000' }], 'altitude_max_size_KO'),
    Array('ubicacion', 'site_altitude', 27, 27, 'ADD', [{ 'site_altitude': '650' }], true),
    Array('ubicacion', 'site_altitude', 28, 28, 'EDIT', [{ 'site_altitude': '' }], true),
    Array('ubicacion', 'site_altitude', 29, 29, 'EDIT', [{ 'site_altitude': '50a' }], 'altitude_format_KO'),
    Array('ubicacion', 'site_altitude', 30, 30, 'SEARCH', [{ 'site_altitude': '100' }], true),
    Array('ubicacion', 'site_altitude', 31, 31, 'SEARCH', [{ 'site_altitude': '50x' }], 'altitude_search_format_KO'),

    // site_locality - NumDef 32-40
    Array('ubicacion', 'site_locality', 32, 32, 'ADD', [{ 'site_locality': '' }], 'locality_min_size_KO'),
    Array('ubicacion', 'site_locality', 33, 33, 'ADD', [{ 'site_locality': 'a'.repeat(41) }], 'locality_max_size_KO'),
    Array('ubicacion', 'site_locality', 34, 34, 'ADD', [{ 'site_locality': 'Madrid@' }], 'locality_format_KO'),
    Array('ubicacion', 'site_locality', 35, 35, 'ADD', [{ 'site_locality': 'Madrid' }], true),
    Array('ubicacion', 'site_locality', 36, 36, 'EDIT', [{ 'site_locality': '' }], true),
    Array('ubicacion', 'site_locality', 37, 37, 'EDIT', [{ 'site_locality': 'a'.repeat(41) }], 'locality_max_size_KO'),
    Array('ubicacion', 'site_locality', 38, 38, 'EDIT', [{ 'site_locality': 'Toledo#' }], 'locality_format_KO'),
    Array('ubicacion', 'site_locality', 39, 39, 'SEARCH', [{ 'site_locality': 'Mad' }], true),
    Array('ubicacion', 'site_locality', 40, 40, 'SEARCH', [{ 'site_locality': 'Barc@' }], 'locality_search_format_KO'),

    // site_provider_login - NumDef 41-49
    Array('ubicacion', 'site_provider_login', 41, 41, 'ADD', [{ 'site_provider_login': '' }], 'provider_login_min_size_KO'),
    Array('ubicacion', 'site_provider_login', 42, 42, 'ADD', [{ 'site_provider_login': 'a'.repeat(31) }], 'provider_login_max_size_KO'),
    Array('ubicacion', 'site_provider_login', 43, 43, 'ADD', [{ 'site_provider_login': 'user test' }], 'provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 44, 44, 'ADD', [{ 'site_provider_login': 'provider123' }], true),
    Array('ubicacion', 'site_provider_login', 45, 45, 'EDIT', [{ 'site_provider_login': '' }], true),
    Array('ubicacion', 'site_provider_login', 46, 46, 'EDIT', [{ 'site_provider_login': 'a'.repeat(31) }], 'provider_login_max_size_KO'),
    Array('ubicacion', 'site_provider_login', 47, 47, 'EDIT', [{ 'site_provider_login': 'user@test' }], 'provider_login_format_KO'),
    Array('ubicacion', 'site_provider_login', 48, 48, 'SEARCH', [{ 'site_provider_login': 'prov' }], true),
    Array('ubicacion', 'site_provider_login', 49, 49, 'SEARCH', [{ 'site_provider_login': 'user test' }], 'provider_login_search_format_KO'),

    // Campos de fotos para SEARCH - NumDef 50-57
    Array('ubicacion', 'site_north_photo', 50, 50, 'SEARCH', [{ 'site_north_photo': 'north' }], true),
    Array('ubicacion', 'site_north_photo', 51, 51, 'SEARCH', [{ 'site_north_photo': 'northñ' }], 'north_photo_search_format_KO'),
    Array('ubicacion', 'site_south_photo', 52, 52, 'SEARCH', [{ 'site_south_photo': 'south' }], true),
    Array('ubicacion', 'site_south_photo', 53, 53, 'SEARCH', [{ 'site_south_photo': 'south photo' }], 'south_photo_search_format_KO'),
    Array('ubicacion', 'site_east_photo', 54, 54, 'SEARCH', [{ 'site_east_photo': 'east' }], true),
    Array('ubicacion', 'site_east_photo', 55, 55, 'SEARCH', [{ 'site_east_photo': 'east@' }], 'east_photo_search_format_KO'),
    Array('ubicacion', 'site_west_photo', 56, 56, 'SEARCH', [{ 'site_west_photo': 'west' }], true),
    Array('ubicacion', 'site_west_photo', 57, 57, 'SEARCH', [{ 'site_west_photo': 'west#' }], 'west_photo_search_format_KO')
);

/////////////////////////////////////pruebas file/////////////////////////////////
/*
     Formato 7 campos: 'Entidad' 'Campo' 'Nº Def_text' 'Nº prueba' 'accion' 'parámetro_aProbar' 'valores_parámetro_aProbar' 'codError/true'
*/
let ubicacion_tests_files = Array(
    // ============ site_north_photo - ADD ============
    Array('ubicacion', 'nuevo_site_north_photo', 58, 1, 'ADD', 'existe', [], 'north_photo_not_exist_file_KO'),
    Array('ubicacion', 'nuevo_site_north_photo', 59, 2, 'ADD', 'format_name_file', [{ 'format_name_file': 'fotoñ.png' }], 'north_photo_format_name_file_KO'),
    Array('ubicacion', 'nuevo_site_north_photo', 59, 3, 'ADD', 'format_name_file', [{ 'format_name_file': 'foto con espacios.png' }], 'north_photo_format_name_file_KO'),
    Array('ubicacion', 'nuevo_site_north_photo', 59, 4, 'ADD', 'format_name_file', [{ 'format_name_file': 'foto@.png' }], 'north_photo_format_name_file_KO'),
    Array('ubicacion', 'nuevo_site_north_photo', 59, 5, 'ADD', 'format_name_file', [{ 'format_name_file': 'foto123.png' }], true),
    Array('ubicacion', 'nuevo_site_north_photo', 60, 6, 'ADD', 'type_file', [{ 'type_file': 'image/jpeg' }], 'north_photo_type_file_KO'),
    Array('ubicacion', 'nuevo_site_north_photo', 60, 7, 'ADD', 'type_file', [{ 'type_file': 'application/pdf' }], 'north_photo_type_file_KO'),
    Array('ubicacion', 'nuevo_site_north_photo', 61, 8, 'ADD', 'max_size_file', [{ 'max_size_file': 2000001 }], 'north_photo_max_size_file_KO'),
    Array('ubicacion', 'nuevo_site_north_photo', 62, 9, 'ADD', 'min_size_name', [{ 'format_name_file': 'a.png' }], 'north_photo_min_size_name_KO'),
    Array('ubicacion', 'nuevo_site_north_photo', 63, 10, 'ADD', 'max_size_name', [{ 'format_name_file': 'a'.repeat(51) }], 'north_photo_max_size_name_KO'),
    Array('ubicacion', 'nuevo_site_north_photo', 64, 11, 'ADD', 'empty_file', [{ 'format_name_file': 'northABC.png' }, { 'type_file': 'image/png' }, { 'max_size_file': 1500000 }], true),

    // ============ site_north_photo - EDIT ============
    Array('ubicacion', 'nuevo_site_north_photo', 65, 12, 'EDIT', 'existe', [], true),
    Array('ubicacion', 'nuevo_site_north_photo', 66, 13, 'EDIT', 'format_name_file', [{ 'format_name_file': 'nuevañ.png' }], 'north_photo_format_name_file_KO'),
    Array('ubicacion', 'nuevo_site_north_photo', 67, 14, 'EDIT', 'type_file', [{ 'type_file': 'image/gif' }], 'north_photo_type_file_KO'),
    Array('ubicacion', 'nuevo_site_north_photo', 68, 15, 'EDIT', 'max_size_file', [{ 'max_size_file': 2000001 }], 'north_photo_max_size_file_KO'),
    Array('ubicacion', 'nuevo_site_north_photo', 69, 16, 'EDIT', 'min_size_name', [{ 'format_name_file': 'b.png' }], 'north_photo_min_size_name_KO'),
    Array('ubicacion', 'nuevo_site_north_photo', 70, 17, 'EDIT', 'max_size_name', [{ 'format_name_file': 'a'.repeat(51) }], 'north_photo_max_size_name_KO'),
    Array('ubicacion', 'nuevo_site_north_photo', 70, 18, 'EDIT', 'empty_file', [{ 'format_name_file': 'newNorth.png' }, { 'type_file': 'image/png' }, { 'max_size_file': 1800000 }], true),

    // ============ site_south_photo - ADD ============
    Array('ubicacion', 'nuevo_site_south_photo', 58, 19, 'ADD', 'existe', [], 'south_photo_not_exist_file_KO'),
    Array('ubicacion', 'nuevo_site_south_photo', 59, 20, 'ADD', 'format_name_file', [{ 'format_name_file': 'surñ.png' }], 'south_photo_format_name_file_KO'),
    Array('ubicacion', 'nuevo_site_south_photo', 59, 21, 'ADD', 'format_name_file', [{ 'format_name_file': 'sur con espacios.png' }], 'south_photo_format_name_file_KO'),
    Array('ubicacion', 'nuevo_site_south_photo', 59, 22, 'ADD', 'format_name_file', [{ 'format_name_file': 'sur@.png' }], 'south_photo_format_name_file_KO'),
    Array('ubicacion', 'nuevo_site_south_photo', 59, 23, 'ADD', 'format_name_file', [{ 'format_name_file': 'south123.png' }], true),
    Array('ubicacion', 'nuevo_site_south_photo', 60, 24, 'ADD', 'type_file', [{ 'type_file': 'image/jpeg' }], 'south_photo_type_file_KO'),
    Array('ubicacion', 'nuevo_site_south_photo', 60, 25, 'ADD', 'type_file', [{ 'type_file': 'application/pdf' }], 'south_photo_type_file_KO'),
    Array('ubicacion', 'nuevo_site_south_photo', 61, 26, 'ADD', 'max_size_file', [{ 'max_size_file': 2000001 }], 'south_photo_max_size_file_KO'),
    Array('ubicacion', 'nuevo_site_south_photo', 62, 27, 'ADD', 'min_size_name', [{ 'format_name_file': 's.png' }], 'south_photo_min_size_name_KO'),
    Array('ubicacion', 'nuevo_site_south_photo', 63, 28, 'ADD', 'max_size_name', [{ 'format_name_file': 'b'.repeat(51) }], 'south_photo_max_size_name_KO'),
    Array('ubicacion', 'nuevo_site_south_photo', 64, 29, 'ADD', 'empty_file', [{ 'format_name_file': 'southXYZ.png' }, { 'type_file': 'image/png' }, { 'max_size_file': 1500000 }], true),

    // ============ site_south_photo - EDIT ============
    Array('ubicacion', 'nuevo_site_south_photo', 65, 30, 'EDIT', 'existe', [], true),
    Array('ubicacion', 'nuevo_site_south_photo', 66, 31, 'EDIT', 'format_name_file', [{ 'format_name_file': 'surnuevañ.png' }], 'south_photo_format_name_file_KO'),
    Array('ubicacion', 'nuevo_site_south_photo', 67, 32, 'EDIT', 'type_file', [{ 'type_file': 'image/gif' }], 'south_photo_type_file_KO'),
    Array('ubicacion', 'nuevo_site_south_photo', 68, 33, 'EDIT', 'max_size_file', [{ 'max_size_file': 2000001 }], 'south_photo_max_size_file_KO'),
    Array('ubicacion', 'nuevo_site_south_photo', 69, 34, 'EDIT', 'min_size_name', [{ 'format_name_file': 's.png' }], 'south_photo_min_size_name_KO'),
    Array('ubicacion', 'nuevo_site_south_photo', 70, 35, 'EDIT', 'max_size_name', [{ 'format_name_file': 'b'.repeat(51) }], 'south_photo_max_size_name_KO'),
    Array('ubicacion', 'nuevo_site_south_photo', 70, 36, 'EDIT', 'empty_file', [{ 'format_name_file': 'newSouth.png' }, { 'type_file': 'image/png' }, { 'max_size_file': 1800000 }], true),

    // ============ site_east_photo - ADD ============
    Array('ubicacion', 'nuevo_site_east_photo', 58, 37, 'ADD', 'existe', [], 'east_photo_not_exist_file_KO'),
    Array('ubicacion', 'nuevo_site_east_photo', 59, 38, 'ADD', 'format_name_file', [{ 'format_name_file': 'esteñ.png' }], 'east_photo_format_name_file_KO'),
    Array('ubicacion', 'nuevo_site_east_photo', 59, 39, 'ADD', 'format_name_file', [{ 'format_name_file': 'este con espacios.png' }], 'east_photo_format_name_file_KO'),
    Array('ubicacion', 'nuevo_site_east_photo', 59, 40, 'ADD', 'format_name_file', [{ 'format_name_file': 'este@.png' }], 'east_photo_format_name_file_KO'),
    Array('ubicacion', 'nuevo_site_east_photo', 59, 41, 'ADD', 'format_name_file', [{ 'format_name_file': 'east123.png' }], true),
    Array('ubicacion', 'nuevo_site_east_photo', 60, 42, 'ADD', 'type_file', [{ 'type_file': 'image/jpeg' }], 'east_photo_type_file_KO'),
    Array('ubicacion', 'nuevo_site_east_photo', 60, 43, 'ADD', 'type_file', [{ 'type_file': 'application/pdf' }], 'east_photo_type_file_KO'),
    Array('ubicacion', 'nuevo_site_east_photo', 61, 44, 'ADD', 'max_size_file', [{ 'max_size_file': 2000001 }], 'east_photo_max_size_file_KO'),
    Array('ubicacion', 'nuevo_site_east_photo', 62, 45, 'ADD', 'min_size_name', [{ 'format_name_file': 'e.png' }], 'east_photo_min_size_name_KO'),
    Array('ubicacion', 'nuevo_site_east_photo', 63, 46, 'ADD', 'max_size_name', [{ 'format_name_file': 'c'.repeat(51) }], 'east_photo_max_size_name_KO'),
    Array('ubicacion', 'nuevo_site_east_photo', 64, 47, 'ADD', 'empty_file', [{ 'format_name_file': 'eastDEF.png' }, { 'type_file': 'image/png' }, { 'max_size_file': 1500000 }], true),

    // ============ site_east_photo - EDIT ============
    Array('ubicacion', 'nuevo_site_east_photo', 65, 48, 'EDIT', 'existe', [], true),
    Array('ubicacion', 'nuevo_site_east_photo', 66, 49, 'EDIT', 'format_name_file', [{ 'format_name_file': 'estenuevañ.png' }], 'east_photo_format_name_file_KO'),
    Array('ubicacion', 'nuevo_site_east_photo', 67, 50, 'EDIT', 'type_file', [{ 'type_file': 'image/gif' }], 'east_photo_type_file_KO'),
    Array('ubicacion', 'nuevo_site_east_photo', 68, 51, 'EDIT', 'max_size_file', [{ 'max_size_file': 2000001 }], 'east_photo_max_size_file_KO'),
    Array('ubicacion', 'nuevo_site_east_photo', 69, 52, 'EDIT', 'min_size_name', [{ 'format_name_file': 'e.png' }], 'east_photo_min_size_name_KO'),
    Array('ubicacion', 'nuevo_site_east_photo', 70, 53, 'EDIT', 'max_size_name', [{ 'format_name_file': 'c'.repeat(51) }], 'east_photo_max_size_name_KO'),
    Array('ubicacion', 'nuevo_site_east_photo', 70, 54, 'EDIT', 'empty_file', [{ 'format_name_file': 'newEast.png' }, { 'type_file': 'image/png' }, { 'max_size_file': 1800000 }], true),

    // ============ site_west_photo - ADD ============
    Array('ubicacion', 'nuevo_site_west_photo', 58, 55, 'ADD', 'existe', [], 'west_photo_not_exist_file_KO'),
    Array('ubicacion', 'nuevo_site_west_photo', 59, 56, 'ADD', 'format_name_file', [{ 'format_name_file': 'oesteñ.png' }], 'west_photo_format_name_file_KO'),
    Array('ubicacion', 'nuevo_site_west_photo', 59, 57, 'ADD', 'format_name_file', [{ 'format_name_file': 'oeste con espacios.png' }], 'west_photo_format_name_file_KO'),
    Array('ubicacion', 'nuevo_site_west_photo', 59, 58, 'ADD', 'format_name_file', [{ 'format_name_file': 'oeste@.png' }], 'west_photo_format_name_file_KO'),
    Array('ubicacion', 'nuevo_site_west_photo', 59, 59, 'ADD', 'format_name_file', [{ 'format_name_file': 'west123.png' }], true),
    Array('ubicacion', 'nuevo_site_west_photo', 60, 60, 'ADD', 'type_file', [{ 'type_file': 'image/jpeg' }], 'west_photo_type_file_KO'),
    Array('ubicacion', 'nuevo_site_west_photo', 60, 61, 'ADD', 'type_file', [{ 'type_file': 'application/pdf' }], 'west_photo_type_file_KO'),
    Array('ubicacion', 'nuevo_site_west_photo', 61, 62, 'ADD', 'max_size_file', [{ 'max_size_file': 2000001 }], 'west_photo_max_size_file_KO'),
    Array('ubicacion', 'nuevo_site_west_photo', 62, 63, 'ADD', 'min_size_name', [{ 'format_name_file': 'w.png' }], 'west_photo_min_size_name_KO'),
    Array('ubicacion', 'nuevo_site_west_photo', 63, 64, 'ADD', 'max_size_name', [{ 'format_name_file': 'd'.repeat(51) }], 'west_photo_max_size_name_KO'),
    Array('ubicacion', 'nuevo_site_west_photo', 64, 65, 'ADD', 'empty_file', [{ 'format_name_file': 'westGHI.png' }, { 'type_file': 'image/png' }, { 'max_size_file': 1500000 }], true),

    // ============ site_west_photo - EDIT ============
    Array('ubicacion', 'nuevo_site_west_photo', 65, 66, 'EDIT', 'existe', [], true),
    Array('ubicacion', 'nuevo_site_west_photo', 66, 67, 'EDIT', 'format_name_file', [{ 'format_name_file': 'oestenuevañ.png' }], 'west_photo_format_name_file_KO'),
    Array('ubicacion', 'nuevo_site_west_photo', 67, 68, 'EDIT', 'type_file', [{ 'type_file': 'image/gif' }], 'west_photo_type_file_KO'),
    Array('ubicacion', 'nuevo_site_west_photo', 68, 69, 'EDIT', 'max_size_file', [{ 'max_size_file': 2000001 }], 'west_photo_max_size_file_KO'),
    Array('ubicacion', 'nuevo_site_west_photo', 69, 70, 'EDIT', 'min_size_name', [{ 'format_name_file': 'w.png' }], 'west_photo_min_size_name_KO'),
    Array('ubicacion', 'nuevo_site_west_photo', 70, 71, 'EDIT', 'max_size_name', [{ 'format_name_file': 'd'.repeat(51) }], 'west_photo_max_size_name_KO'),
    Array('ubicacion', 'nuevo_site_west_photo', 70, 72, 'EDIT', 'empty_file', [{ 'format_name_file': 'newWest.png' }, { 'type_file': 'image/png' }, { 'max_size_file': 1800000 }], true)
);
