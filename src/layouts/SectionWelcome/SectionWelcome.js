/**
 * @author Ekaterina Marova
 */

import React from 'react';
import { Button, FlexRegion } from 'reactackle';
import { Anchor } from '../../components/Anchor/Anchor';
import { Section } from '../../components/Section/Section';
import { Display, Lead } from '../../components/typography';
import scrollBg from '../../assets/scroll-bg_welcome.svg';
import { SectionWelcomeStyled } from './styles/SectionWelcomeStyled';
import { SectionContentStyled } from './styles/SectionContentStyled';
import { OffsetBoxStyled } from './styles/OffsetBoxStyled';
import { CodeWrapperStyled } from './styles/CodeWrapperStyled';
import { ButtonRowStyled } from './styles/ButtonRowStyled';
import { SectionFooterStyled } from './styles/SectionFooterStyled';
import { FooterLinksSeparatorStyled } from './styles/FooterLinksSeparatorStyled';

export const SectionWelcome = () => (
  <SectionWelcomeStyled>
    <Section id="section-welcome" boxed windowHeight>
      <SectionContentStyled>
        <Display level={4} dashed colorScheme="light">
          Reactackle
        </Display>
        <OffsetBoxStyled>
          <Lead>
            Open-source components library built with React and
            Styled-Components.
          </Lead>
          <ButtonRowStyled>
            <Button
              text="Documentation"
              size="large"
              colorScheme="flatLight"
              outlined
              href="http://reactackle-docs.braincrumbs.io"
            />

            <Button
              text="GitHub"
              size="large"
              colorScheme="flatLight"
              // icon={{ name: "github" }}
              outlined
              href="https://github.com/bcrumbs/reactackle"
            />
          </ButtonRowStyled>

          <CodeWrapperStyled>npm install --save reactackle</CodeWrapperStyled>
        </OffsetBoxStyled>
      </SectionContentStyled>

      <SectionFooterStyled>
        <Anchor
          light
          // icon={{ name: 'twitter' }}
          href="https://twitter.com/@bcrmbs"
        >
          @bcrmbs
        </Anchor>
      </SectionFooterStyled>
    </Section>
  </SectionWelcomeStyled>
);

SectionWelcome.displayName = 'SectionWelcome';
