/**
 * funcion de idioma
 * Si no hay idioma establecido lo establece por defecto
 * crea la cookie del idioma seleccionado
 * carga la variable de traducciones correspondiente al idioma seleccionado
 * recorre todos los elementos buscando un class que exista en las traducciones
 * para aplicar el texto de idioma
 * 
 * @param {String} lang Indicación del idioma mediante dos letras (ES, EN, GA..)
 */
function setLang(lang = '') {

    if (lang == '') {
        if (getCookie('lang') != '') {
            lang = getCookie('lang');
        } else {
            lang = 'ES';
        }

    }

    setCookie('lang', lang, 1);
    var traduccion;


    switch (lang) {
        case 'ES':
            traduccion = textos_ES;
            break;
        case 'EN':
            traduccion = textos_EN;
            break;
        default:
            traduccion = textos_ES;
            break;
    }


    //**Se recorre el array de traducciones buscando coincidencias una por una*/
    for (var clave in traduccion) {

        var elementos = document.getElementsByClassName(clave);
        var etiquetas = document.getElementsByTagName('label');
        var inputs = document.getElementsByTagName('input');
        var imgs = document.getElementsByTagName('img');
        var options = document.getElementsByTagName('option');

        for (var elem in elementos) {
            let texto = traduccion[clave];
            // Check for parameter substitution
            if (elementos[elem].getAttribute && elementos[elem].getAttribute('data-error-param')) {
                texto = texto.replace('####', elementos[elem].getAttribute('data-error-param'));
            }
            elementos[elem].innerHTML = texto;
        }

        for (var i = 0; i < etiquetas.length; i++) {
            if (etiquetas[i].htmlFor == clave) {
                etiquetas[i].innerHTML = traduccion[clave];
            }
        }

        for (var i = 0; i < inputs.length; i++) {
            var list = inputs[i].classList;
            for (var j = 0; j < list.length; j++) {
                if (list[j] == clave) {
                    inputs[i].placeholder = traduccion[clave];
                    inputs[i].title = traduccion[clave];
                }
            }
        }

        for (var i = 0; i < imgs.length; i++) {
            var list = imgs[i].classList;
            for (var j = 0; j < list.length; j++) {
                if (list[j] == clave) {
                    imgs[i].alt = traduccion[clave]; // texto alternativo si no se ve la imagen
                    imgs[i].title = traduccion[clave]; // texto superpuesto a la imagen al pasar sobre ella
                }
            }
        }

        for (var i = 0; i < options.length; i++) {
            if (options[i].className == clave) {
                options[i].label = traduccion[clave];
            }
        }
    }

    // Process dynamic validation errors
    var validationErrors = document.getElementsByClassName('validation_error');
    for (var i = 0; i < validationErrors.length; i++) {
        let elem = validationErrors[i];
        let rule = elem.getAttribute('data-error-rule');
        let param = elem.getAttribute('data-error-param');

        if (rule) {
            let key = 'ERROR_' + rule.toUpperCase();
            if (traduccion[key]) {
                let texto = traduccion[key];
                if (param) {
                    texto = texto.replace('####', param);
                }
                elem.innerHTML = texto;
            } else {
                // Fallback for unknown rules: generate readable text from rule name
                // e.g. "min_size" -> "Min size"
                let readableRule = rule.replace(/_/g, ' ');
                readableRule = readableRule.charAt(0).toUpperCase() + readableRule.slice(1);

                let fallback = (lang === 'ES') ?
                    `Error de ${readableRule}` :
                    `${readableRule} error`;

                if (param) fallback += `: ${param}`;
                elem.innerHTML = fallback;
            }
        }
    }
}

/**Función para cambiar el idioma*/
function cambiarLang(lang) {

    setCookie('lang', lang, 5);
    window.location.reload(true);

}

/*Función para establecer el valor de la cookie*/
function setCookie(name, value, days) {

    var expires = "";

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + (value || "") + expires + "; path=/";
    document.cookie += "; Secure; SameSite=none; path=/";
}

/*Función para obtener el valor de la cookie*/
function getCookie(name) {

    var nameEQ = name + "=";
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }

    return null;

}