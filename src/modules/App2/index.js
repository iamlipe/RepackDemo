import React from 'react';
import {Text} from 'react-native';

const Component = React.lazy(() =>
  import(/* webpackChunkName: "localModule" */ './App'),
);

export default () => (
  <React.Suspense fallback={<Text>Loading Local Module...</Text>}>
    <Component />
  </React.Suspense>
);
