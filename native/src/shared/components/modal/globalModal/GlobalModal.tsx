import {useState} from 'react';
import Modal from '../Modal';
import {useGlobalReducer} from '../../../../store/reducers/globalReducer/useGlobalReducer';
import { modalTestId } from '../__mocks__/modal.testid';
import { globalModalTestId } from './__mocks__/globalModal.testid';

export interface GlobalModalType {
  visible: boolean;
  title: string;
  text: string;
}

const GlobalModal = () => {
  const {modal,closeModal} = useGlobalReducer();
  return (
    <Modal
      title={modal.title}
      text={modal.text}
      visible={modal.visible}
      testID={globalModalTestId.GLOBAL_MODAL_CONTAINER}
      onCloseModal={closeModal}></Modal>
  );
};

export default GlobalModal;
