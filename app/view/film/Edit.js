Ext.define('formation.view.film.Edit', {
    extend: 'Ext.form.Panel',
    alias: 'widget.filmedit',
    autoShow: true,
    title: 'Modifier un film !',
    layout: 'fit',
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
        this.items = [
            {
                xtype: 'form',
                width: 800,
                items: [
                    {
                        xtype: 'grid',
                        border: false,
                        closabel: true,
                        columns: [
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
                        ],
                        plugins: {
                            ptype: 'cellediting',
                            clicksToEdit: 1
                        },
                        store: 'FilmStore'
                    }
                ]
            }
        ];
        this.bbar = new Ext.toolbar.Paging({
            store: 'FilmStore'
        });
        this.callParent(arguments);
    }
});