import {SafeAreaView, Text} from 'react-native';
import styled from 'styled-components/native';
import Login from './modules/login';
import Modal from './shared/components/modal/Modal';
import {useState} from 'react';
import Button from './shared/components/button/Button';
import store from './store';
import {Provider} from 'react-redux';
import GlobalModal from './shared/components/modal/globalModal/GlobalModal';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalModal></GlobalModal>
      <SafeAreaView>
        <Login></Login>
      </SafeAreaView>
    </Provider>
  );
};
export default App;
