class Validations {

	constructor() {

	}

	//min_size()
	//@param id Id objeto dom
	//@param minsize tamaño minimo a validar

	min_size(id, minsize) {
		let elemento = document.getElementById(id);
		if (!elemento) return false;

		switch (elemento.tagName) {
			case 'INPUT':
				if (elemento.type === 'file') {
					if (elemento.files.length === 0) return false; // Or true depending on if empty is allowed (handled by not_empty usually)
					return elemento.files[0].size >= minsize;
				}
				switch (elemento.type) {
					case 'number':
					case 'email':
					case 'text':
					case 'password':
						let valorelemento = elemento.value;
						return valorelemento.length >= minsize;
					default:
						// Handle other inputs or fallback
						return elemento.value.length >= minsize;

				}
				break;
			case 'SELECT':
				// For select, maybe check if value is selected or length of value?
				return elemento.value.length >= minsize;
			case 'TEXTAREA':
				return elemento.value.length >= minsize;
			default:
				return true;
		}
	}

	max_size(id, maxsize) {
		let elemento = document.getElementById(id);
		if (!elemento) return false;

		switch (elemento.tagName) {
			case 'INPUT':
				if (elemento.type === 'file') {
					if (elemento.files.length === 0) return true;
					return elemento.files[0].size <= maxsize;
				}
				return elemento.value.length <= maxsize;
			case 'TEXTAREA':
				return elemento.value.length <= maxsize;
			default:
				return true;
		}

	}

	/**
	@param {string} id of html element
	@param {string} regular expression to testing id html element value
	@return {bool} result of regular expression testing  
	*/
	format(id, exprreg) {
		let elemento = document.getElementById(id);
		let expresionregular = new RegExp(exprreg);

		if (elemento.tagName === 'INPUT' && elemento.type === 'file') {
			if (elemento.files.length === 0) return true;
			return expresionregular.test(elemento.files[0].name);
		}

		let valor = elemento.value;
		return expresionregular.test(valor);
	}

	/**
	 * 
	 */
	not_exist_file(id) {
		let objfile = document.getElementById(id);
		if (objfile.files.length == 0) {
			return false;
		}
		return true;
	}

	type_file(id, array_tipos) {
		let objfile = document.getElementById(id);
		if (objfile.files.length === 0) return true;
		if (!(array_tipos.includes(objfile.files[0].type))) {
			return false;
		}
		return true;
	}

	/**
	 * Validates if the input value is a valid date in DD/MM/YYYY format
	 * @param {string} id - Id of the html element
	 * @returns {boolean} - True if valid date, false otherwise
	 */
	date_format(id) {
		let valor = document.getElementById(id).value;
		// Simple regex for DD/MM/YYYY
		let date_regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/;
		if (!date_regex.test(valor)) {
			return false;
		}
		return true;
	}

}