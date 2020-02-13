Ext.define('formation.view.film.EditMulti', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.filmeditmulti',
    autoShow: true,
    title: 'Modifier plusieurs films !',
    store: 'FilmStore',
    border: false,
    closabel: true,
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1
    },

    initComponent: function()
    {
        this.buttons = [
            {
                text: 'Sauvegarder',
                action: 'save'
            },
            {
                text: 'Réinitialiser',
                handler: function(element)
                {
                    element.up("form").getForm().reset();
                }
            }
        ];
        this.columns = [
            {header: 'Couverture', dataIndex: 'thumbs', hidden: true},
            {header: 'Titre', dataIndex: 'title', editor: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            },
            {header: 'Réalisateur', dataIndex: 'producer', editor: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            },
            {header: 'Date de sortie', dataIndex: 'date_de_sortie', renderer: Ext.util.Format.dateRenderer('d/m/Y'), editor: {
                    xtype: 'datefield',
                    allowBlank: false
                }
            },
            {header: 'Genre', dataIndex: 'genre', editor: {
                    xtype: 'combo',
                    store: 'GenreStore',
                    displayField: 'genre'
                }
            },
            {header: 'Description', dataIndex: 'tagline', editor: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            },
            {header: 'Disponible', dataIndex: 'available', editor: 'checkbox'}
        ];

        this.bbar = new Ext.toolbar.Paging({
            store: 'FilmStore'
        });

        this.callParent(arguments);
    }
});