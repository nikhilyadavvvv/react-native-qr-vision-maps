import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import locationDescriptions from '../../utils/storedLocations/locationDescriptions';
import Carousel from 'react-native-reanimated-carousel';
import {COLORS} from '../../utils/styles/Colors';
import {style} from '../../utils/styles/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomSheet, {BottomSheetHandle} from '@gorhom/bottom-sheet';
import {setQrData} from '../Scanner/scannerSlice';
import {setNavigateTo} from './descriptionSlice';
import Tts from 'react-native-tts';

const Description = ({navigation}) => {
  const qrdata = useSelector(state => state.scanner.qrdata);
  const width = Dimensions.get('window').width;
  const carouselRef = useRef(null);
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['20%', '50%'], []);
  const [location, setLocation] = useState({});
  const dispatch = useDispatch();
  const [sheetVisible, setSheetVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isFinished, setIsFinished] = useState(true);

  useEffect(() => {
    const data = locationDescriptions.filter(value => {
      if (value.uuid === qrdata) {
        return value;
      }
    });
    // console.log('data:', data[0].nearby);
    setLocation(data[0]);
  }, [qrdata]);

  useEffect(() => {
    if (location) {
      // console.log('location:', location.nearby);
    }
  }, [location]);

  const whatItem = index => {
    // console.log('current index:', index);
  };

  const handleSheetChanges = useCallback(index => {
    // console.log('handleSheetChanges', index);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSheetVisible(true);
    }, 50);
  }, [qrdata]);

  useEffect(() => {
    Tts.addEventListener('tts-progress', event =>
      console.log('progress', event.length),
    );
    Tts.addEventListener('tts-start', event => {
      setIsPlaying(true);
      setIsFinished(false);
      setIsPaused(false);
    });
    Tts.addEventListener('tts-finish', event => {
      setIsPlaying(false);
      setIsFinished(true);
      setIsPaused(false);
    });
    Tts.addEventListener('tts-cancel', event => console.log('cancel', event));
  }, []);

  const readText = () => {
    if (isPaused) {
      Tts.resume();
      setIsPlaying(true);
      setIsFinished(false);
      setIsPaused(false);
      return;
    }
    Tts.getInitStatus().then(() => {
      Tts.setIgnoreSilentSwitch('ignore');
      Tts.setDefaultPitch(1.2);
      Tts.speak(location.heading + ',' + location.description, {
        iosVoiceId: 'com.apple.ttsbundle.siri_female_de-DE_compact',
        rate: 0.45,
      });
    });
  };
  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={StyleSheet.absoluteFill}>
        <Carousel
          ref={carouselRef}
          width={width}
          data={location.images}
          onSnapToItem={index => whatItem(index)}
          renderItem={({item, index}) => (
            <Image
              source={{uri: location.images[index]}}
              style={StyleSheet.absoluteFill}
            />
          )}
        />
      </View>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            height: 30,
            width: 30,
            backgroundColor: COLORS.white,
            ...style.card,
            marginLeft: 10,
            ...style.center,
          }}>
          <Icon name={'arrow-back'} size={16} color={COLORS.accent} />
        </TouchableOpacity>

        <View
          style={{
            ...style.center,
            marginTop: 130,
          }}>
          <View
            style={{
              width: width,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 10,
              paddingRight: 10,
            }}></View>
        </View>
      </SafeAreaView>
      {sheetVisible ? (
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <TouchableOpacity
              onPress={() => {
                Tts.stop();
                dispatch(setNavigateTo(location));
                navigation.navigate('Map');
              }}
              style={{
                ...style.button,
                backgroundColor: COLORS.black,
              }}>
              <Icon name={'md-map'} size={14} color={'white'} />
              <Text style={{color: COLORS.white, marginLeft: 5}}>Navigate</Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 30,
                marginTop: 10,
                fontWeight: 'bold',
                color: COLORS.accent,
              }}>
              {location.heading}
            </Text>
            <View style={{flexDirection: 'row', marginTop:10, marginBottom:5}}>
              {isPaused || isFinished ? (
                <TouchableOpacity
                  style={{
                    ...style.card,
                    height: 50,
                    width: 50,
                    ...style.center,
                  }}
                  onPress={readText}>
                  <Icon name={'play'} size={20} color={COLORS.accent} />
                </TouchableOpacity>
              ) : (
                <></>
              )}
              {isPlaying ? (
                <>
                  <TouchableOpacity
                    style={{
                      ...style.card,
                      height: 50,
                      width: 50,
                      ...style.center,
                    }}
                    onPress={() => {
                      Tts.pause();
                      setIsPlaying(false);
                      setIsFinished(false);
                      setIsPaused(true);
                    }}>
                    <Icon name={'pause'} size={20} color={COLORS.accent} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      ...style.card,
                      height: 50,
                      width: 50,
                      marginLeft: 10,
                      backgroundColor: COLORS.danger,
                      ...style.center,
                    }}
                    onPress={() => {
                      Tts.stop();
                      setIsPlaying(false);
                      setIsFinished(true);
                      setIsPaused(false);
                    }}>
                    <Icon name={'stop'} size={20} color={COLORS.white} />
                  </TouchableOpacity>
                </>
              ) : (
                <></>
              )}
            </View>

            <Text style={{marginTop: 10, textAlign: 'justify'}}>
              {location.description}
            </Text>
            <Text
              style={{
                marginTop: 10,
                textAlign: 'justify',
                fontWeight: 'bold',
                color: COLORS.accent,
              }}>
              Nearby Attractions
            </Text>
            <View
              style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
              {location.nearby ? (
                location.nearby.map((_location, key) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        Tts.stop();
                        setSheetVisible(false);
                        dispatch(setQrData(_location.uuid));
                        // navigation.push('Description');
                      }}
                      style={styles.nearby_locations_container}>
                      <Icon name={'map-outline'} size={12} color={'white'} />
                      <Text
                        style={{
                          color: COLORS.white,
                          marginRight: 5,
                          marginLeft: 5,
                        }}>
                        {_location.name}
                      </Text>
                      <Icon name={'arrow-forward'} size={12} color={'white'} />
                    </TouchableOpacity>
                  );
                })
              ) : (
                <></>
              )}
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Locations');
                }}
                style={styles.nearby_locations_container}>
                <Icon name={'list'} size={12} color={'white'} />
                <Text
                  style={{
                    color: COLORS.white,
                    marginRight: 5,
                    marginLeft: 5,
                  }}>
                  Show all locations
                </Text>
                <Icon name={'chevron-forward'} size={12} color={'white'} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </BottomSheet>
      ) : (
        <></>
      )}
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  carouselButton: {
    width: 30,
    height: 30,
    ...style.center,
  },
  nearby_locations_container: {
    borderRadius: 100,
    minHeight: 30,
    padding: 10,
    backgroundColor: COLORS.black,
    marginTop: 4,
    marginRight: 4,
    flexDirection: 'row',
  },
});
