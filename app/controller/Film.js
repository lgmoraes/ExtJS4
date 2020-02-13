Ext.define('formation.controller.Film', {
    extend: 'Ext.app.Controller',
    views: ['film.Create', 'film.List', 'film.Edit', 'film.EditMulti'],
    models: ['Film'],
    stores: ['FilmStore', 'GenreStore'],
    init: function()
    {
        this.control({
            'filmcreate button[action=save]': {
                click: function(button)
                {
                    var form = button.up('form').getForm();
                    form.url = 'data/test.json';
                    form.submit({
                        success: function(form, action)
                        {
                            Ext.Msg.alert('SuccÃ¨s', 'Cela a fonctionÃ©.');
                        },
                        failure: function(form, action)
                        {
                            switch (action.failureType)
                            {
                                case Ext.form.action.Action.CLIENT_INVALID:
                                    Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
                                    break;
                                case Ext.form.action.Action.CONNECT_FAILURE:
                                    Ext.Msg.alert('Failure', 'Ajax communication failed');
                                    break;
                                case Ext.form.action.Action.SERVER_INVALID:
                                    Ext.Msg.alert('Failure', action.result.msg);
                            }
                        }
                    });
                }
            },
            'filmlist': {
                itemdblclick: function(grid, record)
                {
                    var filmedit = grid.up('viewport').down('filmedit');
                    filmedit.loadRecord(record);
                    filmedit.enable();
                }
            },
            'filmedit': {
                beforerender: function(form)
                {
                    form.disable();
                }
            },
            'filmedit form panel': {
                itemclick: function(grid, record)
                {
                    var view = Ext.ComponentQuery.query('filmedit')[0];
                    view.down('form').loadRecord(record);
                }
            },
            'filmedit button[action=save]': {
                click: function(button, event)
                {
                    var form = button.up('form');
                    var values = form.getValues();
                    var record = form.getRecord();
                    record.set(values);

                    // synchronize the store after editing the record
                    record.store.sync();

                    form.disable();
                }
            },
            'filmeditmulti': {
                itemdblclick: function(obj, record)
                {
                    console.log('test');
                    console.log(obj);
                    console.log(record);
                }
            }
        });
    },
    updateFilm: function(grid, record)
    {
        console.log(grid);
        console.log(record);
    }

});