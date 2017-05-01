'use strict';

window.Lube = function ($, ns) {
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
        init: function init() {
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

        bindEvents: function bindEvents(classes, events) {
            var self = this,
                settings = cfg,
                cache = settings.cache;

            this.win.on(events.scroll, function () {
                self.body.addClass(classes.scrolling);

                ns.fn.delayedEvent(function () {
                    self.body.removeClass(classes.scrolling);
                }, 100, events.scroll);
            });

            this.win.on(events.resize, function () {
                ns.fn.delayedEvent(function () {
                    self.topEqualHeightHandler(cache.topEqualHeightBoxes, true);
                }, 200, 'resizeEqualHeight');
            });

            this.win.on(events.load, function () {
                self.topEqualHeightHandler(cache.topEqualHeightBoxes, false);
            });
        },

        windowsPhoneViewportFix: function windowsPhoneViewportFix() {
            // Copyright 2014-2015 Twitter, Inc.
            // Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
            if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
                var msViewportStyle = document.createElement('style');
                msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
                document.querySelector('head').appendChild(msViewportStyle);
            }
        },
        bindScrollTopEvent: function bindScrollTopEvent() {
            var self = this;
            $('a[href="#top"]').click(function () {
                self.body.animate({ scrollTop: 0 }, "slow");
                return false;
            });
        }
    };

    return ns;
}(window.jQuery, window.Lube || {});
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
* @author       [Stef Coenen & Tim Vermaelen]
* @date         [2016]
* @namespace    [Lube.fn]
* @type         [Functions]
* @requires     [jQuery, Lube]
* @revision     [0.1]
*/

// @param ($): window.jQuery
// @param (ns): window.Lube
window.Lube = function ($, ns) {

    // 1. ECMA-262/5
    'use strict';

    // 2. CONFIGURATION

    var cfg = {
        patterns: {
            mobile: new RegExp(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i),
            mobile2: new RegExp(/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/),
            tablet: new RegExp(/android|ipad|playbook|silk/i)
        },
        devices: {
            mobile: 'mobile',
            tablet: 'tablet',
            desktop: 'desktop'
        },
        delimiter: {
            key: '&',
            val: '='
        }
    };

    // 3. FUNCTIONS OBJECT
    ns.fn = {

        /**
         * @description Device detection
         * http://detectmobilebrowsers.com
         * @param {String} dvc : user agent string
         * @return {String} mobile | tablet | desktop
         */
        deviceDetection: function (dvc) {
            var cfgPatterns = cfg.patterns,
                cfgDevice = cfg.devices;

            return cfgPatterns.mobile.test(dvc) || cfgPatterns.mobile2.test(dvc.substr(0, 4)) ? cfgDevice.mobile : cfgPatterns.tablet.test(dvc) ? cfgDevice.tablet : cfgDevice.desktop;
        }(navigator.userAgent || navigator.vendor || window.opera),

        /**
         * @description Render html template with json data
         * @see handlebars or mustache if you need more advanced functionlity
         * @param {Object} obj
         * @param {String} template : html template with {{keys}} matching the object
         * @return {String} template : the template string replaced by key:value pairs from the object
         */
        renderTemplate: function renderTemplate(obj, template) {
            var tempKey, reg, key;

            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    tempKey = String('{{' + key + '}}');
                    reg = new RegExp(tempKey, 'g');
                    template = template.replace(reg, obj[key]);
                }
            }

            return template;
        },

        /**
         * @description A (possibly faster) way to get the current timestamp as an integer.
         */
        now: Date.now || function () {
            return new Date().getTime();
        },

        /**
         * @description Defers a function, scheduling it to run after the current call stack has cleared.
         * @param {Function} func
         */
        defer: function defer(func) {
            return this.delay.apply(null, [func, 1].concat([].slice.call(arguments, 1)));
        },

        /**
         * @description Delays a function for the given number of milliseconds, and then calls it with the arguments supplied.
         * @param {Function} func
         * @param (Integer) wait : milliseconds
         */
        delay: function delay(func, wait) {
            var args = [].slice.call(arguments, 2);

            return setTimeout(function () {
                return func.apply(null, args);
            }, wait);
        },

        /**
         * @description Returns a function, that, when invoked, will only be triggered at most once during a given window of time.
         * @param {Function} func
         * @param {Integer} wait : milliseconds
         * @param {Boolean} options.leading : disable the execution on the leading edge. To disable execution on the trailing edge, ditto.
         */
        throttle: function throttle(func, wait, options) {
            var context, args, result;
            var timeout = null;
            var previous = 0;

            options = options || {};

            var later = function later() {
                previous = options.leading === false ? 0 : Lube.fn.now();
                timeout = null;
                result = func.apply(context, args);
                context = args = null;
            };

            return function () {
                var now = Lube.fn.now();

                if (!previous && options.leading === false) {
                    previous = now;
                }

                var remaining = wait - (now - previous);

                context = this;
                args = arguments;

                if (remaining <= 0) {
                    clearTimeout(timeout);
                    timeout = null;
                    previous = now;
                    result = func.apply(context, args);
                    context = args = null;
                } else if (!timeout && options.trailing !== false) {
                    timeout = setTimeout(later, remaining);
                }

                return result;
            }();
        },

        /**
         * @description Returns a function, that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for N milliseconds.
         * @param {Function} func
         * @param {Integer} wait : milliseconds
         * @param {Boolean} immediate : if immediate is passed, trigger the function on the leading edge, instead of the trailing.
         */
        debounce: function debounce(func, wait, immediate) {
            var self = this,
                timeout,
                args,
                context,
                timestamp,
                result;

            var later = function later() {
                var last = self.now() - timestamp;
                if (last < wait) {
                    timeout = setTimeout(later, wait - last);
                } else {
                    timeout = null;
                    if (!immediate) {
                        result = func.apply(context, args);
                        context = args = null;
                    }
                }
            };

            return function () {
                context = this;
                args = arguments;
                timestamp = self.now();

                var callNow = immediate && !timeout;
                if (!timeout) {
                    timeout = setTimeout(later, wait);
                }
                if (callNow) {
                    result = func.apply(context, args);
                    context = args = null;
                }

                return result;
            }();
        },

        /**
         * @description delay events with the same id, good for window resize events, keystroke, etc ...
         * @param {Function} func : callback function to be run when done
         * @param {Integer} wait : integer in milliseconds
         * @param {String} id : unique event id
         */
        delayedEvent: function () {
            var timers = {};

            return function (func, wait, id) {
                wait = wait || 200;
                id = id || 'anonymous';

                if (timers[id]) {
                    clearTimeout(timers[id]);
                }

                timers[id] = setTimeout(func, wait);
            };
        }(),

        /**
         * @description Equally set height on items
         * @param {Object} elements : jquery list
         */
        equalHeight: function equalHeight(elements) {
            var el = $(elements),
                len = el.length || 0,
                heighest = 0;

            if (len > 1) {
                while (len--) {
                    var h = el.eq(len).outerHeight(true);

                    if (h > heighest) {
                        heighest = h;
                    }
                }

                el.outerHeight(heighest);
            }
        },

        /**
         * @description Convert a query alike string to an object literal
         * @param {String} qs : a query string of key value pairs (without ?)
         * @param {String} keyDelimiter : character between values and keys
         * @param {String} valDelimiter : character between keys and values
         * @return {Object} obj : object literal representing the query string
         * @example: key1=val1&key2=val2&key3=val3
         */
        convertQsToLiteral: function convertQsToLiteral(qs, keyDelimiter, valDelimiter) {
            var arrParams,
                obj = {};

            if (qs && qs.length) {
                keyDelimiter = keyDelimiter || cfg.delimiter.key;
                valDelimiter = valDelimiter || cfg.delimiter.val;
                arrParams = qs.split(keyDelimiter);

                $.each(arrParams, function (i, pair) {
                    var arrPair = pair.split(valDelimiter),
                        key = arrPair[0],
                        val = arrPair[1];

                    obj[key] = val;
                });
            }

            return obj;
        },

        /**
         * @description Get an object from a list of objects by searching for a key:value pair
         * @param {Object} obj : -literal, json
         * @param {String} val : the value you seek
         * @param {String} key : the key
         * @param {Boolean} isTypeComparison : if set to true, the key and value will be checked against it's type as well
         */
        getObjectProperty: function getObjectProperty(obj, val, key, isTypeComparison) {
            var property, o;

            for (property in obj) {
                if (obj.hasOwnProperty(property)) {
                    if (_typeof(obj[property]) === 'object') {
                        o = this.getObjectProperty(obj[property], val, key);
                        if (o) {
                            break;
                        }
                    } else {
                        // found a property which is not an object
                        if (isTypeComparison) {
                            if (property === key && obj[property] === val) {
                                // we got a match
                                o = obj;
                                break;
                            }
                        } else {
                            if (property == key && obj[property] == val) {
                                // we got a match
                                o = obj;
                                break;
                            }
                        }
                    }
                }
            }

            return o || undefined;
        },

        pageOffset: function pageOffset() {
            var supportPageOffset = window.pageXOffset !== undefined;
            var isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';

            return {
                x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
                y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
            };
        }
    };

    // 4. NAMESPACE
    return ns;
}(window.jQuery, window.Lube || {});
'use strict';

/**
 * @author       [Stef Coenen & Tim Vermaelen]
 * @date         [2016]
 * @namespace    [Lube.GoogleMaps]
 * @requires     [jQuery, Google.Maps, Lube]
 * @revision     [0.1]
 */

/**
 * Callback function, that is called upon completion of the async loading of the google maps api;
 */
function asyncGoogleMaps() {}

/**
 * @param {Function} $ - jQuery library
 * @param {Object} google - Google namespace
 * @param {Object} ns - Lube namespace
 */
window.Lube = function ($, google, ns) {
    'use strict';

    var cfg = {
        cache: {
            container: '[data-component="map"]'
        },
        classes: {},
        data: {},
        events: {
            click: 'click',
            update: 'update'
        },
        options: {
            zoom: 10,
            disableDefaultUI: true,
            zoomControl: true,
            zoomControlOptions: {},
            styles: [{
                "featureType": "landscape",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 60
                }]
            }, {
                "featureType": "road.local",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 40
                }, {
                    "visibility": "on"
                }]
            }, {
                "featureType": "transit",
                "stylers": [{
                    "saturation": -100
                }, {
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "administrative.province",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "water",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "lightness": 30
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ef8c25"
                }, {
                    "lightness": 40
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#b6c54c"
                }, {
                    "lightness": 40
                }, {
                    "saturation": -40
                }]
            }, {}]
        },
        scripts: {
            maps: "//maps.googleapis.com/maps/api/js?signed_in=true&v=3.exp&libraries=geometry&key=AIzaSyBSMwwJVOZJmDDHtyWQsIRGDu-TZdF9LRM&callback=asyncGoogleMaps",
            infoBox: "/design/js/dist/infobox.min.js"
        }
    };

    ns.Googlemaps = function (options) {
        this.settings = $.extend(true, {}, cfg, options);

        this.cacheItems();
        this.bindEvents();

        this.init();
    };

    ns.Googlemaps.prototype = {
        init: function init() {
            var settings = this.settings,
                scripts = settings.scripts;

            this.markers = [];
            if (this.container && this.container.length) {
                if (google && google.hasOwnProperty("maps")) {
                    this.activate();
                } else {
                    this.getScripts(scripts, this.init.bind(this));
                }
            }
        },
        cacheItems: function cacheItems() {
            var settings = this.settings,
                cache = settings.cache;

            this.container = $(cache.container);
            this.map = this.container.children().first();
        },
        bindEvents: function bindEvents() {
            var self = this,
                settings = this.settings,
                events = settings.events;

            this.container.on(events.update, function (events, result) {
                self.loadMarkers(result.MapItems);
            });
        },
        getScripts: function getScripts(scripts, callback) {
            function errorHandler(n, t, scripts) {
                throw new Error(scripts);
            }

            $.getScript(scripts.maps).done(function () {
                google = window.google || {};
                callback();
            }).fail(errorHandler);
        },
        activate: function activate() {
            if (!this.map.length) {
                this.createMapElement();
            }
            var zoomLevel = this.container.data('zoom-level');
            if (zoomLevel !== undefined) {
                this.settings.options.zoom = this.zoomLevel;
                this.zoomLevel = zoomLevel;
            }
            this.calculateMap();
            this.renderMap();

            var singleMarkerAttr = this.container.data('single-marker');
            if (singleMarkerAttr !== undefined) {
                // Single marker configuration
                this.initSingleMarker();
            } else {
                // multi marker configuration
                this.initMarkers();
            }
        },
        createMapElement: function createMapElement() {
            this.map = $('<div></div>');
            this.map.height(this.container.outerHeight());
            this.container.append(this.map);
        },
        calculateMap: function calculateMap(n) {
            var settings = this.settings,
                options = settings.options,
                width = this.map.outerWidth(!!n),
                height = this.map.outerHeight(!!n) || width * parseFloat(options.mapRatio) || "100%";

            this.map.css({
                width: width,
                height: height
            });
        },

        renderMap: function renderMap() {
            var settings = this.settings,
                options = settings.options,
                map = $.extend({}, options, {
                center: new google.maps.LatLng(50.862651, 4.361408),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.TOP_LEFT
                }
            });
            this.instance = new google.maps.Map(this.map.get(0), map);
        },

        initSingleMarker: function initSingleMarker() {
            var self = this;
            this.initInfoBox();

            // Read in single marker data
            var addressAttribute = this.container.data('address'),
                latlngAttribute = this.container.data('latlng');
            if (addressAttribute) {
                // Parse address
                this.geocode(new google.maps.Geocoder(), addressAttribute, function (marker) {
                    self.toPlaceMarkers = [marker];
                    self.initMarkers();
                });
            } else if (latlngAttribute) {
                var latlngAttributeSplitted = latlngAttribute.split(','),
                    marker = {
                    name: this.container.data('name'),
                    content: this.container.data('content'),
                    point: latlngAttributeSplitted
                };

                self.toPlaceMarkers = [marker];
                self.initMarkers();
            }
        },

        geocode: function geocode(geocoder, address, callback) {
            var location = address.street + ' ' + address.number + ', ' + address.postalcode + ' ' + address.city;
            geocoder.geocode({ 'address': location }, function (results, status) {
                if (status === 'OK') {
                    var marker = {
                        name: address.name,
                        location: results[0].geometry.location,
                        content: location
                    };
                    callback(marker);
                } else {
                    console.error('Geocode was not successful for the following reason: ' + status);
                }
            });
        },

        initMarkers: function initMarkers() {
            this.initInfoBox();

            if (this.toPlaceMarkers !== undefined) {
                this.loadMarkers(this.toPlaceMarkers);
            }
        },

        initInfoBox: function initInfoBox() {
            var self = this,
                settings = this.settings,
                events = settings.events;

            this.infoBox = new google.maps.InfoWindow();
            this.infoBox.close();

            google.maps.event.addListener(this.instance, events.click, function () {
                self.infoBox.close();
            });
        },

        loadMarkers: function loadMarkers(newMarkers) {
            var self = this;

            function openMarker() {
                self.infoBox.close();
                self.infoBox.setOptions({ content: this.formatedText });
                self.infoBox.open(self.instance, this);
            }

            if (google === undefined || this.instance === undefined) {
                this.toPlaceMarkers = newMarkers;
            } else {
                this.removeMarkers(this.markers);

                var placesBounds = new google.maps.LatLngBounds();

                for (var i = 0; i < newMarkers.length; i++) {
                    var newMarker = newMarkers[i],
                        point;

                    if (newMarker.location instanceof google.maps.LatLng) {
                        point = newMarker.location;
                    } else {
                        point = new google.maps.LatLng(newMarker.point[0], newMarker.point[1]);
                    }

                    placesBounds.extend(point);

                    var marker = new google.maps.Marker({
                        draggable: false,
                        raiseOnDrag: false,
                        icon: newMarker.MarkerImage,
                        map: this.instance,
                        position: point
                    });

                    marker.formatedText = document.createElement("div");
                    marker.formatedText.innerHTML = '<h3>' + newMarker.name + '</h3><p>' + newMarker.content + '</p>';

                    google.maps.event.addListener(marker, "click", openMarker);

                    this.markers.push(marker);
                }

                if (this.markers.length > 1) {
                    this.instance.fitBounds(placesBounds);
                } else {
                    var latLng = this.markers[0].getPosition(); // returns LatLng object
                    this.instance.setCenter(latLng); // setCenter takes a LatLng object
                    this.instance.setZoom(this.zoomLevel || 2);
                }
            }
        },
        removeMarkers: function removeMarkers(markers) {
            $.each(markers, function () {
                this.setMap(null);
            });
            markers.length = 0;
        }
    };

    return ns;
}(window.jQuery, window.google || undefined, window.Lube || {});
'use strict';

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
window.Lube = function ($, ns) {

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

        init: function init() {
            var self = this;

            this.cacheItems();

            $.each(this.container, function () {
                self.bindEvents($(this));
            });
        },

        cacheItems: function cacheItems() {
            this.container = $(this.settings.cache.container);
        },

        /**
         * @param {Object} parent : jquery object
         */
        bindEvents: function bindEvents(toggleControl) {
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
}(window.jQuery, window.Lube || {});
'use strict';

/**
* [window.Lube]
*
* @author       [Stef Coenen & Tim Vermaelen]
* @date         [2016]
* @link         [https://github.com/timver/LubeJs.git]
* @namespace    [Lube]
* @requires     [jQuery]
* @revision     [0.1]
*/

/**
 * @param ($): jQuery
 * @param (ns): Namespace
 */
window.Lube = function ($, ns) {

    // 1. ECMA-262/5
    'use strict';

    // 2. PRIVATE CONFIGURATION OVERRIDE

    var cfg = {};

    // 3. LOAD COMPONENTS AND CLASSES
    ns.components = function () {
        ns.Dom.init();
    };

    ns.modules = function () {
        return {
            //toggle: new ns.Toggle(),
            googlemaps: new ns.Googlemaps()
        };
    };

    // 5. ONCE THE DOM IS READY
    $(function () {
        ns.components();
        ns.modules();
    });

    // 6. GLOBALIZE NAMESPACE
    return ns;
}(window.jQuery, window.Lube || {});