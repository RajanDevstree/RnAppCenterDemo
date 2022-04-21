appcenter login [in termical]
APPCNTER ACCESS BROWSER: 264ed66b8d0bc09a9d5cac35ea3ad05085be6190

appcenter user name: rajan.devstree-gmail.com



appcenter codepush deployment list --app rajan.devstree-gmail.com/RnAppCenterSet -k
┌────────────┬───────────────────────────────────────┐
│ Name       │ Key                                   │
├────────────┼───────────────────────────────────────┤
│ Staging    │ Yf5XtYTLNxIH0n54fWcJUdDI8j7_Ub0YQRD_E │
├────────────┼───────────────────────────────────────┤
│ Production │ 0rUrP1WJanW1mXkg9WMqZ-AOxbyPD2HEd1CGK │
└────────────┴───────────────────────────────────────┘

appcenter codepush release-react -a rajan.devstree-gmail.com/RnAppCenterSet -d Staging

appcenter codepush release-react -a rajan.devstree-gmail.com/RnAppCenterSet -d Production