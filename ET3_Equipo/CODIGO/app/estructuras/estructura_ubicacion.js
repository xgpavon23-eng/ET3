const estructura_ubicacion = {
    entity: 'ubicacion',
    attributes: {
        ubicacion_id: {
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
        ubicacion_nombre: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 30
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 3,
                        max_size: 50,
                        exp_reg: '^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$'
                    },
                    EDIT: {
                        min_size: 3,
                        max_size: 50,
                        exp_reg: '^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$'
                    },
                    SEARCH: {
                        exp_reg: '^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]*$'
                    }
                }
            }
        },
        ubicacion_direccion: {
            html: {
                tag: 'textarea',
                rows: 3,
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
        ubicacion_ciudad: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 20
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 3,
                        max_size: 30,
                        exp_reg: '^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$'
                    },
                    EDIT: {
                        min_size: 3,
                        max_size: 30,
                        exp_reg: '^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$'
                    },
                    SEARCH: {
                        exp_reg: '^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]*$'
                    }
                }
            }
        },
        ubicacion_codigo_postal: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 6
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 5,
                        max_size: 5,
                        exp_reg: '^[0-9]{5}$'
                    },
                    EDIT: {
                        min_size: 5,
                        max_size: 5,
                        exp_reg: '^[0-9]{5}$'
                    },
                    SEARCH: {
                        exp_reg: '^[0-9]*$'
                    }
                }
            }
        },
        ubicacion_pais: {
            html: {
                tag: 'select',
                options: ['España', 'Portugal', 'Francia', 'Italia', 'Alemania']
            },
            default_value: 'España',
            rules: {
                validations: {
                    ADD: {
                        exp_reg: '^(España|Portugal|Francia|Italia|Alemania)$'
                    },
                    EDIT: {
                        exp_reg: '^(España|Portugal|Francia|Italia|Alemania)$'
                    }
                }
            }
        },
        ubicacion_telefono: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 12
            },
            rules: {
                validations: {
                    ADD: {
                        exp_reg: '^[0-9]{9}$'
                    },
                    EDIT: {
                        exp_reg: '^[0-9]{9}$'
                    },
                    SEARCH: {
                        exp_reg: '^[0-9]*$'
                    }
                }
            }
        },
        ubicacion_email: {
            html: {
                tag: 'input',
                type: 'email',
                component_visible_size: 30
            },
            rules: {
                validations: {
                    ADD: {
                        max_size: 50,
                        exp_reg: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
                    },
                    EDIT: {
                        max_size: 50,
                        exp_reg: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
                    },
                    SEARCH: {
                        exp_reg: '^[a-zA-Z0-9._%+-@]*$'
                    }
                }
            }
        },
        ubicacion_tipo: {
            html: {
                tag: 'radio',
                options: ['Oficina', 'Almacén', 'Tienda', 'Sede Central']
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
        ubicacion_activo: {
            html: {
                tag: 'checkbox'
            },
            default_value: '1',
            rules: {
                validations: {
                    ADD: {
                        exp_reg: '^(0|1)$'
                    },
                    EDIT: {
                        exp_reg: '^(0|1)$'
                    }
                }
            }
        }
    }
};
