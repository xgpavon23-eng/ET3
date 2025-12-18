class ubicacion extends EntidadAbstracta {
    constructor(esTest) {
        super(esTest);
        this.attributes = ['id_site', 'site_latitud', 'site_longitud', 'site_altitude', 'site_locality', 'site_provider_login', 'site_north_photo', 'site_south_photo', 'site_east_photo', 'site_west_photo'];
        this.columnasamostrar = ['id_site', 'site_latitud', 'site_longitud', 'site_altitude', 'site_locality'];
        this.mostrarespecial = ['site_north_photo', 'site_south_photo', 'site_east_photo', 'site_west_photo'];
    }

    manual_form_creation() {
        return `
        <form id="form_iu">
            
            <label for="id_site" class="label_id_site">ID Sitio</label>
            <input type="text" id="id_site" name="id_site" class="input_id_site">
            <span id="span_error_id_site" style="display:none"><span id="error_id_site"></span></span>
            <br>
            
            <label for="site_latitud" class="label_site_latitud">Latitud *</label>
            <input type="text" id="site_latitud" name="site_latitud" class="input_site_latitud" title="Latitud WGS84. Valor entre -90 y 90 con hasta 6 decimales">
            <span id="span_error_site_latitud" style="display:none"><span id="error_site_latitud"></span></span>
            <br>
            
            <label for="site_longitud" class="label_site_longitud">Longitud *</label>
            <input type="text" id="site_longitud" name="site_longitud" class="input_site_longitud" title="Longitud WGS84. Valor entre -180 y 180 con hasta 6 decimales">
            <span id="span_error_site_longitud" style="display:none"><span id="error_site_longitud"></span></span>
            <br>
            
            <label for="site_altitude" class="label_site_altitude">Altitud *</label>
            <input type="text" id="site_altitude" name="site_altitude" class="input_site_altitude" title="Valor numérico. Máximo 4 dígitos">
            <span id="span_error_site_altitude" style="display:none"><span id="error_site_altitude"></span></span>
            <br>
            
            <label for="site_locality" class="label_site_locality">Localidad *</label>
            <input type="text" id="site_locality" name="site_locality" class="input_site_locality" title="Texto alfanumérico. Máximo 40 caracteres">
            <span id="span_error_site_locality" style="display:none"><span id="error_site_locality"></span></span>
            <br>
            
            <label for="site_provider_login" class="label_site_provider_login">Login Proveedor *</label>
            <input type="text" id="site_provider_login" name="site_provider_login" class="input_site_provider_login" title="Texto alfanumérico. Máximo 30 caracteres">
            <span id="span_error_site_provider_login" style="display:none"><span id="error_site_provider_login"></span></span>
            <br>
            
            
            <label id="label_site_north_photo" class="label_site_north_photo">Foto Norte</label>
            <input type="text" id="site_north_photo" name="site_north_photo" class="input_site_north_photo" readonly>
            <a id="link_site_north_photo" href=""><img src="./iconos/FILE.png" /></a>
            <span id="span_error_site_north_photo" style="display:none"><span id="error_site_north_photo"></span></span>
            <br>
            
            <label id="label_nuevo_site_north_photo" class="label_nuevo_site_north_photo">Nueva Foto Norte</label>
            <input type="file" id="nuevo_site_north_photo" name="nuevo_site_north_photo" class="input_nuevo_site_north_photo" accept=".jpg,.jpeg" title="Solo archivos JPG. Máximo 2MB. Nombre sin acentos, ñ ni espacios">
            <span id="span_error_nuevo_site_north_photo" style="display:none"><span id="error_nuevo_site_north_photo"></span></span>
            <br>
            
            
            <label id="label_site_south_photo" class="label_site_south_photo">Foto Sur</label>
            <input type="text" id="site_south_photo" name="site_south_photo" class="input_site_south_photo" readonly>
            <a id="link_site_south_photo" href=""><img src="./iconos/FILE.png" /></a>
            <span id="span_error_site_south_photo" style="display:none"><span id="error_site_south_photo"></span></span>
            <br>
            
            <label id="label_nuevo_site_south_photo" class="label_nuevo_site_south_photo">Nueva Foto Sur</label>
            <input type="file" id="nuevo_site_south_photo" name="nuevo_site_south_photo" class="input_nuevo_site_south_photo" accept=".jpg,.jpeg" title="Solo archivos JPG. Máximo 2MB. Nombre sin acentos, ñ ni espacios">
            <span id="span_error_nuevo_site_south_photo" style="display:none"><span id="error_nuevo_site_south_photo"></span></span>
            <br>
            
            
            <label id="label_site_east_photo" class="label_site_east_photo">Foto Este</label>
            <input type="text" id="site_east_photo" name="site_east_photo" class="input_site_east_photo" readonly>
            <a id="link_site_east_photo" href=""><img src="./iconos/FILE.png" /></a>
            <span id="span_error_site_east_photo" style="display:none"><span id="error_site_east_photo"></span></span>
            <br>
            
            <label id="label_nuevo_site_east_photo" class="label_nuevo_site_east_photo">Nueva Foto Este</label>
            <input type="file" id="nuevo_site_east_photo" name="nuevo_site_east_photo" class="input_nuevo_site_east_photo" accept=".jpg,.jpeg" title="Solo archivos JPG. Máximo 2MB. Nombre sin acentos, ñ ni espacios">
            <span id="span_error_nuevo_site_east_photo" style="display:none"><span id="error_nuevo_site_east_photo"></span></span>
            <br>
            
            
            <label id="label_site_west_photo" class="label_site_west_photo">Foto Oeste</label>
            <input type="text" id="site_west_photo" name="site_west_photo" class="input_site_west_photo" readonly>
            <a id="link_site_west_photo" href=""><img src="./iconos/FILE.png" /></a>
            <span id="span_error_site_west_photo" style="display:none"><span id="error_site_west_photo"></span></span>
            <br>
            
            <label id="label_nuevo_site_west_photo" class="label_nuevo_site_west_photo">Nueva Foto Oeste</label>
            <input type="file" id="nuevo_site_west_photo" name="nuevo_site_west_photo" class="input_nuevo_site_west_photo" accept=".jpg,.jpeg" title="Solo archivos JPG. Máximo 2MB. Nombre sin acentos, ñ ni espacios">
            <span id="span_error_nuevo_site_west_photo" style="display:none"><span id="error_nuevo_site_west_photo"></span></span>
            <br>
        </form>
    `;
    }

    ////////////////////////////creación de formularios
    createForm_ADD() {

        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        console.log('Formulario creado en contenedor_IU_form');

        document.getElementById('class_contenido_titulo_form').innerHTML = 'ADD Ubicación';
        console.log('Título establecido');

        // ESPERAR un momento para que el DOM se actualice, luego ocultar id_site
        setTimeout(() => {
            // Ocultar id_site
            const labelIdSite = document.getElementById('label_id_site');
            const inputIdSite = document.getElementById('id_site');
            const spanErrorIdSite = document.getElementById('span_error_id_site');

            console.log('Elementos encontrados después de timeout:', {
                label: labelIdSite,
                input: inputIdSite,
                span: spanErrorIdSite
            });

            if (labelIdSite) labelIdSite.style.display = 'none';
            if (inputIdSite) inputIdSite.style.display = 'none';
            if (spanErrorIdSite) spanErrorIdSite.style.display = 'none';

            console.log('id_site ocultado');

            // Configurar campos file
            this.configurarCamposFileADD();
            console.log('Campos file configurados');

            this.dom.colocarvalidaciones('form_iu', 'ADD');
            console.log('Validaciones colocadas');

            this.dom.colocarboton('ADD');
            console.log('Botón ADD colocado');

            document.getElementById('form_iu').onsubmit = (e) => {
                e.preventDefault();
                console.log('Formulario enviado');
                this.ADD_submit_ubicacion();
            };

            this.dom.show_element('Div_IU_form', 'block');
            console.log('Modal mostrado');

            setLang();

        }, 10); // Pequeño delay para asegurar que el DOM se ha actualizado
    }

    createForm_SEARCH() {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        document.getElementById('class_contenido_titulo_form').innerHTML = 'SEARCH Ubicación';

        // Configurar campos file para SEARCH
        this.configurarCamposFileSEARCH();

        this.dom.colocarvalidaciones('form_iu', 'SEARCH');
        this.dom.colocarboton('SEARCH');
        document.getElementById('form_iu').onsubmit = (e) => {
            e.preventDefault();
            this.SEARCH();
        };
        this.dom.show_element('Div_IU_form', 'block');
        setLang();
    }

    createForm_EDIT(parametros) {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        document.getElementById('class_contenido_titulo_form').innerHTML = 'EDIT Ubicación';
        this.dom.rellenarvaloresform(parametros);

        // Configurar campos file para EDIT
        this.configurarCamposFileEDIT();

        this.dom.colocarvalidaciones('form_iu', 'EDIT');
        this.dom.colocarboton('EDIT');
        document.getElementById('form_iu').onsubmit = (e) => {
            e.preventDefault();
            this.EDIT_submit_ubicacion();
        };
        this.dom.show_element('Div_IU_form', 'block');
        setLang();
    }

    createForm_DELETE(parametros) {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        document.getElementById('class_contenido_titulo_form').innerHTML = 'DELETE Ubicación';
        this.dom.rellenarvaloresform(parametros);
        this.dom.colocartodosreadonly('form_iu');

        // Configurar campos file para DELETE
        this.configurarCamposFileDELETE();

        this.dom.colocarboton('DELETE');
        document.getElementById('form_iu').onsubmit = (e) => {
            e.preventDefault();
            this.DELETE();
        };
        this.dom.show_element('Div_IU_form', 'block');
        setLang();
    }

    createForm_SHOWCURRENT(parametros) {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        document.getElementById('class_contenido_titulo_form').innerHTML = 'SHOW Ubicación';
        this.dom.rellenarvaloresform(parametros);
        this.dom.colocartodosreadonly('form_iu');

        // Configurar campos file para SHOWCURRENT
        this.configurarCamposFileSHOWCURRENT();

        this.dom.show_element('Div_IU_form', 'block');
        setLang();
    }

    // Métodos auxiliares para configurar campos file
    configurarCamposFileADD() {
        const campos = ['site_north_photo', 'site_south_photo', 'site_east_photo', 'site_west_photo'];
        campos.forEach(campo => {
            this.dom.show_element('label_' + campo, 'none');
            this.dom.show_element(campo, 'none');
            this.dom.show_element('link_' + campo, 'none');
            this.dom.show_element('label_nuevo_' + campo, 'block');
            this.dom.show_element('nuevo_' + campo, 'block');
        });
    }

    configurarCamposFileSEARCH() {
        const campos = ['site_north_photo', 'site_south_photo', 'site_east_photo', 'site_west_photo'];
        campos.forEach(campo => {
            this.dom.show_element('label_nuevo_' + campo, 'none');
            this.dom.show_element('nuevo_' + campo, 'none');
            this.dom.show_element(campo, 'block');
            this.dom.show_element('link_' + campo, 'block');
            document.getElementById(campo).readOnly = false;
        });
    }

    configurarCamposFileEDIT() {
        const campos = ['site_north_photo', 'site_south_photo', 'site_east_photo', 'site_west_photo'];
        campos.forEach(campo => {
            this.dom.show_element('label_nuevo_' + campo, 'block');
            this.dom.show_element('nuevo_' + campo, 'block');
            this.dom.show_element(campo, 'block');
            this.dom.show_element('link_' + campo, 'block');
            document.getElementById(campo).readOnly = true;
        });
    }

    configurarCamposFileDELETE() {
        const campos = ['site_north_photo', 'site_south_photo', 'site_east_photo', 'site_west_photo'];
        campos.forEach(campo => {
            this.dom.show_element('label_nuevo_' + campo, 'none');
            this.dom.show_element('nuevo_' + campo, 'none');
        });
    }

    configurarCamposFileSHOWCURRENT() {
        const campos = ['site_north_photo', 'site_south_photo', 'site_east_photo', 'site_west_photo'];
        campos.forEach(campo => {
            this.dom.show_element('label_nuevo_' + campo, 'none');
            this.dom.show_element('nuevo_' + campo, 'none');
        });
    }

    //////////////////////funciones personalizadas

    /////////////Validación de latitud
    personalize_site_latitud_validation(latitud) {
        latitud = latitud.trim();

        // Validar format decimal más flexible
        if (!/^-?\d{1,2}(\.\d{1,6})?$/.test(latitud)) {
            return false;
        }

        const valor = parseFloat(latitud);
        return !isNaN(valor) && valor >= -90 && valor <= 90;
    }

    /////////////Validación de longitud
    personalize_site_longitud_validation(longitud) {
        longitud = longitud.trim();

        // Validar format decimal más flexible
        if (!/^-?\d{1,3}(\.\d{1,6})?$/.test(longitud)) {
            return false;
        }

        const valor = parseFloat(longitud);
        return !isNaN(valor) && valor >= -180 && valor <= 180;
    }
    //////////////////////////Métodos de validación para ADD
    ADD_id_site_validation() {
        const value = document.getElementById('id_site').value.trim();

        // Campo autoincremental: puede estar vacío en ADD
        if (!value) {
            this.dom.mostrar_exito_campo('id_site');
            return true;
        }

        // Si tiene valor, debe ser numérico
        if (!this.validations.format('id_site', '^[0-9]+$')) {
            this.dom.mostrar_error_campo('id_site', 'id_site_format_KO');
            return 'id_site_format_KO';
        }

        this.dom.mostrar_exito_campo('id_site');
        return true;
    }

    ADD_site_latitud_validation() {
        const value = document.getElementById('site_latitud').value.trim();

        // Validar primero si está vacío
        if (!value) {
            this.dom.mostrar_error_campo('site_latitud', 'latitud_min_size_KO');
            return 'latitud_min_size_KO';
        }

        // Validar format
        if (!this.personalize_site_latitud_validation(value)) {
            this.dom.mostrar_error_campo('site_latitud', 'latitud_format_KO');
            return 'latitud_format_KO';
        }

        this.dom.mostrar_exito_campo('site_latitud');
        return true;
    }

    ADD_site_longitud_validation() {
        const value = document.getElementById('site_longitud').value.trim();

        if (!value) {
            this.dom.mostrar_error_campo('site_longitud', 'longitud_min_size_KO');
            return 'longitud_min_size_KO';
        }

        if (!this.personalize_site_longitud_validation(value)) {
            this.dom.mostrar_error_campo('site_longitud', 'longitud_format_KO');
            return 'longitud_format_KO';
        }

        this.dom.mostrar_exito_campo('site_longitud');
        return true;
    }

    ADD_site_altitude_validation() {
        const value = document.getElementById('site_altitude').value.trim();

        // 1. Validar campo obligatorio
        if (!value) {
            this.dom.mostrar_error_campo('site_altitude', 'altitude_min_size_KO');
            return 'altitude_min_size_KO';
        }

        // 2. Validar formato numérico (incluyendo negativos)
        if (!/^-?[0-9]+$/.test(value)) {
            this.dom.mostrar_error_campo('site_altitude', 'altitude_format_KO');
            return 'altitude_format_KO';
        }

        // 3. Validar tamaño máximo (sin contar el signo negativo)
        const numStr = value.replace('-', '');
        if (numStr.length > 4) {
            this.dom.mostrar_error_campo('site_altitude', 'altitude_max_size_KO');
            return 'altitude_max_size_KO';
        }

        this.dom.mostrar_exito_campo('site_altitude');
        return true;
    }

    ADD_site_locality_validation() {
        const value = document.getElementById('site_locality').value.trim();

        if (!value) {
            this.dom.mostrar_error_campo('site_locality', 'locality_min_size_KO');
            return 'locality_min_size_KO';
        }

        if (!this.validations.max_size('site_locality', 40)) {
            this.dom.mostrar_error_campo('site_locality', 'locality_max_size_KO');
            return 'locality_max_size_KO';
        }

        // Validar formato: alfanumérico con acentos, espacios y algunos caracteres especiales
        if (!/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s\.,-]+$/.test(value)) {
            this.dom.mostrar_error_campo('site_locality', 'locality_format_KO');
            return 'locality_format_KO';
        }

        this.dom.mostrar_exito_campo('site_locality');
        return true;
    }

    ADD_site_provider_login_validation() {
        const value = document.getElementById('site_provider_login').value.trim();

        if (!value) {
            this.dom.mostrar_error_campo('site_provider_login', 'provider_login_min_size_KO');
            return 'provider_login_min_size_KO';
        }

        if (!this.validations.max_size('site_provider_login', 30)) {
            this.dom.mostrar_error_campo('site_provider_login', 'provider_login_max_size_KO');
            return 'provider_login_max_size_KO';
        }

        // Validar formato: solo alfanumérico sin espacios
        if (!/^[a-zA-Z0-9]+$/.test(value)) {
            this.dom.mostrar_error_campo('site_provider_login', 'provider_login_format_KO');
            return 'provider_login_format_KO';
        }

        this.dom.mostrar_exito_campo('site_provider_login');
        return true;
    }


    // Métodos de validación para campos file 
    personalize_ubicacion_file_validation(campo) {
        if (!this.validations.not_exist_file('nuevo_' + campo)) {
            this.dom.mostrar_error_campo('nuevo_' + campo, 'not_exist_file');
            return 'not_exist_file';
        }


        if (!this.validations.type_file('nuevo_' + campo, ['image/jpeg', 'image/jpg'])) {
            this.dom.mostrar_error_campo('nuevo_' + campo, 'type_file_KO');
            return 'type_file_KO';
        }

        if (!this.validations.max_size_file('nuevo_' + campo, 2000000)) {
            this.dom.mostrar_error_campo('nuevo_' + campo, 'max_size_file_KO');
            return 'max_size_file_KO';
        }


        if (!this.validations.format_name_file('nuevo_' + campo, '^[a-zA-Z0-9_\\-\\.]+\\.(jpg|jpeg|JPG|JPEG)$')) {
            this.dom.mostrar_error_campo('nuevo_' + campo, 'format_name_file_KO');
            return 'format_name_file_KO';
        }

        this.dom.mostrar_exito_campo('nuevo_' + campo);
        return true;
    }

    ADD_site_north_photo_validation() {
        return this.ADD_nuevo_site_north_photo_validation();
    }

    ADD_site_south_photo_validation() {
        return this.ADD_nuevo_site_south_photo_validation();
    }

    ADD_site_east_photo_validation() {
        return this.ADD_nuevo_site_east_photo_validation();
    }

    ADD_site_west_photo_validation() {
        return this.ADD_nuevo_site_west_photo_validation();
    }

    ADD_nuevo_site_north_photo_validation() {
        return this.personalize_ubicacion_file_validation('site_north_photo');
    }

    ADD_nuevo_site_south_photo_validation() {
        return this.personalize_ubicacion_file_validation('site_south_photo');
    }

    ADD_nuevo_site_east_photo_validation() {
        return this.personalize_ubicacion_file_validation('site_east_photo');
    }

    ADD_nuevo_site_west_photo_validation() {
        return this.personalize_ubicacion_file_validation('site_west_photo');
    }

    ADD_submit_ubicacion() {
        const validations = [
            this.ADD_id_site_validation(),
            this.ADD_site_latitud_validation(),
            this.ADD_site_longitud_validation(),
            this.ADD_site_altitude_validation(),
            this.ADD_site_locality_validation(),
            this.ADD_site_provider_login_validation(),
            this.ADD_nuevo_site_north_photo_validation(),
            this.ADD_nuevo_site_south_photo_validation(),
            this.ADD_nuevo_site_east_photo_validation(),
            this.ADD_nuevo_site_west_photo_validation()
        ];

        if (validations.every(v => v === true)) {
            this.ADD();
        }
    }

    /////////////////////////////////////////////////VALIDACIONES PARA EDIT
    EDIT_id_site_validation() {
        const value = document.getElementById('id_site').value.trim();

        if (!value) {
            this.dom.mostrar_error_campo('id_site', 'id_site_min_size_KO');
            return 'id_site_min_size_KO';
        }

        if (!this.validations.format('id_site', '^[0-9]+$')) {
            this.dom.mostrar_error_campo('id_site', 'id_site_format_KO');
            return 'id_site_format_KO';
        }

        this.dom.mostrar_exito_campo('id_site');
        return true;
    }

    EDIT_site_latitud_validation() {
        const value = document.getElementById('site_latitud').value.trim();
        if (value === '') {
            this.dom.mostrar_exito_campo('site_latitud');
            return true;
        }

        if (!this.personalize_site_latitud_validation(value)) {
            this.dom.mostrar_error_campo('site_latitud', 'latitud_format_KO');
            return 'latitud_format_KO';
        }

        this.dom.mostrar_exito_campo('site_latitud');
        return true;
    }

    EDIT_site_longitud_validation() {
        const value = document.getElementById('site_longitud').value.trim();
        if (value === '') {
            this.dom.mostrar_exito_campo('site_longitud');
            return true;
        }

        if (!this.personalize_site_longitud_validation(value)) {
            this.dom.mostrar_error_campo('site_longitud', 'longitud_format_KO');
            return 'longitud_format_KO';
        }

        this.dom.mostrar_exito_campo('site_longitud');
        return true;
    }

    EDIT_site_altitude_validation() {
        const value = document.getElementById('site_altitude').value.trim();

        // En EDIT, el campo es opcional
        if (value === '') {
            this.dom.mostrar_exito_campo('site_altitude');
            return true;
        }

        // Si tiene valor, validar formato
        if (!/^-?[0-9]+$/.test(value)) {
            this.dom.mostrar_error_campo('site_altitude', 'altitude_format_KO');
            return 'altitude_format_KO';
        }

        // Validar tamaño máximo (sin contar el signo negativo)
        const numStr = value.replace('-', '');
        if (numStr.length > 4) {
            this.dom.mostrar_error_campo('site_altitude', 'altitude_max_size_KO');
            return 'altitude_max_size_KO';
        }

        this.dom.mostrar_exito_campo('site_altitude');
        return true;
    }

    EDIT_site_locality_validation() {
        const value = document.getElementById('site_locality').value.trim();
        if (value === '') {
            this.dom.mostrar_exito_campo('site_locality');
            return true;
        }

        if (!this.validations.max_size('site_locality', 40)) {
            this.dom.mostrar_error_campo('site_locality', 'locality_max_size_KO');
            return 'locality_max_size_KO';
        }

        // Validar formato: alfanumérico con acentos, espacios y algunos caracteres especiales
        if (!/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s\.,-]*$/.test(value)) {
            this.dom.mostrar_error_campo('site_locality', 'locality_format_KO');
            return 'locality_format_KO';
        }

        this.dom.mostrar_exito_campo('site_locality');
        return true;
    }

    EDIT_site_provider_login_validation() {
        const value = document.getElementById('site_provider_login').value.trim();
        if (value === '') {
            this.dom.mostrar_exito_campo('site_provider_login');
            return true;
        }

        if (!this.validations.max_size('site_provider_login', 30)) {
            this.dom.mostrar_error_campo('site_provider_login', 'provider_login_max_size_KO');
            return 'provider_login_max_size_KO';
        }

        // Validar formato: solo alfanumérico sin espacios
        if (!/^[a-zA-Z0-9]*$/.test(value)) {
            this.dom.mostrar_error_campo('site_provider_login', 'provider_login_format_KO');
            return 'provider_login_format_KO';
        }

        this.dom.mostrar_exito_campo('site_provider_login');
        return true;
    }

    EDIT_site_north_photo_validation() {
        return this.EDIT_nuevo_site_north_photo_validation();
    }

    EDIT_site_south_photo_validation() {
        return this.EDIT_nuevo_site_south_photo_validation();
    }

    EDIT_site_east_photo_validation() {
        return this.EDIT_nuevo_site_east_photo_validation();
    }

    EDIT_site_west_photo_validation() {
        return this.EDIT_nuevo_site_west_photo_validation();
    }

    EDIT_nuevo_site_north_photo_validation() {
        // En EDIT, el fichero es opcional
        if (!this.validations.not_exist_file('nuevo_site_north_photo')) {
            this.dom.mostrar_exito_campo('nuevo_site_north_photo');
            return true;
        }
        return this.personalize_ubicacion_file_validation('site_north_photo');
    }

    EDIT_nuevo_site_south_photo_validation() {
        if (!this.validations.not_exist_file('nuevo_site_south_photo')) {
            this.dom.mostrar_exito_campo('nuevo_site_south_photo');
            return true;
        }
        return this.personalize_ubicacion_file_validation('site_south_photo');
    }

    EDIT_nuevo_site_east_photo_validation() {
        if (!this.validations.not_exist_file('nuevo_site_east_photo')) {
            this.dom.mostrar_exito_campo('nuevo_site_east_photo');
            return true;
        }
        return this.personalize_ubicacion_file_validation('site_east_photo');
    }

    EDIT_nuevo_site_west_photo_validation() {
        if (!this.validations.not_exist_file('nuevo_site_west_photo')) {
            this.dom.mostrar_exito_campo('nuevo_site_west_photo');
            return true;
        }
        return this.personalize_ubicacion_file_validation('site_west_photo');
    }

    EDIT_submit_ubicacion() {
        const validations = [
            this.EDIT_id_site_validation(),
            this.EDIT_site_latitud_validation(),
            this.EDIT_site_longitud_validation(),
            this.EDIT_site_altitude_validation(),
            this.EDIT_site_locality_validation(),
            this.EDIT_site_provider_login_validation(),
            this.EDIT_nuevo_site_north_photo_validation(),
            this.EDIT_nuevo_site_south_photo_validation(),
            this.EDIT_nuevo_site_east_photo_validation(),
            this.EDIT_nuevo_site_west_photo_validation()
        ];

        if (validations.every(v => v === true)) {
            this.EDIT();
        }
    }

    //////////////////////////////// Métodos de validación para SEARCH 
    SEARCH_id_site_validation() {
        const value = document.getElementById('id_site').value.trim();
        if (value && !this.validations.format('id_site', '^[0-9]*$')) {
            this.dom.mostrar_error_campo('id_site', 'id_site_search_format_KO');
            return 'id_site_search_format_KO';
        }
        this.dom.mostrar_exito_campo('id_site');
        return true;
    }

    SEARCH_site_latitud_validation() {
        const value = document.getElementById('site_latitud').value.trim();
        if (value && !this.validations.format('site_latitud', '^-?[0-9]*(\\.[0-9]*)?$')) {
            this.dom.mostrar_error_campo('site_latitud', 'latitud_search_format_KO');
            return 'latitud_search_format_KO';
        }
        this.dom.mostrar_exito_campo('site_latitud');
        return true;
    }

    SEARCH_site_longitud_validation() {
        const value = document.getElementById('site_longitud').value.trim();
        if (value && !this.validations.format('site_longitud', '^-?[0-9]*(\\.[0-9]*)?$')) {
            this.dom.mostrar_error_campo('site_longitud', 'longitud_search_format_KO');
            return 'longitud_search_format_KO';
        }
        this.dom.mostrar_exito_campo('site_longitud');
        return true;
    }

    SEARCH_site_altitude_validation() {
        const value = document.getElementById('site_altitude').value.trim();

        // En SEARCH, el campo es opcional
        if (value === '') {
            this.dom.mostrar_exito_campo('site_altitude');
            return true;
        }

        // Si tiene valor, debe ser numérico (puede estar incompleto en búsqueda)
        if (!/^-?[0-9]*$/.test(value)) {
            this.dom.mostrar_error_campo('site_altitude', 'altitude_search_format_KO');
            return 'altitude_search_format_KO';
        }

        this.dom.mostrar_exito_campo('site_altitude');
        return true;
    }

    SEARCH_site_locality_validation() {
        const value = document.getElementById('site_locality').value.trim();
        if (value && !/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s\.,-]*$/.test(value)) {
            this.dom.mostrar_error_campo('site_locality', 'locality_search_format_KO');
            return 'locality_search_format_KO';
        }
        this.dom.mostrar_exito_campo('site_locality');
        return true;
    }

    SEARCH_site_provider_login_validation() {
        const value = document.getElementById('site_provider_login').value.trim();
        if (value && !/^[a-zA-Z0-9]*$/.test(value)) {
            this.dom.mostrar_error_campo('site_provider_login', 'provider_login_search_format_KO');
            return 'provider_login_search_format_KO';
        }
        this.dom.mostrar_exito_campo('site_provider_login');
        return true;
    }

    SEARCH_site_north_photo_validation() {
        const value = document.getElementById('site_north_photo').value;
        if (value && !this.validations.format('site_north_photo', '^[a-zA-Z0-9_\\-\\.]*$')) {
            this.dom.mostrar_error_campo('site_north_photo', 'north_photo_search_format_KO');
            return 'north_photo_search_format_KO';
        }
        this.dom.mostrar_exito_campo('site_north_photo');
        return true;
    }

    SEARCH_site_south_photo_validation() {
        const value = document.getElementById('site_south_photo').value;
        if (value && !this.validations.format('site_south_photo', '^[a-zA-Z0-9_\\-\\.]*$')) {
            this.dom.mostrar_error_campo('site_south_photo', 'south_photo_search_format_KO');
            return 'south_photo_search_format_KO';
        }
        this.dom.mostrar_exito_campo('site_south_photo');
        return true;
    }

    SEARCH_site_east_photo_validation() {
        const value = document.getElementById('site_east_photo').value;
        if (value && !this.validations.format('site_east_photo', '^[a-zA-Z0-9_\\-\\.]*$')) {
            this.dom.mostrar_error_campo('site_east_photo', 'east_photo_search_format_KO');
            return 'east_photo_search_format_KO';
        }
        this.dom.mostrar_exito_campo('site_east_photo');
        return true;
    }

    SEARCH_site_west_photo_validation() {
        const value = document.getElementById('site_west_photo').value;
        if (value && !this.validations.format('site_west_photo', '^[a-zA-Z0-9_\\-\\.]*$')) {
            this.dom.mostrar_error_campo('site_west_photo', 'west_photo_search_format_KO');
            return 'west_photo_search_format_KO';
        }
        this.dom.mostrar_exito_campo('site_west_photo');
        return true;
    }

    SEARCH_submit_ubicacion() {
        const validations = [
            this.SEARCH_id_site_validation(),
            this.SEARCH_site_latitud_validation(),
            this.SEARCH_site_longitud_validation(),
            this.SEARCH_site_altitude_validation(),
            this.SEARCH_site_locality_validation(),
            this.SEARCH_site_provider_login_validation(),
            this.SEARCH_site_north_photo_validation(),
            this.SEARCH_site_south_photo_validation(),
            this.SEARCH_site_east_photo_validation(),
            this.SEARCH_site_west_photo_validation()
        ];

        if (validations.every(v => v === true)) {
            this.SEARCH();
            return true;
        }
        return false;
    }

    mostrarcambioatributo(clave, valor) {
        const camposFoto = ['site_north_photo', 'site_south_photo', 'site_east_photo', 'site_west_photo'];
        if (camposFoto.includes(clave) && valor) {
            // Si los archivos se guardan con extensión .jpg en el servidor
            return `<a href="http://193.147.87.202/ET2/filesuploaded/files_${clave}/${valor}" target="_blank"><img src="./iconos/FILE.png" alt="Ver Foto" title="Ver Foto"></a>`;
        }
        return valor;
    }

}