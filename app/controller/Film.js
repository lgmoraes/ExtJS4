Ext.define('formation.controller.Film', {
    extend: 'Ext.app.Controller',
    views: ['film.Create'],
    stores: ['FilmStore'],
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
                            Ext.Msg.alert('Succès', 'Cela a fonctioné.');
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
            }
        });
    }
});