/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {StatusBar, View, ScrollView, RefreshControl} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  const backgroundStyle = {
    backgroundColor: '#fafffe', // isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
      <View
        style={[
          backgroundStyle,
          {
            flex: 1,
          },
        ]}>
        <StatusBar barStyle={'dark-content'} />
        <View
          style={{
            flex: 1,
            height: '100%',
          }}>
          <Navigation />
        </View>
      </View>
    </SafeAreaProvider>
  );
};

function wait(milliseconds, then) {
  return new Promise(resolve => {
    setTimeout(() => {
      then();
      resolve();
    }, milliseconds);
  });
}

const List = () => {
  const [refreshing, setRefreshing] = useState(false);
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      refreshControl={
        <RefreshControl
          onRefresh={() => {
            return wait(2000, () => {
              setRefreshing(false);
            });
          }}
          style={{
            backgroundColor: '#ffff00',
          }}
          refreshing={refreshing}
          colors={['#ff00ff']}
          tintColor={'#ff00ff'}
        />
      }
      style={{flex: 1, backgroundColor: '#00fffa'}}>
      <View
        style={{
          backgroundColor: '#fffa00',
          position: 'absolute',
          top: 200,
          width: 200,
          height: 100,
        }}
      />
    </ScrollView>
  );
};

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerStyle: {
            backgroundColor: '#121212' + 'a0',
          },
          headerTitleStyle: {
            color: '#fff',
          },
        }}>
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
