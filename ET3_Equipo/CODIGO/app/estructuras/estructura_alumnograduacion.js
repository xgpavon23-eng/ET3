const estructura_alumnograduacion = {
    entity: 'alumnograduacion',
    attributes: {
        alumnograduacion_login: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 15
            },
            is_pk: true,
            rules: {
                validations: {
                    ADD: {
                        min_size: 4,
                        max_size: 15,
                        exp_reg: '^[a-zA-Z]+$'
                    },
                    EDIT: {
                        min_size: 4,
                        max_size: 15,
                        exp_reg: '^[a-zA-Z]+$'
                    },
                    SEARCH: {
                        exp_reg: '^[a-zA-Z]*$'
                    }
                }
            }
        },
        alumnograduacion_password: {
            html: {
                tag: 'input',
                type: 'password',
                component_visible_size: 20
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 8,
                        max_size: 64,
                        exp_reg: '^[a-zA-Z\\s]+$'
                    },
                    EDIT: {
                        min_size: 8,
                        max_size: 64,
                        exp_reg: '^[a-zA-Z\\s]+$'
                    },
                    SEARCH: {
                        exp_reg: '^[a-zA-Z\\s]*$'
                    }
                }
            }
        },
        alumnograduacion_nombre: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 25
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 2,
                        max_size: 25,
                        personalized: true
                    },
                    EDIT: {
                        min_size: 2,
                        max_size: 25,
                        personalized: true
                    },
                    SEARCH: {
                        exp_reg: '^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]*$'
                    }
                }
            }
        },
        alumnograduacion_apellidos: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 35
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 2,
                        max_size: 35,
                        personalized: true
                    },
                    EDIT: {
                        min_size: 2,
                        max_size: 35,
                        personalized: true
                    },
                    SEARCH: {
                        exp_reg: '^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]*$'
                    }
                }
            }
        },
        alumnograduacion_titulacion: {
            html: {
                tag: 'select',
                options: ['GREI', 'GRIA', 'MEI', 'MIA', 'PCEO']
            },
            rules: {
                validations: {
                    ADD: {
                        personalized: true
                    },
                    EDIT: {
                        personalized: true
                    },
                    SEARCH: {
                        exp_reg: '^(GREI|GRIA|MEI|MIA|PCEO)?$'
                    }
                }
            }
        },
        alumnograduacion_dni: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 10
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 9,
                        max_size: 9,
                        personalized: true
                    },
                    EDIT: {
                        min_size: 9,
                        max_size: 9,
                        personalized: true
                    },
                    SEARCH: {
                        min_size: 9,
                        max_size: 9
                    }
                }
            }
        },
        alumnograduacion_telefono: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 10
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 9,
                        max_size: 9,
                        exp_reg: '^[0-9]{9}$'
                    },
                    EDIT: {
                        min_size: 9,
                        max_size: 9,
                        exp_reg: '^[0-9]{9}$'
                    },
                    SEARCH: {
                        exp_reg: '^[0-9]*$'
                    }
                }
            }
        },
        alumnograduacion_direccion: {
            html: {
                tag: 'textarea',
                rows: 3,
                columns: 50
            },
            rules: {
                validations: {
                    ADD: {
                        max_size: 100,
                        exp_reg: '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s\\.,#-]+$'
                    },
                    EDIT: {
                        max_size: 100,
                        exp_reg: '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s\\.,#-]+$'
                    },
                    SEARCH: {
                        exp_reg: '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s\\.,#-]*$'
                    }
                }
            }
        },
        alumnograduacion_email: {
            html: {
                tag: 'input',
                type: 'email',
                component_visible_size: 40
            },
            rules: {
                validations: {
                    ADD: {
                        max_size: 40,
                        personalized: true
                    },
                    EDIT: {
                        max_size: 40,
                        personalized: true
                    },
                    SEARCH: {
                        exp_reg: '^[a-zA-Z0-9._%+-@]*$'
                    }
                }
            }
        },
        alumnograduacion_fotoacto: {
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
        nuevo_alumnograduacion_fotoacto: {
            html: {
                tag: 'input',
                type: 'file',
                multiple: false
            },
            rules: {
                validations: {
                    ADD: {
                        no_file: true,
                        max_size_file: 2000000,
                        type_file: ['image/jpeg'],
                        format_name_file: '^[a-zA-Z0-9_\\-\\.]+\\.(jpg|jpeg)$',
                        personalized: true
                    },
                    EDIT: {
                        max_size_file: 2000000,
                        type_file: ['image/jpeg'],
                        format_name_file: '^[a-zA-Z0-9_\\-\\.]+\\.(jpg|jpeg)$',
                        personalized: true
                    }
                }
            }
        }
    }
};