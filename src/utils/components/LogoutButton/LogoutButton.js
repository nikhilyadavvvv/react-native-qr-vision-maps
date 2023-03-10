import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {style} from '../../styles/GlobalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../styles/Colors';
import {useDispatch} from 'react-redux';
import {addLanguage, addUser, verifyLogin} from '../../../screens/Register/registerSlice';

const LogoutButton = ({navigation}) => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(addUser({}));
    navigation.navigate('Register');
  };
  return (
    <View
      style={{marginRight:10, alignSelf:'flex-end'}}>
      <TouchableOpacity onPress={() => onLogout()}>
        <Icon
          name="power-standby"
          size={20}
          style={{marginLeft: 'auto', marginRight: 'auto'}}
          color={COLORS.danger}
        />
      </TouchableOpacity>
    </View>
  );
};

export default LogoutButton;
