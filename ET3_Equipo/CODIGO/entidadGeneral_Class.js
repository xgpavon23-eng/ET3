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
        
        // Si es SHOWCURRENT, hacer todos los campos readonly
        if (accion === 'SHOWCURRENT') {
            this.dom.colocartodosreadonly('form_iu');
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
        label.textContent = nombreAtributo.replace(/_/g, ' ') + ': ';
        label.id = 'label_' + fieldId;
        
        // Crear elemento según el tipo
        let elemento;
        switch(htmlDef.tag) {
            case 'input':
                elemento = this.crearInput(fieldId, htmlDef, datos, nombreAtributo);
                break;
            case 'textarea':
                elemento = this.crearTextarea(fieldId, htmlDef, datos);
                break;
            case 'select':
                elemento = this.crearSelect(fieldId, htmlDef, datos, definicion.default_value);
                break;
            case 'radio':
                elemento = this.crearRadioGroup(fieldId, htmlDef, datos);
                break;
            case 'checkbox':
                elemento = this.crearCheckbox(fieldId, htmlDef, datos, definicion.default_value);
                break;
            default:
                elemento = this.crearInput(fieldId, htmlDef, datos, nombreAtributo);
        }
        
        // Añadir al formulario
        form.appendChild(label);
        form.appendChild(elemento);
        form.appendChild(document.createElement('br'));
        
        // Añadir span para errores
        const errorSpan = document.createElement('span');
        errorSpan.id = 'error_' + fieldId;
        errorSpan.className = 'error-message';
        form.appendChild(errorSpan);
        form.appendChild(document.createElement('br'));
    }
    
    crearInput(id, htmlDef, datos, nombreAtributo) {
        const input = document.createElement('input');
        input.id = id;
        input.name = id;
        input.type = htmlDef.type || 'text';
        
        // Establecer valor
        if (datos && datos[nombreAtributo] !== undefined) {
            input.value = datos[nombreAtributo];
        }
        
        // Establecer tamaño si está definido
        if (htmlDef.component_visible_size) {
            input.size = htmlDef.component_visible_size;
        }
        
        // Para campos de archivo
        if (input.type === 'file') {
            if (htmlDef.multiple) {
                input.multiple = true;
            }
            // No prellenar campos file
            input.value = '';
        }
        
        return input;
    }
    
    crearTextarea(id, htmlDef, datos) {
        const textarea = document.createElement('textarea');
        textarea.id = id;
        textarea.name = id;
        
        if (htmlDef.rows) textarea.rows = htmlDef.rows;
        if (htmlDef.columns) textarea.cols = htmlDef.columns;
        
        if (datos && datos[id] !== undefined) {
            textarea.value = datos[id];
        }
        
        return textarea;
    }
    
    crearSelect(id, htmlDef, datos, defaultValue) {
        const select = document.createElement('select');
        select.id = id;
        select.name = id;
        
        if (htmlDef.multiple) {
            select.multiple = true;
        }
        if (htmlDef.component_visible_size) {
            select.size = htmlDef.component_visible_size;
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
                } else if (!datos && defaultValue === opcion) {
                    option.selected = true;
                } else if (datos && Array.isArray(datos[id]) && datos[id].includes(opcion)) {
                    option.selected = true;
                }
                
                select.appendChild(option);
            });
        }
        
        return select;
    }
    
    crearRadioGroup(id, htmlDef, datos) {
        const container = document.createElement('div');
        container.id = id + '_group';
        
        if (htmlDef.options && Array.isArray(htmlDef.options)) {
            htmlDef.options.forEach((opcion, index) => {
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
                }
                
                const label = document.createElement('label');
                label.htmlFor = radioId;
                label.textContent = opcion;
                label.id = 'label_' + opcion;
                
                container.appendChild(radio);
                container.appendChild(label);
                container.appendChild(document.createElement('br'));
            });
        }
        
        return container;
    }
    
    crearCheckbox(id, htmlDef, datos, defaultValue) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = id;
        checkbox.name = id;
        checkbox.value = '1';
        
        // Para checkboxes, necesitamos comparar con el nombre real del atributo
        const atributoReal = id.replace(/^nuevo_/, '');
        if (datos && datos[atributoReal] == '1') {
            checkbox.checked = true;
        } else if (!datos && defaultValue == '1') {
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
        switch(accion) {
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
        if (!errorSpan) return true;
        
        errorSpan.textContent = '';
        
        // Validaciones básicas
        if (validaciones.min_size && valor.length < validaciones.min_size) {
            errorSpan.textContent = `Mínimo ${validaciones.min_size} caracteres`;
            return false;
        }
        
        if (validaciones.max_size && valor.length > validaciones.max_size) {
            errorSpan.textContent = `Máximo ${validaciones.max_size} caracteres`;
            return false;
        }
        
        if (validaciones.exp_reg && valor && !new RegExp(validaciones.exp_reg).test(valor)) {
            errorSpan.textContent = 'Formato incorrecto';
            return false;
        }
        
        return true;
    }
}
