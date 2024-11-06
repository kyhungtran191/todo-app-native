import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import {globalStyles} from '../../styles/globalStyles';
import RowComponent from '../../components/RowComponent';
import SectionComponent from '../../components/SectionComponent';
import TextComponent from '../../components/TextComponent';
import {fontFamilies} from '../../constants/fontFamilies';
import TitleComponent from '../../components/TitleComponent';
import {colors} from '../../constants/colors';
import CardComponent from '../../components/CardComponent';

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponent>
        <RowComponent justify="space-between">
          <TextComponent text="Home" flex={0}></TextComponent>
          <TextComponent text="Home" flex={0}></TextComponent>
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <TextComponent text="Hi, Justin"></TextComponent>
        <TitleComponent text="Be Productive today"></TitleComponent>
      </SectionComponent>
      <SectionComponent>
        <RowComponent
          stylesCustom={[globalStyles.inputContainer]}
          onPress={() => {
            console.log('Press search bar');
          }}>
          <TextComponent text="Search"></TextComponent>
          <Text>Icon</Text>
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <CardComponent>
          <RowComponent>
            <View style={[{flex: 1}]}>
              <TitleComponent text="Task progress"></TitleComponent>
              <TextComponent text="30/40 tasks done"></TextComponent>
              <TextComponent text="Tag"></TextComponent>
            </View>
            <View>
              <TextComponent text="Circle chart"></TextComponent>
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;
