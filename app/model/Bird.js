Ext.define('birdus.model.Bird', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'reference', type: 'auto' },
        { name: 'date', type: 'auto' },
        { name: 'commonName', type: 'auto' },
        { name: 'scientificName', type: 'auto' },
        { name: 'count', type: 'int' },
        { name: 'location', type: 'auto' },
        { name: 'county', type: 'auto' }

    ]
});
