import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper';
import Carousel from 'react-native-snap-carousel';



const carouselData = [
  {

  }


];




const App = () => {
  return (
    <>
      <View style={[styles.headerBar, styles.FDRJAC]}>
        <View style={[styles.headerIntro, styles.FDRSBAC]}>
          <View style={[styles.headerLeft, styles.FDCC]}>
            <TouchableOpacity>
              <Image source={require('../Parmacity/src/assets/images/vietnam.png')} style={[styles.iconHeader]} />
            </TouchableOpacity>

          </View>
          <View style={[styles.headerCenter]}>
            <Image source={require('./src/assets/images/search.png')} style={[styles.iconHeaderSearch]} />
            <TextInput style={[styles.input,]}
              placeholder="Săn deal đồng giá 10k-50k"
            />
          </View>
          <View style={[styles.headerRight, styles.FDRSBAC]}>
            <TouchableOpacity>
              <Image source={require('../Parmacity/src/assets/images/bell50.png')} style={[styles.iconHeader]} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../Parmacity/src/assets/images/cart.png')} style={[styles.iconHeader]} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={true}>
          <View style={[styles.secttionBanner]}>
            <Image source={require('./src/assets/images/banner.jpg')} style={{ width: '100%', height: "100%", resizeMode: 'cover' }} />
          </View>
          <View style={[styles.SecttionOne, styles.FDRJC]}>
            <View style={[styles.sliderShow]}>
              <Swiper showsButtons={false}>
                <View style={[styles.slider]}>
                  <Image source={require('./src/assets/images/slide1.jpg')} style={[styles.imageSlide]} />
                </View>
                <View style={[styles.slider]}>
                  <Image source={require('./src/assets/images/slide2.jpg')} style={[styles.imageSlide]} />
                </View>
                <View style={[styles.slider,]}>
                  <Image source={require('./src/assets/images/slide3.jpg')} style={[styles.imageSlide]} />
                </View>
                <View style={[styles.slider]}>
                  <Image source={require('./src/assets/images/slide4.jpg')} style={[styles.imageSlide]} />
                </View>
                <View style={[styles.slider,]}>
                  <Image source={require('./src/assets/images/slide5.jpg')} style={[styles.imageSlide]} />
                </View>
                <View style={[styles.slider]}>
                  <Image source={require('./src/assets/images/slide6.jpg')} style={[styles.imageSlide]} />
                </View>
                <View style={[styles.slider]}>
                  <Image source={require('./src/assets/images/slide7.jpg')} style={[styles.imageSlide]} />
                </View>
                <View style={[styles.slider]}>
                  <Image source={require('./src/assets/images/slide8.jpg')} style={[styles.imageSlide]} />
                </View>
                <View style={[styles.slider]}>
                  <Image source={require('./src/assets/images/slide9.jpg')} style={[styles.imageSlide]} />
                </View>
                <View style={[styles.slider]}>
                  <Image source={require('./src/assets/images/slide10.jpg')} style={[styles.imageSlide]} />
                </View>
                <View style={[styles.slider]}>
                  <Image source={require('./src/assets/images/slide11.jpg')} style={[styles.imageSlide]} />
                </View>
                <View style={[styles.slider]}>
                  <Image source={require('./src/assets/images/slide12.jpg')} style={[styles.imageSlide]} />
                </View>
              </Swiper>
            </View>
          </View>
          <View style={[styles.SecttionTwo, styles.FDRJAC]}>
            <View style={[styles.BoxSecttionTwo, styles.FDSB]}>
              <View style={[styles.listBoxSecttionTwo, styles.FDCJSB, styles.Mtop]}>
                <View style={[styles.childBox, styles.FDCJSB]}>
                  <TouchableOpacity>
                    <Image source={require('./src/assets/images/price.jpg')} style={[styles.iconSecttionTwo]} />
                  </TouchableOpacity>
                  <Text style={[styles.textSecttionTwo]}>{`Mã\ngiảm giá`}</Text>
                </View>
                <View style={[styles.childBox, styles.FDCJSB]}>
                  <TouchableOpacity>
                    <Image source={require('./src/assets/images/price.jpg')} style={[styles.iconSecttionTwo]} />
                  </TouchableOpacity>
                  <Text style={[styles.textSecttionTwo]}>{`Dược sĩ\ntrực tuyến`}</Text>
                </View>
              </View>
              <View style={[styles.listBoxSecttionTwo, styles.FDCJSB, styles.Mtop]}>
                <View style={[styles.childBox, styles.FDCJSB]}>
                  <TouchableOpacity>
                    <Image source={require('./src/assets/images/history.jpg')} style={[styles.iconSecttionTwo]} />
                  </TouchableOpacity>
                  <Text style={[styles.textSecttionTwo]}>{`Lịch sử\nthành viên`}</Text>
                </View>
                <View style={[styles.childBox, styles.FDCJSB]}>
                  <TouchableOpacity>
                    <Image source={require('./src/assets/images/category.jpg')} style={[styles.iconSecttionTwo]} />
                  </TouchableOpacity>
                  <Text style={[styles.textSecttionTwo]}>{`Cẩm nang\nmua sắm`}</Text>
                </View>
              </View>
              <View style={[styles.listBoxSecttionTwo, styles.FDCJSB, styles.Mtop]}>
                <View style={[styles.childBox, styles.FDCJSB]}>
                  <TouchableOpacity>
                    <Image source={require('./src/assets/images/chat.jpg')} style={[styles.iconSecttionTwo]} />
                  </TouchableOpacity>
                  <Text style={[styles.textSecttionTwo]}>{`Tư vấn\ntrực tuyến`}</Text>
                </View>
                <View style={[styles.childBox, styles.FDCJSB]}>
                  <TouchableOpacity>
                    <Image source={require('./src/assets/images/home.jpg')} style={[styles.iconSecttionTwo]} />
                  </TouchableOpacity>
                  <Text style={[styles.textSecttionTwo]}>{`Hệ thống\nnhà thuốc`}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.SecttionThree, styles.FDCJSB]}>
            <View style={[styles.titleSecttionThree,]}>
              <Text style={[styles.textTitle]}>Danh mục sản phẩm</Text>
            </View>
            <View style={[styles.BoxSecttionThree, styles.FDRJC]}>
              <View style={[styles.BoxChild, styles.FDSB]}>
                <View style={[styles.listBoxSecttionThree, styles.FDCJSB]}>
                  <View style={[styles.childBox, styles.FDCJSB]}>
                    <TouchableOpacity>
                      <Image source={require('./src/assets/images/duocsp.jpg')} style={[styles.iconSecttionThree]} />
                    </TouchableOpacity>
                    <Text style={[styles.textSecttionThree]}>Dược Phẩm</Text>
                  </View>
                  <View style={[styles.childBox, styles.FDCJSB]}>
                    <TouchableOpacity>
                      <Image source={require('./src/assets/images/csui.jpg')} style={[styles.iconSecttionThree]} />
                    </TouchableOpacity>
                    <Text style={[styles.textSecttionThree]}>{`Thực phẩm\nchức năng`}</Text>
                  </View>
                </View>
                <View style={[styles.listBoxSecttionThree, styles.FDCJSB]}>
                  <View style={[styles.childBox, styles.FDCJSB]}>
                    <TouchableOpacity>
                      <Image source={require('./src/assets/images/khautrang.jpg')} style={[styles.iconSecttionThree]} />
                    </TouchableOpacity>
                    <Text style={[styles.textSecttionThree]}>{`Chăm sóc sức\nkhỏe`}</Text>
                  </View>
                  <View style={[styles.childBox, styles.FDCJSB]}>
                    <TouchableOpacity>
                      <Image source={require('./src/assets/images/thuoc.jpg')} style={[styles.iconSecttionThree]} />
                    </TouchableOpacity>
                    <Text style={[styles.textSecttionThree]}>Mẹ và Bé</Text>
                  </View>

                </View>
                <View style={[styles.listBoxSecttionThree, styles.FDCJSB]}>
                  <View style={[styles.childBox, styles.FDCJSB]}>
                    <TouchableOpacity>
                      <Image source={require('./src/assets/images/suatam.jpg')} style={[styles.iconSecttionThree]} />
                    </TouchableOpacity>
                    <Text style={[styles.textSecttionThree]}>{`Chắm sóc cá\nnhân`}</Text>
                  </View>
                  <View style={[styles.childBox, styles.FDCJSB]}>
                    <TouchableOpacity>
                      <Image source={require('./src/assets/images/nuoctt.jpg')} style={[styles.iconSecttionThree]} />
                    </TouchableOpacity>
                    <Text style={[styles.textSecttionThree]}>{`Chăm sóc sắc\n đẹp`}</Text>
                  </View>

                </View>
                <View style={[styles.listBoxSecttionThree, styles.FDCJSB]}>
                  <View style={[styles.childBox, styles.FDCJSB]}>
                    <TouchableOpacity>
                      <Image source={require('./src/assets/images/khanuot.jpg')} style={[styles.iconSecttionThree]} />
                    </TouchableOpacity>
                    <Text style={[styles.textSecttionThree]}>{`Sản phẩm tiện\n lợi`}</Text>
                  </View>
                  <View style={[styles.childBox, styles.FDCJSB]}>
                    <TouchableOpacity>
                      <Image source={require('./src/assets/images/tangdo.jpg')} style={[styles.iconSecttionThree]} />
                    </TouchableOpacity>
                    <Text style={[styles.textSecttionThree]}>Thiết bị y tế</Text>
                  </View>

                </View>

              </View>
            </View>
          </View>
          <View style={[styles.SecttionFour,]}>
            <View style={[styles.titleSecttionFour]}>
              <Text style={[styles.title]}>Deal hời giảm sâu</Text>
            </View>
            <View style={[styles.SecttionFourChild,]}>
              <View style={[styles.titleTop]}>
                <View style={[styles.titleTopLeft]}></View>
                <View style={[styles.titleTopRight]}></View>
              </View>
              <View style={[styles.titleBottom]}>

              </View>

            </View>
            <View style={[styles.sliderBoxSecttionFour]}>



            </View>


          </View>
          <View style={[styles.SecttionFive]}>

          </View>
        </ScrollView>

      </SafeAreaView>
    </>

  )
}

export default App

const styles = StyleSheet.create({


  headerBar: {
    width: '100%',
    height: 80,
    backgroundColor: '#0d62fa'
  },
  headerIntro: {
    width: '90%',
    height: 60,
    marginTop: 20,
  },
  iconHeader: {
    width: 30,
    height: 30,
  },
  iconHeaderSearch: {
    width: 25,
    height: 25,
    position: 'absolute',
    zIndex: 1,
    marginTop: 10,
    marginLeft: 10,
  },
  headerLeft: {
    width: '10%',
    height: 60,
  },
  headerCenter: {
    width: '65%',
    height: 40,
  },
  input: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: 35,
  },
  headerRight: {
    width: '20%',
    height: 60,
  },
  secttionBanner: {
    width: '100%',
    height: 90,
    backgroundColor: 'red'
  },
  SecttionOne: {
    width: '100%',
    height: 'auto',
  },
  sliderShow: {
    width: '90%',
    height: 200,
    marginTop: 20,
  },
  slider: {
    width: '100%',
    height: 200,
  },
  imageSlide: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  SecttionTwo: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'white'
  },
  BoxSecttionTwo: {
    width: '80%',
    height: 240,
  },
  listBoxSecttionTwo: {
    width: '20%',
    height: 200,
  },
  childBox: {
    width: '100%',
    height: 90,
  },
  iconSecttionTwo: {
    width: 50,
    height: 50,
    resizeMode: 'cover'
  },
  textSecttionTwo: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#030303'
  },
  SecttionThree: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'white'
  },
  titleSecttionThree: {
    width: '90%',
    height: 'auto',
    marginTop: 10,
  },
  textTitle: {
    fontSize: 18,
    color: '#030303',
    fontWeight: '500'
  },
  BoxSecttionThree: {
    width: '100%',
    height: 280,
    marginTop: 20,
  },
  BoxChild: {
    width: '80%',
    height: "100%",
  },
  listBoxSecttionThree: {
    width: '20%',
    height: 230,
  },
  iconSecttionThree: {
    width: 80,
    height: 80,
    resizeMode: 'cover'
  },
  textSecttionThree: {
    width: 200,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#030303'
  },
  SecttionFour: {
    width: '100%',
    height: 500,
    backgroundColor: 'white'
  },
  titleSecttionFour: {
    width: '100%',
    height: 60,
    backgroundColor: '#fef8fa',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#c31730',
    lineHeight: 50,
  },
  SecttionFourChild: {
    width: '100%',
    height: 100,
    // backgroundColor: 'red'
    // backgroundColor: '#ffeaec'
  },
  titleTop: {},
  titleBottom: {},
  titleTopLeft: {},
  titleTopRight: {},
  sliderBoxSecttionFour: {
    width: '100%',
    height: 300,
    backgroundColor: 'white'
  },
  sliderBSFChild: {
    width: '50%',
    height: 300,
  },



  SecttionFive: {
    width: '100%',
    height: 300,
    backgroundColor: 'white'
  },



  FDRJAC: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  FDRJC: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  FDRSBAC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  FDSB: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  FDCC: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  FDCJSB: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  FDCJB: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  Mtop: {
    marginTop: 30,
  },



})