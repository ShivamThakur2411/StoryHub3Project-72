import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import AppHeader from '../components/AppHeader';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component{

    constructor(){
        super();
        this.state = {
            title:'',
            story:'',
            author:'',
        }
    }

    submitStory=()=>{
        db.collection("Stories").doc("ABC123").update({
            Author:this.state.author,
            Title:this.state.title,
            Story:this.state.story,
        })
        this.setState({
            title:'',
            story:'',
            author:'',
        })
    }

    render(){
        return(
            <View>
                <AppHeader/>
            <View style={{padding:10, margin:10}}>

                <TextInput
                    placeholder='Story Title'
                    style={styles.inputBox}
                    onChangeText={
                        (text)=>{
                            this.setState({
                                title:text,
                            })
                        }
                    }
                    value={this.state.title}
                />
                <TextInput
                    placeholder='Name of Author'
                    style={styles.inputBox}
                    onChangeText={
                        (text)=>{
                            this.setState({
                                author:text,
                            })
                        }
                    }
                    value={this.state.author}
                />
                <TextInput
                    placeholder='Story'
                    style={styles.storyBox}
                    onChangeText={
                        (text)=>{
                            this.setState({
                                story:text,
                            })
                        }
                    }
                    value={this.state.story}
                />
            </View>

                <TouchableOpacity style={styles.button}
                onPress={this.submitStory}>
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