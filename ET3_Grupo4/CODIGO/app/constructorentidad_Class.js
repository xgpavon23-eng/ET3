class constructorentidad extends EntidadAbstracta
{
    constructor(estructura)
    {
        super('test');

        this.estructura_entidad = estructura;
        this.nombreentidad = this.estructura_entidad["entity"];
        this.attributes = Object.keys(this.estructura_entidad["attributes"]);
        this.columnasamostrar = [this.attributes[0], this.attributes[1], this.attributes[2]];
        this.mostrarespecial = this.get_especiales();

        document.getElementById('text_title_page').classList.add('text_titulo_page_'+this.nombreentidad);
        document.getElementById('text_title_page').innerHTML = this.nombreentidad;
        this.dom.show_element('IU_manage_entity', 'block');

        this.SEARCH();
    }

    /*============================================================*/
    /*  CREACION DE FORMULARIOS                                   */
    /*============================================================*/

    cargar_formulario_dinamico()
    {
        var form_content = `<form id='form_iu' action="" method="POST" enctype="multipart/form-data" onsubmit="" class='formulario'><br>`;

        for(var atributo in this.estructura_entidad["attributes"])
        {
            form_content += this.agregar_campo(atributo);
        }

        form_content += '</form>';

        return form_content;
    }

    agregar_campo(atributo)
    {
        var field = '<label id="label_'+atributo+'" class="label_'+atributo+'">'+atributo+'</label>';

        switch(this.estructura_entidad["attributes"][atributo]["html"]["tag"])
        {
            case 'input':
                field += '<input type='+this.estructura_entidad["attributes"][atributo]["html"]["type"]+' id="'+atributo+
                    '" name="'+atributo+'" size="'+this.estructura_entidad["attributes"][atributo]["html"]["component_visible_size"]+'"></input>';
                break;

            case 'textarea':
                field += '<textarea rows='+this.estructura_entidad["attributes"][atributo]["html"]["rows"]+
                    ' cols='+this.estructura_entidad["attributes"][atributo]["html"]["columns"]+
                    ' type="text" id="'+atributo+'" name="'+atributo+'"></textarea>';
                break;

            case 'select':
                field += '<select id="'+atributo+'" name="'+atributo+'"';
                if(this.estructura_entidad["attributes"][atributo]["html"]["multiple"]) {field += ' multiple'};
                field += '>';

                for(var opcion in this.estructura_entidad["attributes"][atributo]["html"]["options"])
                {
                    field += '<option class="'+atributo+'_'+this.estructura_entidad["attributes"][atributo]["html"]["options"][opcion]+
                        '" value="'+this.estructura_entidad["attributes"][atributo]["html"]["options"][opcion]+'">'+
                        this.estructura_entidad["attributes"][atributo]["html"]["options"][opcion]+'</option>';
                }
                field += '</select>'
                break;

            case 'radio':
                for(var opcion in this.estructura_entidad["attributes"][atributo]["html"]["options"])
                {
                    field += '<div class="checkbox_group"><input type="radio" name="'+atributo+
                        '" value="'+this.estructura_entidad["attributes"][atributo]["html"]["options"][opcion]+
                        '" /><label id="label_'+this.estructura_entidad["attributes"][atributo]["html"]["options"][opcion]+
                        '" class="label_'+this.estructura_entidad["attributes"][atributo]["html"]["options"][opcion]+'">'+
                        this.estructura_entidad["attributes"][atributo]["html"]["options"][opcion]+'</label></div>';
                }
                break;

            case 'checkbox':
                for(var opcion in this.estructura_entidad["attributes"][atributo]["html"]["options"])
                {
                    field += '<div class="checkbox_group"><input type="checkbox" name="'+atributo+
                        '" value="'+this.estructura_entidad["attributes"][atributo]["html"]["options"][opcion]+
                        '" /><label id="label_'+this.estructura_entidad["attributes"][atributo]["html"]["options"][opcion]+
                        '" class="label_'+this.estructura_entidad["attributes"][atributo]["html"]["options"][opcion]+'">'+
                        this.estructura_entidad["attributes"][atributo]["html"]["options"][opcion]+'</label></div>';
                }
                break;

            default:
                break;
        }

        field += '<span id="span_error_'+atributo+'"><a id="error_'+atributo+'"></a></span>';

        if(this.get_input_ficheros().includes(atributo))
        {
            field += '<a id="link_'+atributo+'"><img src="./iconos/FILE.png" /></a>';
        }

        field += '<br><br>';

        return field;
    }

    createForm_ADD()
    {
        this.createForm('ADD');
    }

    createForm_SEARCH()
    {
        this.createForm('SEARCH');
    }

    createForm_EDIT(fila)
    {
        this.createForm('EDIT', fila);
    }

    createForm_DELETE(fila)
    {
        this.createForm('DELETE', fila);
    }

    createForm_SHOWCURRENT(fila)
    {
        this.createForm('SHOWCURRENT', fila);
    }

    createForm(accion, fila='')
    {
        document.getElementById('contenedor_IU_form').innerHTML = this.cargar_formulario_dinamico();
		this.dom.show_element('Div_IU_form','block');

        document.getElementById('class_contenido_titulo_form').innerHTML = accion+'_'+this.nombreentidad;

		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_'+this.nombreentidad+'_'+accion);

        switch(accion)
        {
            case 'ADD':
                this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.'+accion+'();');
                this.dom.assign_property_value('form_iu','onsubmit','return entidad.submit_formulario("'+accion+'");');

                this.ocultar_elementos(this.get_autoincrementales());
                this.ocultar_elementos(this.get_input_ficheros());
                this.ocultar_links();

                this.rellenar_valorespordefecto();
                this.colocarvalidaciones(accion);

                this.dom.colocarboton(accion);
                break;

            case 'SEARCH':
                this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.'+accion+'();');
                this.dom.assign_property_value('form_iu','onsubmit','return entidad.submit_formulario("'+accion+'");');

                this.ocultar_elementos(this.get_ficheros());
                this.ocultar_links();
                this.reemplazar_input_vacio();

                this.colocarvalidaciones(accion);

                this.dom.colocarboton(accion);
                break;

            case 'EDIT':
                this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.'+accion+'();');
                this.dom.assign_property_value('form_iu','onsubmit','return entidad.submit_formulario("'+accion+'");');

                this.agregar_links(fila);
                this.modificar_datos(fila);

                this.dom.rellenarvaloresform(fila);
                this.colocar_readonly(this.get_primary_key());
                this.colocar_readonly(this.get_input_ficheros());
                this.colocarvalidaciones(accion);

                this.dom.colocarboton(accion);
                break;

            case 'DELETE':
                this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.'+accion+'();');

                this.agregar_links(fila);
                this.ocultar_elementos(this.get_ficheros());
                this.modificar_datos(fila);

                this.dom.rellenarvaloresform(fila);
                this.dom.colocartodosreadonly('form_iu');

                this.dom.colocarboton(accion);
                break;
                
            case 'SHOWCURRENT':
                this.agregar_links(fila);
                this.ocultar_elementos(this.get_ficheros());
                this.modificar_datos(fila);

                this.dom.rellenarvaloresform(fila);
                this.dom.colocartodosreadonly('form_iu');
                break;

            default:
                break;
        }

        setLang();
    }

    submit_formulario(accion)
    {
        let result = true;

        let atributos_autoincrementales = this.get_autoincrementales();
        let atributos_input_ficheros = this.get_input_ficheros();
        let atributos_ficheros = this.get_ficheros();

        switch(accion)
        {
            case 'ADD':
                for(var atributo in this.estructura_entidad["attributes"])
                {
                    if(!(atributos_input_ficheros.includes(atributo) || atributos_autoincrementales.includes(atributo)))
                    {
                        if(!(this.validar_atributo(atributo, accion) === true)) {result = false;}
                    }
                }
                break;
            
            case 'EDIT':
                for(var atributo in this.estructura_entidad["attributes"])
                {
                    if(!(atributos_input_ficheros.includes(atributo)))
                    {
                        if(!(this.validar_atributo(atributo, accion) === true)) {result = false;}
                    }
                }
                break;
            
            case 'SEARCH':
                for(var atributo in this.estructura_entidad["attributes"])
                {
                    if(!(atributos_ficheros.includes(atributo)))
                    {
                        if(!(this.validar_atributo(atributo, accion) === true)) {result = false;}
                    }
                }
                break;
            
            default:
                break;
        }

        return result;
    }

    /*============================================================*/
    /*  EDICION DE FORMULARIOS                                    */
    /*============================================================*/

    agregar_links(fila)
    {
        let atributos_ficheros = this.get_input_ficheros();

        for(var atributo in atributos_ficheros)
        {
            this.dom.assign_property_value('link_'+atributos_ficheros[atributo], 'href', 'http://193.147.87.202/ET2/filesuploaded/files_'+atributos_ficheros[atributo]+'/'+eval('fila.'+atributos_ficheros[atributo]));
        }
    }

    ocultar_elementos(atributos)
    {
        for(var atributo in atributos)
        {
            this.dom.hide_element_form(atributos[atributo]);
        }
    }

    ocultar_links()
    {
        let atributos_ficheros = this.get_input_ficheros();

        for(var atributo in atributos_ficheros)
        {
            this.dom.hide_element('link_'+atributos_ficheros[atributo]);
        }
    }

    reemplazar_input_vacio()
    {
        for(var atributo in this.estructura_entidad["attributes"])
        {
            switch(this.estructura_entidad["attributes"][atributo]["html"]["tag"])
            {
                case 'select':
                    this.dom.replaceSelectXEmptyInput(atributo);
                    break;

                case 'radio':
                    this.dom.replaceEnumNameXEmptyInput(atributo);
                    break;

                case 'checkbox':
                    this.dom.replaceEnumNameXEmptyInput(atributo);
                    break;

                default:
                    break;
            }
        }
    }

    modificar_datos(fila)
    {
        var atributos_especiales = this.get_especiales();

        for(var dato in fila)
        {
            if(atributos_especiales.includes(dato))
            {
                fila[dato] = this.mostrarcambioatributo(dato,eval('fila.'+dato));
            }
        }
    }

    rellenar_valorespordefecto()
    {
        for(var atributo in this.estructura_entidad["attributes"])
        {
            if(!(this.estructura_entidad["attributes"][atributo]["default_value"] === undefined))
            {
                document.getElementById(atributo).value = this.estructura_entidad["attributes"][atributo]["default_value"];
            }
        }
    }

    colocar_readonly(atributos)
    {
        for(var atributo in atributos)
        {
            this.dom.assign_property_value(atributos[atributo],'readonly','true');
        }
    }

    /*============================================================*/
    /*  GET ATRIBUTOS                                             */
    /*============================================================*/

    get_especiales()
    {
        let atributos_especiales = [];
        
        for(var atributo in this.estructura_entidad["attributes"])
        {
            for(var accion in this.estructura_entidad["attributes"][atributo]["rules"]["validations"])
            {
                try
                {
                    if((this.estructura_entidad["attributes"][atributo]["rules"]["validations"][accion]["personalized"] ||
                    this.estructura_entidad["attributes"][atributo]["rules"]["validations"]["ADD"]["reg_exp"] == '^([0-9]{2}/){2}[0-9]{4}$') && 
                    !(atributos_especiales.includes(atributo))) 
                    {atributos_especiales.push(atributo);}
                }
                catch{}
            }
        }
        
        return atributos_especiales;
    }

    get_primary_key()
    {
        let atributos_primary_key = [];

        for(var atributo in this.estructura_entidad["attributes"])
        {
            if(this.estructura_entidad["attributes"][atributo]["is_pk"])
            {atributos_primary_key.push(atributo);}
        }

        return atributos_primary_key;
    }

    get_autoincrementales()
    {
        let atributos_autoincrementales = [];

        for(var atributo in this.estructura_entidad["attributes"])
        {
            if(this.estructura_entidad["attributes"][atributo]["is_autoincrement"])
            {atributos_autoincrementales.push(atributo);}
        }

        return atributos_autoincrementales;
    }

    get_ficheros()
    {
        let atributos_ficheros = [];

        for(var atributo in this.estructura_entidad["attributes"])
        {
            if(this.estructura_entidad["attributes"][atributo]["html"]["type"] == 'file')
            {atributos_ficheros.push(atributo);}
        }
        
        return atributos_ficheros;
    }

    get_input_ficheros()
    {
        let atributos_input_ficheros = [];
        let atributos_ficheros = this.get_ficheros();

        for(var atributo in atributos_ficheros)
        {
            atributos_input_ficheros.push(atributos_ficheros[atributo].substring(atributos_ficheros[atributo].indexOf('_') + 1));
        }
        
        return atributos_input_ficheros;
    }

    /*============================================================*/
    /*  VALIDACIONES DE ATRIBUTOS                                 */
    /*============================================================*/

    colocarvalidaciones(accion)
	{
		let evento;
        let campos = document.forms['form_iu'].elements;
        
        for (let i=0;i<campos.length;i++)
		{
			if (campos[i].id !== '')
			{
				if ((document.getElementById(campos[i].id).tagName == 'INPUT') && 
					(document.getElementById(campos[i].id).type !== 'file'))
				{
					evento = 'onblur';
				}
				else
				{
					evento = 'onChange';
				}
				

				if (!(document.getElementById(campos[i].id).type == 'submit'))
				{
					document.getElementById(campos[i].id).setAttribute (evento,'entidad.validar_atributo("'+campos[i].id+'", "'+accion+'");');
				}
			}
		}
	}

    validar_atributo(atributo, accion)
	{
		if(!(this.estructura_entidad["attributes"][atributo]["is_null"] && document.getElementById(atributo).value == null))
		{
			for(var validacion in this.estructura_entidad["attributes"][atributo]["rules"]["validations"][accion])
			{
				switch(validacion)
				{
					case 'min_size':
						if(!(this.estructura_entidad["attributes"][atributo]["html"]["type"] == 'file'))
						{
							if(!(this.validations.min_size(atributo, this.estructura_entidad["attributes"][atributo]["rules"]["validations"][accion]["min_size"])))
							{
								this.dom.mostrar_error_campo(atributo, atributo+'_min_size_KO');
								return atributo+'_min_size_KO';
							}
						}
						break;
					
					case 'max_size':
						if(!(this.estructura_entidad["attributes"][atributo]["html"]["type"] == 'file'))
						{
							if(!(this.validations.max_size(atributo, this.estructura_entidad["attributes"][atributo]["rules"]["validations"][accion]["max_size"])))
							{
								this.dom.mostrar_error_campo(atributo, atributo+'_max_size_KO');
								return atributo+'_max_size_KO';
							}
						}
						break;
					
					case 'exp_reg':
						if(!(this.validations.format(atributo, this.estructura_entidad["attributes"][atributo]["rules"]["validations"][accion]["exp_reg"])))
						{
							this.dom.mostrar_error_campo(atributo, atributo+'_format_KO');
							return atributo+'_format_KO';
						}
                        if(this.estructura_entidad["attributes"][atributo]["rules"]["validations"][accion]["exp_reg"] == '^([0-9]{2}/){2}[0-9]{4}$')
                        {
                            var resp = this.validations.validate_date(atributo);
		                    if(!(resp === true))
		                    {
			                    this.dom.mostrar_error_campo(atributo, resp);
			                    return resp;
		                    }
                        }
						break;
					
					case 'no_file':
						if(!(this.validations.not_exist_file(atributo)))
						{
							if(accion == 'EDIT') {return true;}
							else
							{
								this.dom.mostrar_error_campo(atributo, atributo+'_not_exist_file_KO');
								return "nuevo_alumnograduacion_fotoacto_not_exist_file_KO";
							}
						}
						break;
					
					case 'max_size_file':
						if(!(this.validations.max_size_file(atributo, this.estructura_entidad["attributes"][atributo]["rules"]["validations"][accion]["max_size_file"][0]["max_size_file"])))
						{
							this.dom.mostrar_error_campo(atributo, atributo+'_max_size_file_KO');
							return atributo+'_max_size_file_KO';
						}
						break;

					case 'type_file':
						if(!(this.validations.type_file(atributo, this.estructura_entidad["attributes"][atributo]["rules"]["validations"][accion]["type_file"][1]["type_file"])))
						{
							this.dom.mostrar_error_campo(atributo, atributo+'_type_file_KO');
							return atributo+'_type_file_KO';
						}
						break;
					
					case 'format_name_file':
						if(document.getElementById(atributo).files[0].name.length < this.estructura_entidad["attributes"][atributo]["rules"]["validations"][accion]["min_size"])
						{
							this.dom.mostrar_error_campo(atributo, atributo+'_min_size_name_file_KO');
							return atributo+'_min_size_name_file_KO';
						}

						if(document.getElementById(atributo).files[0].name.length > this.estructura_entidad["attributes"][atributo]["rules"]["validations"][accion]["max_size"])
						{
							this.dom.mostrar_error_campo(atributo, atributo+'_max_size_name_file_KO');
							return atributo+'_max_size_name_file_KO';
						}
							
						if(!(this.validations.format_name_file(atributo, this.estructura_entidad["attributes"][atributo]["rules"]["validations"][accion]["max_size_file"][2]["format_name_file"])))
						{
							this.dom.mostrar_error_campo(atributo, atributo+'_format_name_file_KO');
							return atributo+'_format_name_file_KO';
						}
						break;
					
					case 'personalized':
						try
						{
							var resp = eval("this.specialized_test_"+atributo+"();");
							if(resp !== true)
							{
								this.dom.mostrar_error_campo(atributo, resp);
								return resp;
							}
						}
						catch {}
						break;
					
					default:
						break;
				}
			}
		}

		this.dom.mostrar_exito_campo(atributo);
		return true;
	}

}
