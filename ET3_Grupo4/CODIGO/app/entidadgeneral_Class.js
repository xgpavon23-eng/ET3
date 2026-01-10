class entidadgeneral extends constructorentidad
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

        try
		{
			if(this.estructura_entidad["attributes"][atributo]["rules"]["validations"]["ADD"]["exp_reg"] == '^([0-9]{2}/){2}[0-9]{4}$')
        	{
	        	var elementos = valor.split('-');

				var day = elementos[2];
				var month = elementos[1];
				var year = elementos[0];

				return day+'/'+month+'/'+year;
        	}
		}
		catch{}

		return valor;
	}
}