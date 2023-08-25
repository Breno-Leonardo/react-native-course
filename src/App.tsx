import {SafeAreaView, Text} from 'react-native';
import styled from 'styled-components/native';
import Login from './modules/login';
import Modal from './shared/components/modal/Modal';
import {useState} from 'react';
import Button from './shared/components/button/Button';

const App = () => {
  
  return (
    <SafeAreaView>
      <Login></Login>
    </SafeAreaView>
  );
};
export default App;
