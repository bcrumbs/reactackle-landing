import React from 'react';
import { Button } from 'reactackle';
import { Anchor } from '../../components/Anchor/Anchor';
import { Section } from '../../components/Section/Section';
import { Display, Lead } from '../../components/typography';
import { IconGithub } from '../../components/Icon/IconGithub';
import { IconTwitter } from '../../components/Icon/IconTwitter';
import { SectionWelcomeStyled } from './styles/SectionWelcomeStyled';
import { SectionContentStyled } from './styles/SectionContentStyled';
import { OffsetBoxStyled } from './styles/OffsetBoxStyled';
import { CodeWrapperStyled } from './styles/CodeWrapperStyled';
import { ButtonRowStyled } from './styles/ButtonRowStyled';
import { SectionFooterStyled } from './styles/SectionFooterStyled';

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
              icon={<IconGithub />}
              outlined
              href="https://github.com/bcrumbs/reactackle"
            />
          </ButtonRowStyled>

          <CodeWrapperStyled>npm install --save reactackle</CodeWrapperStyled>
        </OffsetBoxStyled>
      </SectionContentStyled>

      <SectionFooterStyled>
        <Anchor light href="https://twitter.com/@bcrmbs" icon={<IconTwitter />}>
          @bcrmbs
        </Anchor>
      </SectionFooterStyled>
    </Section>
  </SectionWelcomeStyled>
);

SectionWelcome.displayName = 'SectionWelcome';
