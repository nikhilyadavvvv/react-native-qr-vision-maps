import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {style} from '../../utils/styles/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../utils/styles/Colors';
import locationDescriptions from '../../utils/storedLocations/locationDescriptions';
import {useDispatch} from 'react-redux';
import {setQrData} from '../Scanner/scannerSlice';

const Locations = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={StyleSheet.absoluteFill}>
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            height: 30,
            width: 30,
            backgroundColor: COLORS.white,
            marginLeft: 10,
            ...style.card,
            ...style.center,
          }}>
          <Icon name={'arrow-back'} size={16} color={COLORS.accent} />
        </TouchableOpacity>
        <Text
          style={{
            ...style.heading,
            marginTop: 10,
            marginLeft: 'auto',
            marginRight: 10,
          }}>
          Choose Location
        </Text>
        <ScrollView contentContainerStyle={{padding: 10}}>
          <TouchableOpacity style={styles.list_item_container} onPress={()=>navigation.navigate('Scanner')}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{justifyContent: 'center'}}>
                <Icon
                  name={'qr-code-outline'}
                  size={16}
                  color={COLORS.accent}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'right',
                  }}>
                  Scan QR Code
                </Text>
                <Text style={{textAlign: 'right'}}>
                  Scan nearby qr code for location info
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {locationDescriptions.map(_location => {
            return (
              <TouchableOpacity
                style={styles.list_item_container}
                onPress={() => {
                  dispatch(setQrData(_location.uuid));
                  navigation.navigate('Description');
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                      {_location.name}
                    </Text>
                    <Text>{_location.heading}</Text>
                  </View>
                  <View style={{justifyContent: 'center'}}>
                    <Icon
                      name={'chevron-forward'}
                      size={16}
                      color={COLORS.accent}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list_item_container: {
    minHeight: 80,
    marginTop: 10,
    backgroundColor: 'white',
    shadowRadius: 5,
    shadowOpacity: 0.1,
    shadowColor: 'black',
    borderRadius: 5,
    elevation: 5,
    padding: 10,
    justifyContent: 'center',
  },
});

export default Locations;
