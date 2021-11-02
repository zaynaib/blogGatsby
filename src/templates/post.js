import React from 'react'
import { graphql } from 'gatsby'

export default function Post({ data }) {
  const { frontmatter, html } = data.markdownRemark;

    return (
        <div className="post">
            <h1 className="post-title">{frontmatter.title}</h1>
            <h2 className="post-date">{frontmatter.date}</h2>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    )
}

export const query = graphql`
    query ($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
            }
            html
        }
    }
`;