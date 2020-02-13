Ext.define('formation.view.film.Create', {
    extend: 'Ext.form.Panel',
    alias: 'widget.filmcreate',
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
                xtype: 'textfield',
                fieldLabel: 'Titre',
                name: 'title',
                allowBlank: false,
                listeners: {
                    specialkey: function(field, event, options)
                    {
                        if (event.getKey() == event.ENTER)
                        {
                            field.nextSibling().focus();
                        }
                    }
                }
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Réalisateur',
                name: 'producer',
                vtype: 'alpha'
            },
            {
                xtype: 'datefield',
                fieldLabel: 'Date de sortie',
                name: 'date_de_sortie',
                disabledDays: [5, 6]
            },
            {
                xtype: 'radio',
                fieldLabel: 'Filmé en',
                name: 'filme_en',
                boxLabel: 'Couleur'
            },
            {
                xtype: 'radio',
                name: 'filme_en',
                boxLabel: 'Noir et blanc'
            },
            {
                xtype: 'checkbox',
                name: 'bad_movie',
                fieldLabel: 'Bad Movie'
            },
            {
                xtype: 'combo',
                name: 'genre',
                fieldLabel: 'Genre',
                store: 'GenreStore',
                displayField: 'genre',
                width: 250,
                listeners: {
                    afterrender: function()
                    {

                    },
                    select: function(combo, records, options)
                    {
                        Ext.Msg.prompt('Nouveau genre', 'Nom', function(btn, input)
                        {
                            if (btn === 'ok' && input !== "")
                            {
                                // Ajout dans la liste
                            }
                        });
                    }
                }
            }
        ];
        this.callParent(arguments);
    }
});