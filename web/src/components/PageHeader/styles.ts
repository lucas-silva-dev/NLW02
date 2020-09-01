import styled from 'styled-components';

export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-in-primary);
  padding: 1.6rem 0;

  a {
    height: 3.2rem;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }

  > img {
    height: 1.6rem;
  }
`;

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }

  p {
    max-width: 30rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--color-text-in-primary);
    margin-top: 2.4rem;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  background: var(--color-primary);

  @media (min-width: 700px) {
    height: 340px;

    ${TopBarContainer} {
      max-width: 1100px;
    }

    ${HeaderContent} {
      max-width: 740px;

      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      margin: 0 auto;
      padding-bottom: 48px;

      strong {
        max-width: 350px;
      }
    }
  }
`;
