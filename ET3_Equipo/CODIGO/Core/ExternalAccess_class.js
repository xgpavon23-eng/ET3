class ExternalAccess {

    constructor() {
        this.base_url = "http://193.147.87.202/ET2";
    }

    getFileURL(folder, filename) {
        // Construct path: base + /filesuploaded/<folder>/<filename>
        return `${this.base_url}/filesuploaded/${folder}/${filename}`;
    }

    peticionBackGeneral(formulario, controlador, action, datosextra = null) {


        var datos;

        // caso de primera carga de SEARCH no depender del formulario manual
        // se hace sin ningun filtro

        if ((formulario === '') || (document.getElementById(formulario) == null)) {
            datos = new FormData();
        }
        else {
            var formulario = document.getElementById(formulario);
            datos = new FormData(formulario);
        }

        datos.append('controlador', controlador);
        datos.append('action', action);

        if (datosextra == null) { }
        else {
            for (var clave in datosextra) {
                datos.append(clave, datosextra[clave]);
            }
        }

        let url_request = this.base_url + "/index.php";

        return new Promise(function (resolve) {
            $.ajax({
                type: "POST",
                url: url_request,
                data: datos,
                processData: false,
                contentType: false,
            })
                .done(res => {
                    resolve(res);
                })
                .fail(res => {
                    alert('error : ' + res.status);
                })

        });

    }


}