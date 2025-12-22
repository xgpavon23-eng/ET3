class entidadGeneral extends EntidadAbstracta {
    constructor(nombreEntidad) {
        // Pasar false para esTest y el nombre de la entidad
        super(false, nombreEntidad);

        // Cargar estructura si existe
        try {
            const estructuraVar = 'estructura_' + nombreEntidad;
            if (typeof window[estructuraVar] !== 'undefined') {
                this.estructura = window[estructuraVar];
            } else if (typeof eval(estructuraVar) !== 'undefined') {
                this.estructura = eval(estructuraVar);
            } else {
                throw new Error('Estructura no encontrada: ' + estructuraVar);
            }

            // Inicializar atributos desde la estructura
            if (this.estructura && this.estructura.attributes) {
                this.atributosEstructura = Object.keys(this.estructura.attributes);
                // Inicializar columnasamostrar con todos los atributos de la estructura
                this.columnasamostrar = [...this.atributosEstructura];
            }

        } catch (error) {
            console.error('Error cargando estructura:', error);
            this.dom.abrirModalError('Entidad no encontrada: ' + nombreEntidad);
            return;
        }

        // Configurar título
        document.getElementById('text_title_page').textContent =
            'Gestión de ' + this.nombreentidad;
    }


    createForm_ADD() {
        this.createForm('ADD', {});
    }

    createForm_EDIT(datos) {
        this.createForm('EDIT', datos);
    }

    createForm_DELETE(datos) {
        this.createForm('DELETE', datos);
    }

    createForm_SEARCH() {
        this.createForm('SEARCH', {});
    }

    createForm_SHOWCURRENT(datos) {
        this.createForm('SHOWCURRENT', datos);
    }

    createForm(accion, datos) {
        // Limpiar contenedor
        const contenedor = document.getElementById('contenedor_IU_form');
        contenedor.innerHTML = '';

        // Verificar que tenemos estructura
        if (!this.estructura || !this.estructura.attributes) {
            this.dom.abrirModalError('No hay estructura definida para la entidad');
            return;
        }

        // Crear formulario
        const form = document.createElement('form');
        form.id = 'form_iu';
        form.name = 'form_iu';

        // Crear campos dinámicamente basados en la estructura
        for (const [nombreAtributo, definicion] of Object.entries(this.estructura.attributes)) {
            // Omitir campos autoincrementales en ADD
            if (definicion.is_autoincrement && accion === 'ADD') {
                continue;
            }

            this.crearCampo(form, nombreAtributo, definicion, accion, datos);
        }

        // Botón de submit
        const submitBtn = document.createElement('button');
        submitBtn.type = 'button';
        submitBtn.textContent = this.obtenerTextoAccion(accion);
        submitBtn.onclick = () => this.validarYEnviar(accion);

        form.appendChild(submitBtn);
        contenedor.appendChild(form);

        // Configurar título del formulario
        document.getElementById('class_contenido_titulo_form').textContent =
            this.obtenerTituloAccion(accion);

        // Mostrar formulario
        this.dom.show_element('Div_IU_form', 'block');

        // Si es SHOWCURRENT o DELETE, hacer todos los campos readonly
        if (accion === 'SHOWCURRENT' || accion === 'DELETE') {
            this.dom.colocartodosreadonly('form_iu');
        }

        // Si es EDIT, validar todos los campos para mostrar estado inicial
        if (accion === 'EDIT') {
            for (const [nombreAtributo, definicion] of Object.entries(this.estructura.attributes)) {
                const elemento = document.getElementById(nombreAtributo);
                if (elemento) {
                    this.validarCampoIndividual(nombreAtributo, elemento.value, accion);
                }
            }
        }

        // Aplicar traducciones
        setLang();
    }

    crearCampo(form, nombreAtributo, definicion, accion, datos) {
        const htmlDef = definicion.html;
        const fieldId = nombreAtributo;

        // Crear label
        const label = document.createElement('label');
        label.htmlFor = fieldId;
        label.textContent = nombreAtributo.replace(/_/g, ' ');
        label.id = 'label_' + fieldId;

        // Crear elemento según el tipo
        let elemento;
        switch (htmlDef.tag) {
            case 'input':
                elemento = this.crearInput(fieldId, htmlDef, datos, nombreAtributo, accion);
                break;
            case 'textarea':
                elemento = this.crearTextarea(fieldId, htmlDef, datos, accion);
                break;
            case 'select':
                elemento = this.crearSelect(fieldId, htmlDef, datos, definicion.default_value, accion);
                break;
            case 'radio':
                elemento = this.crearRadioGroup(fieldId, htmlDef, datos, definicion.default_value, accion);
                break;
            case 'checkbox':
                elemento = this.crearCheckbox(fieldId, htmlDef, datos, definicion.default_value, accion);
                break;
            default:
                elemento = this.crearInput(fieldId, htmlDef, datos, nombreAtributo, accion);
        }

        // Añadir al formulario
        form.appendChild(label);
        form.appendChild(elemento);

        // Controlar visibilidad del label también si el input está oculto
        if (elemento.style.display === 'none') {
            label.style.display = 'none';
        }

        form.appendChild(document.createElement('br'));

        // Añadir span para errores
        const errorSpan = document.createElement('span');
        errorSpan.id = 'error_' + fieldId;
        errorSpan.className = 'error-message';
        form.appendChild(errorSpan);
        form.appendChild(document.createElement('br'));
    }

    crearInput(id, htmlDef, datos, nombreAtributo, accion) {
        const input = document.createElement('input');
        input.id = id;
        input.name = id;
        input.type = htmlDef.type || 'text';

        // --- LOGICA DE ARCHIVOS (Generic File Handling) ---
        const definicion = this.estructura.attributes[nombreAtributo];

        // 1. Si es un campo de referecia a archivo (el texto con el nombre: foto_persona)
        if (definicion && definicion.is_file_ref) {
            if (accion !== 'SEARCH') {
                input.readOnly = true;
            }

            if (datos && datos[nombreAtributo]) {
                input.value = datos[nombreAtributo];
            }

            const container = document.createElement('div');
            container.style.display = 'inline-block';
            container.appendChild(input);

            // Ocultar en ADD (no hay fichero aún)
            if (accion === 'ADD') {
                container.style.display = 'none';
                // El input sigue existiendo pero oculto
                return container;
            }

            // Crear Link de visualización
            if (definicion.file_server_path) {
                const link = document.createElement('a');
                link.id = 'link_' + id;

                if (datos && datos[nombreAtributo]) {
                    link.href = definicion.file_server_path + datos[nombreAtributo];
                    link.style.display = 'inline';
                } else {
                    link.href = '#';
                    link.style.display = 'none';
                }
                link.target = '_blank';

                const icon = document.createElement('img');
                icon.src = './iconos/FILE.png';
                link.appendChild(icon);

                container.appendChild(link);
            }
            return container;
        }

        // 2. Si es un campo 'nuevo_' (el input type=file real)
        if (input.type === 'file') {
            if (htmlDef.multiple) {
                input.multiple = true;
            }
            input.value = '';

            // Ocultar en SEARCH, SHOWCURRENT, DELETE
            if (accion === 'SEARCH' || accion === 'SHOWCURRENT' || accion === 'DELETE') {
                input.style.display = 'none';
            }

            return input;
        }

        // --- FIN LOGICA ARCHIVOS ---

        // Establecer valor
        if (datos && datos[nombreAtributo] !== undefined) {
            input.value = datos[nombreAtributo];

            // Fix dates from DD/MM/YYYY to YYYY-MM-DD
            if (htmlDef.type === 'date' && /^\d{2}\/\d{2}\/\d{4}$/.test(input.value)) {
                let parts = input.value.split('/');
                input.value = `${parts[2]}-${parts[1]}-${parts[0]}`;
            }
        }

        // Establecer tamaño si está definido
        if (htmlDef.component_visible_size) {
            input.size = htmlDef.component_visible_size;
        }

        if (accion !== 'DELETE' && accion !== 'SHOWCURRENT') {
            input.onblur = () => this.validarCampoIndividual(nombreAtributo, input.value, accion);
        }

        return input;
    }

    crearTextarea(id, htmlDef, datos, accion) {
        const textarea = document.createElement('textarea');
        textarea.id = id;
        textarea.name = id;

        if (htmlDef.rows) textarea.rows = htmlDef.rows;
        if (htmlDef.columns) textarea.cols = htmlDef.columns;

        if (datos && datos[id] !== undefined) {
            textarea.value = datos[id];
        }

        if (accion !== 'DELETE' && accion !== 'SHOWCURRENT') {
            textarea.onblur = () => this.validarCampoIndividual(id, textarea.value, accion);
        }

        return textarea;
    }

    crearSelect(id, htmlDef, datos, defaultValue, accion) {
        const select = document.createElement('select');
        select.id = id;
        select.name = id;

        if (htmlDef.multiple) {
            select.multiple = true;
        }
        if (htmlDef.component_visible_size) {
            select.size = htmlDef.component_visible_size;
        }

        // Añadir opción vacía al principio para SEARCH
        if (accion === 'SEARCH') {
            const emptyOption = document.createElement('option');
            emptyOption.value = '';
            emptyOption.textContent = ''; // Opción vacía
            select.appendChild(emptyOption);
        }

        // Añadir opciones
        if (htmlDef.options && Array.isArray(htmlDef.options)) {
            htmlDef.options.forEach(opcion => {
                const option = document.createElement('option');
                option.value = opcion;
                option.textContent = opcion;

                // Seleccionar si coincide
                if (datos && datos[id] === opcion) {
                    option.selected = true;
                } else if (!datos && defaultValue === opcion && accion !== 'SEARCH') {
                    option.selected = true;
                } else if (datos && Array.isArray(datos[id]) && datos[id].includes(opcion)) {
                    option.selected = true;
                }

                select.appendChild(option);
            });
        }

        if (accion !== 'DELETE' && accion !== 'SHOWCURRENT') {
            select.onblur = () => this.validarCampoIndividual(id, select.value, accion);
        }

        return select;
    }

    crearRadioGroup(id, htmlDef, datos, defaultValue, accion) {
        const container = document.createElement('div');
        container.id = id + '_group';
        container.className = 'radio_group';

        if (htmlDef.options && Array.isArray(htmlDef.options)) {
            htmlDef.options.forEach((opcion, index) => {
                const optionWrapper = document.createElement('div');
                optionWrapper.style.display = 'flex';
                optionWrapper.style.alignItems = 'center';
                optionWrapper.style.marginRight = '20px'; // Add spacing between options logic or rely on CSS

                const radioId = id + '_' + index;

                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.id = radioId;
                radio.name = id;
                radio.value = opcion;

                // Para radio buttons, necesitamos comparar con el nombre real del atributo
                const atributoReal = id.replace(/^nuevo_/, '');
                if (datos && datos[atributoReal] === opcion) {
                    radio.checked = true;
                } else if (!datos && defaultValue === opcion && accion !== 'SEARCH') {
                    radio.checked = true;
                }

                if (accion !== 'DELETE' && accion !== 'SHOWCURRENT') {
                    radio.onchange = () => {
                        this.validarCampoIndividual(id, radio.value, accion);
                    };
                }

                const label = document.createElement('label');
                label.htmlFor = radioId;
                label.textContent = opcion;
                label.id = 'label_' + opcion;

                optionWrapper.appendChild(radio);
                optionWrapper.appendChild(label);

                container.appendChild(optionWrapper);
            });
        }

        return container;
    }

    crearCheckbox(id, htmlDef, datos, defaultValue, accion) {
        // Si hay opcione definidas, crear grupo de checkboxes
        if (htmlDef.options && Array.isArray(htmlDef.options)) {
            const container = document.createElement('div');
            container.id = id + '_group';
            container.className = 'checkbox_group';

            htmlDef.options.forEach((opcion, index) => {
                const optionWrapper = document.createElement('div');
                optionWrapper.style.display = 'flex';
                optionWrapper.style.alignItems = 'center';
                optionWrapper.style.marginRight = '20px';

                const checkId = id + '_' + index;
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkId;
                checkbox.name = id; // O id + '[]' si el back lo espera asi
                checkbox.value = opcion;

                // Para checkboxes multiples, datos[id] debería ser un array o string
                // Asumimos array para la estructura nueva, o string?
                // La estructura original 'menu_persona' tiene options.
                // Logica de seleccion:
                const atributoReal = id.replace(/^nuevo_/, '');
                // Caso 1: Array de valores
                if (datos && datos[atributoReal] && Array.isArray(datos[atributoReal]) && datos[atributoReal].includes(opcion)) {
                    checkbox.checked = true;
                }
                // Caso 2: String exacto
                else if (datos && datos[atributoReal] === opcion) {
                    checkbox.checked = true;
                }
                // Caso 3: String separado por comas
                else if (datos && typeof datos[atributoReal] === 'string' && datos[atributoReal].split(',').includes(opcion)) {
                    checkbox.checked = true;
                }

                if (accion !== 'DELETE' && accion !== 'SHOWCURRENT') {
                    checkbox.onchange = () => {
                        this.validarCampoIndividual(id, checkbox.value, accion);
                    };
                }

                const label = document.createElement('label');
                label.htmlFor = checkId;
                label.textContent = opcion;
                label.id = 'label_' + checkId; // Unique label id

                optionWrapper.appendChild(checkbox);
                optionWrapper.appendChild(label);

                container.appendChild(optionWrapper);
            });
            return container;
        }

        // Logica original para checkbox simple (boolean)
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = id;
        checkbox.name = id;
        checkbox.value = '1';

        // Para checkboxes, necesitamos comparar con el nombre real del atributo
        const atributoReal = id.replace(/^nuevo_/, '');
        if (datos && datos[atributoReal] == '1') {
            checkbox.checked = true;
        } else if (!datos && defaultValue == '1' && accion !== 'SEARCH') {
            checkbox.checked = true;
        }

        return checkbox;
    }

    obtenerTextoAccion(accion) {
        const textos = {
            'ADD': 'Añadir',
            'EDIT': 'Modificar',
            'DELETE': 'Eliminar',
            'SEARCH': 'Buscar',
            'SHOWCURRENT': 'Ver Detalle'
        };
        return textos[accion] || accion;
    }

    obtenerTituloAccion(accion) {
        const titulos = {
            'ADD': 'Añadir nuevo registro',
            'EDIT': 'Modificar registro',
            'DELETE': 'Eliminar registro',
            'SEARCH': 'Buscar registros',
            'SHOWCURRENT': 'Detalle del registro'
        };
        return titulos[accion] || accion;
    }

    async validarYEnviar(accion) {
        // Validar todos los campos
        let todosValidos = true;

        for (const [nombreAtributo, definicion] of Object.entries(this.estructura.attributes)) {
            const elemento = document.getElementById(nombreAtributo);
            if (elemento) {
                const valido = this.validarCampoIndividual(nombreAtributo, elemento.value, accion);
                if (!valido) {
                    todosValidos = false;
                }
            }
        }

        if (!todosValidos) {
            this.dom.abrirModalError('Hay errores en el formulario');
            return;
        }

        // Ejecutar acción correspondiente
        switch (accion) {
            case 'ADD':
                await this.ADD();
                break;
            case 'EDIT':
                await this.EDIT();
                break;
            case 'DELETE':
                await this.DELETE();
                break;
            case 'SEARCH':
                await this.SEARCH();
                break;
            case 'SHOWCURRENT':
                this.dom.hide_element('Div_IU_form');
                break;
        }
    }

    validarCampoIndividual(nombreAtributo, valor, accion) {
        const definicion = this.estructura.attributes[nombreAtributo];
        if (!definicion || !definicion.rules || !definicion.rules.validations) {
            return true;
        }

        const validaciones = definicion.rules.validations[accion];
        if (!validaciones) {
            return true;
        }

        const errorSpan = document.getElementById('error_' + nombreAtributo);
        const inputElement = document.getElementById(nombreAtributo);

        // Helper to set validity
        const setValidity = (isValid) => {
            if (inputElement) {
                if (isValid) {
                    inputElement.classList.add('input-valid');
                    inputElement.classList.remove('input-invalid');
                } else {
                    inputElement.classList.add('input-invalid');
                    inputElement.classList.remove('input-valid');
                }
            }
        };

        if (!errorSpan) return true;

        errorSpan.textContent = '';

        // Validaciones básicas
        if (validaciones.min_size && valor.length < validaciones.min_size) {
            errorSpan.textContent = `Mínimo ${validaciones.min_size} caracteres`;
            setValidity(false);
            return false;
        }

        if (validaciones.max_size && valor.length > validaciones.max_size) {
            errorSpan.textContent = `Máximo ${validaciones.max_size} caracteres`;
            setValidity(false);
            return false;
        }

        if (validaciones.exp_reg && valor && !new RegExp(validaciones.exp_reg).test(valor)) {
            errorSpan.textContent = 'Formato incorrecto';
            setValidity(false);
            return false;
        }

        setValidity(true);
        return true;
    }
}