class alumnograduacion extends constructorentidad
{
    constructor(estructura)
    {
        super(estructura);
    }

	mostrarcambioatributo(atributo, valor)
	{
		switch(atributo)
		{
			default:
				break;
		}

		return valor;
	}

    /*============================================================*/
    /*  VALIDACIONES PERSONALIZADAS                               */
    /*============================================================*/

    specialized_test_alumnograduacion_titulacion()
    {
        let values = Array('GREI','GRIA','MEI','MIA','PCEO');
		if(!(values.includes(document.getElementById('alumnograduacion_titulacion').value)))
		{
			//this.dom.mostrar_error_campo('alumnograduacion_titulacion','alumnograduacion_titulacion_validate_KO');
			return "alumnograduacion_titulacion_validate_KO";
		}
		//this.dom.mostrar_exito_campo('alumnograduacion_titulacion');
		return true;
    }

    specialized_test_alumnograduacion_dni()
    {
        var resp = this.personalize_alumnograduacion_dni_nie();
		console.log(resp);
		if(!(resp === true))
		{
			//this.dom.mostrar_error_campo('alumnograduacion_dni',resp);
			return resp;
		}
		//this.dom.mostrar_exito_campo('alumnograduacion_dni');
		return true;
    }

    personalize_alumnograduacion_dni_nie()
	{		
		var alumnograduacion_dni = document.getElementById('alumnograduacion_dni').value;
		if (this.personalize_alumnograduacion_dni_format() == true)
		{
			if(!(this.personalize_validate_alumnograduacion_dni(alumnograduacion_dni)))
			{
				return "alumnograduacion_dni_nie_validate_KO";
			}
		}
		else
		{
			if(this.personalize_nie_format() === true)
			{
					if(!(this.personalize_validate_nie(alumnograduacion_dni)))
					{
						return "alumnograduacion_nie_validate_KO";
					}
			}
			else
			{
				return "alumnograduacion_dni_format_KO";
			}
		}

		return true;
	}
	
	personalize_alumnograduacion_dni_format()
	{		
		if (!(this.validations.format('alumnograduacion_dni', '[0-9]{8}[A-Z]')))
		{
			this.dom.mostrar_error_campo('alumnograduacion_dni','dni_format_KO');
			return "alumnograduacion_dni_format_KO";
		}
		return true;
	}

	personalize_nie_format()
	{
		if (!(this.validations.format('alumnograduacion_dni', '[XYZ][0-9]{7}[A-Z]')))
		{
			this.dom.mostrar_error_campo('alumnograduacion_dni','nie_format_KO');
			return "alumnograduacion_nie_format_KO";
		}
		return true;
	}
	personalize_validate_alumnograduacion_dni(alumnograduacion_dni)
	{		
		var alumnograduacion_dni_letters = "TRWAGMYFPDXBNJZSQVHLCKE";
    	var letter = alumnograduacion_dni_letters.charAt( parseInt( alumnograduacion_dni, 10 ) % 23 );
		
    	return letter == alumnograduacion_dni.charAt(8);
	}

	personalize_validate_nie(nie)
	{		
		var nie_prefix = nie.charAt( 0 );

		switch (nie_prefix)
		{
			case 'X': nie_prefix = 0; break;
			case 'Y': nie_prefix = 1; break;
			case 'Z': nie_prefix = 2; break;
		}

		return this.personalize_validate_alumnograduacion_dni( nie_prefix + nie.substr(1) );
	}
}