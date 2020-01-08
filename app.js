Ext.Loader.setConfig({enabled: true});
Ext.application({
    name: 'formation',
    controllers: ['Film'],
    appFolder: 'app',
    launch: function()
    {
        Ext.create('Ext.container.Viewport', {
            margin: 8,
            items: [
                {
                    title: 'Ajouter un film',
                    xtype: 'filmcreate'
                },
                {
                    html: '<hr>',
                    border: 0
                },
                {
                    title: 'Liste des films',
                    xtype: 'filmlist',
                }
            ]
        });
    }
});