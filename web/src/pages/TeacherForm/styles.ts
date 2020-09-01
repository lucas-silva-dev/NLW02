import styled from 'styled-components';

import { HeaderContent } from '../../components/PageHeader/styles';

export const Fieldset = styled.fieldset`
  border: 0;
  padding: 0 2.4rem;

  & + fieldset {
    margin-top: 6.4rem;
  }

  legend {
    font: 700 2.4rem Archivo;
    color: var(--color-text-title);
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--color-line-in-white);
  }
`;

export const Footer = styled.footer`
  padding: 4rem 2.4rem;
  margin-top: 6.4rem;
  border-top: 1px solid var(--color-line-in-white);
  background: var(--color-box-footer);

  > p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--color-text-complement);

    img {
      margin-right: 2rem;
    }
  }

  > button {
    margin-top: 3.2rem;
    width: 100%;
    height: 5.6rem;
    background: var(--color-secondary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;

    &:hover {
      background-color: var(--color-secondary-dark);
    }
  }
`;

export const TeacherFormContainer = styled.div`
  width: 100vw;
  height: 100vh;

  > header {
    ${HeaderContent} {
      margin-bottom: 6.4rem;
    }
  }

  > main {
    background: var(--color-box-base);
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;
    margin: -3.2rem auto 3.2rem;
    padding-top: 6.4rem;
    overflow: hidden;

    label {
      color: var(--color-text-complement);
    }
  }

  @media (min-width: 700px) {
    max-width: 100vw;

    > header {
      ${HeaderContent} {
        margin-bottom: 0;
      }
    }

    ${Fieldset} {
      padding: 0 6.4rem;
    }

    ${Footer} {
      padding: 4rem 6.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      > p {
        justify-content: space-between;
      }

      > button {
        width: 20rem;
        margin-top: 0;
      }
    }
  }
`;
