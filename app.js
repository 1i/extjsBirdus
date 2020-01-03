/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'birdus.Application',

    name: 'birdus',

    requires: [
        // This will automatically load all classes in the birdus namespace
        // so that application classes do not need to require each other.
        'birdus.*'
    ],

    // The name of the initial view to create.
    mainView: 'birdus.view.main.Main'
});
