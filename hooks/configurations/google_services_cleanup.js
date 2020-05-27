var path = require("path");
var utils = require("./utilities");

var constants = {
    googleServices: "google-services"
};

module.exports = function (context) {
    return new Promise(function (resolve, reject) {

        var projectRoot = context.opts.projectRoot;
        var platform = context.opts.plugin.platform;
        var platformPath = path.join(projectRoot, "platforms", platform);
        var wwwfolder;

        if (platform === "android") {
            var cordovaAbove7 = utils.isCordovaAbove(context, 7);
            if (cordovaAbove7) {
                wwwfolder = "app/src/main/assets/www";
            } else {
                wwwfolder = "assets/www";
            }
        } else if (platform === "ios") {
            wwwfolder = "www";
        }

        var wwwPath = path.join(platformPath, wwwfolder);
        var configPath = path.join(wwwPath, "google-services");
        utils.rmNonEmptyDir(configPath)

        return resolve();
    });
};