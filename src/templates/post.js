import React from 'react'
import { graphql } from 'gatsby'
import "../style/mystyles.scss"

export default function Post({ data }) {
  const { frontmatter, html } = data.markdownRemark;

    return (
        <body>
        <div className="post">
            <h1 className="post-title">{frontmatter.title}</h1>
            <h2 className="post-date">{frontmatter.date}</h2>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        </body>
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