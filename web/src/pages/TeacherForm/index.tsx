import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';

import { TeacherFormContainer, Fieldset, Footer } from './styles';

const TeacherForm: React.FC = () => {
  return (
    <TeacherFormContainer>
      <PageHeader
        title="Que legal que você quer dar aulas!"
        description="O primeiro passo é preencher esse formulário de inscrição."
      />

      <main>
        <Fieldset>
          <legend>Seus Dados</legend>

          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
        </Fieldset>

        <Fieldset>
          <legend>Sobre a aula</legend>

          <Input name="subject" label="Matéria" />
          <Input name="cost" label="Custo da sua aula por hora" />
        </Fieldset>

        <Footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </Footer>
      </main>
    </TeacherFormContainer>
  );
};

export default TeacherForm;
