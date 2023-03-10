import { View, Text } from 'react-native';
import React from 'react';
import { style } from '../../styles/GlobalStyles';

const AppBar = ({children,barStyle}) => {
  return (
    <View style={{...style.appbar,barStyle,paddingBottom:5}}>
        {children}
    </View>
  );
};

export default AppBar;
