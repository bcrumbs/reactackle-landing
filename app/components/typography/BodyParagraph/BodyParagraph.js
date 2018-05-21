'use strict';

import React from 'react';
import { BodyParagraphStyled } from './styles/BodyParagraphStyled';

export const BodyParagraph = props => (
  <BodyParagraphStyled>
    {props.children}
  </BodyParagraphStyled>
);

BodyParagraph.displayName = 'BodyParagraph';
