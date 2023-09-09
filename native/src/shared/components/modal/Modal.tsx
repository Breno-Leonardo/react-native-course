import React from 'react';
import {
  Alert,
  Modal as ModalReactNative,
  ModalProps as ModalPropsReactNative,
  Pressable,
  View,
  Animated,
} from 'react-native';
import {ContainerModal, IconCloseModal} from './modal.style';
import Text from '../text/Text';
import {theme} from '../../themes/theme';
import {textTypes} from '../text/textTypes';
import Button from '../button/Button';
import { modalTestId } from './__mocks__/modal.testid';

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
            testID={modalTestId.MODAL_TITLE}
            color={theme.colors.mainTheme.primary}
            type={textTypes.PARAGRAPH_SEMI_BOLD}>
            {props.title}
          </Text>
          <Text testID={modalTestId.MODAL_TEXT} margin="0px 0px 12px 0px" >{props.text}</Text>

          <Button testID={modalTestId.MODAL_CLOSE_BUTTON} title="OK" onPress={props.onCloseModal}></Button>
          <IconCloseModal testID={modalTestId.MODAL_CLOSE_ICON} name="cross" onPress={props.onCloseModal}></IconCloseModal>
        </ContainerModal>
      </ModalReactNative>
    </View>
  );
};
export default Modal;
