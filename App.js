import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Modal,
  ActivityIndicator,
  Platform,
} from 'react-native';
import codePush from 'react-native-code-push';

const codePushVersion = {
  'ios-test-variant-one': 'UVMEGI3ERLWZ6RCMH3xACllVYc-fUYMvl6r1q',
  'ios-Staging': 'Yf5XtYTLNxIH0n54fWcJUdDI8j7_Ub0YQRD_E',
  'ios-Production': '0rUrP1WJanW1mXkg9WMqZ-AOxbyPD2HEd1CGK',
  'android-Staging': '_ciLkroQsmo3RqutxTkLkba29UZp9qTSsyQQ-',
  'android-Production': 'rw_GyQFoqWsLLXbgHRuo6DBewlN0IVXudnoeW',
};

let codePushOptions = {checkFrequency: codePush.CheckFrequency.MANUAL};

const App = () => {
  const [progress, setProgress] = useState(false);

  useEffect(() => {
    codePush.sync(
      {
        deploymentKey: codePushVersion['android-Staging'],
        updateDialog: true,
        installMode: codePush.InstallMode.IMMEDIATE,
      },
      codePushStatusDidChange,
      codePushDownloadDidProgress,
    );
  }, []);

  function codePushStatusDidChange(syncStatus) {
    switch (syncStatus) {
      case codePush.SyncStatus.CHECKING_FOR_UPDATE:
        console.log('Checking for update.');
        break;
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        console.log('Download packaging....');
        break;
      case codePush.SyncStatus.AWAITING_USER_ACTION:
        console.log('Awaiting user action....');
        break;
      case codePush.SyncStatus.INSTALLING_UPDATE:
        console.log('Installing update');
        setProgress(false);
        break;
      case codePush.SyncStatus.UP_TO_DATE:
        console.log('codepush status up to date');
        break;
      case codePush.SyncStatus.UPDATE_IGNORED:
        console.log('update cancel by user');
        setProgress(false);
        break;
      case codePush.SyncStatus.UPDATE_INSTALLED:
        console.log('Update installed and will be applied on restart.');
        setProgress(false);
        break;
      case codePush.SyncStatus.UNKNOWN_ERROR:
        console.log('An unknown error occurred');
        setProgress(false);
        break;
    }
  }

  function codePushDownloadDidProgress(progress) {
    setProgress(progress);
  }

  console.log('progress value++', progress);

  const showProgressView = () => {
    return (
      <Modal visible={true} transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.8)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 15,
              padding: 10,
              paddingHorizontal: 50,
            }}>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
              Update The application
            </Text>
            <Text style={{textAlign: 'center', marginTop: 10}}>
              In Progress
            </Text>

            <View style={{alignItems: 'center'}}>
              <Text style={{marginTop: 16}}>{`${(
                Number(progress?.receivedBytes) / 1048576
              ).toFixed(2)} MB / ${(
                Number(progress?.totalBytes) / 1048576
              ).toFixed(2)}`}</Text>
              <ActivityIndicator
                size={'large'}
                style={{marginVertical: 10}}
                color={'blue'}
              />
              <Text>
                {(
                  (Number(progress?.receivedBytes) /
                    Number(progress?.totalBytes)) *
                  100
                ).toFixed(0)}
                %
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#a832a8', marginHorizontal: 0}}>
      <StatusBar barStyle={'dark-content'} />
      {!!progress ? showProgressView() : null}

      {Platform.OS == 'android' ? (
        <>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <Image
              style={{width: 250, height: 60}}
              source={{
                uri: 'https://devblogs.microsoft.com/xamarin/wp-content/uploads/sites/44/2019/10/AppCenter_Logo.png',
              }}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Android App Version : 1.0 (1)
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Playstore: NO [code push connection no]
            </Text>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              CodePush Update: Yes
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              CodePush Version: 5.0
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
              code push staging
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
              Changes: 1 #a832a8 color set
            </Text>
          </View>
        </>
      ) : (
        <>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <Image
              style={{width: 250, height: 60}}
              source={{
                uri: 'https://devblogs.microsoft.com/xamarin/wp-content/uploads/sites/44/2019/10/AppCenter_Logo.png',
              }}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              App Stroe Version : 1.0 (1)
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              TestFlight Upload: Yes [code push connection no]
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Build Schema: Debuge
            </Text>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              CodePush Update: Yes
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              CodePush Version: 3.0 [codepush code app/xcode version: 1.0(1) not
              change]
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
              code push staging
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
              Changes: 1 codepush upload and background color green and header
              image change
            </Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default codePush(codePushOptions)(App);
