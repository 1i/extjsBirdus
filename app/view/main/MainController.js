/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('birdus.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        if(Array.isArray(record)){
            record = record[0];
        }
        getReferenceBird(record);
        Ext.Msg.confirm('Confirm Leave Birdus', 'Leave to see more information on ' + record.get("commonName"), 'onConfirm', this);

    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            window.location.assign(getReferenceBird());
        }
    }
});
