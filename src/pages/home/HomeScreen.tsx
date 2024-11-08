import {
  Add,
  Edit2,
  Element4,
  Logout,
  Notification,
  SearchNormal1,
} from 'iconsax-react-native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import AvatarGroup from '../../components/AvatarGroup';
import CardComponent from '../../components/CardComponent';
import CardImageComponent from '../../components/CardImageComponent';
import CircularComponent from '../../components/CircularComponent';
import Container from '../../components/Container';
import ProgressBarComponent from '../../components/ProgressBarComponent';
import RowComponent from '../../components/RowComponent';
import SectionComponent from '../../components/SectionComponent';
import SpaceComponent from '../../components/SpaceComponent';
import TagComponent from '../../components/TagComponent';
import TextComponent from '../../components/TextComponent';
import TitleComponent from '../../components/TitleComponent';
import {colors} from '../../constants/colors';
import {fontFamilies} from '../../constants/fontFamilies';
import {globalStyles} from '../../styles/globalStyles';
import RowComponents from '../../components/RowComponent';

// Firebase
import auth from '@react-native-firebase/auth';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
const HomeScreen = ({navigation}: any) => {
  const user = auth().currentUser;

  const handleLogout = async () => {
    auth()
      .signOut()
      .then(() =>
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Success',
          textBody: 'Logout successfully!',
        }),
      );
  };

  return (
    <View style={{flex: 1}}>
      <Container>
        <SectionComponent>
          <RowComponent justify="space-between">
            <Element4 size={24} color={colors.desc}></Element4>
            <Notification size={24} color={colors.desc}></Notification>
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <RowComponents
            justify="space-between"
            stylesCustom={{alignItems: 'flex-start'}}>
            <View>
              <TextComponent text={user?.email || ''}></TextComponent>
              <TitleComponent text="Be Productive today"></TitleComponent>
            </View>
            <TouchableOpacity onPress={handleLogout}>
              <Logout size={20} color={colors.white} rotation={-180}></Logout>
            </TouchableOpacity>
          </RowComponents>
        </SectionComponent>
        <SectionComponent>
          <RowComponent
            stylesCustom={[globalStyles.inputContainer]}
            onPress={() => {
              navigation.navigate('SearchTask');
            }}>
            <TextComponent color="#696b6f" text="Search task"></TextComponent>
            <SearchNormal1 size={20} color={colors.desc}></SearchNormal1>
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <CardComponent>
            <RowComponent>
              <View style={[{flex: 1}]}>
                <TitleComponent text="Task progress"></TitleComponent>
                <TextComponent text="30/40 tasks done"></TextComponent>
                <SpaceComponent height={12}></SpaceComponent>
                <RowComponent justify="flex-start">
                  <TagComponent text="March 22"></TagComponent>
                </RowComponent>
              </View>
              <View>
                <CircularComponent
                  value={60}
                  maxValue={100}></CircularComponent>
              </View>
            </RowComponent>
          </CardComponent>
        </SectionComponent>
        <SectionComponent>
          <RowComponent stylesCustom={{alignItems: 'flex-start'}}>
            <View style={{flex: 1}}>
              <CardImageComponent>
                <TouchableOpacity
                  onPress={() => {}}
                  style={globalStyles.iconContainer}>
                  <Edit2 size={20} color={colors.white} />
                </TouchableOpacity>
                <TitleComponent text="UX Design" />
                <TextComponent text="Task management mobile app" size={13} />
                <View style={{marginVertical: 28}}>
                  <AvatarGroup />
                  <ProgressBarComponent
                    percent="70%"
                    color="#0AACFF"
                    size="large"
                  />
                </View>
                <TextComponent
                  text="Due, 2023 Match 03"
                  size={12}
                  color={colors.desc}
                />
              </CardImageComponent>
            </View>
            <SpaceComponent width={16} />
            <View style={{flex: 1}}>
              <CardImageComponent
                color="rgba(33, 150, 243, 0.9)"
                styles={{
                  paddingVertical: 10,
                  flex: 0.5,
                }}>
                <TouchableOpacity
                  onPress={() => {}}
                  style={[
                    globalStyles.iconContainer,
                    {
                      marginBottom: 4,
                    },
                  ]}>
                  <Edit2 size={20} color={colors.white} />
                </TouchableOpacity>
                <TitleComponent text="API Payment" size={18} />
                <AvatarGroup />
                <ProgressBarComponent
                  percent="40%"
                  color="#A2F068"
                  styles={{marginBottom: 3}}
                />
              </CardImageComponent>
              <SpaceComponent height={10} />
              <CardImageComponent color="rgba(18, 181, 22, 0.9)">
                <TouchableOpacity
                  onPress={() => {}}
                  style={globalStyles.iconContainer}>
                  <Edit2 size={20} color={colors.white} />
                </TouchableOpacity>
                <TitleComponent text="Update work" />
                <TextComponent text="Revision home page" size={13} />
              </CardImageComponent>
            </View>
          </RowComponent>
        </SectionComponent>
        <SpaceComponent height={10}></SpaceComponent>
        <SectionComponent>
          <TextComponent
            flex={1}
            font={fontFamilies.bold}
            size={21}
            text="Urgent tasks"
            styles={{marginBottom: 10}}
          />
          <CardComponent>
            <RowComponent>
              <CircularComponent value={40} radius={36} />
              <View
                style={{flex: 1, justifyContent: 'center', paddingLeft: 12}}>
                <TextComponent text="Title of task" />
              </View>
            </RowComponent>
          </CardComponent>
        </SectionComponent>

        <SectionComponent>
          <TextComponent
            flex={1}
            font={fontFamilies.bold}
            size={21}
            text="Urgent tasks"
            styles={{marginBottom: 10}}
          />
          <CardComponent>
            <RowComponent>
              <CircularComponent value={40} radius={36} />
              <View
                style={{flex: 1, justifyContent: 'center', paddingLeft: 12}}>
                <TextComponent text="Title of task" />
              </View>
            </RowComponent>
          </CardComponent>
        </SectionComponent>
      </Container>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 5,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate('AddNewTask')}
          style={[
            globalStyles.row,
            {
              backgroundColor: '#0096C7',
              padding: 10,
              borderRadius: 30,
              paddingVertical: 14,
              width: '80%',
              zIndex: 5,
            },
          ]}>
          <TextComponent text="Add new tasks" flex={0} />
          <Add size={22} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
