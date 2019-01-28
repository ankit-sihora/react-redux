
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import CounterComponent  from './Actions/CounterAction';
import Component2 from './Actions/CounterAction2'
//import ItemDetail from './components/ItemDetail'


const Navigator = createStackNavigator({
  CounterComponent: { screen: CounterComponent},
  Component2: { screen: Component2 },
},{
  initialRouteName: 'CounterComponent',
})
export default createAppContainer(Navigator);


/* export class Nav extends Component {
  render() {
    return (
      <Navigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.navigation,
      })} />
    )
  }
} */

/* const mapStateToProps = state => ({
  navigation: state.navigation,
})
 */
//export default connect(mapStateToProps)(Nav)