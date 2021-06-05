import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View>
                <AppHeader/>
            <View style={{padding:10, margin:10}}>

                <TextInput
                    placeholder='Story Title'
                    style={styles.inputBox}
                />
                <TextInput
                    placeholder='Name of Author'
                    style={styles.inputBox}
                />
                <TextInput
                    placeholder='Story'
                    style={styles.storyBox}
                />
            </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={{fontWeight:'bold',fontSize:30}}>
                        SUBMIT
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox:{
         height: 40, 
         borderWidth: 3, 
         fontSize: 20,
         marginTop:20,
    },
    storyBox:{
        height: 350, 
        borderWidth: 3, 
        fontSize: 20,
        marginTop:20,
   },
   button:{
       backgroundColor:'pink',
       alignSelf:'center',
       textAlign:'center',
       borderWidth:2,
   }
})