Ext.define("formation.store.FilmStore", {
    extend: "Ext.data.Store",
    pageSize: 5,
    autoLoad: {
        start: 0,
        limit: this.pageSize
    },
    model: "formation.model.Film",
    groupField: 'genre',
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/getfilm.php',
            update: 'data/updateFilm.json'
        },
        reader: {
            type: 'json',
            root: 'rows',
            successProperty: 'success',
            totalProperty: 'results'
        }
    }
});