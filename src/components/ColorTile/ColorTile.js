import React from 'react';
import PropTypes from 'prop-types';
import { ColorTileStyled } from './styles/ColorTileStyled';
import { ContentStyled } from './styles/ContentStyled';

const propTypes = {
  bgColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([
      'primary',
      'secondary',
      'neutral',
      'info',
    ])
  ]),
};

const defaultProps = {
  bgColor: 'primary',
};

export const ColorTile = props => (
  <ColorTileStyled bgColor={props.bgColor}>
    <ContentStyled>
      {props.children}
    </ContentStyled>
  </ColorTileStyled>
);

ColorTile.displayName = 'ColorTile';
ColorTile.propTypes = propTypes;
ColorTile.defaultProps = defaultProps;

export * from './ColorTileTitle/ColorTileTitle';
export * from './ColorTileContent/ColorTileContent';
export * from './ColorTileActionsRow/ColorTileActionsRow';
export * from './ColorTileAnchor/ColorTileAnchor';
