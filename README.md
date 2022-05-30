```
appcenter login [in termical]
appcenter user name: rajan.devstree-gmail.com
appcenter codepush deployment list --app rajan.devstree-gmail.com/RnAppCenterSet -k
```

┌──────────────────┬───────────────────────────────────────┐
│ Name             │     Key                               |
├──────────────────┼───────────────────────────────────────┤
│ test-variant-one │ UVMEGI3ERLWZ6RCMH3xACllVYc-fUYMvl6r1q │
├──────────────────┼───────────────────────────────────────┤
│ Staging          │ Yf5XtYTLNxIH0n54fWcJUdDI8j7_Ub0YQRD_E │
├──────────────────┼───────────────────────────────────────┤
│ Production       │ 0rUrP1WJanW1mXkg9WMqZ-AOxbyPD2HEd1CGK │
└──────────────────┴───────────────────────────────────────┘
```
appcenter codepush release-react -a rajan.devstree-gmail.com/RnAppCenterSet -d Staging

appcenter codepush release-react -a rajan.devstree-gmail.com/RnAppCenterSet -d Production
```
```
// New production / stating / developer create karvana mate [test-variant-one change]
appcenter codepush deployment add -a rajan.devstree-gmail.com/RnAppCenterSet test-variant-one

// prodction /stating /developer code new update karva mate: new verion [test-variant-one change]
appcenter codepush release-react -a rajan.devstree-gmail.com/RnAppCenterSet -d test-variant-one
```

### ================================ANDROID=========================
```
appcenter codepush release-react -a rajan.devstree-gmail.com/RnAppCenterSet-android -d Staging

appcenter codepush release-react -a rajan.devstree-gmail.com/RnAppCenterSet-android -d Production
```