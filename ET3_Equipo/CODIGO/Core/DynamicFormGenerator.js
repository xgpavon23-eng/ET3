class DynamicFormGenerator {
    constructor(entityStructure) {
        this.structure = entityStructure;
    }
    
    generate(action, datos = null) {
        let formHTML = '<form id="form_iu">';
        
        Object.keys(this.structure.attributes).forEach(attrName => {
            const attr = this.structure.attributes[attrName];
            
            // Determinar si mostrar el campo según la acción
            if (this.shouldShowField(attrName, attr, action)) {
                formHTML += this.generateField(attrName, attr, action, datos);
            }
        });
        
        formHTML += '</form>';
        return formHTML;
    }
    
    generateField(attrName, attr, action, datos) {
        const fieldValue = datos ? datos[attrName] : '';
        const htmlConfig = attr.html || {};
        
        switch (htmlConfig.tag) {
            case 'input':
                return this.generateInputField(attrName, attr, htmlConfig, action, fieldValue);
            case 'textarea':
                return this.generateTextareaField(attrName, attr, htmlConfig, action, fieldValue);
            case 'select':
                return this.generateSelectField(attrName, attr, htmlConfig, action, fieldValue);
            case 'radio':
                return this.generateRadioField(attrName, attr, htmlConfig, action, fieldValue);
            case 'checkbox':
                return this.generateCheckboxField(attrName, attr, htmlConfig, action, fieldValue);
            default:
                return this.generateDefaultField(attrName, attr, action, fieldValue);
        }
    }
    
    generateInputField(attrName, attr, htmlConfig, action, value) {
        let fieldHTML = `
            <label for="${attrName}" class="label_${attrName}">
                ${this.getLabelText(attrName)}
                ${attr.is_pk ? ' *' : ''}
            </label>
            <input type="${htmlConfig.type || 'text'}" 
                   id="${attrName}" 
                   name="${attrName}" 
                   class="input_${attrName}"
                   ${this.getFieldAttributes(attr, htmlConfig, action)}
                   value="${value || ''}">
            <span id="span_error_${attrName}" style="display:none">
                <span id="error_${attrName}"></span>
            </span><br>`;
        
        return fieldHTML;
    }
    
    generateSelectField(attrName, attr, htmlConfig, action, value) {
        let optionsHTML = '';
        if (htmlConfig.options) {
            htmlConfig.options.forEach(option => {
                optionsHTML += `<option value="${option}" ${value === option ? 'selected' : ''}>${option}</option>`;
            });
        }
        
        return `
            <label for="${attrName}" class="label_${attrName}">${this.getLabelText(attrName)}</label>
            <select id="${attrName}" name="${attrName}" 
                    class="select_${attrName}"
                    ${htmlConfig.multiple ? 'multiple' : ''}
                    ${htmlConfig.component_visible_size ? `size="${htmlConfig.component_visible_size}"` : ''}
                    ${this.getReadonlyAttribute(attr, action)}>
                ${optionsHTML}
            </select>
            <span id="span_error_${attrName}" style="display:none">
                <span id="error_${attrName}"></span>
            </span><br>`;
    }
    
    generateRadioField(attrName, attr, htmlConfig, action, value) {
        let radiosHTML = `<label class="label_${attrName}">${this.getLabelText(attrName)}</label><div class="radio-group_${attrName}">`;
        
        if (htmlConfig.options) {
            htmlConfig.options.forEach((option, index) => {
                radiosHTML += `
                    <input type="radio" id="${attrName}_${index}" 
                           name="${attrName}_radio_group" 
                           value="${option}"
                           class="radio_${attrName}"
                           ${value === option ? 'checked' : ''}
                           ${this.getReadonlyAttribute(attr, action)}>
                    <label for="${attrName}_${index}" class="label_${attrName}_${option}">${option}</label>`;
            });
        }
        
        radiosHTML += `</div>
            <input type="hidden" id="${attrName}" name="${attrName}" value="${value || ''}">
            <span id="span_error_${attrName}" style="display:none">
                <span id="error_${attrName}"></span>
            </span><br>`;
        
        return radiosHTML;
    }
    
    // Métodos auxiliares...
    shouldShowField(attrName, attr, action) {
        // Lógica para determinar si mostrar el campo
        if (attr.is_autoincrement && action === 'ADD') return false;
        // Más reglas...
        return true;
    }
    
    getReadonlyAttribute(attr, action) {
        if (action === 'DELETE' || action === 'SHOWCURRENT') {
            return 'readonly disabled';
        }
        if (attr.is_pk && action === 'EDIT') {
            return 'readonly';
        }
        return '';
    }
}