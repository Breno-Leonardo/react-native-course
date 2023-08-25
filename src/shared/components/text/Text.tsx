import {TextProps as TextPropsNative} from 'react-native';
import {ContainerText} from './text.style';
import {textTypes} from './textTypes';
import {useMemo} from 'react';

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
  margin?: string;
}

const Text = ({...props}: TextProps) => {
  const fontSize = useMemo(() => {
    if (
      props.type === textTypes.TITLE_BOLD ||
      props.type === textTypes.TITLE_SEMI_BOLD ||
      props.type === textTypes.TITLE_LIGHT ||
      props.type === textTypes.TITLE_REGUALR
    ) {
      return '24px';
    } else if (
      props.type === textTypes.SUB_TITLE_BOLD ||
      props.type === textTypes.SUB_TITLE_SEMI_BOLD ||
      props.type === textTypes.SUB_TITLE_LIGHT ||
      props.type === textTypes.SUB_TITLE_REGUALR
    ) {
      return '20px';
    } else if (
      props.type === textTypes.BUTTON_BOLD ||
      props.type === textTypes.BUTTON_SEMI_BOLD ||
      props.type === textTypes.BUTTON_LIGHT ||
      props.type === textTypes.BUTTON_REGUALR
    ) {
      return '18px';
    } else if (
      props.type === textTypes.PARAGRAPH_BOLD ||
      props.type === textTypes.PARAGRAPH_SEMI_BOLD ||
      props.type === textTypes.PARAGRAPH_LIGHT ||
      props.type === textTypes.PARAGRAPH_REGUALR
    ) {
      return '14px';
    } else if (
      props.type === textTypes.PARAGRAPH_SMALL_BOLD ||
      props.type === textTypes.PARAGRAPH_SMALL_SEMI_BOLD ||
      props.type === textTypes.PARAGRAPH_SMALL_LIGHT ||
      props.type === textTypes.PARAGRAPH_SMALL_REGUALR
    ) {
      return '10px';
    } else {
      return '16px';
    }
  }, [props.type]);

  const fontFamily = useMemo(() => {
    if (
      props.type === textTypes.TITLE_BOLD ||
      props.type === textTypes.BUTTON_BOLD ||
      props.type === textTypes.PARAGRAPH_BOLD ||
      props.type === textTypes.PARAGRAPH_SMALL_BOLD
    ) {
      return 'Poppins-Bold';
    } else if (
      props.type === textTypes.TITLE_SEMI_BOLD ||
      props.type === textTypes.SUB_TITLE_SEMI_BOLD ||
      props.type === textTypes.BUTTON_SEMI_BOLD ||
      props.type === textTypes.PARAGRAPH_SEMI_BOLD ||
      props.type === textTypes.PARAGRAPH_SMALL_SEMI_BOLD
    ) {
      return 'Poppins-SemiBold';
    } else if (
      props.type === textTypes.TITLE_LIGHT ||
      props.type === textTypes.SUB_TITLE_LIGHT ||
      props.type === textTypes.BUTTON_LIGHT ||
      props.type === textTypes.PARAGRAPH_LIGHT ||
      props.type === textTypes.PARAGRAPH_SMALL_LIGHT
    ) {
      return 'Poppins-Light';
    } else {
      return 'Poppins-Regular';
    }
  }, [props.type]);

  return (
    <ContainerText
    customMargin={props.margin}
      fontFamily={fontFamily}
      fontSize={fontSize}
      {...props}></ContainerText>
  );
};

export default Text;
