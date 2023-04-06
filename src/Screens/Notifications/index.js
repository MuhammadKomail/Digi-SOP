import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { ScrollView } from 'react-native-gesture-handler';

export const Notifications = () => {
  const [text, onChangeText] = React.useState('Search Questions ');
  const [newText, onText] = useState('Type Messege');
  const [firstSignShow, setFirstSignShow] = useState(true)
  const [secondSignShow, setSecondSignShow] = useState(true)
  const [thirdSignShow, setThirdSignShow] = useState(true)

  const Navigation = useNavigation();

  const greaterthaSgn = '>';

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          marginTop: -30
        }}>
        <Text style={styles.faq}>FAQ</Text>
        <View>
          <View>
            <TouchableOpacity>
              <View style={{ backgroundColor: 'white', width: "12%", marginLeft: 13, padding: '2%', borderRadius: 25 }}>
                <Pressable>
                  <Ionicons
                    name={'arrow-back'}
                    size={25}
                    color={'black'}
                    onPress={() => { Navigation.navigate('CurveBottomBar'); }}
                  />
                </Pressable>
              </View>

            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 12, marginTop: -42 }}>
            <View
              style={{
                height: 640,
                width: '97%',
                backgroundColor: '#fff',
                marginTop: 66,
                borderTopRightRadius: 23,
                borderTopLeftRadius: 23,
              }}>
              <View>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText}
                  value={text}
                />
              </View>
              <View style={styles.paragraph}>
                <View style={styles.thorowcorner}>
                  <Text style={styles.firstParagraph}>
                    I accept the Terms and Condition
                  </Text>
                  <Text style={[styles.sign, styles.extra]}>&#8964;</Text>
                </View>
                <View style={{ borderWidth: .5, borderColor: "blue", width: 250, borderRadius: 8, padding: 8, marginTop: 20, marginLeft: 26 }}>
                  <Text style={{ fontSize: 12 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam expedita nostrum aliquam? Laborum, vero voluptatum!</Text>
                </View>
                <View style={styles.thorowcorner}>
                  <Text style={styles.secondParagraph}>
                    I accept the Terms and Condition
                  </Text>
                  <Text style={styles.sign} onPress={() => { setFirstSignShow(!firstSignShow) }}>
                    {
                      firstSignShow ? greaterthaSgn : <Text style={styles.newText}>&#8964;</Text>
                    }
                  </Text>
                  {
                    !firstSignShow ? <View style={{ borderWidth: .5, borderColor: "blue", width: 250, borderRadius: 8, padding: 8, marginTop: 20, marginLeft: 26 }}>
                      <Text style={{ fontSize: 12 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam expedita nostrum aliquam? Laborum, vero voluptatum!</Text>
                    </View> : <Text></Text>
                  }
                </View>
                <View style={styles.thorowcorner}>
                  <Text style={styles.thirdParagraph}>
                    I accept the Terms and Condition
                  </Text>
                  <Text style={styles.sign} onPress={() => { setSecondSignShow(!secondSignShow) }}>
                    {
                      secondSignShow ? greaterthaSgn : <Text style={styles.newText}>&#8964;</Text>
                    }
                  </Text>
                  {
                    !secondSignShow ? <View style={{ borderWidth: .5, borderColor: "blue", width: 250, borderRadius: 8, padding: 8, marginTop: 20, marginLeft: 26 }}>
                      <Text style={{ fontSize: 12 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam expedita nostrum aliquam? Laborum, vero voluptatum!</Text>
                    </View> : <Text></Text>
                  }
                </View>
                <View style={styles.thorowcorner}>
                  <Text style={styles.fourthParagraph}>
                    I accept the Terms and Condition
                  </Text>
                  <Text style={styles.sign} onPress={() => { setThirdSignShow(!thirdSignShow) }}>
                    {
                      thirdSignShow ? greaterthaSgn : <Text style={styles.newText}>&#8964;</Text>
                    }
                  </Text>
                  {
                    !thirdSignShow ? <View style={{ borderWidth: .5, borderColor: "blue", width: 250, borderRadius: 8, padding: 8, marginTop: 20, marginLeft: 26 }}>
                      <Text style={{ fontSize: 12 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam expedita nostrum aliquam? Laborum, vero voluptatum!</Text>
                    </View> : <Text></Text>
                  }
                </View>


                <TextInput
                  multiline
                  numberOfLines={10}
                  style={styles.textareaText}
                  onChangeText={onText}
                  value={newText}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 20,
    marginTop: 30,
    marginLeft: 15,
    width: 310,
    padding: 10,
    backgroundColor: '#fff',
    color: 'black',
    borderRadius: 8,
    borderBottomColor: 'black',
  },
  paragraph: {
    marginTop: 7,
  },
  firstParagraph: {
    color: 'gray',
    marginTop: 37,
    marginLeft: 30,
  },
  secondParagraph: {
    color: 'gray',
    marginTop: 37,
    marginLeft: 30,
  },
  thirdParagraph: {
    color: 'gray',
    marginTop: 37,
    marginLeft: 30,
  },
  fourthParagraph: {
    color: 'gray',
    marginTop: 37,
    marginLeft: 30,
  },
  fifthparagraph: {
    color: 'gray',
    marginTop: 37,
    marginLeft: 30,
  },
  inputStyle: {
    height: 100,
    width: 270,
    marginTop: 0,
    marginLeft: 30,
    backgroundColor: '#fff',
    borderWidth: 0.5,
  },
  textareaText: {
    marginLeft: 12,
    marginTop: -20,
    height: 150,
    borderBottm: 1,
    borderColor: "black",
    backgroundColor: '#fff',
    color: 'black',
  },
  thorowcorner: {
    position: 'relative',
  },
  sign: {
    color: 'gray',
    fontSize: 25,
    position: 'absolute',
    right: 25,
    top: 30,
  },
  extra: {
    fontSize: 28,
    marginTop: -7
  },
  newText: {
    fontSize: 25,
    color: "gray",
    fontWeight: "bold"
  },
  faq: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 30
  }
});