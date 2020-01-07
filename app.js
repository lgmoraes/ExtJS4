Ext.Loader.setConfig({enabled: true});

Ext.application({
    name: 'formation',
    controllers: ['Film'],
    appFolder: 'app',
    launch: function()
    {
        Ext.create('Ext.container.Viewport', {
            items: [
                {
                    title: 'Titre du viewport',
                    html: '<button>Code html</button>',
                    xtype: 'filmcreate'
                }
            ]
        })
    }
});