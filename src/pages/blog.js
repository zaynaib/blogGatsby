import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from "react-helmet"


export default function IndexPage({data}){
        const {edges:posts} = data.allMarkdownRemark

        return (
            <div className="blog-posts">
              {posts
                .filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => {
                  return (
                    <div className="blog-post-preview" key={post.id}>
                      <h1>
                        <Link to={`/blog${post.frontmatter.slug}`}>{post.frontmatter.title}</Link>
                      </h1>
                      <h2>{post.frontmatter.date}</h2>
                      <p>{post.excerpt}</p>
                    </div>
                  )
                })}
            </div>
          )
    
    
}






export const query = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        title
                    }
                    id
                    excerpt(pruneLength: 250)
                }
            }
        }
    }
`;