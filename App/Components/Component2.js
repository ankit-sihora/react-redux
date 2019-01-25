import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    Button
}from 'react-native';

export default class Component2 extends Component {

    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.container}>
                <View><Text>This is page Two</Text></View>
                <Button 
                    onPress={this.props.increment}
                    title="Increase Count"
                    color="#841584"
                    accessibilityLabel="Increse Count"
                />
            <Text>{this.props.count}</Text>
            <Button 
                onPress={this.props.decrement}
                title="Decrease Conut"
                color='#841584'
                accessibilityLabel="Decrease Conut"
            />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5Fcff'
    }
})