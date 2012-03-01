jquery.ui.notify: growl like notifications styled with themeroller
==================================================================

[https://github.com/itbrig/jquery.ui.notify](https://github.com/itbrig/jquery.ui.notify)

Report issues: [https://github.com/itbrig/jquery.ui.notify/issues](https://github.com/itbrig/jquery.ui.notify/issues)

Simple growl like notifications styled with themeroller css classes.

## License

Copyright (c) 2012 Hannes Forsgård
Licensed under the WTFPL (http://sam.zoy.org/wtfpl/)

## Usage

Simple notification

    $('#notify-wrap').notify({
        text: 'Notification text'
    });

Change duration

    $('#notify-wrap').notify({
        text: 'Notification text',
        timeout: 1000
    });


Sticky

    $('#notify-wrap').notify({
        text: 'Notification text',
        remove: false
    });

Themeing

    $('#notify-wrap').notify({
        text: 'Notification text',
        icon: 'ui-icon-alert',
        state: 'ui-state-error'
    });

Setting effects

    $('#notify-wrap').notify({
        text: 'Notification text',
        inEffect: {height: 'toggle'},
        outEffect: {width: '0'},
        effectTime: 200
    });
