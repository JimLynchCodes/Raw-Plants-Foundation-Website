import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
require("core-js/fn/array/find");

import Article from "../components/Article/index";
// import WhatWeDo from "../components/WhatWeDo";
import { ThemeContext } from "../layouts/index";
import Seo from "../components/Seo/index";

// import AlgoliaIcon from "!svg-react-loader!../images/svg-icons/WhatWeDo-by-algolia.svg?name=AlgoliaLogo";

const WhatWeDoPage = props => {
  const {
    data: {
      site: {
        siteMetadata: { algolia, facebook }
      }
    }
  } = props;

  return (
    <React.Fragment>

      <p>

        hello
      </p>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <div className="icon">
              <AlgoliaIcon />
            </div>

            What we do
            {/*<WhatWeDo algolia={algolia} theme={theme} />*/}
          </Article>
        )}
      </ThemeContext.Consumer>

      <Seo facebook={facebook} />

      {/* --- STYLES --- */}
      <style jsx>{`
        .icon {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 20px;
        }
        .icon :global(svg) {
          height: 30px;
        }
      `}</style>
    </React.Fragment>
  );
};

WhatWeDoPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default WhatWeDoPage;

//eslint-disable-next-line no-undef
export const query = {};
