/**
 * @author Ekaterina Marova
 */

'use strict';

import React from 'react';
import { SocialItemStyled } from './styles/SocialItemStyled';
import { ImageStyled } from './styles/ImageStyled';
import { TitleStyled } from './styles/TitleStyled';
import { DescriptionStyled } from './styles/DescriptionStyled';

export const SocialItem = ({
  image,
  title,
  description,
  href,
}) => (
  <SocialItemStyled href={href}>
    <ImageStyled image={image} />
    <TitleStyled>{title}</TitleStyled>
    <DescriptionStyled>{description}</DescriptionStyled>
  </SocialItemStyled>
);

SocialItem.displayName = 'SocialItem';
