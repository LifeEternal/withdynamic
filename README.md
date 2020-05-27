# Cordova plugin for [Firebase](https://firebase.google.com)

This plugin is mix of https://github.com/arnesson/cordova-plugin-firebase and https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks. There were done some changes to both of the plugins so it works correctly on OutSystems Mobile Apps.

You can check the available API in [here](https://github.com/OutSystemsExperts/cordova-plugin-firebase/blob/v1.0.0-os/docs/API.md) and [here](https://github.com/OutSystemsExperts/cordova-plugin-firebase-dynamiclinks/tree/v1.0.0-os). The methods names are the same and you can use the API as in their docs. But for simplicity, you call the method calling `Firebase.method()`.

For example, instead of:
```
FirebasePlugin.getToken(function(token) {
    // save this server-side and use it to push notifications to this device
    console.log(token);
}, function(error) {
    console.error(error);
});
``` 
You can call: 
```
Firebase.getToken(function(token) {
    // save this server-side and use it to push notifications to this device
    console.log(token);
}, function(error) {
    console.error(error);
});
``` 

## Index

<!-- MarkdownTOC levels="2" autolink="true" -->

  - [Index](#index)
  - [Plugin Explanation](#plugin-explanation)
  - [Supported Platforms](#supported-platforms)
  - [Installation](#installation)

<!-- /MarkdownTOC -->

## Plugin Explanation

This plugin has as dependencies the cordova-plugin-firebase, for the usage of Firebase Analytics, Firebase Cloud Messaging and many more and cordova-plugin-firebase-dynamiclinks

## Supported Platforms
- iOS
- Android
  
## Installation

$ cordova plugin add outsystems-cordova-plugin-firebase-with-dynamiclinks --variable APP_DOMAIN="example.com" --variable PAGE_LINK_DOMAIN="example.page.link"

Use variable `APP_DOMAIN` specify web URL where your app will start an activity to handle the link.

Use variable `PAGE_LINK_DOMAIN` specify your `*.page.link` domain.

Use variable `FIREBASE_DYNAMIC_LINKS_VERSION` and `FIREBASE_CORE_VERSION` to override dependency version on Android.

