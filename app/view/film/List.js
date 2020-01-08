Ext.define('formation.view.film.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.filmlist',
    store: 'FilmStore',
    initComponent: function()
    {
        this.columns = [
            {header: 'Couverture', dataIndex: 'thumbs', hidden: true},
            {header: 'Titre', dataIndex: 'title', renderer: title_shortDescription},
            {header: 'Réalisateur', dataIndex: 'producer'},
            {header: 'Date de sortie', dataIndex: 'date_de_sortie', renderer: Ext.util.Format.dateRenderer('d/m/Y')},
            {header: 'Genre', dataIndex: 'genre'},
            {header: 'Description', dataIndex: 'tagline', hidden: true},
            {header: 'Disponible', dataIndex: 'available', renderer: bool2fr}
        ];
        this.callParent(arguments);
    }
});

function bool2fr(bool)
{
    return bool ? "Oui" : "Non";
}

function title_shortDescription(val, x, store)
{
    return "<b>" + val + "</b><br />" + store.data.tagline;
}