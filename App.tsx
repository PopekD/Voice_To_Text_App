/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home/Home';
import Notes from './pages/Notes/Notes';
import { Svg,Path } from 'react-native-svg';
import { View, Text } from 'react-native';



function App(): JSX.Element {

  const Stack = createBottomTabNavigator();

  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ tabBarInactiveBackgroundColor: "#DF99C2", tabBarActiveBackgroundColor: "#DF99C2", headerStyle: { 
        backgroundColor: '#F5E3F5',
        },
        }}>
            <Stack.Screen name="Speech Notes"  component={Home} options={{headerTitleAlign: 'center', tabBarIcon(_props) {
              return <Svg
                width={30}
                height={30}
                viewBox="0 0 33 35"
                fill="none"
              >
                <Path
                  d="M32.239 13.992L17.61.655a2.518 2.518 0 00-3.467.072L.69 14.06l-.69.684v19.655h12.964V22.135h7.072V34.4H33V14.686l-.761-.694zM15.914 2.336c.02 0 .008.004-.001.013-.01-.009-.02-.013 0-.013zm14.729 29.727h-8.25v-9.928c0-.62-.248-1.213-.69-1.652a2.368 2.368 0 00-1.667-.684h-7.072c-.625 0-1.224.247-1.667.684a2.326 2.326 0 00-.69 1.652v9.928h-8.25V15.711L15.913 2.38c.002-.001.002-.002.002-.003l14.728 13.335v16.352z"
                  fill="#000"
                  fillOpacity={0.7}
                />
              </Svg>;
            },
          tabBarLabel: ({ focused }) => {
            return (
            <View>
                <Text style={{ color: focused ? 'white' : 'black', fontSize: 8 }}>Record</Text>
            </View>
            );
          },
            }}/>
        <Stack.Screen name="Notes" component={Notes} options={{
          headerTitleAlign: 'center', tabBarIcon(_props) {
            return <Svg
              width={30}
              height={30}
              viewBox="0 0 29 35"
              fill="none"
            >
              <Path
                d="M26.131 23.482l-5.738-3.392 2.163-3.607a5.344 5.344 0 00.77-2.746v-5.71c0-2.13-.93-4.17-2.585-5.676C19.086.846 16.841 0 14.5 0c-2.34 0-4.586.846-6.241 2.351-1.655 1.505-2.585 3.547-2.585 5.676v5.71c0 .96.265 1.903.77 2.746l2.163 3.607-5.739 3.392a5.966 5.966 0 00-2.107 2.071A5.309 5.309 0 000 28.29V34.4h29v-6.11a5.309 5.309 0 00-.76-2.737 5.966 5.966 0 00-2.108-2.071zm.347 8.625H2.522v-3.818a3.185 3.185 0 01.456-1.642 3.58 3.58 0 011.265-1.242l7.696-4.55-3.281-5.47a3.207 3.207 0 01-.462-1.648v-5.71c0-1.52.664-2.98 1.846-4.054 1.183-1.076 2.786-1.68 4.458-1.68 1.672 0 3.276.604 4.458 1.68 1.182 1.075 1.846 2.533 1.846 4.054v5.71c0 .576-.159 1.142-.461 1.647l-3.282 5.471 7.696 4.55c.53.311.964.739 1.265 1.243.3.503.458 1.068.456 1.641v3.818z"
                fill="#000"
                fillOpacity={0.7}
              />
            </Svg>
          },
          tabBarLabel: ({ focused }) => {
            return (
              <View>
                <Text style={{ color: focused ? 'white' : 'black' , fontSize: 8}}>Notes</Text>
              </View>
            );
          },
        }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
