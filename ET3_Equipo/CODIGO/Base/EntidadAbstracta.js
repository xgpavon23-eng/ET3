class EntidadAbstracta {

	constructor(estructura) {

		this.estructura = estructura;
		this.dom = new dom();
		this.validations = new Validations();
		this.access_functions = new ExternalAccess();
		this.nombreentidad = estructura.entity;

		// Visualizar seccion y configurar titulo
		document.getElementById('text_title_page').className = 'text_titulo_page_' + this.nombreentidad;

		this.dom.show_element('IU_manage_entity', 'block');

		// invocar busqueda en back con el formulario vacio
		this.SEARCH();

		// columnas a mostrar (todas por defecto)
		this.columnasamostrar = Object.keys(this.estructura.attributes);
		this.atributos = Object.keys(this.estructura.attributes);
		this.mostrarespecial = [];
	}

	createForm_ADD() {
		if (eval(this.cargar_formulario_dinamico)) {
			this.cargar_formulario_dinamico('ADD');
			this.dom.show_element('Div_IU_form', 'block');
		}
	}

	createForm_SEARCH() {
		if (eval(this.cargar_formulario_dinamico)) {
			this.cargar_formulario_dinamico('SEARCH');
			this.dom.show_element('Div_IU_form', 'block');
		}
	}

	createForm_EDIT(datos) {
		if (eval(this.cargar_formulario_dinamico)) {
			this.cargar_formulario_dinamico('EDIT', datos);
			this.dom.show_element('Div_IU_form', 'block');
		}
	}

	createForm_DELETE(datos) {
		if (eval(this.cargar_formulario_dinamico)) {
			this.cargar_formulario_dinamico('DELETE', datos);
			this.dom.show_element('Div_IU_form', 'block');
		}
	}

	createForm_SHOWCURRENT(datos) {
		if (eval(this.cargar_formulario_dinamico)) {
			this.cargar_formulario_dinamico('SHOWCURRENT', datos);
			this.dom.show_element('Div_IU_form', 'block');
		}
	}

	/**
	 * Genera el formulario dinámicamente basado en la estructura y la acción
	 */
	cargar_formulario_dinamico(accion, datos_tupla = null) {

		let html_form = '<form id="form_iu" name="form_iu" onsubmit="return false;">';

		for (const [key, attribute] of Object.entries(this.estructura.attributes)) {

			let tag = attribute.html.tag;
			let type = attribute.html.type;
			let label_key = this.nombreentidad + '_' + key;

			let value = '';
			if (datos_tupla && datos_tupla[key] !== undefined) {
				value = datos_tupla[key];
			}
			if (accion === 'ADD' && attribute.default_value && !value) {
				value = attribute.default_value;
			}

			let readonly = '';
			let disabled = '';

			if (accion === 'DELETE' || accion === 'SHOWCURRENT') {
				readonly = 'readonly';
				disabled = 'disabled';
			}
			if (accion === 'EDIT' && (attribute.is_pk || attribute.is_file_ref)) {
				readonly = 'readonly';
			}

			// Visibility Logic
			let shouldShowInput = true;
			let shouldShowLink = false;
			let isFileRef = attribute.is_file_ref === true;
			let isUploadField = (tag === 'input' && type === 'file');

			if (isUploadField) {
				// Upload field: Show only in ADD/EDIT
				if (accion === 'SEARCH' || accion === 'DELETE' || accion === 'SHOWCURRENT') {
					shouldShowInput = false;
				}
			} else if (isFileRef) {
				// File Reference field:
				// ADD: Hide
				// EDIT: Show input (readonly), show link
				// SEARCH: Show input
				// DELETE/SHOW: Show input, show link
				if (accion === 'ADD') {
					shouldShowInput = false;
				} else if (accion === 'EDIT') {
					shouldShowInput = true;
					shouldShowLink = true;
				} else if (accion === 'DELETE' || accion === 'SHOWCURRENT') {
					shouldShowInput = true;
					shouldShowLink = true;
				}
			}

			// Render Field Block if either Input or Link is shown
			if (shouldShowInput || shouldShowLink) {
				html_form += `<div class="div_campo">`;

				// Label (only if input is shown, or maybe if link is shown? Usually label is needed context)
				// Requirement said "fields are hidden correctly the labels are not".
				// If we show ONLY link, we probably still want the label to know what the file is?
				// "Current File: [Icon]"
				html_form += `<label class="label_form" for="${key}" id="label_${label_key}"></label>`;

				if (shouldShowInput) {
					if (tag === 'input') {
						html_form += `<input type="${type}" id="${key}" name="${key}" value="${value}" ${readonly} class="input_form"`;
						if (accion !== 'DELETE' && accion !== 'SHOWCURRENT') {
							html_form += ` onblur="entidad.validar('${key}', '${accion}')"`;
						}
						html_form += `>`;
					} else if (tag === 'select') {
						html_form += `<select id="${key}" name="${key}" ${disabled} class="select_form"`;
						if (accion !== 'DELETE' && accion !== 'SHOWCURRENT') {
							html_form += ` onblur="entidad.validar('${key}', '${accion}')"`;
						}
						html_form += `>`;
						if (attribute.html.options) {
							attribute.html.options.forEach(opt => {
								let selected = (value == opt) ? 'selected' : '';
								html_form += `<option value="${opt}" ${selected}>${opt}</option>`;
							});
						}
						html_form += `</select>`;
					} else if (tag === 'textarea') {
						html_form += `<textarea id="${key}" name="${key}" rows="${attribute.html.rows}" columns="${attribute.html.columns}" ${readonly} class="textarea_form"`;
						if (accion !== 'DELETE' && accion !== 'SHOWCURRENT') {
							html_form += ` onblur="entidad.validar('${key}', '${accion}')"`;
						}
						html_form += `>${value}</textarea>`;
					} else if (tag === 'radio') {
						html_form += `<input type="hidden" id="${key}" name="${key}" value="${value}">`;
						if (attribute.html.options) {
							attribute.html.options.forEach((opt, index) => {
								let checked = (value == opt) ? 'checked' : '';
								let disabled_attr = (disabled || readonly) ? 'disabled' : '';
								let onclick = (accion !== 'DELETE' && accion !== 'SHOWCURRENT') ?
									`onclick="document.getElementById('${key}').value = this.value; entidad.validar('${key}', '${accion}')"` : '';
								html_form += `<label style="display:inline-block; margin-right:10px;">`;
								html_form += `<input type="radio" name="${key}_group" value="${opt}" ${checked} ${disabled_attr} ${onclick}> ${opt}`;
								html_form += `</label>`;
							});
						}
					} else if (tag === 'checkbox') {
						html_form += `<input type="hidden" id="${key}" name="${key}" value="${value}">`;
						let disabled_attr = (disabled || readonly) ? 'disabled' : '';
						if (attribute.html.options) {
							let currentValues = value ? value.split(',') : [];
							attribute.html.options.forEach((opt, index) => {
								let checked = currentValues.includes(opt) ? 'checked' : '';
								let onclick = (accion !== 'DELETE' && accion !== 'SHOWCURRENT') ?
									`onclick="entidad.updateCheckboxMultiple('${key}')"` : '';
								html_form += `<label style="display:inline-block; margin-right:10px;">`;
								html_form += `<input type="checkbox" name="${key}_group" value="${opt}" ${checked} ${disabled_attr} ${onclick} class="checkbox_${key}"> ${opt}`;
								html_form += `</label>`;
							});
						} else {
							let checked = (value === 'true' || value === true || value === 'on') ? 'checked' : '';
							let onclick = (accion !== 'DELETE' && accion !== 'SHOWCURRENT') ?
								`onclick="document.getElementById('${key}').value = this.checked; entidad.validar('${key}', '${accion}')"` : '';
							html_form += `<input type="checkbox" name="${key}_simple" ${checked} ${disabled_attr} ${onclick}>`;
						}
					}
				}

				// Generate Link if needed
				if (shouldShowLink && value) {
					// Use centralized URL generator with explicit path from structure
					// If no path provided, we can't generate a valid link easily, or we default to previous logic?
					// User said "path is provided". We'll assume attribute.file_server_path exists.
					if (attribute.file_server_path) {
						let fileUrl = this.access_functions.getFileURL(attribute.file_server_path, value);
						html_form += ` <a href="${fileUrl}" target="_blank" class="file_link"><img src="./iconos/FILE.png" style="width:20px; vertical-align:middle;" alt="Ver archivo"></a>`;
					}
				}

				html_form += `<span id="span_error_${key}" style="display:none"> <span id="error_${key}"></span> </span>`;
				html_form += `</div>`;
				html_form += `<br>`;
			}

		}

		// Botonera
		html_form += `<div id="div_botones_form">`;
		if (accion === 'ADD') {
			html_form += `<img src="./iconos/ADD.png" onclick="entidad.ADD();">`;
		} else if (accion === 'EDIT') {
			html_form += `<img src="./iconos/EDIT.png" onclick="entidad.EDIT();">`;
		} else if (accion === 'DELETE') {
			html_form += `<img src="./iconos/DELETE.png" onclick="entidad.DELETE();">`;
		} else if (accion === 'SEARCH') {
			html_form += `<img src="./iconos/SEARCH.png" onclick="entidad.SEARCH();">`;
		}
		html_form += `</div>`;

		html_form += `</form>`;

		document.getElementById('contenedor_IU_form').innerHTML = html_form;

		setLang();
	}

	validar(atributo, accion) {
		// En SEARCH a veces las validaciones son distintas o mas laxas, pero usaremos las definidas
		if (!this.estructura.attributes[atributo].rules) return true;

		let rules = this.estructura.attributes[atributo].rules.validations[accion];
		if (!rules) return true;

		for (const [rule, value] of Object.entries(rules)) {
			if (!document.getElementById(atributo)) return true; // Fix validation error on init
			let valid = true;
			switch (rule) {
				case 'min_size':
					valid = this.validations.min_size(atributo, value);
					break;
				case 'max_size':
					valid = this.validations.max_size(atributo, value);
					break;
				case 'exp_reg':
					valid = this.validations.format(atributo, value);
					break;
				case 'no_file':
					valid = this.validations.not_exist_file(atributo);
					break;
				case 'max_size_file':
					valid = this.validations.max_size(atributo, value);
					break;
				case 'format_name_file':
					valid = this.validations.format(atributo, value);
					break;
				case 'type_file':
					valid = this.validations.type_file(atributo, value);
					break;
				case 'date_format':
					valid = this.validations.date_format(atributo);
					break;
				// ... add other rules as needed
			}

			if (!valid) {
				// Pass raw rule name for dynamic error handling
				this.dom.mostrar_error_campo(atributo, rule, value);
				return false;
			}
		}
		this.dom.mostrar_exito_campo(atributo);
		return true;
	}

	validar_formulario(accion) {
		let valid = true;
		// Validar solo campos visibles/editables según accion
		// Simplificación: iterar atributos. Si es ADD/EDIT, validar todos.
		// Ojo: en SEARCH a veces no se validan todos obligatoriamente, pero segun requisitos "validacion a nivel de submit".

		for (let key of Object.keys(this.estructura.attributes)) {
			// Skip if readonly/disabled?
			if (accion === 'ADD' || accion === 'EDIT') {
				// En edit primary key suele ser readonly, quizas saltar validacion si no cambia?
				// Pero validation rules deberian estar ok.
				if (!this.validar(key, accion)) valid = false;
			}
			if (accion === 'SEARCH') {
				// En search a veces se permite vacio, depende de rules.validations.SEARCH
				if (this.estructura.attributes[key].rules.validations['SEARCH']) {
					if (!this.validar(key, accion)) valid = false;
				}
			}
		}
		return valid;
	}

	async SEARCH() {
		// Validation for search if needed
		if (!this.validar_formulario('SEARCH')) return;

		await this.access_functions.peticionBackGeneral('form_iu', this.nombreentidad, 'SEARCH')
			.then((respuesta) => {
				document.getElementById('contenedor_IU_form').innerHTML = '';
				this.dom.hide_element('Div_IU_form');

				if (respuesta['code'] == 'RECORDSET_DATOS') {
					this.datos = respuesta['resource'];
					this.dom.remove_class_value('IU_manage_table', 'RECORDSET_');
					this.crearTablaDatos(this.datos, this.mostrarespecial);
				}
				else {
					this.dom.assign_property_value('IU_manage_table', 'style.display', 'block');
					this.dom.remove_class_value('IU_manage_table', 'RECORDSET_');
					this.dom.assign_class_value('IU_manage_table', 'RECORDSET_VACIO');
				}
				setLang();
			});
	}

	transformar_fechas_backend() {
		// Convertir fechas YYYY-MM-DD a DD/MM/YYYY antes de enviar al back
		const inputs = document.querySelectorAll('#form_iu input');
		inputs.forEach(input => {
			if (/^\d{4}-\d{2}-\d{2}$/.test(input.value)) {
				let parts = input.value.split('-');
				input.value = `${parts[2]}/${parts[1]}/${parts[0]}`;
			}
		});
	}

	async EDIT() {
		if (!this.validar_formulario('EDIT')) return;

		this.transformar_fechas_backend();

		await this.access_functions.peticionBackGeneral('form_iu', this.nombreentidad, 'EDIT')
			.then((respuesta) => {
				if (respuesta['ok']) {
					document.getElementById('contenedor_IU_form').innerHTML = '';
					this.dom.hide_element("Div_IU_form");
					this.SEARCH();
				}
				else {
					this.dom.abrirModalError(respuesta['code']);
				}
			});
	}

	async ADD() {
		if (!this.validar_formulario('ADD')) return;

		this.transformar_fechas_backend();

		await this.access_functions.peticionBackGeneral('form_iu', this.nombreentidad, 'ADD')
			.then((respuesta) => {
				if (respuesta['ok']) {
					document.getElementById('contenedor_IU_form').innerHTML = '';
					this.dom.hide_element("Div_IU_form");
					this.SEARCH();
				}
				else {
					this.dom.abrirModalError(respuesta['code']);
				}
			});
	}

	async DELETE() {
		await this.access_functions.peticionBackGeneral('form_iu', this.nombreentidad, 'DELETE')
			.then((respuesta) => {
				if (respuesta['ok']) {
					document.getElementById('contenedor_IU_form').innerHTML = '';
					this.dom.hide_element("Div_IU_form");
					this.SEARCH();
				}
				else {
					this.dom.abrirModalError(respuesta['code']);
				}
			});
	}

	crearTablaDatos(datos, mostrarespeciales) {
		var misdatos = datos;
		for (var i = 0; i < misdatos.length; i++) {
			var linedit = `<img id='botonEDIT' src='./iconos/EDIT.png' onclick='entidad.createForm_EDIT(` + JSON.stringify(misdatos[i]) + `);'>`;
			var lindelete = `<img id='botonDELETE' src='./iconos/DELETE.png' onclick='entidad.createForm_DELETE(` + JSON.stringify(misdatos[i]) + `);'>`;
			var linshowcurrent = `<img id='botonSHOWCURRENT' src='./iconos/SHOWCURRENT.png' onclick='entidad.createForm_SHOWCURRENT(` + JSON.stringify(misdatos[i]) + `);'>`;
			misdatos[i]['EDIT'] = linedit;
			misdatos[i]['DELETE'] = lindelete;
			misdatos[i]['SHOWCURRENT'] = linshowcurrent;
		}

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
		this.dom.showData('IU_manage_table', misdatos);
		this.mostrarocultarcolumnas();
		this.dom.crearSeleccionablecolumnas(this.columnasamostrar, this.atributos);
	}

	mostrarocultarcolumnas() {
		var estadodisplay = '';
		for (let columna of this.atributos) {
			if (this.columnasamostrar.includes(columna)) {
				estadodisplay = '';
			} else {
				estadodisplay = 'none';
			}
			let th = document.querySelector("th[class~='tabla-th-" + columna + "']");
			if (th) th.style.display = estadodisplay;
			let arraytds = document.querySelectorAll("td[class='tabla-td-" + columna + "']");
			for (let i = 0; i < arraytds.length; i++) {
				arraytds[i].style.display = estadodisplay;
			}
		}
	}

	modificarcolumnasamostrar(atributo) {
		if (this.columnasamostrar.includes(atributo)) {
			this.columnasamostrar = this.columnasamostrar.filter(columna => columna != atributo);
		} else {
			this.columnasamostrar.push(atributo);
		}
		this.mostrarocultarcolumnas();
		this.dom.crearSeleccionablecolumnas(this.columnasamostrar, this.atributos);
	}

	mostrarcambioatributo(clave, valor) {
		return valor;
	}

	updateCheckboxMultiple(key) {
		let checkboxes = document.querySelectorAll(`.checkbox_${key}:checked`);
		let values = Array.from(checkboxes).map(cb => cb.value);
		document.getElementById(key).value = values.join(',');
		this.validar(key, 'ADD'); // Re-validate (assuming ADD/EDIT generic validation)
	}

}