Ext.define("formation.store.FilmStore", {
    extend: "Ext.data.Store",
    fields: ['id', 'genre'],
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'data/film.json',
        reader: {
            type: 'json',
            root: 'rows',
            successProperty: 'success'
        }
    }
});