class articulo extends EntidadAbstracta {
    constructor(esTest) {
        super(esTest);
        this.attributes = ['CodigoA', 'AutoresA', 'TituloA', 'TituloR', 'ISSN', 'VolumenR', 'PagIniA', 'PagFinA', 'FechaPublicacionR', 'FicheropdfA', 'EstadoA'];
        this.columnasamostrar = ['CodigoA', 'AutoresA', 'TituloA', 'TituloR', 'EstadoA'];
        this.mostrarespecial = ['FicheropdfA'];
    }

    manual_form_creation() {
        return `
            <form id="form_iu">
                
                <label for="CodigoA" class="label_CodigoA">Article Code</label>
            <input type="text" id="CodigoA" name="CodigoA" class="input_CodigoA" readonly>
            <span id="span_error_CodigoA" style="display:none"><span id="error_CodigoA"></span></span>
            <br>
                
                <label for="AutoresA" class="label_AutoresA">Autores *</label>
                <textarea id="AutoresA" name="AutoresA" class="input_AutoresA" rows="3" cols="50" title="Solo letras, espacios, ñ y acentos. Entre 2 y 200 caracteres"></textarea>
                <span id="span_error_AutoresA" style="display:none"><span id="error_AutoresA"></span></span>
                <br>
                
                <label for="TituloA" class="label_TituloA">Título Artículo *</label>
                <input type="text" id="TituloA" name="TituloA" class="input_TituloA" title="Caracteres alfanuméricos. Entre 1 y 100 caracteres">
                <span id="span_error_TituloA" style="display:none"><span id="error_TituloA"></span></span>
                <br>
                
                <label for="TituloR" class="label_TituloR">Título Revista *</label>
                <input type="text" id="TituloR" name="TituloR" class="input_TituloR" title="Caracteres alfanuméricos. Entre 1 y 100 caracteres">
                <span id="span_error_TituloR" style="display:none"><span id="error_TituloR"></span></span>
                <br>
                
                <label for="ISSN" class="label_ISSN">ISSN *</label>
                <input type="text" id="ISSN" name="ISSN" class="input_ISSN" title="Formato: 1234-5678 (4 dígitos, guión, 4 dígitos)">
                <span id="span_error_ISSN" style="display:none"><span id="error_ISSN"></span></span>
                <br>
                
                <label for="VolumenR" class="label_VolumenR">Volumen Revista *</label>
                <input type="number" id="VolumenR" name="VolumenR" class="input_VolumenR" min="1" title="Número positivo. Entre 1 y 4 dígitos">
                <span id="span_error_VolumenR" style="display:none"><span id="error_VolumenR"></span></span>
                <br>
                
                <label for="PagIniA" class="label_PagIniA">Página Inicial *</label>
                <input type="number" id="PagIniA" name="PagIniA" class="input_PagIniA" min="1" title="Número positivo. Entre 1 y 4 dígitos">
                <span id="span_error_PagIniA" style="display:none"><span id="error_PagIniA"></span></span>
                <br>
                
                <label for="PagFinA" class="label_PagFinA">Página Final *</label>
                <input type="number" id="PagFinA" name="PagFinA" class="input_PagFinA" min="1" title="Número positivo. Mayor o igual que página inicial. Máximo 4 dígitos">
                <span id="span_error_PagFinA" style="display:none"><span id="error_PagFinA"></span></span>
                <br>
                
                <label for="FechaPublicacionR" class="label_FechaPublicacionR">Fecha Publicación *</label>
                <input type="date" id="FechaPublicacionR" name="FechaPublicacionR" class="input_FechaPublicacionR" title="Formato: AAAA-MM-DD">
                <span id="span_error_FechaPublicacionR" style="display:none"><span id="error_FechaPublicacionR"></span></span>
                <br>
                
                   <label class="label_EstadoA">Estado *</label>
            <div class="radio-group_EstadoA">
                <!-- Cambia el name a algo que NO sea "EstadoA" -->
                <input type="radio" id="EstadoA_Enviado" name="EstadoA_radio_group" value="Enviado" class="radio_EstadoA">
                <label for="EstadoA_Enviado" class="label_EstadoA_Enviado">Enviado</label>
                
                <input type="radio" id="EstadoA_Revision" name="EstadoA_radio_group" value="Revision" class="radio_EstadoA">
                <label for="EstadoA_Revision" class="label_EstadoA_Revision">Revisión</label>
                
                <input type="radio" id="EstadoA_Publicado" name="EstadoA_radio_group" value="Publicado" class="radio_EstadoA">
                <label for="EstadoA_Publicado" class="label_EstadoA_Publicado">Publicado</label>
            </div>
            
            <!-- Este campo SÍ se llamará "EstadoA" y será el único que se valide -->
            <input type="hidden" id="EstadoA" name="EstadoA" value="">
            <span id="span_error_EstadoA" style="display:none"><span id="error_EstadoA"></span></span>
            <br>
                
                <label id="label_FicheropdfA" class="label_FicheropdfA">Fichero PDF</label>
                <input type="text" id="FicheropdfA" name="FicheropdfA" class="input_FicheropdfA" readonly>
                <a id="link_FicheropdfA" href=""><img src="./iconos/FILE.png" /></a>
                <span id="span_error_FicheropdfA" style="display:none"><span id="error_FicheropdfA"></span></span>
                <br>
                
                <label id="label_nuevo_FicheropdfA" class="label_nuevo_FicheropdfA">Nuevo Fichero PDF</label>
                <input type="file" id="nuevo_FicheropdfA" name="nuevo_FicheropdfA" class="input_nuevo_FicheropdfA" accept=".pdf" title="Solo archivos PDF. Máximo 2MB. Nombre sin acentos, ñ ni espacios">
                <span id="span_error_nuevo_FicheropdfA" style="display:none"><span id="error_nuevo_FicheropdfA"></span></span>
                <br>
            </form>
        `;
    }

    sincronizarEstadoA() {
        const radioButtons = document.querySelectorAll('input[name="EstadoA_radio_group"]');
        const hiddenInput = document.getElementById('EstadoA');

        if (!hiddenInput) {
            console.error('Campo hidden EstadoA no encontrado');
            return false;
        }

        // Buscar el radio button seleccionado
        const selectedRadio = document.querySelector('input[name="EstadoA_radio_group"]:checked');
        const value = selectedRadio ? selectedRadio.value : '';

        hiddenInput.value = value;
        console.log('EstadoA sincronizado:', value);

        return true;
    }

    /**
     * Establece el radio button basado en el valor de EstadoA
     * @param {string} valor - Valor del estado (Enviado, Revision, Publicado)
     */
    sincronizarEstadoAFromValue(valor) {
        if (!valor) {
            console.log('Valor de EstadoA vacío o nulo');
            return;
        }

        console.log('Sincronizando EstadoA desde valor:', valor);

        // Mapeo de valores a IDs de radio buttons
        const radioMapping = {
            'Enviado': 'EstadoA_Enviado',
            'Revision': 'EstadoA_Revision',
            'Publicado': 'EstadoA_Publicado'
        };

        const radioId = radioMapping[valor];
        if (radioId) {
            const radioElement = document.getElementById(radioId);
            if (radioElement) {
                // Desmarcar todos los radio buttons primero
                const allRadios = document.querySelectorAll('input[name="EstadoA_radio_group"]');
                allRadios.forEach(radio => {
                    radio.checked = false;
                });

                // Marcar el radio button correcto
                radioElement.checked = true;
                console.log('Radio button de EstadoA seleccionado:', radioId);

                // Actualizar el campo hidden
                const hiddenInput = document.getElementById('EstadoA');
                if (hiddenInput) {
                    hiddenInput.value = valor;
                    console.log('Campo hidden de EstadoA actualizado:', valor);
                }
            } else {
                console.error('Radio button de EstadoA no encontrado en el DOM:', radioId);
            }
        } else {
            console.error('Valor de EstadoA no reconocido:', valor);
        }
    }

    configurarCamposADD() {
        const labelCodigoA = document.getElementById('label_CodigoA');
        const inputCodigoA = document.getElementById('CodigoA');
        const spanErrorCodigoA = document.getElementById('span_error_CodigoA');

        if (labelCodigoA) labelCodigoA.style.display = 'none';
        if (inputCodigoA) inputCodigoA.style.display = 'none';
        if (spanErrorCodigoA) spanErrorCodigoA.style.display = 'none';

        this.dom.show_element('label_FicheropdfA', 'none');
        this.dom.show_element('FicheropdfA', 'none');
        this.dom.show_element('link_FicheropdfA', 'none');
        this.dom.show_element('label_nuevo_FicheropdfA', 'block');
        this.dom.show_element('nuevo_FicheropdfA', 'block');
    }

    /**
     * Configura los radio buttons como readonly sin cambiar su apariencia
     */
    configurarRadioButtonsReadonlySinEstilos() {
        const radioButtons = document.querySelectorAll('input[name="EstadoA_radio_group"]');
        radioButtons.forEach(radio => {
            radio.disabled = true;
            // NO aplicamos opacidad ni estilos, se mantiene la apariencia normal
        });

        // El contenedor también se mantiene normal
        const radioGroup = document.querySelector('.radio-group_EstadoA');
        if (radioGroup) {
            radioGroup.style.pointerEvents = 'none';
        }
    }

    /**
     * Coloca todos los campos como readonly sin cambiar su apariencia
     */
    colocarTodosReadonlySinEstilos() {
        const campos = [
            'AutoresA',
            'TituloA',
            'TituloR',
            'ISSN',
            'VolumenR',
            'PagIniA',
            'PagFinA',
            'FechaPublicacionR',
            'FicheropdfA'
        ];

        campos.forEach(campo => {
            const elemento = document.getElementById(campo);
            if (elemento) {
                elemento.readOnly = true;
                // NO aplicamos estilos, se mantiene la apariencia normal
            }
        });

        // Textarea también
        const textarea = document.getElementById('AutoresA');
        if (textarea) {
            textarea.readOnly = true;
        }
    }

    /**
     * Configura el formulario para DELETE (solo lectura sin estilos)
     */
    configurarFormularioDELETE() {
        console.log('Configurando formulario DELETE (solo lectura sin estilos)...');

        // 1. Hacer todos los campos readonly sin cambiar estilos
        this.colocarTodosReadonlySinEstilos();

        // 2. Ocultar campos de subida de archivos
        this.dom.show_element('label_nuevo_FicheropdfA', 'none');
        this.dom.show_element('nuevo_FicheropdfA', 'none');

        // 3. Asegurar que los radio buttons también sean readonly sin estilos
        this.configurarRadioButtonsReadonlySinEstilos();
    }

    /**
     * Configura el formulario para SHOWCURRENT (solo lectura sin estilos)
     */
    configurarFormularioSHOWCURRENT() {
        console.log('Configurando formulario SHOWCURRENT (solo lectura sin estilos)...');

        // 1. Hacer todos los campos readonly sin cambiar estilos
        this.colocarTodosReadonlySinEstilos();

        // 2. Ocultar campos de subida de archivos
        this.dom.show_element('label_nuevo_FicheropdfA', 'none');
        this.dom.show_element('nuevo_FicheropdfA', 'none');

        // 3. Asegurar que los radio buttons también sean readonly sin estilos
        this.configurarRadioButtonsReadonlySinEstilos();
    }

    ////////////////////////////creación de formularios
    createForm_ADD() {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        document.getElementById('class_contenido_titulo_form').innerHTML = 'ADD Artículo';

        setTimeout(() => {
            // configurar campos visibles
            this.configurarCamposADD();
            setLang();

            // Establecer valor por defecto y sincronizar
            document.getElementById('EstadoA_Enviado').checked = true;
            this.sincronizarEstadoA();

            // Configurar validaciones (ahora validará el campo hidden "EstadoA")
            this.dom.colocarvalidaciones('form_iu', 'ADD');

            // Añadir evento change manual para el file input
            const fileInput = document.getElementById('nuevo_FicheropdfA');
            if (fileInput) {
                fileInput.addEventListener('change', () => {
                    console.log('File input changed, validando...');
                    this.ADD_nuevo_FicheropdfA_validation();
                });
            }

            this.dom.colocarboton('ADD');
            document.getElementById('form_iu').onsubmit = (e) => {
                e.preventDefault();
                this.ADD_submit_articulo();
            };

            this.dom.show_element('Div_IU_form', 'block');
        }, 10);
    }

    createForm_SEARCH() {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        document.getElementById('class_contenido_titulo_form').innerHTML = 'SEARCH Artículo';

        const labelCodigoA = document.getElementById('label_CodigoA');
        const inputCodigoA = document.getElementById('CodigoA');
        const spanErrorCodigoA = document.getElementById('span_error_CodigoA');

        if (labelCodigoA) labelCodigoA.style.display = 'block';
        if (inputCodigoA) {
            inputCodigoA.style.display = 'block';
            inputCodigoA.readOnly = false;
            inputCodigoA.value = '';
        }
        if (spanErrorCodigoA) spanErrorCodigoA.style.display = 'none';

        // Configurar campos file para SEARCH
        this.dom.show_element('label_nuevo_FicheropdfA', 'none');
        this.dom.show_element('nuevo_FicheropdfA', 'none');
        this.dom.show_element('FicheropdfA', 'block');
        this.dom.show_element('link_FicheropdfA', 'block');
        document.getElementById('FicheropdfA').readOnly = false;

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
        document.getElementById('class_contenido_titulo_form').innerHTML = 'EDIT Artículo';

        setTimeout(() => {
            // PRIMERO configurar el estado ANTES de rellenar valores
            this.sincronizarEstadoAFromValue(parametros.EstadoA);

            // LUEGO rellenar el resto de valores
            this.dom.rellenarvaloresform(parametros);

            const labelCodigoA = document.getElementById('label_CodigoA');
            const inputCodigoA = document.getElementById('CodigoA');
            const spanErrorCodigoA = document.getElementById('span_error_CodigoA');

            if (labelCodigoA) labelCodigoA.style.display = 'block';
            if (inputCodigoA) {
                inputCodigoA.style.display = 'block';
                inputCodigoA.readOnly = true;
            }
            if (spanErrorCodigoA) spanErrorCodigoA.style.display = 'none';

            // Manejo especial de fecha como en tu versión
            const fechaInput = document.getElementById('FechaPublicacionR');
            if (fechaInput) {
                const valor = parametros.FechaPublicacionR;
                if (valor === '0000-00-00' || !valor) {
                    fechaInput.value = '';
                } else if (/^\d{2}-\d{2}-\d{4}$/.test(valor)) {
                    const [dia, mes, año] = valor.split('-');
                    fechaInput.value = `${año}-${mes}-${dia}`;
                } else {
                    fechaInput.value = valor;
                }
            }

            // Configurar campos file para EDIT
            this.dom.show_element('label_nuevo_FicheropdfA', 'block');
            this.dom.show_element('nuevo_FicheropdfA', 'block');
            this.dom.show_element('FicheropdfA', 'block');
            this.dom.show_element('link_FicheropdfA', 'block');
            document.getElementById('FicheropdfA').readOnly = true;

            this.dom.colocarvalidaciones('form_iu', 'EDIT');
            this.dom.colocarboton('EDIT');
            document.getElementById('form_iu').onsubmit = (e) => {
                e.preventDefault();
                this.EDIT_submit_articulo();
            };
            this.dom.show_element('Div_IU_form', 'block');
        }, 50);
        setLang();
    }

    createForm_DELETE(parametros) {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        document.getElementById('class_contenido_titulo_form').innerHTML = 'DELETE Artículo';

        setTimeout(() => {
            // PRIMERO configurar el estado ANTES de rellenar valores
            this.sincronizarEstadoAFromValue(parametros.EstadoA);

            // LUEGO rellenar el resto de valores
            this.dom.rellenarvaloresform(parametros);

            const labelCodigoA = document.getElementById('label_CodigoA');
            const inputCodigoA = document.getElementById('CodigoA');
            const spanErrorCodigoA = document.getElementById('span_error_CodigoA');

            if (labelCodigoA) labelCodigoA.style.display = 'block';
            if (inputCodigoA) {
                inputCodigoA.style.display = 'block';
                inputCodigoA.readOnly = true;
            }
            if (spanErrorCodigoA) spanErrorCodigoA.style.display = 'none';

            // Manejo especial de fecha
            const fechaInput = document.getElementById('FechaPublicacionR');
            if (fechaInput) {
                const valor = parametros.FechaPublicacionR;
                if (valor === '0000-00-00' || !valor) {
                    fechaInput.value = '';
                } else if (/^\d{2}-\d{2}-\d{4}$/.test(valor)) {
                    const [dia, mes, año] = valor.split('-');
                    fechaInput.value = `${año}-${mes}-${dia}`;
                } else {
                    fechaInput.value = valor;
                }
            }

            // Configurar formulario como DELETE (solo lectura sin estilos)
            this.configurarFormularioDELETE();

            this.dom.colocarboton('DELETE');
            document.getElementById('form_iu').onsubmit = (e) => {
                e.preventDefault();
                this.DELETE();
            };
            this.dom.show_element('Div_IU_form', 'block');
        }, 50);
        setLang();
    }

    createForm_SHOWCURRENT(parametros) {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        document.getElementById('class_contenido_titulo_form').innerHTML = 'SHOW Artículo';

        setTimeout(() => {
            // PRIMERO configurar el estado ANTES de rellenar valores
            this.sincronizarEstadoAFromValue(parametros.EstadoA);

            // LUEGO rellenar el resto de valores
            this.dom.rellenarvaloresform(parametros);

            const labelCodigoA = document.getElementById('label_CodigoA');
            const inputCodigoA = document.getElementById('CodigoA');
            const spanErrorCodigoA = document.getElementById('span_error_CodigoA');

            if (labelCodigoA) labelCodigoA.style.display = 'block';
            if (inputCodigoA) {
                inputCodigoA.style.display = 'block';
                inputCodigoA.readOnly = true;
            }
            if (spanErrorCodigoA) spanErrorCodigoA.style.display = 'none';

            // Manejo especial de fecha
            const fechaInput = document.getElementById('FechaPublicacionR');
            if (fechaInput) {
                const valor = parametros.FechaPublicacionR;
                if (valor === '0000-00-00' || !valor) {
                    fechaInput.value = '';
                } else if (/^\d{2}-\d{2}-\d{4}$/.test(valor)) {
                    const [dia, mes, año] = valor.split('-');
                    fechaInput.value = `${año}-${mes}-${dia}`;
                } else {
                    fechaInput.value = valor;
                }
            }

            // Configurar formulario como SHOWCURRENT (solo lectura sin estilos)
            this.configurarFormularioSHOWCURRENT();

            this.dom.show_element('Div_IU_form', 'block');
        }, 50);
        setLang();
    }

    //////////////////////funciones personalizadas

    /////////////Validación de ISSN
    personalize_ISSN_validation(issn) {
        issn = issn.trim();

        // Validar longitud exacta
        if (issn.length !== 9) {
            return false;
        }

        // Validar formato: 4 dígitos + guión + 4 dígitos
        const issnRegex = /^\d{4}-\d{4}$/;
        return issnRegex.test(issn);
    }

    /////////////Validación de fecha formato YYYY-MM-DD
    personalize_FechaPublicacionR_validation(fecha) {
        if (!fecha) return false;

        // Validar formato básico
        const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!fechaRegex.test(fecha)) {
            return false;
        }

        // Validar que sea una fecha válida
        const date = new Date(fecha);
        return date instanceof Date && !isNaN(date);
    }

    /////////////Validación de estado
    personalize_EstadoA_validation(estado) {
        if (!estado || estado === '') {
            return false;
        }

        const valoresPermitidos = ['Enviado', 'Revision', 'Publicado'];
        return valoresPermitidos.includes(estado);
    }

    /////////////Validación de autores (alfabéticos con acentos, ñ y espacios)
    personalize_AutoresA_validation(texto) {
        if (!texto) return false;

        // Eliminar espacios extra
        texto = texto.trim();

        // Validar longitud
        if (texto.length < 2 || texto.length > 200) {
            return false;
        }

        // Validar formato: letras, espacios, ñ y acentos
        const autoresRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s.,]+$/;
        return autoresRegex.test(texto);
    }

    /////////////Validación de páginas (PagFinA >= PagIniA)
    personalize_Paginas_validation(pagIni, pagFin) {
        if (!pagIni || !pagFin) return true; // Si alguno está vacío, no validar relación

        const ini = parseInt(pagIni);
        const fin = parseInt(pagFin);

        return fin >= ini;
    }

    //////////////////////////Métodos de validación para ADD
    ADD_CodigoA_validation() {
        const value = document.getElementById('CodigoA').value.trim();

        // Campo autoincremental: puede estar vacío en ADD
        if (!value) {
            this.dom.mostrar_exito_campo('CodigoA');
            return true;
        }

        // Si tiene valor, debe ser numérico
        if (!this.validations.format('CodigoA', '^[0-9]+$')) {
            this.dom.mostrar_error_campo('CodigoA', 'codigo_format_KO');
            return 'codigo_format_KO';
        }

        this.dom.mostrar_exito_campo('CodigoA');
        return true;
    }

    ADD_AutoresA_validation() {
        const value = document.getElementById('AutoresA').value.trim();

        // Validar primero si está vacío
        if (!value) {
            this.dom.mostrar_error_campo('AutoresA', 'autores_min_size_KO');
            return 'autores_min_size_KO';
        }

        // Validar tamaño mínimo
        if (value.length < 2) {
            this.dom.mostrar_error_campo('AutoresA', 'autores_min_size_KO');
            return 'autores_min_size_KO';
        }

        //Validar tamaño máximo
        if (value.length > 200) {
            this.dom.mostrar_error_campo('AutoresA', 'autores_max_size_KO');
            return 'autores_max_size_KO';
        }

        // Validar formato
        if (!this.personalize_AutoresA_validation(value)) {
            this.dom.mostrar_error_campo('AutoresA', 'autores_format_KO');
            return 'autores_format_KO';
        }

        this.dom.mostrar_exito_campo('AutoresA');
        return true;
    }

    ///////////////////////// validación personalizada de autores
    personalize_AutoresA_validation(texto) {
        if (!texto) return false;

        // Eliminar espacios extra
        texto = texto.trim();

        // Validar longitud
        if (texto.length < 2 || texto.length > 200) {
            return false;
        }

        // Expresión regular más permisiva para autores
        const autoresRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s.,]+$/;
        return autoresRegex.test(texto);
    }

    ADD_TituloA_validation() {
        const value = document.getElementById('TituloA').value.trim();

        // No usar obligatorio_KO
        if (!this.validations.min_size('TituloA', 1)) {
            this.dom.mostrar_error_campo('TituloA', 'tituloA_min_size_KO');
            return 'tituloA_min_size_KO';
        }

        if (!this.validations.max_size('TituloA', 100)) {
            this.dom.mostrar_error_campo('TituloA', 'tituloA_max_size_KO');
            return 'tituloA_max_size_KO';
        }

        this.dom.mostrar_exito_campo('TituloA');
        return true;
    }

    ADD_TituloR_validation() {
        const value = document.getElementById('TituloR').value.trim();

        // No usar obligatorio_KO
        if (!this.validations.min_size('TituloR', 1)) {
            this.dom.mostrar_error_campo('TituloR', 'tituloR_min_size_KO');
            return 'tituloR_min_size_KO';
        }

        if (!this.validations.max_size('TituloR', 100)) {
            this.dom.mostrar_error_campo('TituloR', 'tituloR_max_size_KO');
            return 'tituloR_max_size_KO';
        }

        this.dom.mostrar_exito_campo('TituloR');
        return true;
    }

    ADD_ISSN_validation() {
        const value = document.getElementById('ISSN').value.trim();

        console.log('Validando ISSN:', value, 'Longitud:', value.length);

        if (!value) {
            this.dom.mostrar_error_campo('ISSN', 'issn_min_size_KO');
            return 'issn_min_size_KO';
        }

        // "1234-567" tiene longitud 8, debe devolver issn_size_KO
        if (value.length !== 9) {
            console.log('ISSN longitud incorrecta:', value.length);
            this.dom.mostrar_error_campo('ISSN', 'issn_size_KO');
            return 'issn_size_KO';
        }

        // Solo si tiene longitud 9, validar formato
        if (!/^\d{4}-\d{4}$/.test(value)) {
            console.log('ISSN formato incorrecto');
            this.dom.mostrar_error_campo('ISSN', 'issn_format_KO');
            return 'issn_format_KO';
        }

        this.dom.mostrar_exito_campo('ISSN');
        return true;
    }

    ADD_VolumenR_validation() {
        const value = document.getElementById('VolumenR').value.trim();

        // No usar obligatorio_KO
        if (!value) {
            this.dom.mostrar_error_campo('VolumenR', 'volumen_min_size_KO');
            return 'volumen_min_size_KO';
        }

        const volumen = parseInt(value);
        if (isNaN(volumen) || volumen < 1) {
            this.dom.mostrar_error_campo('VolumenR', 'volumen_positivo_KO');
            return 'volumen_positivo_KO';
        }

        if (value.length > 4) {
            this.dom.mostrar_error_campo('VolumenR', 'volumen_max_size_KO');
            return 'volumen_max_size_KO';
        }

        this.dom.mostrar_exito_campo('VolumenR');
        return true;
    }

    ADD_PagIniA_validation() {
        const value = document.getElementById('PagIniA').value.trim();

        // No usar obligatorio_KO
        if (!value) {
            this.dom.mostrar_error_campo('PagIniA', 'pagIni_min_size_KO');
            return 'pagIni_min_size_KO';
        }

        const pagIni = parseInt(value);
        if (isNaN(pagIni) || pagIni < 1) {
            this.dom.mostrar_error_campo('PagIniA', 'pagIni_positivo_KO');
            return 'pagIni_positivo_KO';
        }

        if (value.length > 4) {
            this.dom.mostrar_error_campo('PagIniA', 'pagIni_max_size_KO');
            return 'pagIni_max_size_KO';
        }

        this.dom.mostrar_exito_campo('PagIniA');
        return true;
    }

    ADD_PagFinA_validation() {
        const value = document.getElementById('PagFinA').value.trim();
        const pagIniValue = document.getElementById('PagIniA').value.trim();

        // No usar obligatorio_KO
        if (!value) {
            this.dom.mostrar_error_campo('PagFinA', 'pagFin_min_size_KO');
            return 'pagFin_min_size_KO';
        }

        const pagFin = parseInt(value);
        if (isNaN(pagFin) || pagFin < 1) {
            this.dom.mostrar_error_campo('PagFinA', 'pagFin_positivo_KO');
            return 'pagFin_positivo_KO';
        }

        if (value.length > 4) {
            this.dom.mostrar_error_campo('PagFinA', 'pagFin_max_size_KO');
            return 'pagFin_max_size_KO';
        }

        // Validar que PagFinA >= PagIniA
        if (pagIniValue) {
            const pagIni = parseInt(pagIniValue);
            if (!this.personalize_Paginas_validation(pagIni, pagFin)) {
                this.dom.mostrar_error_campo('PagFinA', 'pagFin_mayor_igual_KO');
                return 'pagFin_mayor_igual_KO';
            }
        }

        this.dom.mostrar_exito_campo('PagFinA');
        return true;
    }

    ADD_FechaPublicacionR_validation() {
        const value = document.getElementById('FechaPublicacionR').value;

        //  Verificar si el campo está vacío
        if (!value || value.trim() === '') {
            this.dom.mostrar_error_campo('FechaPublicacionR', 'fecha_min_size_KO');
            return 'fecha_min_size_KO';
        }

        //  Validación más específica
        const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!fechaRegex.test(value)) {
            this.dom.mostrar_error_campo('FechaPublicacionR', 'fecha_format_KO');
            return 'fecha_format_KO';
        }

        // Validar componentes de fecha
        const [año, mes, dia] = value.split('-').map(Number);

        // Validar mes
        if (mes < 1 || mes > 12) {
            this.dom.mostrar_error_campo('FechaPublicacionR', 'fecha_format_KO');
            return 'fecha_format_KO';
        }

        // Validar día según el mes
        const diasPorMes = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (dia < 1 || dia > diasPorMes[mes - 1]) {
            this.dom.mostrar_error_campo('FechaPublicacionR', 'fecha_format_KO');
            return 'fecha_format_KO';
        }

        this.dom.mostrar_exito_campo('FechaPublicacionR');
        return true;
    }

    //  validación personalizada de fecha
    personalize_FechaPublicacionR_validation(fecha) {
        if (!fecha) return false;

        // Validar formato básico YYYY-MM-DD
        const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!fechaRegex.test(fecha)) {
            return false;
        }

        // Validar que sea una fecha válida
        const [año, mes, dia] = fecha.split('-').map(Number);

        // Validar mes (1-12) y día (1-31)
        if (mes < 1 || mes > 12 || dia < 1 || dia > 31) {
            return false;
        }

        // Validación adicional para meses con 30 días y febrero
        const date = new Date(año, mes - 1, dia);
        return date.getFullYear() === año &&
            date.getMonth() === mes - 1 &&
            date.getDate() === dia;
    }

    // Métodos para manejar la visualización de errores sin depender de Dom_Class
    mostrarErrorVisual(campoId, esError = true) {
        console.log(`Mostrar ${esError ? 'error' : 'éxito'} visual para:`, campoId);

        if (campoId === 'EstadoA') {
            const contenedor = document.querySelector('.radio-group_EstadoA');
            const label = document.querySelector('.label_EstadoA');
            if (contenedor) {
                contenedor.style.border = esError ? '2px solid red' : '2px solid green';
                contenedor.style.padding = '5px';
                contenedor.style.borderRadius = '4px';
            }
            if (label) {
                label.style.color = esError ? 'red' : 'green';
            }
        } else if (campoId === 'nuevo_FicheropdfA') {
            const label = document.querySelector('.label_nuevo_FicheropdfA');
            if (label) {
                label.style.color = esError ? 'red' : 'green';
            }
        }

    }

    ocultarErrorVisual(campoId) {
        this.mostrarErrorVisual(campoId, false);
    }


    ADD_EstadoA_validation() {
        const radioEnviado = document.getElementById('EstadoA_Enviado');
        const radioRevision = document.getElementById('EstadoA_Revision');
        const radioPublicado = document.getElementById('EstadoA_Publicado');

        if (!radioEnviado || !radioRevision || !radioPublicado) {
            console.error('Radio buttons no encontrados');
            return 'estado_element_not_found';
        }

        // Buscar el radio button seleccionado
        const selectedRadio = radioEnviado.checked ? radioEnviado :
            radioRevision.checked ? radioRevision :
                radioPublicado.checked ? radioPublicado : null;

        const value = selectedRadio ? selectedRadio.value : '';

        console.log('Validando EstadoA (directo de radio buttons):', value);

        if (!value) {
            this.dom.mostrar_error_campo('EstadoA', 'estado_min_size_KO');
            this.mostrarErrorRadioEstadoA(true);
            return 'estado_min_size_KO';
        }

        // Actualizar el campo hidden para el envío del formulario
        const hiddenInput = document.getElementById('EstadoA');
        if (hiddenInput) {
            hiddenInput.value = value;
        }

        this.dom.mostrar_exito_campo('EstadoA');
        this.mostrarErrorRadioEstadoA(false);
        return true;
    }

    // Método auxiliar para manejar la visualización de errores en radio buttons
    mostrarErrorRadioEstadoA(esError = true) {
        const contenedor = document.querySelector('.radio-group_EstadoA');
        const label = document.querySelector('.label_EstadoA');
        const spanError = document.getElementById('span_error_EstadoA');
        const errorSpan = document.getElementById('error_EstadoA');

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
                errorSpan.textContent = 'Debe seleccionar un estado';
            } else {
                spanError.style.display = 'none';
            }
        }
    }

    ADD_nuevo_FicheropdfA_validation() {
        console.log('=== VALIDACIÓN PDF CON SISTEMA AUTOMÁTICO ===');

        // Usar el sistema de validaciones integrado que SÍ funciona
        const fileInput = document.getElementById('nuevo_FicheropdfA');

        // 1. Verificar que existe archivo
        if (!fileInput.files || fileInput.files.length === 0) {
            console.log('No existe archivo');
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'ficheropdf_min_size_KO');
            return 'ficheropdf_min_size_KO';
        }

        const file = fileInput.files[0];
        const fileName = file.name;

        // 2. Validar tipo de archivo
        if (file.type !== 'application/pdf') {
            console.log('Tipo de archivo incorrecto:', file.type);
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'ficheropdf_type_file_KO');
            return 'ficheropdf_type_file_KO';
        }

        // 3. Validar tamaño del archivo (2MB = 2097152 bytes)
        if (file.size > 2097152) {
            console.log('Archivo demasiado grande:', file.size);
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'ficheropdf_max_size_file_KO');
            return 'ficheropdf_max_size_file_KO';
        }

        // 4. Validar nombre del archivo
        const nameRegex = /^[a-zA-Z0-9_\-\.]+\.pdf$/;
        if (!nameRegex.test(fileName)) {
            console.log('Formato de nombre inválido:', fileName);
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'ficheropdf_format_name_file_KO');
            return 'ficheropdf_format_name_file_KO';
        }

        // 5. Validar longitud del nombre
        if (fileName.length < 7) {
            console.log('Nombre demasiado corto:', fileName.length);
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'ficheropdf_min_size_name_KO');
            return 'ficheropdf_min_size_name_KO';
        }

        if (fileName.length > 20) {
            console.log('Nombre demasiado largo:', fileName.length);
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'ficheropdf_max_size_name_KO');
            return 'ficheropdf_max_size_name_KO';
        }

        console.log('TODAS LAS VALIDACIONES DE PDF PASARON');
        this.dom.mostrar_exito_campo('nuevo_FicheropdfA');
        return true;
    }
    ADD_FicheropdfA_validation() {
        // Para EDIT, el campo FicheropdfA original es readonly, siempre es válido
        const elemento = document.getElementById('FicheropdfA');
        if (elemento) {
            this.dom.mostrar_exito_campo('FicheropdfA');
        }
        return true;
    }
    ADD_submit_articulo() {
        try {
            console.log('=== INICIANDO SUBMIT ARTÍCULO ===');
            const validations = [
                this.ADD_CodigoA_validation(),
                this.ADD_AutoresA_validation(),
                this.ADD_TituloA_validation(),
                this.ADD_TituloR_validation(),
                this.ADD_ISSN_validation(),
                this.ADD_VolumenR_validation(),
                this.ADD_PagIniA_validation(),
                this.ADD_PagFinA_validation(),
                this.ADD_FechaPublicacionR_validation(),
                this.ADD_EstadoA_validation(),
                this.ADD_FicheropdfA_validation(),
                this.ADD_nuevo_FicheropdfA_validation()
            ];

            console.log('Resultados validación:', validations);

            if (validations.every(v => v === true)) {
                console.log('TODAS LAS VALIDACIONES PASARON');

                // Cerrar cualquier modal de error antes de proceder
                if (typeof this.dom.cerrarModalError === 'function') {
                    console.log('Cerrando modal de error existente...');
                    this.dom.cerrarModalError();
                }

                // Normalización de fecha antes de enviar
                const fechaInput = document.getElementById('FechaPublicacionR');
                if (fechaInput) {
                    let valor = fechaInput.value.trim();
                    if (valor === '') {
                        fechaInput.value = '0000-00-00';
                    } else if (/^\d{2}-\d{2}-\d{4}$/.test(valor)) {
                        const [dia, mes, año] = valor.split('-');
                        fechaInput.value = `${año}-${mes}-${dia}`;
                    }
                }

                console.log('=== INSPECCIÓN DEL DOM ANTES DE ADD ===');
                const errorElements = document.querySelectorAll('[style*="display"],[class*="error"],[class*="Error"]');
                console.log('Elementos de error encontrados:', errorElements.length);
                errorElements.forEach(el => {
                    console.log('Elemento:', el, 'Display:', window.getComputedStyle(el).display);
                });

                // Buscar específicamente el botón "X" que mencionas
                const closeButton = document.querySelector('button[onclick*="cerrarModalError"]');
                if (closeButton) {
                    console.log('BOTÓN X ENCONTRADO:', closeButton);
                    console.log('Parent element:', closeButton.parentElement);
                    console.log('¿Está visible?', window.getComputedStyle(closeButton).display !== 'none');

                    // Si encontramos el botón X, forzar cerrar el modal
                    if (typeof this.dom.cerrarModalError === 'function') {
                        this.dom.cerrarModalError();
                        console.log('Modal cerrado forzadamente');
                    }
                }

                this.ADD();
            } else {
                console.log('ALGUNAS VALIDACIONES FALLARON');
                // Mostrar qué validaciones fallaron
                const validationNames = [
                    'CodigoA', 'AutoresA', 'TituloA', 'TituloR', 'ISSN',
                    'VolumenR', 'PagIniA', 'PagFinA', 'FechaPublicacionR',
                    'EstadoA', 'FicheropdfA', 'nuevo_FicheropdfA'
                ];

                validations.forEach((result, index) => {
                    if (result !== true) {
                        console.log(`${validationNames[index]}: ${result}`);
                    }
                });
            }
        } catch (error) {
            console.error('ERROR en submit:', error);
        }
    }

    /////////////////////////////////////////////////VALIDACIONES PARA EDIT
    EDIT_CodigoA_validation() {
        const value = document.getElementById('CodigoA').value.trim();

        if (!value) {
            this.dom.mostrar_error_campo('CodigoA', 'codigo_min_size_KO');
            return 'codigo_min_size_KO';
        }

        if (!this.validations.format('CodigoA', '^[0-9]+$')) {
            this.dom.mostrar_error_campo('CodigoA', 'codigo_format_KO');
            return 'codigo_format_KO';
        }

        this.dom.mostrar_exito_campo('CodigoA');
        return true;
    }

    EDIT_AutoresA_validation() {
        const value = document.getElementById('AutoresA').value.trim();
        if (value === '') {
            this.dom.mostrar_exito_campo('AutoresA');
            return true;
        }
        return this.ADD_AutoresA_validation();
    }

    EDIT_TituloA_validation() {
        const value = document.getElementById('TituloA').value.trim();
        if (value === '') {
            this.dom.mostrar_exito_campo('TituloA');
            return true;
        }
        return this.ADD_TituloA_validation();
    }

    EDIT_TituloR_validation() {
        const value = document.getElementById('TituloR').value.trim();
        if (value === '') {
            this.dom.mostrar_exito_campo('TituloR');
            return true;
        }
        return this.ADD_TituloR_validation();
    }

    EDIT_ISSN_validation() {
        const value = document.getElementById('ISSN').value.trim();
        if (value === '') {
            this.dom.mostrar_exito_campo('ISSN');
            return true;
        }
        return this.ADD_ISSN_validation();
    }

    EDIT_VolumenR_validation() {
        const value = document.getElementById('VolumenR').value.trim();
        if (value === '') {
            this.dom.mostrar_exito_campo('VolumenR');
            return true;
        }
        return this.ADD_VolumenR_validation();
    }

    EDIT_PagIniA_validation() {
        const value = document.getElementById('PagIniA').value.trim();
        if (value === '') {
            this.dom.mostrar_exito_campo('PagIniA');
            return true;
        }
        return this.ADD_PagIniA_validation();
    }

    EDIT_PagFinA_validation() {
        const value = document.getElementById('PagFinA').value.trim();
        if (value === '') {
            this.dom.mostrar_exito_campo('PagFinA');
            return true;
        }
        return this.ADD_PagFinA_validation();
    }

    EDIT_FechaPublicacionR_validation() {
        const value = document.getElementById('FechaPublicacionR').value;
        if (value === '') {
            this.dom.mostrar_exito_campo('FechaPublicacionR');
            return true;
        }
        return this.ADD_FechaPublicacionR_validation();
    }

    EDIT_EstadoA_validation() {
        const selectElement = document.getElementById('EstadoA');
        if (!selectElement) {
            this.dom.mostrar_exito_campo('EstadoA');
            return true;
        }

        const value = selectElement.value;

        // En EDIT, campo vacío es válido (no se modifica)
        if (value === null || value === undefined || value === '') {
            this.dom.mostrar_exito_campo('EstadoA');
            return true;
        }

        // Si tiene valor, debe ser válido
        const valoresPermitidos = ['Enviado', 'Revision', 'Publicado'];
        if (!valoresPermitidos.includes(value)) {
            this.dom.mostrar_error_campo('EstadoA', 'estado_format_KO');
            return 'estado_format_KO';
        }

        this.dom.mostrar_exito_campo('EstadoA');
        return true;
    }

    EDIT_FicheropdfA_validation() {
        // Para EDIT, el campo FicheropdfA original es readonly, siempre es válido
        const elemento = document.getElementById('FicheropdfA');
        if (elemento) {
            this.dom.mostrar_exito_campo('FicheropdfA');
        }
        return true;
    }

    EDIT_nuevo_FicheropdfA_validation() {
        // En EDIT, el fichero es opcional
        if (!this.validations.not_exist_file('nuevo_FicheropdfA')) {
            this.dom.mostrar_exito_campo('nuevo_FicheropdfA');
            return true;
        }

        // Si hay fichero, validarlo
        return this.ADD_nuevo_FicheropdfA_validation();
    }

    EDIT_submit_articulo() {
        const validations = [
            this.EDIT_CodigoA_validation(),
            this.EDIT_AutoresA_validation(),
            this.EDIT_TituloA_validation(),
            this.EDIT_TituloR_validation(),
            this.EDIT_ISSN_validation(),
            this.EDIT_VolumenR_validation(),
            this.EDIT_PagIniA_validation(),
            this.EDIT_PagFinA_validation(),
            this.EDIT_FechaPublicacionR_validation(),
            this.EDIT_EstadoA_validation(),
            this.EDIT_nuevo_FicheropdfA_validation()
        ];

        if (validations.every(v => v === true)) {
            // Normalización de fecha antes de enviar
            const fechaInput = document.getElementById('FechaPublicacionR');
            if (fechaInput) {
                let valor = fechaInput.value.trim();
                if (valor === '') {
                    fechaInput.value = '0000-00-00';
                } else if (/^\d{2}-\d{2}-\d{4}$/.test(valor)) {
                    const [dia, mes, año] = valor.split('-');
                    fechaInput.value = `${año}-${mes}-${dia}`;
                }
            }
            this.EDIT();
        }
    }

    //////////////////////////////// Métodos de validación para SEARCH 
    SEARCH_CodigoA_validation() {
        const value = document.getElementById('CodigoA').value;
        if (value && !this.validations.format('CodigoA', '^[0-9]*$')) {
            this.dom.mostrar_error_campo('CodigoA', 'codigo_search_format_KO');
            return 'codigo_search_format_KO';
        }
        this.dom.mostrar_exito_campo('CodigoA');
        return true;
    }

    SEARCH_AutoresA_validation() {
        const value = document.getElementById('AutoresA').value;
        if (value && !this.validations.format('AutoresA', '^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s\\.,]*$')) {
            this.dom.mostrar_error_campo('AutoresA', 'autores_search_format_KO');
            return 'autores_search_format_KO';
        }
        this.dom.mostrar_exito_campo('AutoresA');
        return true;
    }

    SEARCH_TituloA_validation() {
        const value = document.getElementById('TituloA').value;
        if (value && !this.validations.format('TituloA', '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s\\.,;:!?()-]*$')) {
            this.dom.mostrar_error_campo('TituloA', 'tituloA_search_format_KO');
            return 'tituloA_search_format_KO';
        }
        this.dom.mostrar_exito_campo('TituloA');
        return true;
    }

    SEARCH_TituloR_validation() {
        const value = document.getElementById('TituloR').value;
        if (value && !this.validations.format('TituloR', '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s\\.,;:!?()-]*$')) {
            this.dom.mostrar_error_campo('TituloR', 'tituloR_search_format_KO');
            return 'tituloR_search_format_KO';
        }
        this.dom.mostrar_exito_campo('TituloR');
        return true;
    }

    SEARCH_ISSN_validation() {
        const value = document.getElementById('ISSN').value;
        if (value && value.length !== 9) {
            this.dom.mostrar_error_campo('ISSN', 'issn_search_format_KO');
            return 'issn_search_format_KO';
        }
        this.dom.mostrar_exito_campo('ISSN');
        return true;
    }

    SEARCH_VolumenR_validation() {
        const value = document.getElementById('VolumenR').value;
        //  Solo validar si tiene valor y el formato es incorrecto
        if (value && value !== '' && !/^[0-9]*$/.test(value)) {
            this.dom.mostrar_error_campo('VolumenR', 'volumen_search_format_KO');
            return 'volumen_search_format_KO';
        }
        this.dom.mostrar_exito_campo('VolumenR');
        return true;
    }

    SEARCH_PagIniA_validation() {
        const value = document.getElementById('PagIniA').value;
        if (value && value !== '' && !/^[0-9]*$/.test(value)) {
            this.dom.mostrar_error_campo('PagIniA', 'pagIni_search_format_KO');
            return 'pagIni_search_format_KO';
        }
        this.dom.mostrar_exito_campo('PagIniA');
        return true;
    }
    SEARCH_PagFinA_validation() {
        const value = document.getElementById('PagFinA').value;
        if (value && value !== '' && !/^[0-9]*$/.test(value)) {
            this.dom.mostrar_error_campo('PagFinA', 'pagFin_search_format_KO');
            return 'pagFin_search_format_KO';
        }
        this.dom.mostrar_exito_campo('PagFinA');
        return true;
    }


    SEARCH_FechaPublicacionR_validation() {
        const value = document.getElementById('FechaPublicacionR').value;
        //  Solo validar si tiene valor y contiene caracteres no permitidos
        if (value && value !== '' && !/^[0-9-]*$/.test(value)) {
            this.dom.mostrar_error_campo('FechaPublicacionR', 'fecha_search_format_KO');
            return 'fecha_search_format_KO';
        }
        this.dom.mostrar_exito_campo('FechaPublicacionR');
        return true;
    }

    //  validación de búsqueda de estado
    SEARCH_EstadoA_validation() {
        const selectElement = document.getElementById('EstadoA');
        if (!selectElement) {
            this.dom.mostrar_exito_campo('EstadoA');
            return true;
        }

        const value = selectElement.value;

        // Para búsqueda, campo vacío siempre es válido
        if (value === null || value === undefined || value === '') {
            this.dom.mostrar_exito_campo('EstadoA');
            return true;
        }

        //  Si tiene valor, validar que sea uno permitido
        const valoresPermitidos = ['Enviado', 'Revision', 'Publicado'];
        if (!valoresPermitidos.includes(value)) {
            this.dom.mostrar_error_campo('EstadoA', 'estado_search_format_KO');
            return 'estado_search_format_KO';
        }

        this.dom.mostrar_exito_campo('EstadoA');
        return true;
    }

    SEARCH_FicheropdfA_validation() {
        const value = document.getElementById('FicheropdfA').value;
        if (value && !this.validations.format('FicheropdfA', '^[a-zA-Z0-9_\\-\\.]*$')) {
            this.dom.mostrar_error_campo('FicheropdfA', 'ficheropdf_search_format_KO');
            return 'ficheropdf_search_format_KO';
        }
        this.dom.mostrar_exito_campo('FicheropdfA');
        return true;
    }
    SEARCH_nuevo_FicheropdfA_validation() {
        // Para SEARCH, el campo file siempre es válido (no se usa en búsqueda)
        console.log('Validación SEARCH nuevo_FicheropdfA: SIEMPRE VÁLIDO');
        return true;
    }

    SEARCH_submit_articulo() {
        const validations = [
            this.SEARCH_CodigoA_validation(),
            this.SEARCH_AutoresA_validation(),
            this.SEARCH_TituloA_validation(),
            this.SEARCH_TituloR_validation(),
            this.SEARCH_ISSN_validation(),
            this.SEARCH_VolumenR_validation(),
            this.SEARCH_PagIniA_validation(),
            this.SEARCH_PagFinA_validation(),
            this.SEARCH_FechaPublicacionR_validation(),
            this.SEARCH_EstadoA_validation(),
            this.SEARCH_FicheropdfA_validation()
        ];

        if (validations.every(v => v === true)) {
            this.SEARCH();
            return true;
        }
        return false;
    }

    mostrarcambioatributo(clave, valor) {
        if (clave === 'FicheropdfA' && valor) {
            return `<a href="http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/${valor}" target="_blank"><img src="./iconos/FILE.png" alt="Ver PDF" title="Ver PDF"></a>`;
        }
        return valor;
    }
}