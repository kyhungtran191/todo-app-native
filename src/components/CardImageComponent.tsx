import {View, Text, ImageBackground, StyleProp, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';
interface Props {
  children: ReactNode;
  color?: string;
  styles?: StyleProp<ViewStyle>;
}

const CardImageComponent = (props: Props) => {
  const {children, color, styles} = props;

  return (
    <ImageBackground
      source={require('../assets/images/card-bg.png')}
      imageStyle={{borderRadius: 12}}
      style={[globalStyles.card]}>
      <View
        style={[
          {
            backgroundColor: color ?? 'rgba(113, 77, 217, 0.9)',
            borderRadius: 12,
            flex: 1,
            padding: 12,
          },
          styles,
        ]}>
        {children}
      </View>
    </ImageBackground>
  );
};

export default CardImageComponent;
