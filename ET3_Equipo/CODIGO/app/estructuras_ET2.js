const estructura_articulo = {
    entity: 'articulo',
    attributes: {
        CodigoA: {
            html: {
                tag: 'input',
                type: 'text'
            },
            is_pk: true,
            is_autoincrement: true,
            rules: {
                validations: {
                    ADD: {
                        min_size: 1,
                        max_size: 11,
                        exp_reg: '^[0-9]+$'
                    },
                    EDIT: {
                        min_size: 1,
                        max_size: 11,
                        exp_reg: '^[0-9]+$'
                    },
                    SEARCH: {
                        max_size: 11,
                        exp_reg: '^[0-9]*$'
                    }
                }
            }
        },
        AutoresA: {
            html: {
                tag: 'input',
                type: 'text'
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 4,
                        max_size: 200,
                        exp_reg: '^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$'
                    },
                    EDIT: {
                        min_size: 4,
                        max_size: 200,
                        exp_reg: '^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$'
                    },
                    SEARCH: {
                        max_size: 200,
                        exp_reg: '^[A-Za-zÁÉÍÓÚáéíóúÑñ ]*$'
                    }
                }
            }
        },
        TituloA: {
            html: {
                tag: 'input',
                type: 'text'
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 4,
                        max_size: 100,
                        exp_reg: '^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 \\-\\.,_]+$' // Simplificado
                    },
                    EDIT: {
                        min_size: 4,
                        max_size: 100,
                        exp_reg: '^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 \\-\\.,_]+$'
                    },
                    SEARCH: {
                        max_size: 100,
                        exp_reg: '^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 \\-\\.,_]*$'
                    }
                }
            }
        },
        TituloR: {
            html: {
                tag: 'input',
                type: 'text'
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 4,
                        max_size: 100,
                        exp_reg: '^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 \\-\\.,_]+$'
                    },
                    EDIT: {
                        min_size: 4,
                        max_size: 100,
                        exp_reg: '^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 \\-\\.,_]+$'
                    },
                    SEARCH: {
                        max_size: 100,
                        exp_reg: '^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 \\-\\.,_]*$'
                    }
                }
            }
        },
        ISSN: {
            html: {
                tag: 'input',
                type: 'text'
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 9,
                        max_size: 9,
                        exp_reg: '^[0-9]{4}-[0-9]{4}$'
                    },
                    EDIT: {
                        min_size: 9,
                        max_size: 9,
                        exp_reg: '^[0-9]{4}-[0-9]{4}$'
                    },
                    SEARCH: {
                        max_size: 9,
                        exp_reg: '^[0-9-]*$'
                    }
                }
            }
        },
        VolumenR: {
            html: {
                tag: 'input',
                type: 'text',
                type_input: 'number' // Opcional, si queremos type=number html
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 1,
                        max_size: 4,
                        exp_reg: '^[0-9]+$'
                    },
                    EDIT: {
                        min_size: 1,
                        max_size: 4,
                        exp_reg: '^[0-9]+$'
                    },
                    SEARCH: {
                        max_size: 4,
                        exp_reg: '^[0-9]*$'
                    }
                }
            }
        },
        PagIniA: {
            html: { tag: 'input', type: 'text' },
            rules: {
                validations: {
                    ADD: { min_size: 1, max_size: 4, exp_reg: '^[0-9]+$' },
                    EDIT: { min_size: 1, max_size: 4, exp_reg: '^[0-9]+$' },
                    SEARCH: { max_size: 4, exp_reg: '^[0-9]*$' }
                }
            }
        },
        PagFinA: {
            html: { tag: 'input', type: 'text' },
            rules: {
                validations: {
                    ADD: { min_size: 1, max_size: 4, exp_reg: '^[0-9]+$' },
                    EDIT: { min_size: 1, max_size: 4, exp_reg: '^[0-9]+$' },
                    SEARCH: { max_size: 4, exp_reg: '^[0-9]*$' }
                }
            }
        },
        FechaPublicacionR: {
            html: { tag: 'input', type: 'text' }, // O datepicker si lo hubiera
            rules: {
                validations: {
                    ADD: { exp_reg: '^(\\d{4}-\\d{2}-\\d{2}|0000-00-00)$' }, // YYYY-MM-DD
                    EDIT: { exp_reg: '^(\\d{4}-\\d{2}-\\d{2}|0000-00-00)$' },
                    SEARCH: { max_size: 10 }
                }
            }
        },
        EstadoA: {
            html: {
                tag: 'select',
                options: ['Enviado', 'Revisión', 'Publicado'],
                multiple: false
            },
            rules: {
                validations: {
                    ADD: {}, // Select normalmente valida por options
                    EDIT: {},
                    SEARCH: { max_size: 20 }
                }
            }
        },
        FicheropdfA: {
            html: { tag: 'input', type: 'text' },
            is_file_ref: true,
            file_server_path: 'files_FicheropdfA',
            rules: {
                validations: {
                    // search logic here usually
                    SEARCH: { max_size: 20, exp_reg: '^[A-Za-z0-9_\\.-]+\\.pdf$' }
                }
            }
        },
        nuevo_FicheropdfA: {
            html: { tag: 'input', type: 'file' },
            rules: {
                validations: {
                    ADD: {
                        no_file: true, // not_exist_file logic reversed? validate if file exists
                        max_size_file: 2000000,
                        type_file: ['application/pdf'],
                        format_name_file: '^[A-Za-z0-9_\\.-]+$'
                    },
                    EDIT: {
                        // En edit puede ser opcional
                        max_size_file: 2000000,
                        type_file: ['application/pdf'],
                        format_name_file: '^[A-Za-z0-9_\\.-]+$'
                    }
                }
            }
        }
    }
};
