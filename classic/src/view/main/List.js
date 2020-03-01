Ext.define('birdus.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'birdus.store.Birdus'
    ],

    store: {
        type: 'birdus'
    },

    columns: [
        {text: 'Date', dataIndex: 'date'},
        {text: 'Name', dataIndex: 'commonName', flex: 2},
        {text: 'Scientific Name', dataIndex: 'scientificName', flex: 1},
        {text: 'Location', dataIndex: 'location', flex: 1},
        {text: 'County', dataIndex: 'county', flex: 1},
        {text: 'Count', dataIndex: 'count'},
        {text: 'Photo', dataIndex: 'photo', flex: 1}
    ],
    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            text: 'Previous',
            handler: function() {
                var store = this.up('grid').getStore();
                store.customPage--;
                store.getProxy().url = "https://birdus.s3-eu-west-1.amazonaws.com/" + getDateWithOffset(store.customPage) + ".json";
                store.reload();
                this.up('toolbar').down('button[id=NextTbButton]').enable();
            }
        }, '-', {
            text: 'Next',
            id : 'NextTbButton',
            disabled : true,
            handler: function() {
                var store = this.up('grid').getStore();
                if(store.customPage <0) {
                    store.customPage++;
                    store.getProxy().url = "https://birdus.s3-eu-west-1.amazonaws.com/" + getDateWithOffset(store.customPage) + ".json";
                    store.reload();
                }else{
                    this.disable();
                }
            }
        }]
    }],

    listeners: {
        select: 'onItemSelected'
    }
});
