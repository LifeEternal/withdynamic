var exec = require('cordova/exec');

module.exports = {
    onDynamicLink: function(onSuccess, onError) {
        cordova.plugins.firebase.dynamiclinks.onDynamicLink(onSuccess, onError);
    },

    createDynamicLink: function(params) {
        return cordova.plugins.firebase.dynamiclinks.createDynamicLink(params);
    },
    
    createShortDynamicLink: function(params) {
        return cordova.plugins.firebase.dynamiclinks.createShortDynamicLink(params);
    },

    createUnguessableDynamicLink: function(params) {
        return cordova.plugins.firebase.dynamiclinks.createUnguessableDynamicLink(params);
    },

    getVerificationID: function(number, success, error) {
        FirebasePlugin.getVerificationID(number, success, error);
    },

    getInstanceId: function (success, error) {
        FirebasePlugin.getInstanceId(success, error);
    },

    getId: function (success, error) {
        FirebasePlugin.getId(success, error);
    },

    getToken: function (success, error) {
        FirebasePlugin.getToken(success, error);
    },
      
    onNotificationOpen: function (success, error) {
        FirebasePlugin.onNotificationOpen(success, error);
    },
      
    onTokenRefresh: function (success, error) {
        FirebasePlugin.onTokenRefresh(success, error);
    },

    grantPermission: function (success, error) {
        FirebasePlugin.grantPermission(success, error);
    },
      
    hasPermission: function (success, error) {
        FirebasePlugin.hasPermission(success, error);
    },
      
    setBadgeNumber: function (number, success, error) {
        FirebasePlugin.setBadgeNumber(number, success, error);
    },
      
    getBadgeNumber: function (success, error) {
        FirebasePlugin.getBadgeNumber(success, error);
    },
      
    subscribe: function (topic, success, error) {
        FirebasePlugin.subscribe(topic, success, error);
    },
      
    unsubscribe: function (topic, success, error) {
        FirebasePlugin.unsubscribe(topic, success, error);
    },
      
    unregister: function (success, error) {
        FirebasePlugin.unregister(success, error);
    },
      
    logEvent: function (name, params, success, error) {
        FirebasePlugin.logEvent(name, params, success, error);
    },
      
    logError: function (message, success, error) {
        FirebasePlugin.logError(message, success, error);
    },
      
    setCrashlyticsUserId: function (userId, success, error) {
        FirebasePlugin.setCrashlyticsUserId(userId, success, error);
    },
      
    setScreenName: function (name, success, error) {
        FirebasePlugin.setScreenName(name, success, error);
    }, 

    setUserId: function (id, success, error) {
        FirebasePlugin.setUserId(id, success, error);
    },
      
    setUserProperty: function (name, value, success, error) {
        FirebasePlugin.setUserProperty(name, value, success, error);
    },
      
    activateFetched: function (success, error) {
        FirebasePlugin.activateFetched(success, error);
    },
      
    fetch: function (cacheExpirationSeconds, success, error) {
        FirebasePlugin.fetch(cacheExpirationSeconds, success, error);
    },
      
    getByteArray: function (key, namespace, success, error) {
        FirebasePlugin.getByteArray(key, namespace, success, error);
    },

    getValue: function (key, namespace, success, error) {
        FirebasePlugin.getValue(key, namespace, success, error);
    },
      
    getInfo: function (success, error) {
        FirebasePlugin.getInfo(success, error);
    },
      
    setConfigSettings: function (settings, success, error) {
        FirebasePlugin.setConfigSettings(settings, success, error);
    },
      
    setDefaults: function (defaults, namespace, success, error) {
        FirebasePlugin.setDefaults(defaults, namespace, success, error);
    },
      
    incrementCounter: function (name, counterNamed, success, error) {
        FirebasePlugin.incrementCounter(name, counterNamed, success, error);
    },

    stopTrace: function (name, success, error) {
        FirebasePlugin.stopTrace(name, success, error);
    },
      
    setAnalyticsCollectionEnabled: function (enabled, success, error) {
        FirebasePlugin.setAnalyticsCollectionEnabled(enabled, success, error);
    },
      
    setPerformanceCollectionEnabled: function (enabled, success, error) {
        FirebasePlugin.setPerformanceCollectionEnabled(enabled, success, error);
    },
      
    verifyPhoneNumber: function (number, timeOutDuration, success, error) {
        FirebasePlugin.verifyPhoneNumber(number, timeOutDuration, success, error);
    },
      
    clearAllNotifications: function (success, error) {
        FirebasePlugin.clearAllNotifications(success, error);
    },

    startTrace: function (name, success, error) {
        FirebasePlugin.startTrace(name, success, error);
    },

    forceCrashlytics: function (success, error) {
        FirebasePlugin.forceCrashlytics(success, error);
    },

    addTraceAttribute: function (traceName, attribute, value, success, error) {
        FirebasePlugin.addTraceAttribute(traceName, attribute, value, success, error);
    }
};
