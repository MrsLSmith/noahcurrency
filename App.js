import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
    constructor(props){ 
        super(props)
        this.state = {
            bal: 1,
            newBal: 0,
            inputValue: 'Imput Number of USD',
            isLoading: true,
            dataSource: null,
        }
    }
    componentDidMount (){
        return fetch('http://www.apilayer.net/api/live?access_key=a81ee9b2aea907e2784dfc9a67c3ae17')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.quotes,
                })
            })
 
            .catch((error) => {
                console.log(error)
            });
    }
 
    usToEuro =  () => {
        this.setState({ 
            newBal: this.state.inputValue * this.state.dataSource.USDEUR,
        })
    }
    usToPound = () => {
        this.setState({ 
            newBal: this.state.inputValue * this.state.dataSource.USDGBP,
        })
    }
    usToIndianRupee= () => {
        this.setState({ 
            newBal: this.state.inputValue * this.state.dataSource.USDINR,
        })
    }
    usToAussieDollar = () => {
        this.setState({ 
            newBal: this.state.inputValue * this.state.dataSource.USDAUD,
        })
    }
    usToCanadaDollar = () => {
        this.setState({ 
            newBal: this.state.inputValue * this.state.dataSource.USDCAD,
        })
    }
    usToFranc = () => {
        this.setState({ 
            newBal: this.state.inputValue * this.state.dataSource.USDCHF,
        })
    }
    usToYuan = () => {
        this.setState({ 
            newBal: this.state.inputValue * this.state.dataSource.USDCNY,
        })
    }
    usToYen = () => {
        this.setState({ 
            newBal: this.state.inputValue * this.state.dataSource.USDJPY,
        })
    }


    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };


    render() {
        if(this.state.isLoading) {
            return(
                <View style = {styles.container}>
                    <ActivityIndicator/>
                </View>
            )
        } else {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Currency Converter App
                </Text>
                
                <TextInput
                    value={this.state.inputValue}
                    onChangeText={this._handleTextChange}
                    style={{ width: 200, height: 40, padding: 6, borderColor: 'white', borderWidth:1 }}
                />
                <View style = {styles.row}>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.usToEuro}
                >
                    <Text style={styles.buttonText}>
                        USD to Euro
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.usToPound}
                >
                    <Text style={styles.buttonText}>
                        USD to Pound
                    </Text>
                </TouchableHighlight>
                </View>
                <View style = {styles.row}>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.usToIndianRupee}
                >
                    <Text style={styles.buttonText}>
                        USD to Rupee
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.usToAussieDollar}
                >
                    <Text style={styles.buttonText}>
                        USD to Aussie
                    </Text>
                </TouchableHighlight>
                </View>
                <View style = {styles.row}>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.usToCanadaDollar}
                >
                    <Text style={styles.buttonText}>
                        USD to Canada
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.usToFranc}
                >
                    <Text style={styles.buttonText}>
                        USD to Franc
                    </Text>
                </TouchableHighlight>
                </View>
                <View style = {styles.row}>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.usToYuan}
                >
                    <Text style={styles.buttonText}>
                        USD to Yuan
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.usToYen}
                >
                    <Text style={styles.buttonText}>
                        USD to Yen
                    </Text>
                </TouchableHighlight>
                </View>
                <Text style={styles.paragraph}>
                    {this.state.inputValue}
                </Text>
                
                <Text style={styles.paragraph}>
                    {this.state.newBal.toFixed(2)}
                </Text>
                
            </View>
      );
   }
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff8570',
    },
    button: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fcff7a',
        height: 40,
        width: 100,
        borderColor: 'black',
        borderWidth: 1,
    },
    row: {
        flexDirection:'row'
    },
});
