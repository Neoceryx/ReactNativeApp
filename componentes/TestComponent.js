import React from 'react';
import {Text, View ,Button, Alert, TextInput } from 'react-native';

export default class TestComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = { msg: ""}
    }

    handleChange = event =>{        
        this.setState({msg : event});
    }

    handleClick = event =>{

        // Avoid event propagation
        event.preventDefault();

        var Msg = this.state.msg;        
        Alert.alert(Msg)
    }

    render(){
        return(
            <View>                
                <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, bottom: 10 }}                     
                    value={this.msg}
                    onChangeText={this.handleChange}
                 />
                <Button title="Press me" onPress={this.handleClick } />
                <Text>Hi from TestComponent</Text>
                <Text>{this.state.msg}</Text>
            </View>
            
        );
    }

}