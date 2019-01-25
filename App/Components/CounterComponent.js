import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    Button,
    Alert
}from 'react-native';

export default class CounterComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            page: this.props.children
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:1}}><Text>This is page One</Text></View>
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
            <View style={{flex:1,marginTop:80}}>
            <Button
                style={{marginTop:60}} 
                onPress={()=>Alert.alert('hello')}
                title='goto next page'
            /></View>
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