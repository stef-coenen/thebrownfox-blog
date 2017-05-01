/**
 * @author       [Stef Coenen & Tim Vermaelen]
 * @date         [2016]
 * @link         [http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html]
 * @namespace    [Lube.Toggle]
 * @requires     [jQuery, Lube]
 * @revision     [0.1]
 */

/**
 * @param {Function} $ : jQuery library
 * @param {Object} ns : Lube namespace
 */
window.Lube = (function ($, ns) {

    // 1. ECMA-262/5
    'use strict';

    // 2. CONFIGURATION
    var cfg = {
        cache: {
            container: '[data-toggle="collapse"]'
        },
        classes: {
            active: 'active'
        },
        data: {
            target: 'target'
        },
        events: {
            click: 'click'
        }
    };

    // 3. CONSTRUCTOR
    ns.Toggle = function (options) {
        this.settings = $.extend(true, {}, cfg, options);
        this.init();
    };

    // 3. PROTOTYPE OBJECT
    ns.Toggle.prototype = {

        version: 0.1,

        init: function () {
            var self = this;

            this.cacheItems();

            $.each(this.container, function () {
                self.bindEvents($(this));
            });
        },

        cacheItems: function () {
            this.container = $(this.settings.cache.container);
        },

        /**
         * @param {Object} parent : jquery object
         */
        bindEvents: function (toggleControl) {
            var settings = this.settings,
                cache = settings.cache,
                classes = settings.classes,
                data = settings.data,
                events = settings.events;

            toggleControl.on(events.click, function (e) {
                var el = $(this),
                    toggleElement = $(el.data(data.target));

                toggleElement.toggleClass(classes.active);

                return false;
            });
        }
    };

    // 4. GLOBALIZE OBJECT
    return ns;

}(window.jQuery, window.Lube || {}));
