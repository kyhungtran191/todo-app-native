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

const initialValue: TaskModel = {
  title: '',
  description: '',
  dueDate: new Date(),
  start: '',
  uids: [],
  fileUrls: [],
};

const AddNewTask = ({navigation}: any) => {
  const [tasksDetail, setTaskDetail] = useState<TaskModel>(initialValue);
  const handleChangeValue = (id: string, value: string | Date) => {
    const item: any = {...tasksDetail};
    item[`${id}`] = value;
    setTaskDetail(item);
  };

  const handleAddNewTask = async () => {
    console.log(tasksDetail);
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
          type="time"
          title="Due Date"
          placeholder="Task Due Date"
          onSelect={value =>
            handleChangeValue('dueDate', value)
          }></DateTimePickerComponent>
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
