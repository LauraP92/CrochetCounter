import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {BLACK, PURPLE, WHITE} from '../constants/COLORS';
import ModalButtons from './ModalButtons';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuModal = ({
  modalVisible,
  setModalVisible,
  setRowCounter,
  setStitchCounter,
  setCounterTitle,
  counterTitle,
  setRowsNumber,
  rowsNumber,
  setCounterTitleFinal,
  setRowsNumberFinal,
  storeData,
}) => {
  const [isReset, setIsReset] = useState(false);

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.centeredView}>
          <Text style={styles.menuText}>Menu</Text>
          <Pressable
            style={styles.iconContainer}
            onPress={() => {
              setModalVisible(false);
            }}>
            <Icon name="close" size={28} color={WHITE} />
          </Pressable>
          <Text style={styles.inputText}>Counter name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Add a name to your counter"
            onChangeText={text => {
              setCounterTitle(text);
            }}
            value={counterTitle}
          />
          <View style={styles.rowsNumber}>
            <Text style={styles.textRowNumber}>Number of rows:</Text>
            <TextInput
              style={styles.rowsNumberInput}
              placeholder="24"
              keyboardType={'numeric'}
              onChangeText={number => {
                setRowsNumber(number);
              }}
              value={`${rowsNumber}`}
            />
          </View>

          {isReset ? (
            <>
              <Text style={styles.resetText}>Confirm reset counter</Text>
              <View style={styles.confirmContainer}>
                <ModalButtons
                  style={styles.confirmButton}
                  title={'Reset'}
                  onPress={() => {
                    setRowCounter(0);
                    setStitchCounter(0);
                    setModalVisible(false);
                    setIsReset(false);
                    storeData('stitchCounter', 0);
                    storeData('rowCounter', 0);
                  }}
                />
                <View style={styles.spacer} />
                <ModalButtons
                  style={styles.confirmButton}
                  title={'Cancel'}
                  onPress={() => {
                    setIsReset(false);
                  }}
                />
              </View>
            </>
          ) : (
            <>
              <ModalButtons
                title={'Reset counter'}
                onPress={() => {
                  setIsReset(true);
                }}
              />
              <ModalButtons
                title={'Save'}
                onPress={() => {
                  setCounterTitleFinal(counterTitle);
                  setRowsNumberFinal(rowsNumber);
                  setModalVisible(false);
                  storeData('counterTitleFinal', counterTitle);
                  storeData('rowsNumberFinal', rowsNumber);
                }}
              />
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default MenuModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: `${BLACK}9A`,
    flex: 1,
    padding: 15,
    paddingTop: 80,
  },
  centeredView: {
    marginTop: 22,
    borderRadius: 20,
    backgroundColor: PURPLE,
    padding: 15,
  },
  menuText: {
    color: WHITE,
    fontSize: 24,
    alignSelf: 'center',
  },
  iconContainer: {
    position: 'absolute',
    right: 15,
    top: 10,
  },
  inputText: {
    color: WHITE,
    fontSize: 20,
    marginTop: 10,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    fontSize: 20,
    paddingLeft: 20,
  },
  rowsNumber: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textRowNumber: {
    color: WHITE,
    fontSize: 20,
  },
  rowsNumberInput: {
    height: 50,
    width: 116,
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    fontSize: 28,
    paddingLeft: 40,
  },
  resetText: {
    marginTop: 15,
    color: WHITE,
    fontSize: 24,
    alignSelf: 'center',
  },
  confirmContainer: {
    flexDirection: 'row',
  },
  confirmButton: {
    flex: 1,
  },
  spacer: {
    width: 15,
  },
});
