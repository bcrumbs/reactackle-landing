/**
 * @author Ekaterina Marova
 */

import React from 'react';
import { Section, SectionContent } from '../../components/Section/Section';
import { Anchor } from '../../components/Anchor/Anchor';
import { CodeBox } from '../../components/CodeBox/CodeBox';
import { WarningBox } from '../../components/WarningBox/WarningBox';
import { HeadingGroup } from '../../components/HeadingGroup/HeadingGroup';
import { Display, Lead, BodyParagraph } from '../../components/typography';
import { CodeSectionStyled } from './styles/CodeSectionStyled';
import { CodeWrapperStyled } from './styles/CodeWrapperStyled';
import { Benefits } from './Benefits/Benefits';

export const SectionAbout = () => (
  <div>
    <WarningBox>
      Reactackle has been released on Jule 24th, 2017 and is currently in beta. Play around with it and <Anchor href="https://github.com/bcrumbs/reactackle">let us know</Anchor> if you encounter any bugs.
    </WarningBox>

    <Section id='section-about' boxed>
      <SectionContent>
        <HeadingGroup align="center">
          <Display level={3}>Build apps, sites, projects</Display>
          <Lead>Reactackle is a family of components that make it easy to design beautiful responsive websites and apps. It's still young but we are constantly adding new components.</Lead>
        </HeadingGroup>

        <Benefits />

        <HeadingGroup align="center">
          <Display level={3}>Getting started</Display>
        </HeadingGroup>

        <CodeSectionStyled>
          <BodyParagraph>
            To get started simply install reactackle to you project. That's all!
          </BodyParagraph>
          <CodeWrapperStyled>
            <CodeBox>
              npm install --save reactackle
            </CodeBox>
          </CodeWrapperStyled>
          <BodyParagraph>
            or:
          </BodyParagraph>
          <CodeWrapperStyled>
            <CodeBox>
              yarn add reactackle
            </CodeBox>
          </CodeWrapperStyled>
          <BodyParagraph>
            or you can install all components independently:
          </BodyParagraph>
          <CodeWrapperStyled>
            <CodeBox>
              npm install reactackle-button --save
            </CodeBox>
          </CodeWrapperStyled>
          <BodyParagraph>
            For detailed info about our components read our <Anchor href="http://reactackle-docs.braincrumbs.io">docs</Anchor>.
          </BodyParagraph>
        </CodeSectionStyled>
      </SectionContent>
    </Section>
  </div>
);

SectionAbout.displayName = 'SectionAbout';
