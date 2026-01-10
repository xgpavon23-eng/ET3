class buscadorentidad
{
    constructor()
    {
        this.dom = new dom();

        document.getElementById("buscador_entidad").innerHTML = `<span id="span_search_entidad"><label class='text_menu_entidad'></label>
				<input type='text' id='search_entidad'></input>
                <img id='search_entidad_button' src='./iconos/SEARCH.png' height = 20pt
                    onclick='entidad = search_entidad.buscar_entidad(document.getElementById("search_entidad").value);'/></span>`;
        
        setLang();        
    }

    buscar_entidad(valor)
    {
        document.getElementById("search_entidad").value = valor;

        try
        {
            this.estructura_entidad = eval("estructura_"+valor);

            if(this.es_clase_personalizada())
            {
                try
                {
                    this.clase_entidad = eval("new "+valor+"(this.estructura_entidad);");
                    return this.clase_entidad;
                }
                catch
                {
                    this.clase_entidad = new entidadgeneral(this.estructura_entidad);
                    return this.clase_entidad;
                }
            }
            else
            {
                this.clase_entidad = new entidadgeneral(this.estructura_entidad);
                return this.clase_entidad;
            }
        }
        catch
        {
            this.dom.abrirModalError("entidad_not_found");
            return null;
        }
    }

    es_clase_personalizada()
    {
        for(var atributo in this.estructura_entidad["attributes"])
        {
            for(var accion in this.estructura_entidad["attributes"][atributo]["rules"]["validations"])
            {
                if(this.estructura_entidad["attributes"][atributo]["rules"]["validations"][accion]["personalized"]) {return true;}
            }
        }

        return false;
    }
}