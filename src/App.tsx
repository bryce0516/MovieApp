/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import Styled from 'styled-components'

import {StatusBar} from 'react-native'
import Navigator from '~/Screens/Navigator'
import { UserContextProvider } from '~/Context/User';

interface Props {

}

const App = ({}:Props) => {
  
  return (
    <UserContextProvider>
      <StatusBar barStyle="light-content"/>
      <Navigator />
    </UserContextProvider>
  );
};

export default App;
