Ext.define("formation.store.GenreStore", {
    extend: "Ext.data.Store",
    autoLoad: true,
    fields: ['id', 'genre'],
    proxy: {
        type: 'ajax',
        url: 'data/genre.json',
        reader: {
            type: 'json',
            root: 'rows',
            successProperty: 'success'
        }
    }
});