const estructura_articulo =
{
    entity: 'articulo',

    attributes:
    {
        CodigoA:
        {
            html:
            {
                tag: 'input',
                type : "text"
            },

            is_pk: true,
            is_autoincrement: true,
            
            rules:
            {
                validations:
                {
                    ADD:
                    {
                        min_size: 1,
                        max_size: 11,
                        exp_reg: '^[0-9]*$'
                    },

                    EDIT:
                    {
                        min_size: 1,
                        max_size: 11,
                        exp_reg: '^[0-9]*$'
                    },

                    SEARCH:
                    {
                        max_size: 11,
                        exp_reg: '^[0-9]*$'
                    }
                }  // fin validations
            } // fin rules
        },

        AutoresA:
        {
            html:
            {
                tag: 'input',
                type : "text"
            },

            rules:
            {
                validations:
                {
                    ADD:
                    {
                        min_size: 11,
                        max_size: 200,
                        exp_reg: '^[A-Za-zÑñÁÉÍÓÚáéíóúü ,-]*$'
                    },

                    EDIT:
                    {
                        min_size: 11,
                        max_size: 200,
                        exp_reg: '^[A-Za-zÑñÁÉÍÓÚáéíóúü ,-]*$'
                    },

                    SEARCH:
                    {
                        max_size: 200,
                        exp_reg: '^[A-Za-zÑñÁÉÍÓÚáéíóúü ,-]*$'
                    }
                }  // fin validations
            } // fin rules
        },

        TituloA:
        {
            html:
            {
                tag: 'input',
                type : "text"
            },

            rules:
            {
                validations:
                {
                    ADD:
                    {
                        min_size: 20,
                        max_size: 100,
                        exp_reg: '^[0-9A-Za-zÑñÁÉÍÓÚáéíóúü .,-¿?¡!]*$'
                    },

                    EDIT:
                    {
                        min_size: 20,
                        max_size: 100,
                        exp_reg: '^[0-9A-Za-zÑñÁÉÍÓÚáéíóúü .,-¿?¡!]*$'
                    },

                    SEARCH:
                    {
                        max_size: 100,
                        exp_reg: '^[0-9A-Za-zÑñÁÉÍÓÚáéíóúü .,-¿?¡!]*$'
                    }
                }  // fin validations
            } // fin rules
        },

        TituloR:
        {
            html:
            {
                tag: 'input',
                type : "text"
            },

            rules:
            {
                validations:
                {
                    ADD:
                    {
                        min_size: 5,
                        max_size: 100,
                        exp_reg: '^[0-9A-Za-zÑñÁÉÍÓÚáéíóúü .,-¿?¡!]*$'
                    },

                    EDIT:
                    {
                        min_size: 5,
                        max_size: 100,
                        exp_reg: '^[0-9A-Za-zÑñÁÉÍÓÚáéíóúü .,-¿?¡!]*$'
                    },

                    SEARCH:
                    {
                        max_size: 100,
                        exp_reg: '^[0-9A-Za-zÑñÁÉÍÓÚáéíóúü .,-¿?¡!]*$'
                    }
                }  // fin validations
            } // fin rules
        },

        ISSN:
        {
            html:
            {
                tag: 'input',
                type : "text"
            },

            rules:
            {
                validations:
                {
                    ADD:
                    {
                        min_size: 9,
                        max_size: 9,
                        exp_reg: '^[0-9]{4}-[0-9]{3}[0-9X]$',
                        personalized: true
                    },

                    EDIT:
                    {
                        min_size: 9,
                        max_size: 9,
                        exp_reg: '^[0-9]{4}-[0-9]{3}[0-9X]$',
                        personalized: true
                    },

                    SEARCH:
                    {
                        max_size: 9,
                        exp_reg: '^[0-9]{0,4}-?[0-9]{0,3}[0-9X]?$'
                    }
                }  // fin validations
            } // fin rules
        },

        VolumenR:
        {
            html:
            {
                tag: 'input',
                type : "text"
            },

            rules:
            {
                validations:
                {
                    ADD:
                    {
                        min_size: 1,
                        max_size: 4,
                        exp_reg: '^[0-9]*$',
                        personalized: true
                    },

                    EDIT:
                    {
                        min_size: 1,
                        max_size: 4,
                        exp_reg: '^[0-9]*$',
                        personalized: true
                    },

                    SEARCH:
                    {
                        max_size: 4,
                        exp_reg: '^[0-9]*$'
                    }
                }  // fin validations
            } // fin rules
        },

        PagIniA:
        {
            html:
            {
                tag: 'input',
                type : "text"
            },

            rules:
            {
                validations:
                {
                    ADD:
                    {
                        min_size: 1,
                        max_size: 4,
                        exp_reg: '^[0-9]*$',
                        personalized: true
                    },

                    EDIT:
                    {
                        min_size: 1,
                        max_size: 4,
                        exp_reg: '^[0-9]*$',
                        personalized: true
                    },

                    SEARCH:
                    {
                        max_size: 4,
                        exp_reg: '^[0-9]*$'
                    }
                }  // fin validations
            } // fin rules
        },

        PagFinA:
        {
            html:
            {
                tag: 'input',
                type : "text"
            },

            rules:
            {
                validations:
                {
                    ADD:
                    {
                        min_size: 1,
                        max_size: 4,
                        exp_reg: '^[0-9]*$',
                        personalized: true
                    },

                    EDIT:
                    {
                        min_size: 1,
                        max_size: 4,
                        exp_reg: '^[0-9]*$',
                        personalized: true
                    },

                    SEARCH:
                    {
                        max_size: 4,
                        exp_reg: '^[0-9]*$'
                    }
                }  // fin validations
            } // fin rules
        },

        FechaPublicacionR:
        {
            html:
            {
                tag: 'input',
                type : "text"
            },

            rules:
            {
                validations:
                {
                    ADD:
                    {
                        min_size: 10,
                        max_size: 10,
                        exp_reg: '^([0-9]{2}/){2}[0-9]{4}$',
                        personalized: true
                    },

                    EDIT:
                    {
                        min_size: 10,
                        max_size: 10,
                        exp_reg: '^([0-9]{2}/){2}[0-9]{4}$',
                        personalized: true
                    },

                    SEARCH:
                    {
                        max_size: 10,
                        exp_reg: '^[0-9/]*$'
                    }
                }  // fin validations
            } // fin rules
        },

        FicheropdfA:
        {
            html:
            {
                tag: 'input',
                type : "text"
            },

            rules:
            {
                validations:
                {
                    SEARCH:
                    {
                        max_size: 20,
                        exp_reg: '^[0-9A-Za-z.]*$'
                    }
                }  // fin validations
            } // fin rules
        },

        nuevo_FicheropdfA:
        {
            html:
            {
                tag: 'input',
                type : "file"
            },

            rules:
            {
                validations:
                {
                    ADD:
                    {
                        min_size: 7,
                        max_size: 20,
                        no_file: true,
                        
                        max_size_file: [{max_size_file:10000000}, {type_file:'application/pdf'}, {format_name_file:'^[0-9A-Za-z.]*$'}],
                        
                        type_file:[{max_size_file:10000000}, {type_file:'application/pdf'}, {format_name_file:'^[0-9A-Za-z.]*$'}],

                        format_name_file:[{max_size_file:10000000}, {type_file:'application/pdf'}, {format_name_file:'^[0-9A-Za-z.]*$'}]
                    },

                    EDIT:
                    {
                        min_size: 7,
                        max_size: 20,
                        
                        max_size_file: [{max_size_file:10000000}, {type_file:'application/pdf'}, {format_name_file:'^[0-9A-Za-z.]*$'}],
                        
                        type_file:[{max_size_file:10000000}, {type_file:'application/pdf'}, {format_name_file:'^[0-9A-Za-z.]*$'}],

                        format_name_file:[{max_size_file:10000000}, {type_file:'application/pdf'}, {format_name_file:'^[0-9A-Za-z.]*$'}]
                    },
                }  // fin validations
            } // fin rules
        },

        EstadoA:
        {
            html:
            {
                tag: 'select',
                options : ['Enviado', 'Revision', 'Publicado']
            },

            rules:
            {
                validations:
                {
                    ADD:
                    {
                        personalized: true
                    },

                    EDIT:
                    {
                        personalized: true
                    },

                    SEARCH:
                    {
                        max_size: 9,
                        exp_reg: '^[ACEGIMOPR]*$'
                    }
                }  // fin validations
            } // fin rules
        }
    }
}