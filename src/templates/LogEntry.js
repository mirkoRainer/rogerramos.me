import React from 'react';
import { any } from 'prop-types';
import { graphql } from 'gatsby';
import SEO from 'components/seo';
import Layout from 'components/Layout/';
import LogHeader from 'components/LogHeader/';
import { Tag } from 'components/Text';
import { Wrapper, Date, LogBody, TagWrapper, GoBack } from './LogEntry.style';
import { Title } from 'components/Text';
import { format } from 'date-fns';

export default function Template({ data, pageContext }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { title, date, tags } = frontmatter;
  return (
    <Layout>
      <SEO
        title={`${title} - Roger Ramos`}
        keywords={[ `design`, `front-end`, `react`, `gatsby`, `react` ]}
        slug={pageContext.slug}
      />
      <Wrapper>
        <LogHeader />
        <Title margin="0 auto 0.5rem auto">{title}</Title>
        <Date>{format(date, 'MMMM DD, YYYY')}</Date>
        <LogBody dangerouslySetInnerHTML={{ __html: html }} />
        {tags && (
          <TagWrapper>
            {tags.map((tag, index) => (
              <Tag key={`tag-${index}`}>{tag}</Tag>
            ))}
          </TagWrapper>
        )}
        <GoBack href="/">Go back</GoBack>
      </Wrapper>
    </Layout>
  );
}

Template.propTypes = {
  data: any,
  pageContext: any
};

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        date
        title
        tags
      }
    }
  }
`;
