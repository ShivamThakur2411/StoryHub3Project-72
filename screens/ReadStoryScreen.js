import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <View>
                <Text style={styles.displayText}>
                    READ A STORY
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    displayText:{
        fontWeight:'bold',
        fontSize:30,
        textAlign:'center',
    }
})