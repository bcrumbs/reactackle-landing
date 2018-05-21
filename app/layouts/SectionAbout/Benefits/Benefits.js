/**
 * @author Ekaterina Marova
 */

'use strict';

import React from 'react';
import { FlexRegion, Icon } from 'reactackle';

import {
  DataColumn,
  DataColumnTitle,
  DataColumnDescription,
  DataColumnsWrapper,
} from '../../../components/DataColumn/DataColumn';

import {
  ColorTile,
  ColorTileTitle,
  ColorTileContent,
  ColorTileActionsRow,
  ColorTileAnchor,
} from '../../../components/ColorTile/ColorTile';

import { TextGroup } from '../../../components/TextGroup/TextGroup';
import { BodyParagraph } from '../../../components/typography';
import { BenefitsBoxStyled } from './styles/BenefitsBoxStyled';
import { BenefitsWrapperStyled } from './styles/BenefitsWrapperStyled';

const BenefitItem = ({ title, description }) => (
  <DataColumn>
    <DataColumnTitle>{title}</DataColumnTitle>
    <DataColumnDescription>{description}</DataColumnDescription>
  </DataColumn>
);

export const Benefits = () => (
  <BenefitsBoxStyled>
    <ColorTile bgColor="primary">
      <FlexRegion spread>
        <ColorTileTitle>Growing library</ColorTileTitle>
        <ColorTileContent>20 components are already done and more than 40 are in the queue.</ColorTileContent>
      </FlexRegion>
      <ColorTileActionsRow>
        <ColorTileAnchor href="https://github.com/bcrumbs/reactackle">
          <span>See all components in our github repo</span>
        </ColorTileAnchor>
      </ColorTileActionsRow>
    </ColorTile>

    <ColorTile bgColor="neutral">
      <BenefitsWrapperStyled>
        <DataColumnsWrapper>
          <BenefitItem
            title="Customizable"
            description="Build to be easily restyled."
          />
          <BenefitItem
            title="Free and Open source"
            description="Written with the community in mind."
          />
          <BenefitItem
            title="Styled Components"
            description="Styled using leading CSS-in-JS approach."
          />
        </DataColumnsWrapper>
      </BenefitsWrapperStyled>

      <TextGroup
        header="Browser support"
      >
        <BodyParagraph>At present we aim to support the last two versions of the following browsers: Chrome, Edge, Firefox, Safari, Opera.</BodyParagraph>
      </TextGroup>
    </ColorTile>
  </BenefitsBoxStyled>
);

Benefits.displayName = 'Benefits';
