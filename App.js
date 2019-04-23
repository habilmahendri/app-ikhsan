import React from 'react';
import { Platform, StyleSheet} from 'react-native';
import { StackViewStyleInterpolator } from 'react-navigation-stack';
import { Scene, Router, Stack} from 'react-native-router-flux';

import routes from "./routes"


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scene: {
    backgroundColor: '#F5FCFF',
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

const stateHandler = (prevState, newState, action) => {
  console.log('onStateChange: ACTION:', action);
};

const Example = () => (
  <Router onStateChange={stateHandler} sceneStyle={styles.scene}>
        <Stack key="root" titleStyle={{ alignSelf: 'center' }} hideNavBar>
            {
              routes().map((item, key) => {
                return <Scene key={item.screenName} component={item.component} title={item.title} hideNavBar={item.hideNavBar}/>
              })
            }
        </Stack>
  </Router>
);

export default Example;