class Validations{

	constructor(){
		
	}
	
	//min_size()
	//@param id Id objeto dom
	//@param minsize tamaño minimo a validar
	
	min_size(id, minsize){
		let elemento = document.getElementById(id);
		switch (elemento.tagName){
			case 'INPUT':
				switch (elemento.type){
					case 'number':
					case 'password':
					case 'email':
					case 'text':
						let valorelemento = elemento.value;
						if (valorelemento.length<minsize){
							return false;
						}
						else{
							return true;
						}
						break;
					case 'file':
						break;
					default:
						break;
				
				}
				break;
			case 'TEXTAREA':
				return elemento.value.length < minsize ? false : true;
				break;
			case 'SELECT':
				break;
			default:
				break;
		}

	}

	//max_size()
	//@param id Id objeto dom
	//@param minsize tamaño maximo a validar
	
	max_size(id, maxsize){
		let elemento = document.getElementById(id);
		switch (elemento.tagName){
			case 'INPUT':
				switch (elemento.type){
					case 'number':
					case 'password':
					case 'email':
					case 'text':
						let valorelemento = elemento.value;
						if (valorelemento.length>maxsize){
							return false;
						}
						else{
							return true;
						}
						break;
					case 'file':
						break;
					default:
						break;
				
				}
				break;
			case 'TEXTAREA':
				return elemento.value.length > maxsize ? false : true;
				break;
			case 'SELECT':
				break;
			default:
				break;
		}

	}

	/**
	@param {string} id of html element
	@param {string} regular expression to testing id html element value
	@return {bool} result of regular expression testing  
	*/
	format(id, exprreg){
		let expresionregular = new RegExp(exprreg);
		let valor = document.getElementById(id).value;
		return expresionregular.test(valor);
	}

	/**
	 * 
	 */
	not_exist_file(id){
		let objfile = document.getElementById(id);
		if (objfile.files.length == 0){
			return false;
		}
		return true;
	}
	/**
	@param {string} id of html file element
	@param {number} maxsize max size allowed for fiel
	@return {bool} result of size comparison
	*/
	max_size_file(id, maxsize){
		let objfile = document.getElementById(id);
		if (objfile.files[0].size>maxsize){
			return false;
		}
		return true;
	}

	type_file(id, array_tipos){
		let objfile = document.getElementById(id);
		if (!(array_tipos.includes(objfile.files[0].type))){
			return false;
		}
		return true;
	}

	format_name_file(id, exprreg){
		let objfile = document.getElementById(id);
		let expresionregular = new RegExp(exprreg);
		let valor = objfile.files[0].name;
		return expresionregular.test(valor);
	}

	validate_date(id)
	{
		var date = document.getElementById(id).value;
		var elementos = date.split('/');

		if(elementos[1] < 1 || elementos[1] > 12)
		{
			return id+"_month_validate_KO";
		}

		if(elementos[0] < 1)
		{
			return id+"_day_validate_KO";
		}

		if(Array('04','06','09','11').includes(elementos[1]) && elementos[0] > 30)
		{
			return id+"_day_validate_KO";
		}

		if(elementos[1] == 2)
		{
			if(elementos[2] % 4 == 0 && elementos[0] > 29)
			{
				return id+"_day_validate_KO";
			}
			if(elementos[2] % 4 != 0 && elementos[0] > 28)
			{
				return id+"_day_validate_KO";
			}
		}

		if(elementos[0] > 31)
		{
			return id+"_day_validate_KO";
		}

		return true;
	}
}