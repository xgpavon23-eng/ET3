const estructura_articulo = {
    entity: 'articulo',
    attributes: {
        articulo_id: {
            html: {
                tag: 'input',
                type: 'number'
            },
            is_pk: true,
            is_autoincrement: true,
            rules: {
                validations: {
                    SEARCH: {
                        exp_reg: '^[0-9]*$'
                    }
                }
            }
        },
        articulo_titulo: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 50
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 5,
                        max_size: 100,
                        exp_reg: '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s\\.,!?-]+$'
                    },
                    EDIT: {
                        min_size: 5,
                        max_size: 100,
                        exp_reg: '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s\\.,!?-]+$'
                    },
                    SEARCH: {
                        exp_reg: '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s\\.,!?-]*$'
                    }
                }
            }
        },
        articulo_contenido: {
            html: {
                tag: 'textarea',
                rows: 10,
                columns: 60
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 50,
                        max_size: 5000
                    },
                    EDIT: {
                        min_size: 50,
                        max_size: 5000
                    }
                }
            }
        },
        articulo_fecha: {
            html: {
                tag: 'input',
                type: 'date'
            },
            rules: {
                validations: {
                    ADD: {
                        exp_reg: '^\\d{4}-\\d{2}-\\d{2}$'
                    },
                    EDIT: {
                        exp_reg: '^\\d{4}-\\d{2}-\\d{2}$'
                    },
                    SEARCH: {
                        exp_reg: '^\\d{4}-\\d{2}-\\d{2}$'
                    }
                }
            }
        },
        articulo_publicado: {
            html: {
                tag: 'select',
                options: ['Sí', 'No']
            },
            default_value: 'No',
            rules: {
                validations: {
                    ADD: {
                        exp_reg: '^(Sí|No)$'
                    },
                    EDIT: {
                        exp_reg: '^(Sí|No)$'
                    }
                }
            }
        },
        articulo_categorias: {
            html: {
                tag: 'select',
                options: ['Tecnología', 'Ciencia', 'Educación', 'Salud', 'Entretenimiento'],
                multiple: true,
                component_visible_size: 5
            },
            rules: {
                validations: {
                    ADD: {
                        personalized: true
                    },
                    EDIT: {
                        personalized: true
                    }
                }
            }
        },
        articulo_etiquetas: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 50
            },
            rules: {
                validations: {
                    ADD: {
                        max_size: 100,
                        exp_reg: '^[a-zA-Z0-9,#\\s]+$'
                    },
                    EDIT: {
                        max_size: 100,
                        exp_reg: '^[a-zA-Z0-9,#\\s]+$'
                    },
                    SEARCH: {
                        exp_reg: '^[a-zA-Z0-9,#\\s]*$'
                    }
                }
            }
        },
        articulo_imagen: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 30
            },
            rules: {
                validations: {
                    SEARCH: {
                        exp_reg: '^[a-zA-Z0-9_\\-\\.]*$'
                    }
                }
            }
        },
        nuevo_articulo_imagen: {
            html: {
                tag: 'input',
                type: 'file'
            },
            rules: {
                validations: {
                    ADD: {
                        no_file: true,
                        max_size_file: 5000000,
                        type_file: ['image/jpeg', 'image/png', 'image/gif'],
                        format_name_file: '^[a-zA-Z0-9_\\-\\.]+\\.(jpg|jpeg|png|gif)$'
                    },
                    EDIT: {
                        max_size_file: 5000000,
                        type_file: ['image/jpeg', 'image/png', 'image/gif'],
                        format_name_file: '^[a-zA-Z0-9_\\-\\.]+\\.(jpg|jpeg|png|gif)$'
                    }
                }
            }
        }
    }
};