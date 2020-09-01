import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

import { TeacherListContainer, FormContainer } from './styles';

const TeacherList: React.FC = () => {
  return (
    <TeacherListContainer>
      <PageHeader title="Estes são os profys disponíveis.">
        <FormContainer>
          <Input name="subject" label="Matéria" />
          <Input name="week_day" label="Dia da semana" />
          <Input type="time" name="Hora" label="time" />
        </FormContainer>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
      </main>
    </TeacherListContainer>
  );
};

export default TeacherList;
