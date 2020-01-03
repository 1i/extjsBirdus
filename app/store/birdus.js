Ext.define('birdus.store.Birdus', {
    extend: 'Ext.data.Store',

    alias: 'store.birdus',

    model: 'birdus.model.Bird',
    autoLoad : true,

    proxy: {
        type: 'ajax',
        url: "https://birdus.s3-eu-west-1.amazonaws.com/" + dmyDate + ".json",
        reader: {
            type: 'json',
        }
    }
});
