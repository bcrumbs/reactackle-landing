/**
 * @author Ekaterina Marova
 */

'use strict';

import React from 'react';
import { Section, SectionContent } from '../../components/Section/Section';
import { HeadingGroup } from '../../components/HeadingGroup/HeadingGroup';
import { SocialItem } from '../../components/SocialItem/SocialItem';
import { Display } from '../../components/typography';
import { icons } from '../../assets/styles/libraries/icons';
import { SectionConnectStyled } from './styles/SectionConnectStyled';
import { SocialItemsStyles } from './styles/SocialItemsStyles';

export const SectionConnect = () => (
  <SectionConnectStyled>
    <Section id='section-connect' boxed>
      <SectionContent>
        <HeadingGroup align="center">
          <Display level={3} colorScheme="light">Talk to us</Display>
        </HeadingGroup>
        <SocialItemsStyles>
          <SocialItem
            image={icons.logoGithub}
            title="GitHub"
            description="Report a bug or open an issue"
            href="https://github.com/bcrumbs/reactackle"
          />
          <SocialItem
            image={icons.logoTwitter}
            title="Twitter"
            description="Check our latest news"
            href="https://twitter.com/@reactackle"
          />
          <SocialItem
            image={icons.logoSlack}
            title="Slack"
            description="Keep in touch with our team"
            href="https://slackin.braincrumbs.io/"
          />
        </SocialItemsStyles>
      </SectionContent>
    </Section>
  </SectionConnectStyled>
);

SectionConnect.displayName = 'SectionConnect';
