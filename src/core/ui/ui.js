Aloha.Ui = Aloha.awesomeize({

	// ----------------------------------------------------------------------
	// Button

	/**
	 * Button Widget Options
	 * Defined by the Adapter
	 */
	defaultButtonConfig: {},

	/**
	 * Create Button
	 * http://jqueryui.com/demos/button/
	 * @param {String} id
	 * @param {Object} config
	 * @return {jQuery} button
	 */
	createButton: function(id,config){
		// Normalise Widget Config
		config.widget = config.widget||{};
		config.widget.addDefaults

		// Create jQuery UI Button
		var $button = $('<div>')
			.attr({
				id: id
			})
			.button(config.widget);

		// Return
		return $button;
	},

	/**
	 * Create Format Button
	 * Formats the Selected Element
	 */
	createFormatButton: function(id,config){
		// Creare
		var $button = Aloha.Ui.createButton();

		// Bind
		var clickEvent = function(){
				var $selection = Aloha.getSelection();
				$(config.element).css(config.css).after($selection);
		};
    $button.click(clickEvent);

    // Return
    return $button;
  },

	/**
	 * Create Insert Button
	 * Inserts an Element next to the Selected Element
	 */
	createInsertButton: function(id,config){
		// Creare
		var $button = Aloha.Ui.createButton();

		// Bind
		var clickEvent = function(){
				var $selection = Aloha.getSelection();
				$(config.element).css(config.css).after($selection);
		};
    $button.click(clickEvent);

    // Return
    return $button;
	}

});
