import {View, Text} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/globalStyles';
import {colors} from '../constants/colors';

interface Props {
  text: string;
  size?: number;
  font?: string;
  color?: string;
  flex?: number;
}
const TextComponent = (props: Props) => {
  const {text, font, size, color, flex} = props;
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
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
