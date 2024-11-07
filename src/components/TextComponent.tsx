import {View, Text, TextStyle, StyleProp} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/globalStyles';
import {colors} from '../constants/colors';

interface Props {
  text: string;
  size?: number;
  font?: string;
  color?: string;
  flex?: number;
  styles?: StyleProp<TextStyle>;
}
const TextComponent = (props: Props) => {
  const {text, font, size, color, flex, styles} = props;
  return (
    <Text
      style={[
        globalStyles.text,
        {
          flex: flex ?? 1,
          fontSize: size && size,
          fontFamily: font && font,
          color: color ? color : colors.desc,
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
