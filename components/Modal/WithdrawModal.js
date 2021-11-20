import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Button,
  Dimensions,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';
import {List} from 'react-native-paper';

const screenWidth = Dimensions.get('screen').width;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function WithdrawModal(props) {
  const {t} = useTranslation();
  const {colors, colors2} = useTheme();
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <Modal
      animationType="slide"
      statusBarTranslucent={true}
      transparent={true}
      visible={props.showModal}
      onRequestClose={() => (Modal.visible = false)}>
      <View style={[styles.centeredView]}>
        <View style={[styles.modalView, {backgroundColor: colors2.background}]}>
          <View style={styles.modelTitleView}>
            <Text style={[styles.modalTitle, {color: colors.value}]}>
              {t('SELECT CATEGORY')}
            </Text>
          </View>
          <View
            style={[
              styles.modalViewSelect,
              {backgroundColor: colors.background},
            ]}>
            <ScrollView
              contentContainerStyle={{width: windowWidth - 100}}
              contentInset={{top: 0, left: 0, bottom: 0, right: 0}}>
              <List.Section title="">
                <List.Accordion
                  title={t('Food/Drink')}
                  titleStyle={[styles.title, {color: colors.value}]}
                  left={props => (
                    <Icon
                      name="restaurant-sharp"
                      size={25}
                      color={colors.value}
                    />
                  )}
                  onPress={handlePress}>
                  <TouchableOpacity>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon
                        name="restaurant-sharp"
                        size={25}
                        color={colors.value}
                      />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Food/Drink')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon
                        name="ios-beer-sharp"
                        size={25}
                        color={colors.value}
                      />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Restaurant')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </List.Accordion>
                <List.Accordion
                  title={t('Shopping')}
                  titleStyle={[styles.title, {color: colors.value}]}
                  left={props => (
                    <Icon
                      name="ios-cart-sharp"
                      size={25}
                      color={colors.value}
                    />
                  )}
                  onPress={handlePress}>
                  <TouchableOpacity>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon
                        name="ios-cart-sharp"
                        size={25}
                        color={colors.value}
                      />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Shopping')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon
                        name="ios-shirt-sharp"
                        size={25}
                        color={colors.value}
                      />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Clothes')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon
                        name="ios-shirt-sharp"
                        size={25}
                        color={colors.value}
                      />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Footwear')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon name="md-tv-sharp" size={25} color={colors.value} />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Technology')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon
                        name="ios-gift-sharp"
                        size={25}
                        color={colors.value}
                      />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Gift')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </List.Accordion>
                <List.Accordion
                  title={t('Transport')}
                  titleStyle={[styles.title, {color: colors.value}]}
                  left={props => (
                    <Icon
                      name="md-car-sport-sharp"
                      size={25}
                      color={colors.value}
                    />
                  )}
                  onPress={handlePress}>
                  <TouchableOpacity>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon name="bus" size={25} color={colors.value} />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Public Transport')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon
                        name="car-sport-sharp"
                        size={25}
                        color={colors.value}
                      />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Vehicle')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon name="water-sharp" size={25} color={colors.value} />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Fuel')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon
                        name="shield-sharp"
                        size={25}
                        color={colors.value}
                      />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Insurance')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </List.Accordion>
                <List.Accordion
                  title={t('Family')}
                  titleStyle={[styles.title, {color: colors.value}]}
                  left={props => (
                    <Icon
                      name="ios-people-sharp"
                      size={25}
                      color={colors.value}
                    />
                  )}
                  onPress={handlePress}>
                  <TouchableOpacity>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon
                        name="ios-people-sharp"
                        size={25}
                        color={colors.value}
                      />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Family')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon
                        name="people-circle-sharp"
                        size={25}
                        color={colors.value}
                      />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Children')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon name="home" size={25} color={colors.value} />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('House')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </List.Accordion>
                <List.Accordion
                  title={t('Health/Sports')}
                  titleStyle={[styles.title, {color: colors.value}]}
                  left={props => (
                    <Icon
                      name="md-heart-sharp"
                      size={25}
                      color={colors.value}
                    />
                  )}
                  onPress={handlePress}>
                  <TouchableOpacity>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon
                        name="md-heart-sharp"
                        size={25}
                        color={colors.value}
                      />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Health')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon
                        name="ios-barbell-sharp"
                        size={25}
                        color={colors.value}
                      />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Sport')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </List.Accordion>
                <List.Accordion
                  title={t('Pet')}
                  titleStyle={[styles.title, {color: colors.value}]}
                  left={props => (
                    <Icon name="ios-paw-sharp" size={25} color={colors.value} />
                  )}
                  onPress={handlePress}>
                  <TouchableOpacity>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon name="md-paw" size={25} color={colors.value} />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Pet Food')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </List.Accordion>
                <List.Accordion
                  title={t('Travel')}
                  titleStyle={[styles.title, {color: colors.value}]}
                  left={props => (
                    <Icon
                      name="airplane-sharp"
                      size={25}
                      color={colors.value}
                    />
                  )}
                  onPress={handlePress}>
                  <TouchableOpacity>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon
                        name="airplane-sharp"
                        size={25}
                        color={colors.value}
                      />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Travel')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon name="bus-sharp" size={25} color={colors.value} />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Transport - Travel')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon name="bed" size={25} color={colors.value} />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Room Rental')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </List.Accordion>
                <List.Accordion
                  title={t('Others (Cost)')}
                  titleStyle={[styles.title, {color: colors.value}]}
                  left={props => (
                    <Icon name="md-receipt" size={25} color={colors.value} />
                  )}
                  onPress={handlePress}>
                  <TouchableOpacity>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon name="md-receipt" size={25} color={colors.value} />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Others (Cost)')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View
                      style={[
                        styles.dropDownContent,
                        {borderBottomColor: colors2.borderBottomColor},
                      ]}>
                      <Icon
                        name="md-wallet-sharp"
                        size={25}
                        color={colors.value}
                      />
                      <Text style={[styles.title, {color: colors.value}]}>
                        {t('Tax')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </List.Accordion>
              </List.Section>
            </ScrollView>
          </View>
          <View style={styles.btn}>
            <Button
              onPress={() => props.closeModal()}
              title="Close"
              color="#6236FF"
              style={styles.btn}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: '#ededf5',
    borderRadius: 10,
    paddingBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: screenWidth - 33,
    height: windowHeight - 200,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  modelTitleView: {
    backgroundColor: '#6236FF',
    height: 100,
    justifyContent: 'flex-start',
    paddingTop: 15,
    alignItems: 'center',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalTitle: {
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 20,
    fontWeight: '500',
  },
  modalViewSelect: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: windowWidth - 75,
    alignItems: 'flex-start',
    alignContent: 'center',
    borderRadius: 10,
    marginTop: -40,
    padding: 15,
    height: windowHeight - 320,
  },
  dropDownContent: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    padding: 5,
    marginLeft: -30,
    marginRight: 40,
  },
  title: {
    paddingLeft: 5,
    fontWeight: '400',
    fontSize: 20,
    width: '100%',
  },
  btn: {
    width: '50%',
    paddingTop: 10,
    borderRadius: 20,
  },
});
