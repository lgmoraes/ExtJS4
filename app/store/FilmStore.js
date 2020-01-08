Ext.define("formation.store.FilmStore", {
    extend: "Ext.data.Store",
    pageSize: 3,
    autoLoad: {
        start: 0,
        limit: this.pageSize
    },
    fields: ['id', 'thumbs', 'title', 'producer',
        {name: 'date_de_sortie', type: 'date'}, 'genre', 'tagline',
        {name: 'prix', type: 'float'},
        {name: 'available', type: 'bool'}
    ],
    groupField: 'genre',
    proxy: {
        type: 'ajax',
        url: 'data/getFilm.php',
        reader: {
            type: 'json',
            root: 'rows',
            successProperty: 'success',
            totalProperty: 'results'
        }
    }
});