import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import Video from 'react-native-video';

export const Settings = () => {
  const Navigation = useNavigation();
  const videoRef = useRef();
  return (
    <View>
      <View style={{ margin: 15 }}>
        <Button onPress={() => Navigation.navigate('CurveBottomBar')}>Back To Home</Button>
      </View>
      <View style={{ backgroundColor: 'rgb(9, 13, 13)', height: 250 }}>
        <Video
          controls={true}
          source={require('../../Assets/Images/video/test-video.mp4')}
          ref={videoRef}
          onBuffer={() => { }}
          onError={() => { }}
          style={{ width: '100%', height: 210, position: 'absolute', top: 10 }}
          resizeMode={'contain'}
        />
      </View>
      <View>
        <View style={[{ backgroundColor: '#fff', height: 50 }, styles.shadow]}>
          <Text
            style={{
              color: 'black',
              padding: 2,
              textAlign: 'center',
              fontSize: 13,
              fontWeight: 'bold',
              marginTop: 13,
            }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit..
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: '#fff', height: 250, marginTop: 1 }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            marginTop: 13,
            marginLeft: 16,
          }}>
          Description
        </Text>
        <Text
          style={{ color: 'black', fontSize: 12, marginLeft: 16, marginTop: 16 }}>
          Lorem ipsum dolor sit amet consectetur
        </Text>
        <Text
          style={{ color: 'black', fontSize: 12, marginLeft: 16, marginTop: 4 }}>
          adipisicing elit. Aut harum sequi dolorem quo
        </Text>
        <Text
          style={{ color: 'black', fontSize: 12, marginLeft: 16, marginTop: 4 }}>
          rerum delectus?
        </Text>

        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            marginTop: 20,
            marginLeft: 16,
          }}>
          What we Learn
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            marginTop: 20,
            marginLeft: 16,
            fontSize: 12,
          }}>
          ⚫ Lorem ipsum dolor sit amet consectetur.
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            marginTop: 7,
            marginLeft: 16,
            fontSize: 12,
          }}>
          ⚫ Lorem ipsum dolor sit amet consectetur.
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            marginTop: 7,
            marginLeft: 16,
            fontSize: 12,
          }}>
          ⚫ Lorem ipsum dolor sit amet consectetur.
        </Text>
      </View>
      <View style={[{ backgroundColor: '#fff', height: 50 }, styles.shadow]}>
        <Text
          style={{
            color: 'purple',
            padding: 2,
            textAlign: 'center',
            fontSize: 13,
            marginTop: 13
          }}>
          Report a Problem
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 11.27,
    elevation: 14,
  },
});
