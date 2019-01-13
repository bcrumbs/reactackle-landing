/**
 * @author Ekaterina Marova
 */

import styled from 'styled-components';
import { baseModule } from '../../../styles/themeSelectors';

const imageSize = 70;

const image = ({ image }) => `background-image: url('${image}');`;

export const ImageStyled = styled.div`
  display: block;
  margin: 0 auto ${baseModule(3)}px;
  width: ${imageSize}px;
  height: ${imageSize}px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  ${image}
`;

ImageStyled.displayName = 'ImageStyled';
