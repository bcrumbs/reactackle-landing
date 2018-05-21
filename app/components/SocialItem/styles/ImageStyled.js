/**
 * @author Ekaterina Marova
 */

'use strict';

import styled from 'styled-components';
import { baseModule } from '../../../assets/styles/themeSelectors';

const imageSize = 80;

const image = ({ image }) => `background-image: url('${image}');`;

export const ImageStyled = styled.div`
  display: block;
  margin: 0 auto ${baseModule(2)}px;
  width: ${imageSize}px;
  height: ${imageSize}px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  ${image}
`;

ImageStyled.displayName = 'ImageStyled';
