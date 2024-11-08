import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/Container';
import SectionComponent from '../../components/SectionComponent';
import {colors} from '../../constants/colors';
import TextComponent from '../../components/TextComponent';
import {TaskModel} from '../../models/TaskModel';
import InputComponent from '../../components/InputComponent';
import SpaceComponent from '../../components/SpaceComponent';
import ButtonComponent from '../../components/ButtonComponent';
import DateTimePickerComponent from '../../components/DateTimePickerComponent';
import RowComponents from '../../components/RowComponent';
import DropdownPicker from '../../components/DropdownPicker';
import {SelectModel} from '../../models/SelectModel';
import TitleComponent from '../../components/TitleComponent';
import {AttachSquare} from 'iconsax-react-native';

// Document Picker
import DocumentPicker, {
  DocumentPickerOptions,
  DocumentPickerResponse,
} from 'react-native-document-picker';

// Firebase
import storage from '@react-native-firebase/storage';
import RNFS from 'react-native-fs';

const initialValue: TaskModel = {
  title: '',
  description: '',
  dueDate: new Date(),
  start: new Date(),
  end: new Date(),
  uids: [],
  fileUrls: [],
};

const AddNewTask = ({navigation}: any) => {
  const [attachments, setAttachments] = useState<DocumentPickerResponse[]>([]);
  const [usersOption, setUserOption] = useState<SelectModel[] | []>([
    {label: 'Ky Hung', value: 'Ky Hung'},
    {label: 'Minh An', value: 'Minh An'},
    {label: 'Trung Hieu', value: 'Trung Hieu'},
  ]);
  const [attachmentsURL, setAttachmentsURL] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string[]>([]);
  const [tasksDetail, setTaskDetail] = useState<TaskModel>(initialValue);
  const handleChangeValue = (id: string, value: string | Date) => {
    const item: any = {...tasksDetail};
    item[`${id}`] = value;
    setTaskDetail(item);
  };

  const handleAddNewTask = async () => {
    console.log(tasksDetail);
  };

  const handlePickerDocument = () => {
    DocumentPicker.pick({})
      .then(res => {
        setAttachments(res);
        res.forEach(item => handleUploadFileToStorage(item));
      })
      .catch(err => console.log(err));
  };

  const handleUploadFileToStorage = async (item: DocumentPickerResponse) => {
    const filename = item.name ?? `file${Date.now}`;
    const path = `documents/${filename}`;
    const items = [...attachmentsURL];
    await storage().ref(path).putFile(item.uri);
    await storage()
      .ref(path)
      .getDownloadURL()
      .then(url => {
        items.push(url);
        setAttachmentsURL(items);
      });
  };

  return (
    <Container back title="Add new task">
      <SectionComponent>
        <InputComponent
          value={tasksDetail.title}
          onChange={val => handleChangeValue('title', val)}
          title="Title"
          allowClear
          placeholder="Title of task"
        />
        <InputComponent
          value={tasksDetail.description}
          onChange={val => handleChangeValue('description', val)}
          title="Description"
          allowClear
          placeholder="Content"
          multiple
          numberOfLine={3}
        />
      </SectionComponent>
      <SectionComponent>
        <DateTimePickerComponent
          selected={tasksDetail.dueDate}
          type="date"
          title="Due Date"
          placeholder="Task Due Date"
          onSelect={value =>
            handleChangeValue('dueDate', value)
          }></DateTimePickerComponent>
      </SectionComponent>
      <SectionComponent>
        <RowComponents>
          <View style={{flex: 1}}>
            <DateTimePickerComponent
              selected={tasksDetail.start}
              type="time"
              title="Start at"
              placeholder="Start time"
              onSelect={value =>
                handleChangeValue('start', value)
              }></DateTimePickerComponent>
          </View>
          <SpaceComponent width={14}></SpaceComponent>
          <View style={{flex: 1}}>
            <DateTimePickerComponent
              selected={tasksDetail.end}
              type="time"
              title="End at"
              placeholder="End Time"
              onSelect={value =>
                handleChangeValue('end', value)
              }></DateTimePickerComponent>
          </View>
        </RowComponents>
      </SectionComponent>

      <View>
        <RowComponents onPress={handlePickerDocument}>
          <TitleComponent text="Attachment" flex={0}></TitleComponent>
          <SpaceComponent></SpaceComponent>
          <AttachSquare size={20} color={colors.white}></AttachSquare>
        </RowComponents>
        {attachments?.length > 0 &&
          attachments.map((item, index) => (
            <RowComponents
              key={`${item}-${index}`}
              stylesCustom={{paddingVertical: 10}}>
              <TextComponent text={item.name || ''}></TextComponent>
            </RowComponents>
          ))}
      </View>

      <SectionComponent>
        <DropdownPicker
          items={usersOption}
          onSelect={setSelectedOption}
          selected={selectedOption}
          multible
          title="Member"></DropdownPicker>
      </SectionComponent>

      <SectionComponent>
        <ButtonComponent
          title="Submit"
          onPress={() => handleAddNewTask()}></ButtonComponent>
      </SectionComponent>
    </Container>
  );
};

export default AddNewTask;
