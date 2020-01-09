Ext.Loader.setConfig({enabled: true});
Ext.application({
    name: 'formation',
    controllers: ['Film'],
    appFolder: 'app',
    launch: function()
    {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    xtype: 'panel',
                    region: 'west',
                    split: true,
                    collapsible: true,
                    title: 'Side Bar',
                    bodyStyle: 'padding: 5px;',
                    width: 300,
                    minWidth: 50,
                    items: [
                        {
                            title: 'Ajouter un film',
                            xtype: 'filmcreate'
                        }
                    ]
                },
                {
                    region: 'center',
                    xtype: 'tabpanel',
                    activeTab: 0,
                    items: [
                        {
                            title: 'Liste des films',
                            xtype: 'filmlist'
                        },
                        {
                            title: 'Editer les films',
                            xtype: 'filmedit'
                        }
                    ]
                }
            ]
        }
        );
    }
});