import { FaTag } from "react-icons/fa/";
import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Article from "../components/Article/";
import Headline from "../components/Article/Headline";
import List from "../components/List";
import Seo from "../components/Seo";

const Cat2Page = props => {
  const {
    data: {
      posts: { edges: posts },
      site: {
        siteMetadata: { facebook }
      }
    }
  } = props;

  // Create cat2 list
  const categories = {};
  posts.forEach(edge => {
    const {
      node: {
        frontmatter: { cat2 }
      }
    } = edge;

    if (cat2 && cat2 != null) {
      if (!categories[cat2]) {
        categories[cat2] = [];
      }
      categories[cat2].push(edge);
    }
  });

  const cat2List = [];

  for (var key in categories) {
    cat2List.push([key, categories[key]]);
  }

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <header>
              <Headline title="Posts by categories" theme={theme} />
            </header>
            {cat2List.map(item => (
              <section key={item[0]}>
                <h2>
                  <FaTag /> {item[0]}
                </h2>
                <List edges={item[1]} theme={theme} />
              </section>
            ))}
            {/* --- STYLES --- */}
            <style jsx>{`
              h2 {
                margin: 0 0 0.5em;
              }
              h2 :global(svg) {
                height: 0.8em;
                fill: ${theme.color.brand.primary};
              }
            `}</style>
          </Article>
        )}
      </ThemeContext.Consumer>

      <Seo facebook={facebook} />
    </React.Fragment>
  );
};

Cat2Page.propTypes = {
  data: PropTypes.object.isRequired
};

export default Cat2Page;

//eslint-disable-next-line no-undef
export const query = {
  data: {'hello': 'world'}
}



  // graphql`
//   query PostsQuery {
//     posts: allMarkdownRemark(
//       filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
//       sort: { fields: [fields___prefix], order: DESC }
//     ) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//             prefix
//           }
//           frontmatter {
//             title
//             cat2
//             author
//             cover {
//               children {
//                 ... on ImageSharp {
//                   fluid(maxWidth: 800, maxHeight: 360) {
//                     ...GatsbyImageSharpFluid_withWebp
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     site {
//       siteMetadata {
//         facebook {
//           appId
//         }
//       }
//     }
//   }
// `;
