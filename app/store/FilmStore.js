Ext.define("formation.store.FilmStore", {
    extend: "Ext.data.Store",
    autoLoad: true,
    fields: ['id', 'thumbs', 'title', 'producer',
        {name: 'date_de_sortie', type: 'date'}, 'genre', 'tagline',
        {name: 'prix', type: 'float'},
        {name: 'available', type: 'bool'}
    ],
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