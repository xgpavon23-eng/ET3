const estructura_test = {
    entity: 'test_entity',
    attributes: {
        nombre: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 20
            },
            is_pk: false,
            is_autoincrement: false,
            is_null: false,
            rules: {
                validations: {
                    ADD: {
                        min_size: 3,
                        max_size: 50,
                        exp_reg: '^[a-zA-Z ]+$'
                    },
                    EDIT: {
                        min_size: 3,
                        max_size: 50,
                        exp_reg: '^[a-zA-Z ]+$'
                    },
                    SEARCH: {
                        min_size: 3,
                        max_size: 50,
                        exp_reg: '^[a-zA-Z ]+$'
                    }
                }
            }
        },
        descripcion: {
            html: {
                tag: 'textarea',
                rows: 5,
                columns: 40
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 10,
                        max_size: 200
                    },
                    EDIT: {
                        min_size: 10,
                        max_size: 200
                    }
                }
            }
        },
        genero: {
            html: {
                tag: 'radio',
                options: ['Masculino', 'Femenino', 'Otro'],
                component_visible_size: 20
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 1 // Required check basically
                    },
                    EDIT: {
                        min_size: 1
                    }
                }
            }
        },
        intereses: {
            html: {
                tag: 'checkbox',
                options: ['Deportes', 'Lectura', 'Viajes'],
                component_visible_size: 20
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 1
                    },
                    EDIT: {
                        min_size: 1
                    }
                }
            }
        },
        aceptar_terminos: {
            html: {
                tag: 'checkbox',
                component_visible_size: 20
            },
            rules: {
                validations: {
                    ADD: {
                        // value will be 'true' or 'false', min_size 4 ensures 'true'
                        min_size: 4
                    },
                    EDIT: {
                        min_size: 4
                    }
                }
            }
        },
        fecha_nacimiento: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 12
            },
            rules: {
                validations: {
                    ADD: {
                        date_format: true // New validation
                    },
                    EDIT: {
                        date_format: true
                    }
                }
            }
        }
    }
};
