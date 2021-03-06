import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import { HeaderContainer, TopBarContainer, HeaderContent } from './styles';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  children,
  description,
}) => {
  return (
    <HeaderContainer>
      <TopBarContainer>
        <Link to="/">
          <img src={backIcon} alt="" />
        </Link>

        <img src={logoImg} alt="" />
      </TopBarContainer>

      <HeaderContent>
        <strong>{title}</strong>
        {description && <p>{description}</p>}

        {children}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default PageHeader;
