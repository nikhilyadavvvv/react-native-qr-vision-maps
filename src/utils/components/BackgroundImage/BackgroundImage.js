import { ImageBackground, Text } from 'react-native';
import React from 'react';
import background from '../../assets/images/beforeLoad.jpg';

const BackgroundImage = ({children}) => {
  return (
    <ImageBackground source={background} resizeMode="cover" style={{flex:1, backgroundColor:'white'}}>
      {children}
    </ImageBackground>
  );
};

export default BackgroundImage;
