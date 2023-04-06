import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Image, ImageBackground, Pressable, ScrollView, View, FlatList } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Heading from '../../Components/ReusableComponent/Heading';
import COLORS from '../../Assets/Style/Color';
import { getRequest } from '../../App/fetch';
import { BASE_URL } from '../../App/api';

export const Home = () => {

  const Navigation = useNavigation();

  const { AuthReducer } = useSelector(state => state);
  console.log('reducerData: ', AuthReducer.userData);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);


  useEffect(() => {
    (async () => {
      console.log('Bearer ' + AuthReducer?.userData.token);
      setLoading(true)
      getRequest(`${BASE_URL}/user/mobile/dashboard`, `Bearer ${AuthReducer?.userData.token}`)
        .then((res) => {
          console.log('Response For dashboard Data:', res)
          setLoading(false)
          if (res.status == 1) {
            setData(res.data)
            console.log('Data from api Dashboard: ', data);
          }
        })
        .catch((err) => {
          console.log('Error For dashboard Data: ', err);
          showError(err)
          setLoading(false)
        })
    })();
  }, [])


  if (loading) {
    return <ActivityIndicator style={{ flex: 1 }} size={50} color="red" />;
  }

  const renderItem = ({ item }) => (
    <View style={{ borderRadius: 10, marginHorizontal: '1%', width: 150 }}>
      <Image
        source={require('../../Assets/Images/HomeScreen/backImage.png')}
        style={{ width: '100%', height: 100, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
      />
      <Text style={{ padding: 5, fontSize: 10, backgroundColor: COLORS.white, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
        {item.doc_name}
      </Text>
    </View>
  );

  return (
    <>
      <SafeArea>
        <View style={{ flex: 1, width: '100%', height: '100%', backgroundColor: 'pink' }}>
          <ImageBackground
            source={require('../../Assets/Images/HomeScreen/backImage.png')}
            style={{ height: '100%', width: '100%' }}>
            <View style={{ margin: '5%' }}>
              {/* Header */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Pressable onPress={() => { Navigation.navigate('Profile'); }}>
                  <View>
                    <Image
                      source={require('../../Assets/Images/ProfileImage/profileIcon.png')}
                      style={{ width: 30, height: 30 }}
                    />
                  </View>
                </Pressable>
                <View>
                  <Heading
                    Stylefont={'normal'}
                    Fontweight={'700'}
                    Fontsize={14}
                    Heading={'Digital-SOP'}
                    txtAlign={'center'}
                    as={'center'}
                    c={COLORS.white}
                  />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Pressable onPress={() => { console.log('press'); }}>
                      <Ionicons
                        name={'search'}
                        size={20}
                        color={'white'}
                        style={{ flexDirection: 'column-reverse', justifyContent: 'center', marginHorizontal: '1%' }}
                      />
                    </Pressable>
                  </View>
                  <View>
                    <Pressable onPress={() => { console.log('press'); }}>
                      <Ionicons
                        name={'ios-notifications'}
                        size={20}
                        color={'white'}
                        style={{ marginHorizontal: '2%' }}
                      />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ alignSelf: 'center', marginHorizontal: '8%', alignContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Industrial Training</Text>
              <Text style={{ color: 'white', fontSize: 10, marginHorizontal: '20%', alignSelf: 'center', alignItems: 'center', alignContent: 'center' }}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</Text>
            </View>
            <View style={{ backgroundColor: '#EFF1FD', marginTop: 40, paddingBottom: 180, borderTopRightRadius: 50, borderTopLeftRadius: 50, paddingTop: 15, marginBottom: 25 }}>
              <ScrollView>
                <View style={{ marginVertical: '5%' }}>

                  <View style={{ paddingHorizontal: '8%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View style={{ marginVertical: '5%' }}>
                        <Text style={{ fontSize: 14 }}>Images</Text>
                        <Text style={{ fontSize: 10 }}>All Digital SOP Guide</Text>
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                        <View style={{ marginVertical: '5%' }}>
                          <Pressable onPress={() => { console.log('press'); }}>
                            <Ionicons
                              name={'arrow-forward'}
                              size={20}
                              color={'black'}
                            />
                          </Pressable>
                        </View>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <FlatList
                        data={data.images}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.length}
                        extraData={data.images?.length}
                        contentContainerStyle={{ width: '100%', flexDirection: 'row' }}
                        horizontal={true}
                      />
                    </View>
                    {
                      data.images?.length == 0 &&
                      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white', paddingVertical: 15 }}>
                        <Text>
                          No Data
                        </Text>
                      </View>
                    }
                  </View>

                  <View style={{ paddingHorizontal: '8%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View style={{ marginVertical: '5%' }}>
                        <Text style={{ fontSize: 14 }}>Mobile Images</Text>
                        <Text style={{ fontSize: 10 }}>All Digital SOP Guide</Text>
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                        <View style={{ marginVertical: '5%' }}>
                          <Pressable onPress={() => { console.log('press'); }}>
                            <Ionicons
                              name={'arrow-forward'}
                              size={20}
                              color={'black'}
                            />
                          </Pressable>
                        </View>
                      </View>
                    </View>
                    {/* <View style={{ flexDirection: 'row' }}> */}
                    <FlatList
                      data={data.mobileImages}
                      renderItem={renderItem}
                      keyExtractor={(item) => item.id}
                      extraData={data.mobileImages?.length}
                      contentContainerStyle={{ width: '100%', flexDirection: 'row' }}
                      horizontal={true}
                    />
                  {
                    data.mobileImages?.length == 0 &&
                    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white', paddingVertical: 15 }}>
                      <Text>
                        No Data
                      </Text>
                    </View>
                  }
                  </View>
                  <View style={{ paddingHorizontal: '8%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View style={{ marginVertical: '5%' }}>
                        <Text style={{ fontSize: 14 }}>Pdf</Text>
                        <Text style={{ fontSize: 10 }}>All Digital SOP Guide</Text>
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                        <View style={{ marginVertical: '5%' }}>
                          <Pressable onPress={() => { console.log('press'); }}>
                            <Ionicons
                              name={'arrow-forward'}
                              size={20}
                              color={'black'}
                            />
                          </Pressable>
                        </View>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <FlatList
                        data={data.pdf}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={data.pdf?.length}
                      />
                    </View>
                    {
                      data.pdf?.length == 0 &&
                      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white', paddingVertical: 15 }}>
                        <Text>
                          No Data
                        </Text>
                      </View>
                    }
                  </View>

                  <View style={{ paddingHorizontal: '8%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View style={{ marginVertical: '5%' }}>
                        <Text style={{ fontSize: 14 }}>PPT</Text>
                        <Text style={{ fontSize: 10 }}>All Digital SOP Guide</Text>
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                        <View style={{ marginVertical: '5%' }}>
                          <Pressable onPress={() => { console.log('press'); }}>
                            <Ionicons
                              name={'arrow-forward'}
                              size={20}
                              color={'black'}
                            />
                          </Pressable>
                        </View>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <FlatList
                        data={data.ppt}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={data.ppt?.length}
                        contentContainerStyle={{ width: '100%', flexDirection: 'row' }}
                        horizontal={true}
                      />
                    </View>
                    {
                      data.ppt?.length == 0 &&
                      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white', paddingVertical: 15 }}>
                        <Text>
                          No Data
                        </Text>
                      </View>
                    }

                  </View>

                  <View style={{ paddingHorizontal: '8%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View style={{ marginVertical: '5%' }}>
                        <Text style={{ fontSize: 14 }}>Recent View</Text>
                        <Text style={{ fontSize: 10 }}>All Digital SOP Guide</Text>
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                        <View style={{ marginVertical: '5%' }}>
                          <Pressable onPress={() => { console.log('press'); }}>
                            <Ionicons
                              name={'arrow-forward'}
                              size={20}
                              color={'black'}
                            />
                          </Pressable>
                        </View>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <FlatList
                        data={data.recentView}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={data.recentView?.length}
                        contentContainerStyle={{ width: '100%', flexDirection: 'row' }}
                        horizontal={true}
                      />

                    </View>
                    {
                      data.recentView?.length == 0 &&
                      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white', paddingVertical: 15 }}>
                        <Text>
                          No Data
                        </Text>
                      </View>
                    }
                  </View>

                  <View style={{ paddingHorizontal: '8%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View style={{ marginVertical: '5%' }}>
                        <Text style={{ fontSize: 14 }}>Video</Text>
                        <Text style={{ fontSize: 10 }}>All Digital SOP Guide</Text>
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                        <View style={{ marginVertical: '5%' }}>
                          <Pressable onPress={() => { console.log('press'); }}>
                            <Ionicons
                              name={'arrow-forward'}
                              size={20}
                              color={'black'}
                            />
                          </Pressable>
                        </View>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <FlatList
                        data={data.video}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={data.video?.length}
                        contentContainerStyle={{ width: '100%', flexDirection: 'row' }}
                        horizontal={true}
                      />
                    </View>
                    {
                      data.video?.length == 0 &&
                      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white', paddingVertical: 15 }}>
                        <Text>
                          No Data
                        </Text>
                      </View>
                    }
                  </View>

                </View>
              </ScrollView>
            </View >
          </ImageBackground>

        </View>
      </SafeArea>
    </>
  );
};
