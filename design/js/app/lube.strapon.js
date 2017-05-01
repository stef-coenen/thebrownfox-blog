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
window.Lube = (function ($, ns) {

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

}(window.jQuery, window.Lube || {}));
