import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';
import {Image} from 'react-native';

export default class App extends React.Component{
  render(){
    return(
          <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: WriteStoryScreen,
  ReadStory: ReadStoryScreen,
},{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName = navigation.state.routeName
      if(routeName==='WriteStory'){
        return(
          <Image
            source={require('./Images/write.png')}
            style={{width:50, height:50}}
          />
        )
      }else if(routeName==='ReadStory'){
        return(
          <Image
            source={require('./Images/read.png')}
            style={{width:50, height:50}}
          />
        )
      }
    }
  })
})

const AppContainer = createAppContainer(TabNavigator);