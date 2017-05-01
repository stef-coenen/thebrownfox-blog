window.Lube = (function($, ns) {
    'use strict';

    var cfg = {
        cache: {
            topEqualHeightBoxes: [
                //{ selector: '.testimonial > p', responsive: true, ignoreOffset: true }
            ]
        },
        classes: {
            scrolling: 'scrolling'
        },
        events: {
            scroll: 'scroll'
        }
    };

    ns.Dom = {
        init: function() {
            var settings = cfg,
                classes = settings.classes,
                events = settings.events,
                cache = settings.cache;

            this.win = $(window);
            this.body = $(document.body);

            this.bindEvents(classes, events);
            this.windowsPhoneViewportFix();
            this.bindScrollTopEvent();
        },

        bindEvents: function(classes, events) {
            var self = this,
                settings = cfg,
                cache = settings.cache;

            this.win.on(events.scroll, function() {
                self.body.addClass(classes.scrolling);

                ns.fn.delayedEvent(function() {
                    self.body.removeClass(classes.scrolling);
                }, 100, events.scroll);
            });

            this.win.on(events.resize, function() {
                ns.fn.delayedEvent(function() {
                    self.topEqualHeightHandler(cache.topEqualHeightBoxes, true);
                }, 200, 'resizeEqualHeight');
            });

            this.win.on(events.load, function() {
                self.topEqualHeightHandler(cache.topEqualHeightBoxes, false);
            });
        },

        windowsPhoneViewportFix: function() {
            // Copyright 2014-2015 Twitter, Inc.
            // Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
            if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
                var msViewportStyle = document.createElement('style');
                msViewportStyle.appendChild(
                    document.createTextNode(
                        '@-ms-viewport{width:auto!important}'
                    )
                );
                document.querySelector('head').appendChild(msViewportStyle);
            }
        },
        bindScrollTopEvent: function() {
            var self = this;
            $('a[href="#top"]').click(function() {
                self.body.animate({ scrollTop: 0 }, "slow");
                return false;
            });
        }
    };

    return ns;
}(window.jQuery, window.Lube || {}));
