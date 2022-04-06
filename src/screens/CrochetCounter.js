/* eslint-disable react-hooks/exhaustive-deps */
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BLACK, PURPLE, WHITE} from '../constants/COLORS';
import CounterButtons from '../components/CounterButtons';
import Icon from 'react-native-vector-icons/Entypo';
import MenuModal from '../components/MenuModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CrochetCounter = () => {
  const [rowCounter, setRowCounter] = useState(0);
  const [stitchCounter, setStitchCounter] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [counterTitle, setCounterTitle] = useState('');
  const [counterTitleFinal, setCounterTitleFinal] = useState('');
  const [rowsNumber, setRowsNumber] = useState(0);
  const [rowsNumberFinal, setRowsNumberFinal] = useState(0);

  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      const parsedValue = jsonValue != null ? JSON.parse(jsonValue) : null;
      console.log({parsedValue});
      return parsedValue;
    } catch (e) {
      // error reading value
    }
  };

  const createALog = () => {
    console.log('AAAAAAAAA');
  };
  useEffect(() => {
    if (modalVisible === true) {
      setCounterTitle(counterTitleFinal);
      setRowsNumber(rowsNumberFinal);
    }
  }, [modalVisible]);

  useEffect(() => {
    (async () => {
      const storedTitle = await getData('counterTitleFinal');
      if (storedTitle) {
        setCounterTitleFinal(storedTitle);
      }
      const storedRows = await getData('rowsNumberFinal');
      if (storedRows) {
        setRowsNumberFinal(storedRows);
      }
      const storedRowCounter = await getData('rowCounter');
      if (storedRowCounter) {
        setRowCounter(storedRowCounter);
      }
      const storedStitch = await getData('stitchCounter');
      if (storedStitch) {
        setStitchCounter(storedStitch);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.iconContainer}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Icon name="dots-three-horizontal" size={35} color={WHITE} />
      </Pressable>
      <Text style={styles.text}>{counterTitleFinal}</Text>
      <CounterButtons
        text={'Row:'}
        counter={`${rowCounter}/${rowsNumberFinal}`}
        onMinusPress={() => {
          if (rowCounter > 0) {
            setRowCounter(rowCounter - 1);
            storeData('rowCounter', rowCounter);
          }
        }}
        onPlusPress={() => {
          setRowCounter(rowCounter + 1);
          storeData('rowCounter', rowCounter);
          setStitchCounter(0);
        }}
      />
      <CounterButtons
        text={'Stitch:'}
        counter={`${stitchCounter}`}
        onMinusPress={() => {
          if (stitchCounter > 0) {
            setStitchCounter(stitchCounter - 1);
            storeData('stitchCounter', stitchCounter);
          }
        }}
        onPlusPress={() => {
          setStitchCounter(stitchCounter + 1);
          storeData('stitchCounter', stitchCounter);
        }}
      />
      <MenuModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setRowCounter={setRowCounter}
        setStitchCounter={setStitchCounter}
        setCounterTitle={setCounterTitle}
        counterTitle={counterTitle}
        setRowsNumber={setRowsNumber}
        rowsNumber={rowsNumber}
        setCounterTitleFinal={setCounterTitleFinal}
        counterTitleFinal={counterTitleFinal}
        setRowsNumberFinal={setRowsNumberFinal}
        rowsNumberFinal={rowsNumberFinal}
        storeData={storeData}
      />
    </View>
  );
};

export default CrochetCounter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PURPLE,
    padding: 20,
  },
  iconContainer: {
    position: 'absolute',
    right: 20,
    top: 50,
    zIndex: 1,
  },
  text: {
    marginTop: 30,
    fontSize: 30,
    color: WHITE,
    alignSelf: 'center',
  },
});
