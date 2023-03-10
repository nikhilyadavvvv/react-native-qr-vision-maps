import {useIsFocused} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {useCameraDevices} from 'react-native-vision-camera';
import {Camera} from 'react-native-vision-camera';
import {useDispatch} from 'react-redux';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
import {COLORS} from '../../utils/styles/Colors';
import {style} from '../../utils/styles/GlobalStyles';
import {resetQrData, setQrData} from './scannerSlice';
import Icon from 'react-native-vector-icons/Ionicons';

const Scanner = ({navigation}) => {
  const [hasPermission, setHasPermission] = React.useState(false);
  const devices = useCameraDevices();
  const device = devices.back;
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });

  React.useEffect(() => {
    (async () => {
      dispatch(resetQrData());
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  useEffect(() => {
    if (barcodes.length === 0) {
      return;
    }
    console.log('barcodes:', barcodes[0].displayValue);
    dispatch(setQrData(barcodes[0].displayValue));
    navigation.navigate('Description');
  }, [barcodes]);

  const select_from_list = () => {
    return (
      <TouchableOpacity
        style={{width: 300, backgroundColor: 'white', padding: 10}} onPress={()=>navigation.navigate('Locations')}>
        <View style={{...style.button, backgroundColor: COLORS.black, flexDirection:'row'}}>
          <Text style={{color: 'white', marginRight:5}}>Select location</Text>
          <Icon name={'location-outline'} size={16} color={COLORS.white}/>
        </View>
      </TouchableOpacity>
    );
  };

  return device != null && hasPermission ? (
    <>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isFocused}
        frameProcessor={frameProcessor}
        frameProcessorFps={1}
      />
      <SafeAreaView style={{...style.center, ...style.container}}>
        <View style={styles.qr_camera_area}></View>
        <Text style={styles.qr_text_style}>
          Scan the QR Code at your current location
        </Text>
        <Text style={styles.qr_text_style}>...or</Text>
        {select_from_list()}
      </SafeAreaView>
    </>
  ) : (
    <SafeAreaView style={{...style.center, ...style.container}}>
      <View style={styles.qr_camera_area}></View>
      <Text style={styles.qr_text_style}>Loading Camera...</Text>
      {select_from_list()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  barcodeTextURL: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  qr_text_style: {
    color: COLORS.accent,
    backgroundColor: COLORS.white,
    padding: 2,
    paddingTop: 5,
    paddingBottom: 5,
    minWidth: 300,
    maxWidth: 300,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  qr_camera_area: {
    borderColor: COLORS.white,
    borderWidth: 2,
    height: 300,
    width: 300,
    ...style.center,
  },
});

export default Scanner;
