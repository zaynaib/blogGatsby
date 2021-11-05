import React from 'react'
import { graphql } from 'gatsby'
import "../style/mystyles.scss"
import Layout from "../components/main"


export default function Post({ data }) {
  const { frontmatter, html } = data.markdownRemark;

    return (
        
        <Layout>
        <body>
        <div className="post">
            <h1 className="title is-2">{frontmatter.title}</h1>
            <h2 className="title is-4">{frontmatter.date}</h2>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        </body>
        </Layout>
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