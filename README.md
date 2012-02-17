jquery.ui.notify: growl like notifications styled with themeroller
===================================================================

[https://github.com/itbrig/jquery.ui.notify](https://github.com/itbrig/jquery.ui.notify)

Report issues: [https://github.com/itbrig/jquery.ui.notify/issues](https://github.com/itbrig/jquery.ui.notify/issues)

Simple growl like notifications styled with themeroller classes.

## License

Copyright (c) 2012 Hannes Forsgård
Licensed under the WTFPL (http://sam.zoy.org/wtfpl/)

## Usage

Simple notification

    $.notify({
        text: 'Notification text'
    });

Change duration

    $.notify({
        text: 'Notification text',
        timeout: 1000
    });


Sticky

    $.notify({
        text: 'Notification text',
        remove: false
    });

Themeing

    $.notify({
        text: 'Notification text',
        icon: 'ui-icon-alert',
        state: 'ui-state-error'
    });

Setting effects

    $.notify({
        text: 'Notification text',
        inEffect: {height: 'toggle'},
        outEffect: {width: '0'},
        effectTime: 200
    });

Trigger notification remove

    var $notice = $.notify({
        text: 'Notification text',
        remove: false
    });
    $notice.click();

Removing all notifications

    $('.notify-wrap .notify-item').click();

