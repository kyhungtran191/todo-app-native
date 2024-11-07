import {View, Text, StyleProp, ViewStyle, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import TextComponent from './TextComponent';

interface Props {
  onPress?: () => void;
  title: string;
  styles?: StyleProp<ViewStyle>;
}

const ButtonComponent = (props: Props) => {
  const {styles, title, onPress} = props;
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: colors.blue,
          borderRadius: 12,
          padding: 16,
        },
        styles,
      ]}
      onPress={onPress}
      disabled={!onPress}>
      <TextComponent
        text={title}
        styles={{
          textAlign: 'center',
        }}></TextComponent>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
