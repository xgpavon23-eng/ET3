class EntidadAbstracta {

    //Modificado para la ET3
    constructor(esTest, nombreEntidad) {
        this.dom = new dom();
        this.validations = new Validations();
        this.access_functions = new ExternalAccess();

        if (nombreEntidad) {
            this.nombreentidad = nombreEntidad;
        } else {
            this.nombreentidad = this.constructor.name;
        }

        // Inicializar arrays vacíos por defecto
        this.columnasamostrar = [];
        this.atributos = [];
        this.mostrarespecial = [];
        this.datos = [];

        // si se instancia para test no se muestra el componente de gestion de entidad ni se inicializa el formulario
        if (esTest == 'test') {
            // para test
        } else {
            // Visualizar sección tabla y botones
            document.getElementById('text_title_page').classList.add('text_titulo_page_' + this.nombreentidad);
            this.dom.show_element('IU_manage_entity', 'block');

            // Invocar búsqueda en back con el formulario vacío
            this.SEARCH();
        }
    }



    /**
     * metodo a utilizar cuando se implementen generacion dinamica de formulario en vez de la manual
     */
    cargar_formulario() {

        if (eval(this.manual_form_creation)) {
            fillform(this.manual_form_creation(), 'form_iu');
        }
        else {
            if (eval(this.cargar_formulario_dinamico)) {
                fillform(this.cargar_formulario_dinamico(), 'form_iu');
            }
            else {
                alert('no existe formulario');
            }
        }

    }

    /**
     * el método realiza una petición de search al back pudiendo enviar un formulario con datos, enviando 
     * el nombre de la entidad del back y la acción a realizar sobre la misma.
     * los datos respondidos se usan para indicar o bien que no hay datos o mostrandolos en una tabla.
     */

    transformar_fechas_backend() {
        // Convertir fechas YYYY-MM-DD a DD/MM/YYYY antes de enviar al back
        const inputs = document.querySelectorAll('#form_iu input');
        inputs.forEach(input => {
            // Check if value matches YYYY-MM-DD
            if (input.value && /^\d{4}-\d{2}-\d{2}$/.test(input.value)) {
                let parts = input.value.split('-');

                // Force input type to text to accept any format
                if (input.type === 'date') {
                    input.type = 'text';
                    input.setAttribute('type', 'text');
                }

                let newValue = `${parts[2]}/${parts[1]}/${parts[0]}`;
                input.value = newValue;
                input.setAttribute('value', newValue);
            }
        });
    }

    //Modificado para ET3
    async SEARCH() {
        await this.access_functions.peticionBackGeneral('form_iu', this.nombreentidad, 'SEARCH')
            .then((respuesta) => {

                // Solo limpiar formulario si existe manual_form_creation
                if (typeof this.manual_form_creation === 'function') {
                    document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
                }

                this.dom.hide_element('Div_IU_form');

                if (respuesta['code'] == 'RECORDSET_DATOS') {
                    this.datos = respuesta['resource'];

                    // Obtener atributos del primer registro si existe
                    if (this.datos && this.datos.length > 0) {
                        this.atributos = Object.keys(this.datos[0]);

                        // Si columnasamostrar no está definido, inicializarlo con todos los atributos
                        if (!this.columnasamostrar || this.columnasamostrar.length === 0) {
                            this.columnasamostrar = [...this.atributos];
                        }
                    }

                    this.dom.remove_class_value('IU_manage_table', 'RECORDSET_');
                    // Crear la tabla de datos de la entidad del back
                    this.crearTablaDatos(this.datos, this.mostrarespecial);

                    // Actualizar selección de columnas
                    if (this.datos && this.datos.length > 0) {
                        this.dom.crearSeleccionablecolumnas(this.columnasamostrar, this.atributos);
                    }
                }
                else {
                    this.dom.assign_property_value('IU_manage_table', 'style.display', 'block');
                    this.dom.remove_class_value('IU_manage_table', 'RECORDSET_');
                    this.dom.assign_class_value('IU_manage_table', 'RECORDSET_VACIO');
                    document.getElementById('IU_manage_table').innerHTML =
                        'No se han encontrado elementos que coincidan con la búsqueda';
                }

                setLang();

            }).catch(error => {
                console.error('Error en SEARCH:', error);
                this.dom.abrirModalError('Error al buscar datos: ' + error.message);
            });
    }


    /**
     * el método realiza una petición de ADD al back enviando un formulario con datos, enviando 
     * el nombre de la entidad del back y la acción a realizar sobre la misma.
     * los datos respondidos se usan para indicar si se realizo la accion con lo mostramos la
     * tabla de datos o bien se muestra el error proporcionado por el back
     */
    async EDIT() {

        this.transformar_fechas_backend();
        await this.access_functions.peticionBackGeneral('form_iu', this.nombreentidad, 'EDIT')
            .then((respuesta) => {


                if (respuesta['ok']) {

                    //limpiar el formulario
                    document.getElementById('contenedor_IU_form').innerHTML = '';

                    //poner el div del formulario no visible
                    //limpiar titulo formulario

                    this.dom.hide_element("Div_IU_form");

                    this.SEARCH();

                }
                else {

                    // mostrar mensaje error accion
                    // alert('error : '+respuesta['code']);

                    // Usando modal
                    this.dom.abrirModalError(respuesta['code']);
                }

                //setLang();

            });

    }

    /**
     * el método realiza una petición de ADD al back enviando un formulario con datos, enviando 
     * el nombre de la entidad del back y la acción a realizar sobre la misma.
     * los datos respondidos se usan para indicar si se realizo la accion con lo mostramos la
     * tabla de datos o bien se muestra el error proporcionado por el back
     */
    async ADD() {

        this.transformar_fechas_backend();
        await this.access_functions.peticionBackGeneral('form_iu', this.nombreentidad, 'ADD')
            .then((respuesta) => {

                if (respuesta['ok']) {

                    //limpiar el formulario
                    document.getElementById('contenedor_IU_form').innerHTML = '';

                    //poner el div del formulario no visible
                    //limpiar titulo formulario

                    this.dom.hide_element("Div_IU_form");

                    this.SEARCH();

                }
                else {

                    // mostrar mensaje error accion
                    // alert('error : '+respuesta['code']);

                    // Usando modal
                    this.dom.abrirModalError(respuesta['code']);
                }

                //setLang();

            });

    }


    /**
     * el método realiza una petición de ADD al back enviando un formulario con datos, enviando 
     * el nombre de la entidad del back y la acción a realizar sobre la misma.
     * los datos respondidos se usan para indicar si se realizo la accion con lo mostramos la
     * tabla de datos o bien se muestra el error proporcionado por el back
     */
    async DELETE() {

        await this.access_functions.peticionBackGeneral('form_iu', this.nombreentidad, 'DELETE')
            .then((respuesta) => {

                if (respuesta['ok']) {

                    //limpiar el formulario
                    document.getElementById('contenedor_IU_form').innerHTML = '';

                    //poner el div del formulario no visible
                    //limpiar titulo formulario

                    this.dom.hide_element("Div_IU_form");

                    this.SEARCH();

                }
                else {

                    // mostrar mensaje error accion
                    // alert('error : '+respuesta['code']);

                    // Usando modal
                    this.dom.abrirModalError(respuesta['code']);
                }

                //setLang();

            });

    }


    /**
     * Recibe la información a mostrar en columnas y el array de columnas a las cuales se modificara su contenido para mostrarsele al usuario
     * Se le incluyen tres columnas mas a cada fila para poder tener un icono con la accion a realizar para esa fila y se le coloca un evento onclick
     * para poder llamar a los metodos createForm_accion pasando como parametros de esos metodos la información de la fila de datos
     * 
     * @param {Objeto} datos 
     * @param {Array} mostrarespecial 
     */
    crearTablaDatos(datos, mostrarespeciales) {

        var misdatos = datos;

        // proceso los datos de la tabla para incluir en cada fila los tres botones conectados a createForm_ACCION()
        for (var i = 0; i < misdatos.length; i++) {

            var linedit = `<img id='botonEDIT' src='./iconos/EDIT.png' onclick='entidad.createForm_EDIT(` + JSON.stringify(misdatos[i]) + `);'>`;
            var lindelete = `<img id='botonDELETE' src='./iconos/DELETE.png' onclick='entidad.createForm_DELETE(` + JSON.stringify(misdatos[i]) + `);'>`;
            var linshowcurrent = `<img id='botonSHOWCURRENT' src='./iconos/SHOWCURRENT.png' onclick='entidad.createForm_SHOWCURRENT(` + JSON.stringify(misdatos[i]) + `);'>`;
            misdatos[i]['EDIT'] = linedit;
            misdatos[i]['DELETE'] = lindelete;
            misdatos[i]['SHOWCURRENT'] = linshowcurrent;

        }

        /*
        recorrer todas las filas de datos y cada atributo para si tiene una funcion de transformación de valor modificarlo en el momento
        */

        if (mostrarespeciales.length > 0) {

            for (var i = 0; i < misdatos.length; i++) {
                for (var clave in misdatos[i]) {
                    for (var posicion in mostrarespeciales) {
                        if (clave == mostrarespeciales[posicion]) {
                            misdatos[i][clave] = this.mostrarcambioatributo(clave, misdatos[i][clave]);
                        }
                    }
                }
            }
        }
        //muestro datos en tabla
        this.dom.showData('IU_manage_table', misdatos);
        this.mostrarocultarcolumnas();
        this.dom.crearSeleccionablecolumnas(this.columnasamostrar, this.atributos);


    }

    /**
     * muestra o no las columnas de la tabla segun indique columnasamostrar
     */

    //Modificado para la ET3
    mostrarocultarcolumnas() {
        // Verificar si hay atributos y datos
        if (!this.atributos || this.atributos.length === 0) {
            console.warn('No hay atributos definidos para mostrar/ocultar');
            return;
        }

        var estadodisplay = '';

        // Recorrer todos los atributos de la tabla
        for (let columna of this.atributos) {
            const th = document.querySelector("th[class~='tabla-th-" + columna + "']");
            if (!th) {
                // Si no existe el th, intentar con clase exacta
                const thExacto = document.querySelector("th.tabla-th-" + columna);
                if (!thExacto) {
                    continue; // Saltar esta columna si no existe
                }
            }

            // Si el atributo está en columnas a mostrar 
            if (this.columnasamostrar && this.columnasamostrar.includes(columna)) {
                estadodisplay = '';
            } else {
                estadodisplay = 'none';
            }

            // Aplicar display al th
            const thElement = th || document.querySelector("th.tabla-th-" + columna);
            if (thElement) {
                thElement.style.display = estadodisplay;
            }

            // Aplicar display a todos los td de esta columna
            let arraytds = document.querySelectorAll("td[class='tabla-td-" + columna + "']");
            for (let i = 0; i < arraytds.length; i++) {
                arraytds[i].style.display = estadodisplay;
            }
        }
    }

    /**
     * Modifica el array de columnas a mostrar al hacer click sobre el atributo en el select poniendolo como oculto o como visible
     * @param {string} atributo 
     */

    //Modificado para la ET3
    modificarcolumnasamostrar(atributo) {
        // Asegurar que columnasamostrar existe
        if (!this.columnasamostrar) {
            this.columnasamostrar = [];
        }

        // Asegurar que atributos existe
        if (!this.atributos) {
            this.atributos = [];
        }

        if (this.columnasamostrar.includes(atributo)) {
            // Borrar ese atributo
            this.columnasamostrar = this.columnasamostrar.filter(columna => columna !== atributo);
        } else {
            // Añadir
            this.columnasamostrar.push(atributo);
        }

        this.mostrarocultarcolumnas();

        // Actualizar select solo si hay atributos
        if (this.atributos.length > 0) {
            this.dom.crearSeleccionablecolumnas(this.columnasamostrar, this.atributos);
        }
    }
}