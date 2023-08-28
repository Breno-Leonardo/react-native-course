import React, {useState} from 'react';
import {
  Alert,
  Modal as ModalReactNative,
  ModalProps as ModalPropsReactNative,
  Pressable,
  View,
  Animated,
} from 'react-native';
import {ContainerModal, IconCloseModal} from './modal.style';
import {Icon} from '../../icon/Icon';
import Text from '../text/Text';
import {theme} from '../../themes/theme';
import {textTypes} from '../text/textTypes';
import Button from '../button/Button';

interface ModalProps extends ModalPropsReactNative {
  title: string;
  text: string;
  onCloseModal: () => void;
}

const Modal = (props: ModalProps) => {
  return (
    <View>
      <ModalReactNative
        animationType="fade"
        transparent={true}
        visible={props.visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          props.onCloseModal();
        }}
        {...props}>
        <ContainerModal>
          <Text
            margin="16px"
            color={theme.colors.mainTheme.primary}
            type={textTypes.PARAGRAPH_SEMI_BOLD}>
            {props.title}
          </Text>
          <Text margin="0px 0px 12px 0px" >{props.text}</Text>

          <Button title="OK" onPress={props.onCloseModal}></Button>
          <IconCloseModal name="cross" onPress={props.onCloseModal}></IconCloseModal>
        </ContainerModal>
      </ModalReactNative>
    </View>
  );
};
export default Modal;
