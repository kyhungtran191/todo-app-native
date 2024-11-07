import {View, Text} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import TextComponent from '../components/TextComponent';

const SearchScreen = () => {
  return (
    <Container back title="Search Tasks">
      <TextComponent text="Search Tasks" />
    </Container>
  );
};

export default SearchScreen;
