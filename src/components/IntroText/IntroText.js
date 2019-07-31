import React from 'react';
import { Wrapper, Paragraph, Title, Link } from './IntroText.style';
import SocialIcon from 'components/SocialIcon'
import pushDataLayer from 'services/pushDataLayer'

const IntroText = () => (
  <Wrapper>
    <Title>Hi, I‘m Roger. Wellcome to my Journal</Title>
    <Paragraph>
      Inspired by{' '}
      <Link href="https://github.com/raphaelfabeni/log">
        Rafael Fabeni‘s Log
      </Link>
      , I‘ve created this Website to document every cool stuff I‘m learning on
      my development day‘s.
    </Paragraph>
        <Paragraph>
          <SocialIcon onClick={() => pushDataLayer('Social Network', 'Github')} url="https://github.com/rodgerpaulo" socialName="github"/>
          <SocialIcon onClick={() => pushDataLayer('Social Network', 'Linkedin')} url="https://linkedin.com/in/rogerramos/" />
      </Paragraph>
    <Paragraph>Feel free to see what I‘m doing below =)</Paragraph>
  </Wrapper>
);

export default IntroText;
