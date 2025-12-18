class alumnograduacion extends EntidadAbstracta {
    constructor(esTest) {
        super(esTest);
        // Atributos de la entidad
        this.attributes = [
            'alumnograduacion_login',
            'alumnograduacion_password',
            'alumnograduacion_nombre',
            'alumnograduacion_apellidos',
            'alumnograduacion_titulacion',
            'alumnograduacion_dni',
            'alumnograduacion_telefono',
            'alumnograduacion_direccion',
            'alumnograduacion_email',
            'alumnograduacion_fotoacto'
        ];

        // Columnas a mostrar en la tabla
        this.columnasamostrar = [
            'alumnograduacion_login',
            'alumnograduacion_nombre',
            'alumnograduacion_apellidos',
            'alumnograduacion_titulacion',
            'alumnograduacion_email'
        ];

        // Campos especiales (archivos)
        this.mostrarespecial = ['alumnograduacion_fotoacto'];

        // Campos obligatorios por acción
        this.camposObligatorios = {
            'ADD': [
                'alumnograduacion_login',
                'alumnograduacion_password',
                'alumnograduacion_nombre',
                'alumnograduacion_apellidos',
                'alumnograduacion_titulacion',
                'alumnograduacion_dni',
                'alumnograduacion_telefono',
                'alumnograduacion_direccion',
                'alumnograduacion_email'
            ],
            'EDIT': ['alumnograduacion_dni'], // Solo DNI es obligatorio en EDIT (clave primaria)
            'SEARCH': [] // En búsqueda ningún campo es obligatorio
        };
    }

    /**
     * Crea el formulario HTML manualmente
     * @returns {string} HTML del formulario
     */
    manual_form_creation() {
        return `
            <form id="form_iu">
                <!-- Campo: Login -->
                <label for="alumnograduacion_login" class="label_alumnograduacion_login">Login *</label>
                <input type="text" id="alumnograduacion_login" name="alumnograduacion_login" class="input_alumnograduacion_login" title="Solo letras sin acentos ni ñ. Entre 4 y 15 caracteres">
                <span id="span_error_alumnograduacion_login" style="display:none"><span id="error_alumnograduacion_login"></span></span>
                <br>
                
                <!-- Campo: Password -->
                <label for="alumnograduacion_password" class="label_alumnograduacion_password">Password *</label>
                <input type="password" id="alumnograduacion_password" name="alumnograduacion_password" class="input_alumnograduacion_password" title="Solo letras y espacios sin acentos ni ñ. Entre 8 y 64 caracteres">
                <span id="span_error_alumnograduacion_password" style="display:none"><span id="error_alumnograduacion_password"></span></span>
                <br>
                
                <!-- Campo: Nombre -->
                <label for="alumnograduacion_nombre" class="label_alumnograduacion_nombre">Nombre *</label>
                <input type="text" id="alumnograduacion_nombre" name="alumnograduacion_nombre" class="input_alumnograduacion_nombre" title="Solo letras, espacios, ñ y acentos. Entre 2 y 25 caracteres">
                <span id="span_error_alumnograduacion_nombre" style="display:none"><span id="error_alumnograduacion_nombre"></span></span>
                <br>
                
                <!-- Campo: Apellidos -->
                <label for="alumnograduacion_apellidos" class="label_alumnograduacion_apellidos">Apellidos *</label>
                <input type="text" id="alumnograduacion_apellidos" name="alumnograduacion_apellidos" class="input_alumnograduacion_apellidos" title="Solo letras, espacios, ñ y acentos. Entre 2 y 35 caracteres">
                <span id="span_error_alumnograduacion_apellidos" style="display:none"><span id="error_alumnograduacion_apellidos"></span></span>
                <br>
                
                <!-- Campo: Titulación (RADIO BUTTONS) -->
                <label class="label_alumnograduacion_titulacion">Titulación *</label>
                <div class="radio-group_alumnograduacion_titulacion">
                    <input type="radio" id="titulacion_GREI" name="alumnograduacion_titulacion_radio_group" value="GREI" class="radio_alumnograduacion_titulacion">
                    <label for="titulacion_GREI" class="label_titulacion_GREI">GREI</label>
                    
                    <input type="radio" id="titulacion_GRIA" name="alumnograduacion_titulacion_radio_group" value="GRIA" class="radio_alumnograduacion_titulacion">
                    <label for="titulacion_GRIA" class="label_titulacion_GRIA">GRIA</label>
                    
                    <input type="radio" id="titulacion_MEI" name="alumnograduacion_titulacion_radio_group" value="MEI" class="radio_alumnograduacion_titulacion">
                    <label for="titulacion_MEI" class="label_titulacion_MEI">MEI</label>
                    
                    <input type="radio" id="titulacion_MIA" name="alumnograduacion_titulacion_radio_group" value="MIA" class="radio_alumnograduacion_titulacion">
                    <label for="titulacion_MIA" class="label_titulacion_MIA">MIA</label>
                    
                    <input type="radio" id="titulacion_PCEO" name="alumnograduacion_titulacion_radio_group" value="PCEO" class="radio_alumnograduacion_titulacion">
                    <label for="titulacion_PCEO" class="label_titulacion_PCEO">PCEO</label>
                </div>
                
                <!-- Campo hidden para validación del sistema -->
                <input type="hidden" id="alumnograduacion_titulacion" name="alumnograduacion_titulacion" value="">
                <span id="span_error_alumnograduacion_titulacion" style="display:none"><span id="error_alumnograduacion_titulacion"></span></span>
                <br>
                
                <!-- Campo: DNI/NIE -->
                <label for="alumnograduacion_dni" class="label_alumnograduacion_dni">DNI/NIE *</label>
                <input type="text" id="alumnograduacion_dni" name="alumnograduacion_dni" class="input_alumnograduacion_dni" title="Formato DNI: 8 números + letra | NIE: X/Y/Z + 7 números + letra">
                <span id="span_error_alumnograduacion_dni" style="display:none"><span id="error_alumnograduacion_dni"></span></span>
                <br>
                
                <!-- Campo: Teléfono -->
                <label for="alumnograduacion_telefono" class="label_alumnograduacion_telefono">Teléfono</label>
                <input type="text" id="alumnograduacion_telefono" name="alumnograduacion_telefono" class="input_alumnograduacion_telefono" title="9 dígitos numéricos">
                <span id="span_error_alumnograduacion_telefono" style="display:none"><span id="error_alumnograduacion_telefono"></span></span>
                <br>
                
                <!-- Campo: Dirección -->
                <label for="alumnograduacion_direccion" class="label_alumnograduacion_direccion">Dirección</label>
                <textarea id="alumnograduacion_direccion" name="alumnograduacion_direccion" class="input_alumnograduacion_direccion" rows="3" cols="50" title="Caracteres alfanuméricos con acentos y ñ. Máximo 100 caracteres"></textarea>
                <span id="span_error_alumnograduacion_direccion" style="display:none"><span id="error_alumnograduacion_direccion"></span></span>
                <br>
                
                <!-- Campo: Email -->
                <label for="alumnograduacion_email" class="label_alumnograduacion_email">Email *</label>
                <input type="email" id="alumnograduacion_email" name="alumnograduacion_email" class="input_alumnograduacion_email" title="Formato de email válido. Máximo 40 caracteres">
                <span id="span_error_alumnograduacion_email" style="display:none"><span id="error_alumnograduacion_email"></span></span>
                <br>
                
                <!-- Campo: Foto Acto (archivo existente) -->
                <label id="label_alumnograduacion_fotoacto" class="label_alumnograduacion_fotoacto">Foto Acto</label>
                <input type="text" id="alumnograduacion_fotoacto" name="alumnograduacion_fotoacto" class="input_alumnograduacion_fotoacto" readonly>
                <a id="link_alumnograduacion_fotoacto" href=""><img src="./iconos/FILE.png" /></a>
                <span id="span_error_alumnograduacion_fotoacto" style="display:none"><span id="error_alumnograduacion_fotoacto"></span></span>
                <br>
                
                <!-- Campo: Nueva Foto Acto (subida de archivo) -->
                <label id="label_nuevo_alumnograduacion_fotoacto" class="label_nuevo_alumnograduacion_fotoacto">Nueva Foto Acto</label>
                <input type="file" id="nuevo_alumnograduacion_fotoacto" name="nuevo_alumnograduacion_fotoacto" class="input_nuevo_alumnograduacion_fotoacto" accept=".jpg,.jpeg" title="Solo archivos JPG. Máximo 2MB. Nombre sin acentos, ñ ni espacios">
                <span id="span_error_nuevo_alumnograduacion_fotoacto" style="display:none"><span id="error_nuevo_alumnograduacion_fotoacto"></span></span>
                <br>
            </form>
        `;
    }

    // Configura los radio buttons como readonly sin cambiar su apariencia

    configurarRadioButtonsReadonlySinEstilos() {
        const radioButtons = document.querySelectorAll('input[name="alumnograduacion_titulacion_radio_group"]');
        radioButtons.forEach(radio => {
            radio.disabled = true;
            // NO aplicamos opacidad ni estilos, se mantiene la apariencia normal
        });

        // El contenedor también se mantiene normal
        const radioGroup = document.querySelector('.radio-group_alumnograduacion_titulacion');
        if (radioGroup) {
            radioGroup.style.pointerEvents = 'none';
        }
    }


    //Configura el formulario para DELETE (solo lectura sin estilos)

    configurarFormularioDELETE() {
        console.log('Configurando formulario DELETE (solo lectura sin estilos)...');

        // 1. Hacer todos los campos readonly sin cambiar estilos
        this.colocarTodosReadonlySinEstilos();

        // 2. Ocultar campos de subida de archivos
        this.dom.show_element('label_nuevo_alumnograduacion_fotoacto', 'none');
        this.dom.show_element('nuevo_alumnograduacion_fotoacto', 'none');

        // 3. Asegurar que los radio buttons también sean readonly sin estilos
        this.configurarRadioButtonsReadonlySinEstilos();
    }


    //Configura el formulario para SHOWCURRENT (solo lectura sin estilos)

    configurarFormularioSHOWCURRENT() {
        console.log('Configurando formulario SHOWCURRENT (solo lectura sin estilos)...');

        // 1. Hacer todos los campos readonly sin cambiar estilos
        this.colocarTodosReadonlySinEstilos();

        // 2. Ocultar campos de subida de archivos
        this.dom.show_element('label_nuevo_alumnograduacion_fotoacto', 'none');
        this.dom.show_element('nuevo_alumnograduacion_fotoacto', 'none');

        // 3. Asegurar que los radio buttons también sean readonly sin estilos
        this.configurarRadioButtonsReadonlySinEstilos();
    }


    //Coloca todos los campos como readonly sin cambiar su apariencia

    colocarTodosReadonlySinEstilos() {
        const campos = [
            'alumnograduacion_login',
            'alumnograduacion_password',
            'alumnograduacion_nombre',
            'alumnograduacion_apellidos',
            'alumnograduacion_dni',
            'alumnograduacion_telefono',
            'alumnograduacion_direccion',
            'alumnograduacion_email',
            'alumnograduacion_fotoacto'
        ];

        campos.forEach(campo => {
            const elemento = document.getElementById(campo);
            if (elemento) {
                elemento.readOnly = true;
                // NO aplicamos estilos, se mantiene la apariencia normal
            }
        });

        // Textarea también
        const textarea = document.getElementById('alumnograduacion_direccion');
        if (textarea) {
            textarea.readOnly = true;
        }
    }


    //Sincroniza los radio buttons de titulación con el campo hidden

    sincronizarTitulacion() {
        const radioButtons = document.querySelectorAll('input[name="alumnograduacion_titulacion_radio_group"]');
        const hiddenInput = document.getElementById('alumnograduacion_titulacion');

        if (!hiddenInput) {
            console.error('Campo hidden alumnograduacion_titulacion no encontrado');
            return false;
        }

        // Buscar el radio button seleccionado
        const selectedRadio = document.querySelector('input[name="alumnograduacion_titulacion_radio_group"]:checked');
        const value = selectedRadio ? selectedRadio.value : '';

        hiddenInput.value = value;
        console.log('Titulación sincronizada:', value);

        return true;
    }


    // Establece el radio button basado en el valor de titulación

    sincronizarTitulacionFromValue(valor) {
        if (!valor) {
            console.log('Valor de titulación vacío o nulo');
            return;
        }

        console.log('Sincronizando titulación desde valor:', valor);

        // Mapeo de valores a IDs de radio buttons
        const radioMapping = {
            'GREI': 'titulacion_GREI',
            'GRIA': 'titulacion_GRIA',
            'MEI': 'titulacion_MEI',
            'MIA': 'titulacion_MIA',
            'PCEO': 'titulacion_PCEO'
        };

        const radioId = radioMapping[valor];
        if (radioId) {
            const radioElement = document.getElementById(radioId);
            if (radioElement) {
                // Desmarcar todos los radio buttons primero
                const allRadios = document.querySelectorAll('input[name="alumnograduacion_titulacion_radio_group"]');
                allRadios.forEach(radio => {
                    radio.checked = false;
                });

                // Marcar el radio button correcto
                radioElement.checked = true;
                console.log('Radio button de titulación seleccionado:', radioId);

                // Actualizar el campo hidden
                const hiddenInput = document.getElementById('alumnograduacion_titulacion');
                if (hiddenInput) {
                    hiddenInput.value = valor;
                    console.log('Campo hidden de titulación actualizado:', valor);
                }
            } else {
                console.error('Radio button de titulación no encontrado en el DOM:', radioId);
            }
        } else {
            console.error('Valor de titulación no reconocido:', valor);
        }
    }

    // Maneja la visualización de errores en el grupo de radio buttons
    mostrarErrorRadioTitulacion(esError = true) {
        const contenedor = document.querySelector('.radio-group_alumnograduacion_titulacion');
        const label = document.querySelector('.label_alumnograduacion_titulacion');
        const spanError = document.getElementById('span_error_alumnograduacion_titulacion');
        const errorSpan = document.getElementById('error_alumnograduacion_titulacion');

        if (contenedor) {
            contenedor.style.border = esError ? '2px solid red' : '2px solid green';
            contenedor.style.padding = '5px';
            contenedor.style.borderRadius = '4px';
        }
        if (label) {
            label.style.color = esError ? 'red' : 'green';
        }
        if (spanError && errorSpan) {
            if (esError) {
                spanError.style.display = 'block';
                errorSpan.textContent = 'Debe seleccionar una titulación';
            } else {
                spanError.style.display = 'none';
            }
        }
    }

    ////////////////////////// FORMULARIOS

    createForm_ADD() {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        document.getElementById('class_contenido_titulo_form').innerHTML = 'ADD Alumno Graduación';

        setTimeout(() => {
            // Configurar campos file
            this.dom.show_element('label_alumnograduacion_fotoacto', 'none');
            this.dom.show_element('alumnograduacion_fotoacto', 'none');
            this.dom.show_element('link_alumnograduacion_fotoacto', 'none');
            this.dom.show_element('label_nuevo_alumnograduacion_fotoacto', 'block');
            this.dom.show_element('nuevo_alumnograduacion_fotoacto', 'block');

            // Establecer valor por defecto para titulación y sincronizar
            document.getElementById('titulacion_GREI').checked = true;
            this.sincronizarTitulacion();

            this.dom.colocarvalidaciones('form_iu', 'ADD');
            this.dom.colocarboton('ADD');
            document.getElementById('form_iu').onsubmit = (e) => {
                e.preventDefault();
                this.ADD_submit_alumnograduacion();
            };
        }, 10);

        this.dom.show_element('Div_IU_form', 'block');
        setLang();
    }

    createForm_SEARCH() {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        document.getElementById('class_contenido_titulo_form').innerHTML = 'SEARCH Alumno Graduación';

        // Configurar campos file para SEARCH
        this.dom.show_element('label_nuevo_alumnograduacion_fotoacto', 'none');
        this.dom.show_element('nuevo_alumnograduacion_fotoacto', 'none');
        this.dom.show_element('alumnograduacion_fotoacto', 'block');
        this.dom.show_element('link_alumnograduacion_fotoacto', 'block');
        document.getElementById('alumnograduacion_fotoacto').readOnly = false;

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
        document.getElementById('class_contenido_titulo_form').innerHTML = 'EDIT Alumno Graduación';

        // PRIMERO configurar la titulación ANTES de rellenar valores
        setTimeout(() => {
            // Configurar la titulación específicamente
            this.sincronizarTitulacionFromValue(parametros.alumnograduacion_titulacion);

            // LUEGO rellenar el resto de valores
            this.dom.rellenarvaloresform(parametros);

            // Hacer DNI y login de solo lectura en EDIT (no modificables)
            document.getElementById('alumnograduacion_dni').readOnly = true;
            document.getElementById('alumnograduacion_login').readOnly = true;

            // Configurar campos file para EDIT
            this.dom.show_element('label_nuevo_alumnograduacion_fotoacto', 'block');
            this.dom.show_element('nuevo_alumnograduacion_fotoacto', 'block');
            this.dom.show_element('alumnograduacion_fotoacto', 'block');
            this.dom.show_element('link_alumnograduacion_fotoacto', 'block');
            document.getElementById('alumnograduacion_fotoacto').readOnly = true;

            this.dom.colocarvalidaciones('form_iu', 'EDIT');
            this.dom.colocarboton('EDIT');
            document.getElementById('form_iu').onsubmit = (e) => {
                e.preventDefault();
                this.EDIT_submit_alumnograduacion();
            };
        }, 50);

        this.dom.show_element('Div_IU_form', 'block');
        setLang();
    }

    createForm_DELETE(parametros) {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        document.getElementById('class_contenido_titulo_form').innerHTML = 'DELETE Alumno Graduación';

        setTimeout(() => {
            // Configurar la titulación específicamente
            this.sincronizarTitulacionFromValue(parametros.alumnograduacion_titulacion);

            // Rellenar el resto de valores
            this.dom.rellenarvaloresform(parametros);

            // Configurar el formulario como DELETE (solo lectura sin estilos)
            this.configurarFormularioDELETE();

            console.log('Formulario DELETE configurado (solo lectura sin estilos)');
        }, 50);

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
        document.getElementById('class_contenido_titulo_form').innerHTML = 'SHOW Alumno Graduación';

        setTimeout(() => {
            // Configurar la titulación específicamente
            this.sincronizarTitulacionFromValue(parametros.alumnograduacion_titulacion);

            // Rellenar el resto de valores
            this.dom.rellenarvaloresform(parametros);

            // Configurar el formulario como SHOWCURRENT (solo lectura sin estilos)
            this.configurarFormularioSHOWCURRENT();

            console.log('Formulario SHOWCURRENT configurado completamente');
        }, 50);

        this.dom.show_element('Div_IU_form', 'block');
        setLang();
    }

    /**
     * Método alternativo: usar pointer-events para evitar interacción
     */
    configurarFormularioSoloLecturaLigero() {
        console.log('Configurando formulario de solo lectura (método ligero)...');

        // Aplicar pointer-events: none a todo el formulario para evitar interacciones
        const form = document.getElementById('form_iu');
        if (form) {
            form.style.pointerEvents = 'none';
        }

        // Pero permitir el botón de submit
        const boton = document.querySelector('#form_iu button[type="submit"]');
        if (boton) {
            boton.style.pointerEvents = 'auto';
        }

        // Ocultar campos de subida de archivos
        this.dom.show_element('label_nuevo_alumnograduacion_fotoacto', 'none');
        this.dom.show_element('nuevo_alumnograduacion_fotoacto', 'none');
    }

    //////////////////////personalize


    personalize_alumnograduacion_dni_validation(dni) {
        dni = dni.toUpperCase().trim();

        // Validar longitud exacta
        if (dni.length !== 9) {
            return false;
        }

        const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const numero = dni.substr(0, 8);
        const letra = dni.substr(8, 1);

        // Validar DNI (8 números + letra)
        if (/^\d{8}[A-Z]$/.test(dni)) {
            // Verificar que los números sean válidos
            if (!/^\d+$/.test(numero)) return false;
            const calculatedLetra = letras[parseInt(numero) % 23];
            return letra === calculatedLetra;
        }

        // Validar NIE (X/Y/Z + 7 números + letra)
        if (/^[XYZ]\d{7}[A-Z]$/.test(dni)) {
            const nieMap = { 'X': '0', 'Y': '1', 'Z': '2' };
            const num = nieMap[dni[0]] + dni.substr(1, 7);
            if (!/^\d+$/.test(num)) return false;
            const calculatedLetra = letras[parseInt(num) % 23];
            return letra === calculatedLetra;
        }

        return false;
    }


    personalize_alumnograduacion_email_validation(email) {
        if (!email) return false;

        // Regex más específica para email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        return emailRegex.test(email) && email.length <= 40;
    }


    personalize_alumnograduacion_nombre_validation(texto, minSize, maxSize) {
        if (!texto) return false;

        // Eliminar espacios extra
        texto = texto.trim();

        // Validar longitud
        if (texto.length < minSize || texto.length > maxSize) {
            return false;
        }

        // Validar formato: letras, espacios, ñ y acentos
        const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        return nombreRegex.test(texto);
    }


    personalize_alumnograduacion_titulacion_validation(valor) {
        // Si el valor está vacío, no es válido para esta validación
        if (!valor || valor === '') {
            return false;
        }

        const valoresPermitidos = ['GREI', 'GRIA', 'MEI', 'MIA', 'PCEO'];
        return valoresPermitidos.includes(valor);
    }

    /////////////////////////validaciones ADD

    ADD_alumnograduacion_login_validation() {
        const value = document.getElementById('alumnograduacion_login').value.trim();

        if (!value) {
            this.dom.mostrar_error_campo('alumnograduacion_login', 'login_obligatorio_KO');
            return 'login_obligatorio_KO';
        }

        if (!this.validations.min_size('alumnograduacion_login', 4)) {
            this.dom.mostrar_error_campo('alumnograduacion_login', 'login_min_size_KO');
            return 'login_min_size_KO';
        }
        if (!this.validations.max_size('alumnograduacion_login', 15)) {
            this.dom.mostrar_error_campo('alumnograduacion_login', 'login_max_size_KO');
            return 'login_max_size_KO';
        }
        if (!this.validations.format('alumnograduacion_login', '^[a-zA-Z]+$')) {
            this.dom.mostrar_error_campo('alumnograduacion_login', 'login_format_KO');
            return 'login_format_KO';
        }

        this.dom.mostrar_exito_campo('alumnograduacion_login');
        return true;
    }

    ADD_alumnograduacion_password_validation() {
        const value = document.getElementById('alumnograduacion_password').value;

        if (!value) {
            this.dom.mostrar_error_campo('alumnograduacion_password', 'password_obligatorio_KO');
            return 'password_obligatorio_KO';
        }

        // Validar longitud directamente
        if (value.length < 8) {
            this.dom.mostrar_error_campo('alumnograduacion_password', 'password_min_size_KO');
            return 'password_min_size_KO';
        }
        if (value.length > 64) {
            this.dom.mostrar_error_campo('alumnograduacion_password', 'password_max_size_KO');
            return 'password_max_size_KO';
        }

        // Validar formato
        if (!this.validations.format('alumnograduacion_password', '^[a-zA-Z\\s]+$')) {
            this.dom.mostrar_error_campo('alumnograduacion_password', 'password_format_KO');
            return 'password_format_KO';
        }

        this.dom.mostrar_exito_campo('alumnograduacion_password');
        return true;
    }

    ADD_alumnograduacion_nombre_validation() {
        const value = document.getElementById('alumnograduacion_nombre').value.trim();

        if (!value) {
            this.dom.mostrar_error_campo('alumnograduacion_nombre', 'nombre_obligatorio_KO');
            return 'nombre_obligatorio_KO';
        }

        // Validar tamaño primero
        if (value.length < 2) {
            this.dom.mostrar_error_campo('alumnograduacion_nombre', 'nombre_min_size_KO');
            return 'nombre_min_size_KO';
        }
        if (value.length > 25) {
            this.dom.mostrar_error_campo('alumnograduacion_nombre', 'nombre_max_size_KO');
            return 'nombre_max_size_KO';
        }

        // Validar formato después
        if (!this.personalize_alumnograduacion_nombre_validation(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_nombre', 'nombre_format_KO');
            return 'nombre_format_KO';
        }

        this.dom.mostrar_exito_campo('alumnograduacion_nombre');
        return true;
    }

    ADD_alumnograduacion_apellidos_validation() {
        const value = document.getElementById('alumnograduacion_apellidos').value.trim();

        if (!value) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'apellidos_obligatorio_KO');
            return 'apellidos_obligatorio_KO';
        }

        // Validar tamaño primero
        if (value.length < 2) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'apellidos_min_size_KO');
            return 'apellidos_min_size_KO';
        }
        if (value.length > 35) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'apellidos_max_size_KO');
            return 'apellidos_max_size_KO';
        }

        // Validar formato después
        if (!this.personalize_alumnograduacion_nombre_validation(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'apellidos_format_KO');
            return 'apellidos_format_KO';
        }

        this.dom.mostrar_exito_campo('alumnograduacion_apellidos');
        return true;
    }


    //Validación de titulación para ADD (ACTUALIZADA para radio buttons)

    ADD_alumnograduacion_titulacion_validation() {
        // Validar DIRECTAMENTE los radio buttons, ignorando el campo hidden
        const radioGREI = document.getElementById('titulacion_GREI');
        const radioGRIA = document.getElementById('titulacion_GRIA');
        const radioMEI = document.getElementById('titulacion_MEI');
        const radioMIA = document.getElementById('titulacion_MIA');
        const radioPCEO = document.getElementById('titulacion_PCEO');

        if (!radioGREI || !radioGRIA || !radioMEI || !radioMIA || !radioPCEO) {
            console.error('Radio buttons de titulación no encontrados');
            return 'titulacion_element_not_found';
        }

        // Buscar el radio button seleccionado
        const selectedRadio = radioGREI.checked ? radioGREI :
            radioGRIA.checked ? radioGRIA :
                radioMEI.checked ? radioMEI :
                    radioMIA.checked ? radioMIA :
                        radioPCEO.checked ? radioPCEO : null;

        const value = selectedRadio ? selectedRadio.value : '';

        console.log('Validando titulación (directo de radio buttons):', value);

        if (!value) {
            this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'titulacion_obligatorio_KO');
            this.mostrarErrorRadioTitulacion(true);
            return 'titulacion_obligatorio_KO';
        }

        // Actualizar el campo hidden para el envío del formulario
        const hiddenInput = document.getElementById('alumnograduacion_titulacion');
        if (hiddenInput) {
            hiddenInput.value = value;
        }

        this.dom.mostrar_exito_campo('alumnograduacion_titulacion');
        this.mostrarErrorRadioTitulacion(false);
        return true;
    }

    ADD_alumnograduacion_dni_validation() {
        const value = document.getElementById('alumnograduacion_dni').value.trim().toUpperCase();

        if (!value) {
            this.dom.mostrar_error_campo('alumnograduacion_dni', 'dni_obligatorio_KO');
            return 'dni_obligatorio_KO';
        }

        if (value.length !== 9) {
            this.dom.mostrar_error_campo('alumnograduacion_dni', 'dni_size_KO');
            return 'dni_size_KO';
        }

        const primerCaracter = value[0];

        if (/^\d/.test(primerCaracter)) {
            // Empieza por número - es DNI
            if (!/^\d{8}[A-Z]$/.test(value)) {
                this.dom.mostrar_error_campo('alumnograduacion_dni', 'dni_format_KO');
                return 'dni_format_KO';
            }
            if (!this.personalize_alumnograduacion_dni_validation(value)) {
                this.dom.mostrar_error_campo('alumnograduacion_dni', 'dni_letra_KO');
                return 'dni_letra_KO';
            }
        }
        else if (/^[XYZ]/.test(primerCaracter)) {
            // Empieza por X, Y o Z - es NIE
            if (!/^[XYZ]\d{7}[A-Z]$/.test(value)) {
                this.dom.mostrar_error_campo('alumnograduacion_dni', 'nie_format_KO');
                return 'nie_format_KO';
            }
            if (!this.personalize_alumnograduacion_dni_validation(value)) {
                this.dom.mostrar_error_campo('alumnograduacion_dni', 'nie_letra_KO');
                return 'nie_letra_KO';
            }
        }
        else {
            // No empieza ni por número ni por X/Y/Z - también es dni_format_KO para los casos generales
            this.dom.mostrar_error_campo('alumnograduacion_dni', 'dni_format_KO');
            return 'dni_format_KO';
        }

        this.dom.mostrar_exito_campo('alumnograduacion_dni');
        return true;
    }

    ADD_alumnograduacion_telefono_validation() {
        const value = document.getElementById('alumnograduacion_telefono').value.trim();

        if (!value) {
            this.dom.mostrar_error_campo('alumnograduacion_telefono', 'telefono_obligatorio_KO');
            return 'telefono_obligatorio_KO';
        }

        // Validaciones de formato
        if (value.length !== 9) {
            this.dom.mostrar_error_campo('alumnograduacion_telefono', 'telefono_size_KO');
            return 'telefono_size_KO';
        }
        if (!this.validations.format('alumnograduacion_telefono', '^[0-9]{9}$')) {
            this.dom.mostrar_error_campo('alumnograduacion_telefono', 'telefono_format_KO');
            return 'telefono_format_KO';
        }

        this.dom.mostrar_exito_campo('alumnograduacion_telefono');
        return true;
    }

    ADD_alumnograduacion_direccion_validation() {
        const value = document.getElementById('alumnograduacion_direccion').value.trim();

        // Dirección es obligatoria en ADD
        if (!value) {
            this.dom.mostrar_error_campo('alumnograduacion_direccion', 'direccion_obligatorio_KO');
            return 'direccion_obligatorio_KO';
        }

        // Validar tamaño primero
        if (value.length > 100) {
            this.dom.mostrar_error_campo('alumnograduacion_direccion', 'direccion_max_size_KO');
            return 'direccion_max_size_KO';
        }

        // Validar formato después
        if (!this.validations.format('alumnograduacion_direccion', '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s\\.,#-]+$')) {
            this.dom.mostrar_error_campo('alumnograduacion_direccion', 'direccion_format_KO');
            return 'direccion_format_KO';
        }

        this.dom.mostrar_exito_campo('alumnograduacion_direccion');
        return true;
    }

    ADD_alumnograduacion_email_validation() {
        const value = document.getElementById('alumnograduacion_email').value.trim();

        if (!value) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'email_obligatorio_KO');
            return 'email_obligatorio_KO';
        }

        if (!this.validations.max_size('alumnograduacion_email', 40)) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'email_max_size_KO');
            return 'email_max_size_KO';
        }

        // Usar validación más estricta
        if (!this.personalize_alumnograduacion_email_validation(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'email_format_KO');
            return 'email_format_KO';
        }

        this.dom.mostrar_exito_campo('alumnograduacion_email');
        return true;
    }

    ADD_alumnograduacion_fotoacto_validation() {
        // Para ADD, el campo fotoacto original está oculto, siempre es válido
        const elemento = document.getElementById('alumnograduacion_fotoacto');
        if (elemento) {
            this.dom.mostrar_exito_campo('alumnograduacion_fotoacto');
        }
        return true;
    }

    ADD_nuevo_alumnograduacion_fotoacto_validation() {
        const fileInput = document.getElementById('nuevo_alumnograduacion_fotoacto');

        // En ADD, el fichero es obligatorio
        if (!this.validations.not_exist_file('nuevo_alumnograduacion_fotoacto')) {
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'fotoacto_obligatorio_KO');
            return 'fotoacto_obligatorio_KO';
        }

        const file = fileInput.files[0];
        const fileName = file.name;

        // Validar nombre del archivo
        if (!this.validations.format_name_file('nuevo_alumnograduacion_fotoacto', '^[a-zA-Z0-9_\\-\\.]+\\.(jpg|jpeg)$')) {
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'fotoacto_format_name_file_KO');
            return 'fotoacto_format_name_file_KO';
        }

        if (fileName.length < 7) {
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'fotoacto_min_size_name_KO');
            return 'fotoacto_min_size_name_KO';
        }

        if (fileName.length > 40) {
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'fotoacto_max_size_name_KO');
            return 'fotoacto_max_size_name_KO';
        }

        if (!this.validations.type_file('nuevo_alumnograduacion_fotoacto', ['image/jpeg'])) {
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'fotoacto_type_file_KO');
            return 'fotoacto_type_file_KO';
        }

        if (!this.validations.max_size_file('nuevo_alumnograduacion_fotoacto', 2000000)) {
            this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'fotoacto_max_size_file_KO');
            return 'fotoacto_max_size_file_KO';
        }

        this.dom.mostrar_exito_campo('nuevo_alumnograduacion_fotoacto');
        return true;
    }

    ADD_submit_alumnograduacion() {
        // Primero validar campos obligatorios
        if (!this.validarCamposObligatorios('ADD')) {
            return;
        }

        const validations = [
            this.ADD_alumnograduacion_login_validation(),
            this.ADD_alumnograduacion_password_validation(),
            this.ADD_alumnograduacion_nombre_validation(),
            this.ADD_alumnograduacion_apellidos_validation(),
            this.ADD_alumnograduacion_titulacion_validation(),
            this.ADD_alumnograduacion_dni_validation(),
            this.ADD_alumnograduacion_telefono_validation(),
            this.ADD_alumnograduacion_direccion_validation(),
            this.ADD_alumnograduacion_email_validation(),
            this.ADD_nuevo_alumnograduacion_fotoacto_validation()
        ];

        if (validations.every(v => v === true)) {
            this.ADD();
        }
    }

    //////////////////////validaciones EDIT

    EDIT_alumnograduacion_login_validation() {
        const value = document.getElementById('alumnograduacion_login').value.trim();
        if (value === '') {
            this.dom.mostrar_exito_campo('alumnograduacion_login');
            return true;
        }
        return this.ADD_alumnograduacion_login_validation();
    }

    EDIT_alumnograduacion_password_validation() {
        const value = document.getElementById('alumnograduacion_password').value;
        if (value === '') {
            this.dom.mostrar_exito_campo('alumnograduacion_password');
            return true;
        }
        return this.ADD_alumnograduacion_password_validation();
    }

    EDIT_alumnograduacion_nombre_validation() {
        const value = document.getElementById('alumnograduacion_nombre').value;
        if (value === '') {
            this.dom.mostrar_exito_campo('alumnograduacion_nombre');
            return true;
        }
        return this.ADD_alumnograduacion_nombre_validation();
    }

    EDIT_alumnograduacion_apellidos_validation() {
        const value = document.getElementById('alumnograduacion_apellidos').value;
        if (value === '') {
            this.dom.mostrar_exito_campo('alumnograduacion_apellidos');
            return true;
        }
        return this.ADD_alumnograduacion_apellidos_validation();
    }

    /**
     * Validación de titulación para EDIT (ACTUALIZADA para radio buttons)
     */
    EDIT_alumnograduacion_titulacion_validation() {
        // Validar DIRECTAMENTE los radio buttons
        const radioGREI = document.getElementById('titulacion_GREI');
        const radioGRIA = document.getElementById('titulacion_GRIA');
        const radioMEI = document.getElementById('titulacion_MEI');
        const radioMIA = document.getElementById('titulacion_MIA');
        const radioPCEO = document.getElementById('titulacion_PCEO');

        if (!radioGREI || !radioGRIA || !radioMEI || !radioMIA || !radioPCEO) {
            console.error('Radio buttons de titulación no encontrados');
            return 'titulacion_element_not_found';
        }

        // Buscar el radio button seleccionado
        const selectedRadio = radioGREI.checked ? radioGREI :
            radioGRIA.checked ? radioGRIA :
                radioMEI.checked ? radioMEI :
                    radioMIA.checked ? radioMIA :
                        radioPCEO.checked ? radioPCEO : null;

        const value = selectedRadio ? selectedRadio.value : '';

        console.log('Validando titulación en EDIT (directo de radio buttons):', value);

        // En EDIT, campo vacío es válido (no se modifica)
        if (value === '') {
            this.dom.mostrar_exito_campo('alumnograduacion_titulacion');
            this.mostrarErrorRadioTitulacion(false);
            return true;
        }

        // Si tiene valor, debe ser válido
        if (!this.personalize_alumnograduacion_titulacion_validation(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'titulacion_format_KO');
            this.mostrarErrorRadioTitulacion(true);
            return 'titulacion_format_KO';
        }

        // Actualizar el campo hidden para el envío del formulario
        const hiddenInput = document.getElementById('alumnograduacion_titulacion');
        if (hiddenInput) {
            hiddenInput.value = value;
        }

        this.dom.mostrar_exito_campo('alumnograduacion_titulacion');
        this.mostrarErrorRadioTitulacion(false);
        return true;
    }

    EDIT_alumnograduacion_dni_validation() {
        const value = document.getElementById('alumnograduacion_dni').value.trim().toUpperCase();
        if (!value) {
            this.dom.mostrar_error_campo('alumnograduacion_dni', 'dni_obligatorio_KO');
            return 'dni_obligatorio_KO';
        }
        // DNI no se puede modificar pero debe ser válido
        return this.ADD_alumnograduacion_dni_validation();
    }

    EDIT_alumnograduacion_telefono_validation() {
        const value = document.getElementById('alumnograduacion_telefono').value;
        if (value === '') {
            this.dom.mostrar_exito_campo('alumnograduacion_telefono');
            return true;
        }
        return this.ADD_alumnograduacion_telefono_validation();
    }

    EDIT_alumnograduacion_direccion_validation() {
        const value = document.getElementById('alumnograduacion_direccion').value;
        if (value === '') {
            this.dom.mostrar_exito_campo('alumnograduacion_direccion');
            return true;
        }
        return this.ADD_alumnograduacion_direccion_validation();
    }

    EDIT_alumnograduacion_email_validation() {
        const value = document.getElementById('alumnograduacion_email').value;
        if (value === '') {
            this.dom.mostrar_exito_campo('alumnograduacion_email');
            return true;
        }
        return this.ADD_alumnograduacion_email_validation();
    }

    EDIT_alumnograduacion_fotoacto_validation() {
        // Para EDIT, el campo fotoacto original es readonly, siempre es válido
        const elemento = document.getElementById('alumnograduacion_fotoacto');
        if (elemento) {
            this.dom.mostrar_exito_campo('alumnograduacion_fotoacto');
        }
        return true;
    }

    EDIT_nuevo_alumnograduacion_fotoacto_validation() {
        // En EDIT, el fichero es opcional
        if (!this.validations.not_exist_file('nuevo_alumnograduacion_fotoacto')) {
            this.dom.mostrar_exito_campo('nuevo_alumnograduacion_fotoacto');
            return true;
        }

        // Si hay fichero, validarlo
        return this.ADD_nuevo_alumnograduacion_fotoacto_validation();
    }

    EDIT_submit_alumnograduacion() {
        if (!this.validarCamposObligatorios('EDIT')) {
            return;
        }

        const validations = [
            this.EDIT_alumnograduacion_login_validation(),
            this.EDIT_alumnograduacion_password_validation(),
            this.EDIT_alumnograduacion_nombre_validation(),
            this.EDIT_alumnograduacion_apellidos_validation(),
            this.EDIT_alumnograduacion_titulacion_validation(),
            this.EDIT_alumnograduacion_dni_validation(),
            this.EDIT_alumnograduacion_telefono_validation(),
            this.EDIT_alumnograduacion_direccion_validation(),
            this.EDIT_alumnograduacion_email_validation(),
            this.EDIT_nuevo_alumnograduacion_fotoacto_validation()
        ];

        if (validations.every(v => v === true)) {
            this.EDIT();
        }
    }

    //////////////////// validaciones search

    SEARCH_alumnograduacion_login_validation() {
        const value = document.getElementById('alumnograduacion_login').value;
        if (value && !this.validations.format('alumnograduacion_login', '^[a-zA-Z]*$')) {
            this.dom.mostrar_error_campo('alumnograduacion_login', 'login_search_format_KO');
            return 'login_search_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_login');
        return true;
    }

    SEARCH_alumnograduacion_password_validation() {
        const value = document.getElementById('alumnograduacion_password').value;
        if (value && !this.validations.format('alumnograduacion_password', '^[a-zA-Z\\s]*$')) {
            this.dom.mostrar_error_campo('alumnograduacion_password', 'password_search_format_KO');
            return 'password_search_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_password');
        return true;
    }

    SEARCH_alumnograduacion_nombre_validation() {
        const value = document.getElementById('alumnograduacion_nombre').value;
        if (value && !this.validations.format('alumnograduacion_nombre', '^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]*$')) {
            this.dom.mostrar_error_campo('alumnograduacion_nombre', 'nombre_search_format_KO');
            return 'nombre_search_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_nombre');
        return true;
    }

    SEARCH_alumnograduacion_apellidos_validation() {
        const value = document.getElementById('alumnograduacion_apellidos').value;
        if (value && !this.validations.format('alumnograduacion_apellidos', '^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]*$')) {
            this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'apellidos_search_format_KO');
            return 'apellidos_search_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_apellidos');
        return true;
    }


    SEARCH_alumnograduacion_titulacion_validation() {
        const hiddenInput = document.getElementById('alumnograduacion_titulacion');
        const value = hiddenInput ? hiddenInput.value : '';

        // Para búsqueda, campo vacío siempre es válido
        if (!value || value === '') {
            this.dom.mostrar_exito_campo('alumnograduacion_titulacion');
            return true;
        }

        // Si tiene valor, validarlo
        if (!this.personalize_alumnograduacion_titulacion_validation(value)) {
            this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'titulacion_search_format_KO');
            return 'titulacion_search_format_KO';
        }

        this.dom.mostrar_exito_campo('alumnograduacion_titulacion');
        return true;
    }

    SEARCH_alumnograduacion_dni_validation() {
        const value = document.getElementById('alumnograduacion_dni').value;
        if (value && value.length !== 9) {
            this.dom.mostrar_error_campo('alumnograduacion_dni', 'dni_search_format_KO');
            return 'dni_search_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_dni');
        return true;
    }

    SEARCH_alumnograduacion_telefono_validation() {
        const value = document.getElementById('alumnograduacion_telefono').value;
        if (value && !this.validations.format('alumnograduacion_telefono', '^[0-9]*$')) {
            this.dom.mostrar_error_campo('alumnograduacion_telefono', 'telefono_search_format_KO');
            return 'telefono_search_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_telefono');
        return true;
    }

    SEARCH_alumnograduacion_direccion_validation() {
        const value = document.getElementById('alumnograduacion_direccion').value;
        if (value && !this.validations.format('alumnograduacion_direccion', '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s\\.,#-]*$')) {
            this.dom.mostrar_error_campo('alumnograduacion_direccion', 'direccion_search_format_KO');
            return 'direccion_search_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_direccion');
        return true;
    }

    SEARCH_alumnograduacion_email_validation() {
        const value = document.getElementById('alumnograduacion_email').value;
        if (value && !this.validations.format('alumnograduacion_email', '^[a-zA-Z0-9._%+-@]*$')) {
            this.dom.mostrar_error_campo('alumnograduacion_email', 'email_search_format_KO');
            return 'email_search_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_email');
        return true;
    }

    SEARCH_alumnograduacion_fotoacto_validation() {
        const value = document.getElementById('alumnograduacion_fotoacto').value;
        if (value && !this.validations.format('alumnograduacion_fotoacto', '^[a-zA-Z0-9_\\-\\.]*$')) {
            this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'fotoacto_search_format_KO');
            return 'fotoacto_search_format_KO';
        }
        this.dom.mostrar_exito_campo('alumnograduacion_fotoacto');
        return true;
    }

    SEARCH_submit_alumnograduacion() {
        const validations = [
            this.SEARCH_alumnograduacion_login_validation(),
            this.SEARCH_alumnograduacion_password_validation(),
            this.SEARCH_alumnograduacion_nombre_validation(),
            this.SEARCH_alumnograduacion_apellidos_validation(),
            this.SEARCH_alumnograduacion_titulacion_validation(),
            this.SEARCH_alumnograduacion_dni_validation(),
            this.SEARCH_alumnograduacion_telefono_validation(),
            this.SEARCH_alumnograduacion_direccion_validation(),
            this.SEARCH_alumnograduacion_email_validation(),
            this.SEARCH_alumnograduacion_fotoacto_validation()
        ];

        if (validations.every(v => v === true)) {
            this.SEARCH();
            return true;
        }
        return false;
    }

    mostrarcambioatributo(clave, valor) {
        if (clave === 'alumnograduacion_fotoacto' && valor) {
            return `<a href="http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/${valor}" target="_blank"><img src="./iconos/FILE.png" alt="Ver Foto" title="Ver Foto"></a>`;
        }
        return valor;
    }


    //Valida campos obligatorios para una acción específica

    validarCamposObligatorios(accion) {
        const campos = this.camposObligatorios[accion] || [];
        let todosValidos = true;

        for (const campo of campos) {
            const elemento = document.getElementById(campo);
            if (elemento && !elemento.value.trim()) {
                this.dom.mostrar_error_campo(campo, `${campo}_obligatorio_KO`);
                todosValidos = false;
            }
        }

        return todosValidos;
    }
}