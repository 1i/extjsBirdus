Ext.define('birdus.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'birdus.store.Birdus'
    ],

    store: {
        type: 'birdus'
    },

    columns: [
        {text: 'Date', dataIndex: 'date', flex: 1},
        {text: 'Name', dataIndex: 'commonName', flex: 3},
        {text: 'Location', dataIndex: 'location', flex: 3},
        {text: 'County', dataIndex: 'county', flex: 2},
        {text: 'Count', dataIndex: 'count', flex: 1},
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
