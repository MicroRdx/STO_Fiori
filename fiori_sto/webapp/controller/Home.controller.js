sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("fioristo.controller.Home", {
            onInit: function () {
                var settings = {
                    "url": this._getBaseURL() +"/",
                    "method": "POST",
                    "timeout": 0,
                    "headers": {
                      "Content-Type": "application/json"
                    },
                    "data": JSON.stringify({
                      "combo1": 4,
                      "combo2": 9
                    }),
                  };
                  
                  $.ajax(settings).done(function (response) {
                    console.log(response);
                  });

            },
            _getBaseURL: function () {
                var appId = this.getOwnerComponent().getManifestEntry("/sap.app/id");
                var appPath = appId.replaceAll(".", "/");
                var appModulePath = jQuery.sap.getModulePath(appPath);
                return appModulePath + "/STO_NodeJS_Service1";
            },
        });
    });
