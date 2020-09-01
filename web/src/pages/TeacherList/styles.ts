import styled from 'styled-components';

import { Container } from '../../styles/global';

export const FormContainer = styled.form`
  margin-top: 3.2rem;

  label {
    color: var(--color-text-in-primary);
  }
`;

export const TeacherListContainer = styled(Container)`
  width: 100vw;
  height: 100vh;

  main {
    margin: 3.2rem auto;
    width: 90%;
  }

  @media (min-width: 700px) {
    max-width: 100%;

    ${FormContainer} {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 16px;
      position: absolute;
      bottom: -28px;

      div + div {
        margin-top: 0;
      }
    }

    main {
      padding: 3.2rem 0;
      max-width: 740px;
      margin: 0 auto;
    }
  }
`;
