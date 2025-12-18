let textos_EN = {

    // general titles texts
    'text_titulo_app': 'Management System',
    'text_titulo_menu': 'Menu Options',
    'text_titulo_page': 'Entities Management',
    'text_titulo_pie': 'Footer',
    'label_seleccioncolumnas': 'Select columns to display',


    // menu texts
    'text_menu_persona': 'Manage People',
    'menu_alumnograduacion': 'Manage Graduation Students',
    'menu_articulo': 'Manage Articles',
    'menu_ubicacion': 'Manage Locations',

    'text_menu_alumnograduacion': 'Manage Graduation Students',
    'text_menu_articulo': 'Manage Articles',
    'text_menu_ubicacion': 'Manage Locations',

    'botonADD': 'Add',
    'botonSEARCH': 'Search',
    'botonEDIT': 'Edit',
    'botonDELETE': 'Delete',
    'botonSHOWCURRENT': 'View Details',
    'botonBACK': 'Back',
    'botonTEST_UNIT': 'Unit Test',
    'botonTEST_DATA': 'Data Test',

    ///////////////////general
    'campo_obligatorio': 'This field is required',
    'formato_invalido': 'Invalid format',
    'tamano_incorrecto': 'Incorrect size',
    /*
        //test
        'tests_datos_titulo': 'Data Tests - alumnograduacion',
        'tests_unitarios_titulo': 'Unit Tests - alumnograduacion',
    
        // sección article y footer
        'titulo_informacion_sistema': 'System Information',
        'label_entidad': 'Entity',
        'label_campos_principales': 'Main Fields',
        'texto_campos': 'ID, Name, Degree, Ceremony Photo',
        'label_acciones_disponibles': 'Available Actions',
        'texto_acciones': 'Add, Edit, Delete, Search, View Details',
        'label_pruebas_disponibles': 'Available Tests',
        'texto_pruebas': '131 data tests + unit tests',
        'texto_estado_entidad': 'No entity loaded',
    */
    ///////////////////////////////////////////alumnograduacion
    // entity alumnograduacion texts
    'text_title_page_alumnograduacion': 'Graduation Students Management',
    'class_contenido_titulo_form_ADD_ubicacion': 'Add Location',
    'class_contenido_titulo_form_EDIT_ubicacion': 'Edit Location',
    'class_contenido_titulo_form_DELETE_ubicacion': 'Delete Location',
    'class_contenido_titulo_form_SEARCH_ubicacion': 'Search Locations',
    'class_contenido_titulo_form_SHOWCURRENT_ubicacion': 'Location Details',
    /*
    // attributes
    'alumnograduacion_dni': 'ID Number',
    'alumnograduacion_login': 'Username',
    'alumnograduacion_password': 'Password',
    'alumnograduacion_nombre': 'First Name',
    'alumnograduacion_apellidos': 'Last Name',
    'alumnograduacion_titulacion': 'Degree Program',
    'alumnograduacion_telefono': 'Phone',
    'alumnograduacion_direccion': 'Address',
    'alumnograduacion_email': 'Email',
    'alumnograduacion_fotoacto': 'Ceremony Photo',
    'nuevo_alumnograduacion_fotoacto': 'New Ceremony Photo',
*/
    // labels
    'label_alumnograduacion_login': 'Login *',
    'input_alumnograduacion_login': 'Enter login',
    'label_alumnograduacion_password': 'Password *',
    'input_alumnograduacion_password': 'Enter password',
    'label_alumnograduacion_nombre': 'First Name *',
    'input_alumnograduacion_nombre': 'Enter first name',
    'label_alumnograduacion_apellidos': 'Last Name *',
    'input_alumnograduacion_apellidos': 'Enter last name',
    'label_alumnograduacion_titulacion': 'Degree',
    'select_alumnograduacion_titulacion': 'Select degree',
    'label_alumnograduacion_dni': 'ID Number *',
    'input_alumnograduacion_dni': 'Enter ID number',
    'label_alumnograduacion_telefono': 'Phone',
    'input_alumnograduacion_telefono': 'Enter phone number',
    'label_alumnograduacion_direccion': 'Address',
    'input_alumnograduacion_direccion': 'Enter address',
    'label_alumnograduacion_email': 'Email *',
    'input_alumnograduacion_email': 'Enter email',
    'label_alumnograduacion_fotoacto': 'Ceremony Photo',
    'input_alumnograduacion_fotoacto': 'Photo file name',
    'label_nuevo_alumnograduacion_fotoacto': 'New Ceremony Photo *',
    'input_nuevo_alumnograduacion_fotoacto': 'Select file',

    // form validation errors - ADD/EDIT
    // Login
    'login_obligatorio_KO': 'Login is required',
    'login_min_size_KO': 'Login must be at least 4 characters long',
    'login_max_size_KO': 'Login cannot exceed 15 characters',
    'login_format_KO': 'Login can only contain letters without accents or ñ',
    'login_search_format_KO': 'For search, login can only contain letters without accents or ñ',

    // Password
    'password_obligatorio_KO': 'Password is required',
    'password_min_size_KO': 'Password must be at least 8 characters long',
    'password_max_size_KO': 'Password cannot exceed 64 characters',
    'password_format_KO': 'Password can only contain letters and spaces without accents or ñ',
    'password_search_format_KO': 'For search, password can only contain letters and spaces without accents or ñ',

    // First Name
    'nombre_obligatorio_KO': 'First name is required',
    'nombre_min_size_KO': 'First name must be at least 2 characters long',
    'nombre_max_size_KO': 'First name cannot exceed 25 characters',
    'nombre_format_KO': 'First name can only contain letters, spaces, ñ and accents',
    'nombre_search_format_KO': 'For search, first name can only contain letters, spaces, ñ and accents',

    // Last Name
    'apellidos_obligatorio_KO': 'Last name is required',
    'apellidos_min_size_KO': 'Last name must be at least 2 characters long',
    'apellidos_max_size_KO': 'Last name cannot exceed 35 characters',
    'apellidos_format_KO': 'Last name can only contain letters, spaces, ñ and accents',
    'apellidos_search_format_KO': 'For search, last name can only contain letters, spaces, ñ and accents',

    // Degree
    'titulacion_obligatorio_KO': 'Degree is required',
    'titulacion_format_KO': 'Degree must be GREI, GRIA, MEI, MIA or PCEO',
    'titulacion_search_format_KO': 'For search, degree must be GREI, GRIA, MEI, MIA or PCEO',

    // ID Number
    'dni_obligatorio_KO': 'ID number is required',
    'dni_size_KO': 'ID number must be exactly 9 characters long',
    'dni_format_KO': 'Invalid ID format (8 numbers + letter)',
    'nie_format_KO': 'Invalid foreign ID format (X/Y/Z + 7 numbers + letter)',
    'dni_letra_KO': 'Incorrect ID letter',
    'nie_letra_KO': 'Incorrect foreign ID letter',
    'dni_formato_invalido_KO': 'Invalid ID number format',
    'dni_search_format_KO': 'For search, ID number must be 9 characters long',

    // Phone
    'telefono_obligatorio_KO': 'Phone is required',
    'telefono_size_KO': 'Phone must be exactly 9 digits',
    'telefono_format_KO': 'Phone can only contain numbers',
    'telefono_search_format_KO': 'For search, phone can only contain numbers',

    // Address
    'direccion_obligatorio_KO': 'Address is required',
    'direccion_max_size_KO': 'Address cannot exceed 100 characters',
    'direccion_format_KO': 'Address can only contain alphanumeric characters with accents and ñ',
    'direccion_search_format_KO': 'For search, address can only contain alphanumeric characters with accents and ñ',

    // Email
    'email_obligatorio_KO': 'Email is required',
    'email_max_size_KO': 'Email cannot exceed 40 characters',
    'email_format_KO': 'Invalid email format',
    'email_search_format_KO': 'For search, invalid email format',

    // Ceremony Photo
    'fotoacto_obligatorio_KO': 'Ceremony photo is required',
    'fotoacto_not_exist_file_KO': 'You must select a photo file',
    'fotoacto_format_name_file_KO': 'File name can only contain letters without accents, ñ, spaces and dot',
    'fotoacto_type_file_KO': 'File type must be JPG/JPEG',
    'fotoacto_max_size_file_KO': 'File size cannot exceed 2MB',
    'fotoacto_min_size_name_KO': 'File name must be at least 7 characters long',
    'fotoacto_max_size_name_KO': 'File name cannot exceed 40 characters',
    'fotoacto_search_format_KO': 'For search, file name can only contain letters without accents, ñ, spaces and dot',
    /*    
    
        // button texts
        // 'botonADD': 'Add',
        // 'botonEDIT': 'Edit',
        // 'botonDELETE': 'Delete',
        // 'botonSEARCH': 'Search',
        // 'botonSHOWCURRENT': 'Details',
        //  'botonTEST_DATA': 'Data Tests',
        //  'botonTEST_UNIT': 'Unit Tests',
        //ALT
        'botonBACK': 'Back',
        'botonADD': 'Add new student',
        'botonEDIT': 'Edit record',
        'botonDELETE': 'Delete record',
        'botonSEARCH': 'Search students',
        'botonSHOWCURRENT': 'View details',
        'botonTEST_DATA': 'Run Data Tests - 131 tests',
        'botonTEST_UNIT': 'Run Unit Tests',
        'submit_button': 'Submit',
    
        // degree program options
        'GREI': 'Computer Engineering',
        'GRIA': 'Computer Engineering and Business',
        'MEI': 'Computer Engineering Master',
        'MIA': 'Computer Engineering and Business Master',
        'PCEO': 'Double Degree Program',
    
        // messages
        'confirm_delete': 'Are you sure you want to delete this student? This action cannot be undone.',
        'no_data_found': 'No data found to display',
        'search_results': 'students found matching your search',
        'loading_data': 'Loading data...',
        //en showcurrent
        'botonCerrar': 'Close',
        'no_data_found': 'Not specified',
        'banderaES': 'Spanish',
        'banderaEN': 'English',
    
    */
    /////////////////////////articulo

    'text_title_page_articulo': 'Articles Management',
    'class_contenido_titulo_form_ADD_articulo': 'Add Article',
    'class_contenido_titulo_form_EDIT_articulo': 'Edit Article',
    'class_contenido_titulo_form_DELETE_articulo': 'Delete Article',
    'class_contenido_titulo_form_SEARCH_articulo': 'Search Articles',
    'class_contenido_titulo_form_SHOWCURRENT_articulo': 'Article Details',
    /*
         // attributes
        'CodigoA': 'Article Code',
        'AutoresA': 'Authors',
        'TituloA': 'Article Title',
        'TituloR': 'Journal Title',
        'ISSN': 'ISSN',
        'VolumenR': 'Journal Volume',
        'PagIniA': 'Start Page',
        'PagFinA': 'End Page',
        'FechaPublicacionR': 'Publication Date',
        'FicheropdfA': 'PDF File',
        'EstadoA': 'Status',
        'nuevo_FicheropdfA': 'New PDF File',
    */
    // labels 
    'label_CodigoA': 'Article Code *',
    'input_CodigoA': 'Enter code',
    'label_AutoresA': 'Authors *',
    'input_AutoresA': 'Enter authors',
    'label_TituloA': 'Article Title *',
    'input_TituloA': 'Enter article title',
    'label_TituloR': 'Journal Title *',
    'input_TituloR': 'Enter journal title',
    'label_ISSN': 'ISSN *',
    'input_ISSN': 'Enter ISSN',
    'label_VolumenR': 'Journal Volume *',
    'input_VolumenR': 'Enter volume',
    'label_PagIniA': 'Start Page *',
    'input_PagIniA': 'Enter start page',
    'label_PagFinA': 'End Page *',
    'input_PagFinA': 'Enter end page',
    'label_FechaPublicacionR': 'Publication Date *',
    'input_FechaPublicacionR': 'Select date',
    'label_FicheropdfA': 'PDF File',
    'input_FicheropdfA': 'PDF file name',
    'label_nuevo_FicheropdfA': 'New PDF File',
    'input_nuevo_FicheropdfA': 'Select PDF file',
    'label_EstadoA': 'Status *',
    'select_EstadoA': 'Select status',
    'select_EstadoA': 'Select status',
    'label_EstadoA': 'Status *',
    'label_EstadoA_Enviado': 'Sent',
    'label_EstadoA_Revision': 'Review',
    'label_EstadoA_Publicado': 'Published',
    'radio_EstadoA': 'Status option',
    'estado_min_size_KO': 'Status is required',
    'estado_format_KO': 'Status must be Sent, Review or Published',
    'estado_search_format_KO': 'For search, status must be Sent, Review or Published',

    // validation errors

    'codigo_format_KO': 'Invalid format. Numbers only',
    'codigo_min_size_KO': 'Code required',
    'codigo_search_format_KO': 'Invalid search format. Numbers only',

    'autores_min_size_KO': 'Authors required. Minimum 2 characters',
    'autores_max_size_KO': 'Authors too long. Maximum 200 characters',
    'autores_format_KO': 'Invalid format. Only letters, spaces, ñ and accents',
    'autores_search_format_KO': 'Invalid search format. Only letters, spaces, ñ and accents',

    'tituloA_min_size_KO': 'Article title required',
    'tituloA_max_size_KO': 'Article title too long. Maximum 100 characters',
    'tituloA_search_format_KO': 'Invalid search format for article title',

    'tituloR_min_size_KO': 'Journal title required',
    'tituloR_max_size_KO': 'Journal title too long. Maximum 100 characters',
    'tituloR_search_format_KO': 'Invalid search format for journal title',

    'issn_size_KO': 'Incorrect length. Must have 9 characters',
    'issn_format_KO': 'Invalid format. Must be 1234-5678',
    'issn_search_format_KO': 'Invalid search format. Must be valid ISSN',

    'volumen_positivo_KO': 'Must be a positive number',
    'volumen_max_size_KO': 'Volume too large. Maximum 4 digits',
    'volumen_search_format_KO': 'Invalid search format. Numbers only',

    'pagIni_positivo_KO': 'Must be a positive number',
    'pagIni_max_size_KO': 'Initial page too large. Maximum 4 digits',
    'pagIni_search_format_KO': 'Invalid search format. Numbers only',

    'pagFin_positivo_KO': 'Must be a positive number',
    'pagFin_max_size_KO': 'Final page too large. Maximum 4 digits',
    'pagFin_mayor_igual_KO': 'Must be greater than or equal to initial page',
    'pagFin_search_format_KO': 'Invalid search format. Numbers only',

    'fecha_format_KO': 'Invalid date format. Must be YYYY-MM-DD',
    'fecha_search_format_KO': 'Invalid search format. Numbers and hyphens only',

    'estado_format_KO': 'Value not allowed. Must be Sent, Review or Published',
    'estado_search_format_KO': 'Search value not allowed. Must be Sent, Review or Published',

    'ficheropdf_min_size_KO': 'File does not exist. You must upload a PDF',
    'ficheropdf_format_name_file_KO': 'File name does not meet format requirements',
    'ficheropdf_type_file_KO': 'File type not allowed',
    'ficheropdf_max_size_file_KO': 'File size is too large',
    'ficheropdf_min_size_name_KO': 'File name is too short',
    'ficheropdf_max_size_name_KO': 'File name is too long',
    'ficheropdf_search_format_KO': 'Invalid search format. Only letters without accents, ñ, spaces and dot',

    // Mensajes de éxito
    'Exito': 'Success',
    'Código correcto': 'Code correct',
    'Autores correctos': 'Authors correct',
    'Título artículo correcto': 'Article title correct',
    'Título revista correcto': 'Journal title correct',
    'ISSN correcto': 'ISSN correct',
    'Volumen correcto': 'Volume correct',
    'Página inicial correcta': 'Initial page correct',
    'Página final correcta': 'Final page correct',
    'Fecha correcta': 'Date correct',
    'Estado correcto': 'Status correct',
    'Búsqueda correcta': 'Search correct',
    'OK': 'OK',


    // status options
    'Enviado': 'Submitted',
    'Revision': 'Review',
    'Publicado': 'Published',

    // specific messages
    'confirm_delete_articulo': 'Are you sure you want to delete this article? This action cannot be undone.',
    'search_results_articulo': 'articles found matching your search',


    ///////////////////////ubicacion
    'text_title_page_ubicacion': 'Locations Management',
    'class_contenido_titulo_form_ADD_ubicacion': 'Add Location',
    'class_contenido_titulo_form_EDIT_ubicacion': 'Edit Location',
    'class_contenido_titulo_form_DELETE_ubicacion': 'Delete Location',
    'class_contenido_titulo_form_SEARCH_ubicacion': 'Search Locations',
    'class_contenido_titulo_form_SHOWCURRENT_ubicacion': 'Location Details',
    /*
        // attributes 
        'id_site': 'Site ID',
        'site_latitud': 'Latitude',
        'site_longitud': 'Longitude',
        'site_altitude': 'Altitude',
        'site_locality': 'Locality',
        'site_provider_login': 'Provider Login',
        'site_north_photo': 'North Photo',
        'site_south_photo': 'South Photo',
        'site_east_photo': 'East Photo',
        'site_west_photo': 'West Photo',
        'nuevo_site_north_photo': 'New North Photo',
        'nuevo_site_south_photo': 'New South Photo',
        'nuevo_site_east_photo': 'New East Photo',
        'nuevo_site_west_photo': 'New West Photo',
    
    */

    // labels
    'label_id_site': 'Site ID *',
    'input_id_site': 'Enter site ID',
    'label_site_latitud': 'Latitude *',
    'input_site_latitud': 'Enter latitude',
    'label_site_longitud': 'Longitude *',
    'input_site_longitud': 'Enter longitude',
    'label_site_altitude': 'Altitude *',
    'input_site_altitude': 'Enter altitude',
    'label_site_locality': 'Locality *',
    'input_site_locality': 'Enter locality',
    'label_site_provider_login': 'Provider Login *',
    'input_site_provider_login': 'Enter provider login',
    'label_site_north_photo': 'North Photo',
    'input_site_north_photo': 'North photo file name',
    'label_nuevo_site_north_photo': 'New North Photo',
    'input_nuevo_site_north_photo': 'Select north photo',
    'label_site_south_photo': 'South Photo',
    'input_site_south_photo': 'South photo file name',
    'label_nuevo_site_south_photo': 'New South Photo',
    'input_nuevo_site_south_photo': 'Select south photo',
    'label_site_east_photo': 'East Photo',
    'input_site_east_photo': 'East photo file name',
    'label_nuevo_site_east_photo': 'New East Photo',
    'input_nuevo_site_east_photo': 'Select east photo',
    'label_site_west_photo': 'West Photo',
    'input_site_west_photo': 'West photo file name',
    'label_nuevo_site_west_photo': 'New West Photo',
    'input_nuevo_site_west_photo': 'Select west photo',

    // validation errors
    'id_site_obligatorio_KO': 'Site ID is required',
    'id_site_min_size_KO': 'Site ID is required',
    'id_site_search_format_KO': 'Invalid search format. Numbers only',

    'latitud_obligatorio_KO': 'Latitude is required',
    'latitud_min_size_KO': 'Latitude is required',
    'latitud_formato_KO': 'Invalid latitude format. Must be decimal between -90 and 90',
    'latitud_format_KO': 'Invalid latitude format. Must be decimal between -90 and 90',
    'latitud_search_format_KO': 'Invalid search format. Numbers and decimal point only',

    'longitud_obligatorio_KO': 'Longitude is required',
    'longitud_min_size_KO': 'Longitude is required',
    'longitud_formato_KO': 'Invalid longitude format. Must be decimal between -180 and 180',
    'longitud_format_KO': 'Invalid longitude format. Must be decimal between -180 and 180',
    'longitud_search_format_KO': 'Invalid search format. Numbers and decimal point only',

    'altitude_obligatorio_KO': 'Altitude is required',
    'altitude_min_size_KO': 'Altitude is required',
    'altitude_formato_KO': 'Invalid format. Numbers only',
    'altitude_format_KO': 'Invalid format. Numbers only',
    'altitude_search_format_KO': 'Invalid search format. Numbers only',

    'locality_obligatorio_KO': 'Locality is required',
    'locality_min_size_KO': 'Locality is required',
    'locality_max_size_KO': 'Size too large. Maximum 40 characters',
    'locality_format_KO': 'Invalid format. Only alphanumeric characters with accents and spaces',
    'locality_search_format_KO': 'Invalid search format. Only alphanumeric characters with accents and spaces',

    'provider_login_obligatorio_KO': 'Provider Login is required',
    'provider_login_min_size_KO': 'Provider Login is required',
    'provider_login_max_size_KO': 'Size too large. Maximum 30 characters',
    'provider_login_format_KO': 'Invalid format. Only alphanumeric characters without spaces',
    'provider_login_search_format_KO': 'Invalid search format. Only alphanumeric characters without spaces',

    'north_photo_search_format_KO': 'Invalid search format. Only letters without accents, ñ, spaces and dot',
    'south_photo_search_format_KO': 'Invalid search format. Only letters without accents, ñ, spaces and dot',
    'east_photo_search_format_KO': 'Invalid search format. Only letters without accents, ñ, spaces and dot',
    'west_photo_search_format_KO': 'Invalid search format. Only letters without accents, ñ, spaces and dot',

    'altitude_min_size_KO': 'Altitude is required',
    'altitude_format_KO': 'Invalid format. Numbers only',
    'altitude_max_size_KO': 'Size too large. Maximum 4 digits',
    'altitude_search_format_KO': 'Invalid search format. Numbers only',

    // site_locality

    'locality_format_KO': 'Invalid format. Only alphanumeric characters with accents and spaces',
    'locality_search_format_KO': 'Invalid search format. Only alphanumeric characters with accents and spaces',

    // id_site
    'id_site_format_KO': 'Invalid ID Site format. Numbers only',
    'id_site_min_size_KO': 'ID Site is required',
    'id_site_search_format_KO': 'Invalid search format. Numbers only',


    // specific messages ubicacion - NEW
    'confirm_delete_ubicacion': 'Are you sure you want to delete this location? This action cannot be undone.',
    'search_results_ubicacion': 'locations found matching your search',

    //////////////// sistema
    'RECORDSET_VACIO': 'No matching records found',
    'OPERACION_EXITOSA': 'Operation completed successfully',
    'ERROR_SERVIDOR': 'Server error. Please try again',
    'ERROR_CONEXION': 'Connection error. Please check your internet connection',

    /////////////////TEST Y VALIDACIONES
    'TEST_CORRECTO': 'Test passed successfully',
    'TEST_INCORRECTO': 'Test failed',
    'PRUEBA_EXITOSA': 'Test successful',
    'PRUEBA_FALLIDA': 'Test failed',

    ////////////////////////
    'confirm_delete_alumnograduacion': 'Are you sure you want to delete this graduation student? This action cannot be undone.',
    'confirm_delete_articulo': 'Are you sure you want to delete this article? This action cannot be undone.',

    // Search results
    'search_results_alumnograduacion': 'graduation students found matching your search',
    'search_results_articulo': 'articles found matching your search',

    // Errors for location file fields
    'north_photo_not_exist_file_KO': 'You must select a north photo file',
    'north_photo_format_name_file_KO': 'The north photo file name can only contain letters without accents, ñ, spaces, and dot',
    'north_photo_type_file_KO': 'The north photo file type must be ',
    'north_photo_max_size_file_KO': 'The north photo file size cannot exceed 2MB',
    'north_photo_min_size_name_KO': 'The north photo file name must have at least 7 characters',
    'north_photo_max_size_name_KO': 'The north photo file name cannot have more than 50 characters',

    'south_photo_not_exist_file_KO': 'You must select a south photo file',
    'south_photo_format_name_file_KO': 'The south photo file name can only contain letters without accents, ñ, spaces, and dot',
    'south_photo_type_file_KO': 'The south photo file type must be ',
    'south_photo_max_size_file_KO': 'The south photo file size cannot exceed 2MB',
    'south_photo_min_size_name_KO': 'The south photo file name must have at least 7 characters',
    'south_photo_max_size_name_KO': 'The south photo file name cannot have more than 50 characters',

    'east_photo_not_exist_file_KO': 'You must select an east photo file',
    'east_photo_format_name_file_KO': 'The east photo file name can only contain letters without accents, ñ, spaces, and dot',
    'east_photo_type_file_KO': 'The east photo file type must be ',
    'east_photo_max_size_file_KO': 'The east photo file size cannot exceed 2MB',
    'east_photo_min_size_name_KO': 'The east photo file name must have at least 7 characters',
    'east_photo_max_size_name_KO': 'The east photo file name cannot have more than 50 characters',

    'west_photo_not_exist_file_KO': 'You must select a west photo file',
    'west_photo_format_name_file_KO': 'The west photo file name can only contain letters without accents, ñ, spaces, and dot',
    'west_photo_type_file_KO': 'The west photo file type must be ',
    'west_photo_max_size_file_KO': 'The west photo file size cannot exceed 2MB',
    'west_photo_min_size_name_KO': 'The west photo file name must have at least 7 characters',
    'west_photo_max_size_name_KO': 'The west photo file name cannot have more than 50 characters',

    // Errors for article file fields
    'ficheropdf_min_size_KO': 'PDF file is required',
    'ficheropdf_format_name_file_KO': 'The PDF file name can only contain letters without accents, ñ, spaces, and dot',
    'ficheropdf_type_file_KO': 'The file type must be PDF',
    'ficheropdf_max_size_file_KO': 'The PDF file size cannot exceed 2MB',
    'ficheropdf_min_size_name_KO': 'The PDF file name must have at least 7 characters',
    'ficheropdf_max_size_name_KO': 'The PDF file name cannot have more than 20 characters',

    // Generic error messages for files
    'not_exist_file': 'You must select a file',
    'type_file_KO': 'File type not allowed',
    'max_size_file_KO': 'The file size is too large',
    'format_name_file_KO': 'The file name contains invalid characters',

    // Table states
    'RECORDSET_DATOS': 'Data found',
    'RECORDSET_VACIO': 'No elements found matching your search',

    // Error modal
    'ERROR_ACTION_MODAL_TITLE': 'Error',
    'ERROR_ACTION_MODAL_CLOSE': 'Close',

    // Static HTML texts
    'text_header_article': 'Article section',
    'text_footer': 'Footer',

    // Test messages
    'TEST_CORRECTO': 'Test correct',
    'TEST_INCORRECTO': 'Test incorrect',
    'PRUEBA_EXITOSA': 'Test successful',
    'PRUEBA_FALLIDA': 'Test failed',
    'NO_HAY_TRADUCCION': 'No translation available',

    // Verification states
    'NO_VERIFICADO': 'Not verified',
    'METODO_EXISTE': 'Method exists',
    'METODO_NO_EXISTE': 'Method does not exist',

    // Interface elements
    'SUBMIT_BUTTON': 'Submit',
    'TABLA_RESULTADOS': 'Results',

    // Error messages
    'ERROR_CARGA_IDIOMA': 'Error loading language',
    'IDIOMA_NO_SOPORTADO': 'Language not supported',
    'ERROR_UPLOAD_site_north_photo_KO': 'Error loading site north',
    'ERROR_UPLOAD_site_south_photo_KO': 'Error loading site south',
    'ERROR_UPLOAD_site_east_photo_KO': 'Error loading site east',
    'ERROR_UPLOAD_site_west_photo_KO': 'Error loading site west',

    'north_photo_not_exist_file_KO': 'You must select a north photo file',
    'north_photo_format_name_file_KO': 'The north photo file name can only contain letters without accents, ñ, spaces, and dot',
    'north_photo_type_file_KO': 'The north photo file type must be ',
    'north_photo_max_size_file_KO': 'The north photo file size cannot exceed 2MB',
    'north_photo_min_size_name_KO': 'The north photo file name must have at least 7 characters',
    'north_photo_max_size_name_KO': 'The north photo file name cannot have more than 50 characters',

    'south_photo_not_exist_file_KO': 'You must select a south photo file',
    'south_photo_format_name_file_KO': 'The south photo file name can only contain letters without accents, ñ, spaces, and dot',
    'south_photo_type_file_KO': 'The south photo file type must be ',
    'south_photo_max_size_file_KO': 'The south photo file size cannot exceed 2MB',
    'south_photo_min_size_name_KO': 'The south photo file name must have at least 7 characters',
    'south_photo_max_size_name_KO': 'The south photo file name cannot have more than 50 characters',

    'east_photo_not_exist_file_KO': 'You must select an east photo file',
    'east_photo_format_name_file_KO': 'The east photo file name can only contain letters without accents, ñ, spaces, and dot',
    'east_photo_type_file_KO': 'The east photo file type must be ',
    'east_photo_max_size_file_KO': 'The east photo file size cannot exceed 2MB',
    'east_photo_min_size_name_KO': 'The east photo file name must have at least 7 characters',
    'east_photo_max_size_name_KO': 'The east photo file name cannot have more than 50 characters',

    'west_photo_not_exist_file_KO': 'You must select a west photo file',
    'west_photo_format_name_file_KO': 'The west photo file name can only contain letters without accents, ñ, spaces, and dot',
    'west_photo_type_file_KO': 'The west photo file type must be ',
    'west_photo_max_size_file_KO': 'The west photo file size cannot exceed 2MB',
    'west_photo_min_size_name_KO': 'The west photo file name must have at least 7 characters',
    'west_photo_max_size_name_KO': 'The west photo file name cannot have more than 50 characters',


    // Labels for file fields in ADD
    'label_nuevo_site_north_photo_text': 'New North Photo',
    'label_nuevo_site_south_photo_text': 'New South Photo',
    'label_nuevo_site_east_photo_text': 'New East Photo',
    'label_nuevo_site_west_photo_text': 'New West Photo',

    // General missing labels
    'label_id_site': 'Site ID',
    'label_site_latitud': 'Latitude *',
    'label_site_longitud': 'Longitude *',
    'label_site_altitude': 'Altitude *',
    'label_site_locality': 'Locality *',
    'label_site_provider_login': 'Provider Login *',

    'SQL_KO': 'SQL_KO',

     'Entidad no encontrada: persona': 'Entity not found: person',
    'Error al buscar datos: $ is not defined':'$ is not defined'
};