/**
 * Copyright (c) 2012 Hannes Forsgård
 * Licensed under the WTFPL (http://sam.zoy.org/wtfpl/)
 * @fileOverview jquery.ui.notify: growl like notifications styled with themeroller
 * @version 1.0.0
 * @requires jQuery
 * @author Hannes Forsgård <hannes.forsgard@gmail.com>
 */
(function($){
    $.extend({
        notify: function(options){
            // Apply standard settings
            options = $.extend({
                inEffect:   {opacity: 'show'},  // In effect
                outEffect:  {opacity: '0'},     // Out effect
                effectTime: 100,                // Effect duration in miliseconds
                timeout:    5000,               // Timeout in miliseconds before item is removed
                text:       '',                 // Item text
                remove:     true,               // Should item be removed after timeout
                state:      'highlight',        // jquery-ui state (anything that makes a valid ui-state- class
                icon:       'info',             // jquery-ui icon (anything that makes a vlid ui-icon- class
            }, options);

            // Create item
            var $text = $('<p>').html(options.text);
            
            if ( options.icon ) {
                var $icon = $('<span>').addClass('ui-icon ui-icon-' + options.icon);
                $text.prepend($icon);
            }
            
            var $item = $('<div>')
                .hide()
                .addClass('notify-item  ui-corner-all ui-state-' + options.state)
                .append($text)
                .animate(options.inEffect, options.effectTime)
                .click(function() {
                    $(this).animate(options.outEffect, options.effectTime, function(){
                        $(this).animate({height: '0px'}, options.effectTime, function(){
                            $(this).remove();
                        });
                    });
                })
                .hover(function(){
                    $(this).addClass('ui-state-disabled');
                }, function(){
                    $(this).removeClass('ui-state-disabled');
                });

            // Append to wrapper, create if needed
            var $wrap = $('.notify-wrap');
            if ( $wrap.length == false ) {
                var $wrap = $('<div>').addClass('notify-wrap ui-widget').appendTo('body');
            }
            $wrap.append($item);

            // IE 6 fix
            if ( navigator.userAgent.match(/MSIE 6/i) ) {
                $wrap.css({top: document.documentElement.scrollTop});
            }

            // Autoremove
            if ( options.remove ) {
                setTimeout(function(){
                    if ( $item && $item.click ) {
                        $item.click();
                    }
                },
                options.timeout);
            }

            return $item;
        }
    });
})(jQuery);
