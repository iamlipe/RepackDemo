import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import App1 from './modules/App1';
import App2 from './modules/App2';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <App1 />
        <App2 />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
