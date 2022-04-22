import React from 'react';
import {Text} from 'react-native';
import withCodePush from './codepush';

class App2 extends React.Component {
  render() {
    return (
      <>
        <Text>hello i am a react native app</Text>
        <Text>testing codepush4444</Text>
        <Text>testing codepush4444</Text>
        <Text>testing codepush4444</Text>
        <Text>testing codepush4444</Text>
      </>
    );
  }
}

export default withCodePush(App2);
