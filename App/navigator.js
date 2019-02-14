import React from 'react'
import { Button, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import CounterComponent from './Actions/CounterAction';
import Component2 from './Actions/CounterAction2'

const Navigator = createStackNavigator({
  CounterComponent: {
    screen: CounterComponent, navigationOptions: () => ({
      title: `A`,
      headerBackTitle: 'A much too long text for back button from B to A',
      headerRight: (
        <View><Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#fd3421"
          style={{ margin: 20, flex: 1, alignItems: 'center', justifyContent: 'center' }}
        />
        </View>
      ),
      headerStyle: {
        title: 'ankit',
        backgroundColor: '#f4511e',
        margin: 16,
      },
      headerTintColor: '#fff',
    }),
  },
  Component2: {
    screen: Component2, navigationOptions: () => ({
      title: `A`,
      headerBackTitle: 'A much too long text for back button from B to A',
      headerStyle: {
        title: 'ankit',
        backgroundColor: '#f4511e',
        margin: 16,
      },
      headerTintColor: '#fff',
    }),
  },
}, {
    initialRouteName: 'CounterComponent',
  })
export default createAppContainer(Navigator);