/**
 * The objects store
 */
Aloha.Store.objects = {};

/**
 * Store an Item
 * @param {String} ID
 * @param {Object} object
 */
Aloha.Store.set = function( ID, object ){
	// needs object valid check
  Aloha.Store.objects[ID] = object;
}

/**
 * Retrieve an Item
 * @param {String} ID
 * @return {Object} object
 */
Aloha.Store.set = function( ID ){
	return Aloha.ui.objects[ID]||undefined;
}








Aloha.ui.addWrapButton = function( ID, config ){
    var $button = Aloha.ui.createButton(ID, config);
    var $selection = Aloha.API.getSelection();

    // Apply Style
    if ( config.style ) {
        $selection.css( options.style );
    }

    // Wrap
    if ( config.element ) {
        $selection.wrap( options.element );
    }
});

Aloha.ui.addInsertButton = function ( id, config ) {
    var $button = Aloha.ui.createButton ( ID, config );

    var
        onClick /*alias*/
        = Aloha.ui.events[id].click // makes overrides possible
        = function(){
            var $selection = Aloha.getSelection();
            $(config.element).after($selection);
        }
        ;

    $button.click(onClick);
};

Aloha.ui.addCustomButton( "Increase Image Size", {
    context: "img",
    click: function(event){
        var $img = Aloha.API.getSelection().find( "img" );
        $img = $img.height( $img.height() * 1.5 );
    }
});


Aloha.ui.addInsertButton( "Image", {
    element: "img"
});



Aloha.cron.addTask(function() {
    // ...
});
Aloha.cron.addTransform( "b", "strong" );

Aloha.ui.addStyleButton( "Bold", {
    element: "strong",
});

Aloha.ui.addStyleButton( "Red", {
    // enabled when, and applies
    element: "p",
    style: {
        color: "red",
        fontSize: "30px"
    }
});


$( element ).aloha({
    toolbar: Aloha.toolbars.full
});


// Defined in Implementors Configuration
$( element ).aloha({
    toolbar: {
        Format: [
            ["Bold", "Italic", "Underline", "Formatting"],

            "headers", // regard as widget

            {
                type: "multiSplitArea",
                items: // ...
            },

            // Putting plugin code in configuration - not good
            new Aloha.ui.multiSplitArea({
                items: [
                    new Aloha.ui.imageButton( "h1", {
                        image: "h1".gif"
                    });
                ]
            });

        ],
        "Image Styles": [ "Bold", "Save" ]
    },
    headers: [ "h1", "h2", "h3", "normal", "blockquote" ]
});
// ^ triggers aloha.configured


Aloha.listen("aloha.configured", function(editor){
    // ^ required for access to editor.config

    /// Defined in Image Plugin
    Aloha.ui.addImageButton( "h1", {
        image: "h1.gif"
    });

    Aloha.ui.addMultiSplitArea( "headers", { // 52
        items: editor.config.headers // [ "headers.h1" ] // 76
    });
});


// Events
aloha.configured
aloha.toolbar.ready





$( element ).aloha({
    toolbar: [
        {
            label: "Format",
            controls: [ "Bold", "Italic", "Underline" ]
        }
    ]
});



$( element ).aloha({
    toolbar: {
        Format: [
            [ "Bold", "Italic", "Underline", "Formatting" ],
            [ "H1", "H2", "H3" ]
        ]
    }
});
