import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../styles/Colors';

const BackButton = ({navigation}) => {
  return (
    <TouchableOpacity
      style={{marginTop: 'auto'}}
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="arrow-left" size={20} color={COLORS.accent} />
    </TouchableOpacity>
  );
};

export default BackButton;
