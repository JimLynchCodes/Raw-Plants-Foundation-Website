import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Contact from "../components/Contact";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";
import { FaPhone } from "react-icons/fa/";
import { FaEnvelope } from "react-icons/fa/";
import { FaBuilding } from "react-icons/fa/";

const ContactPage = props => {
  const {
    data: {
      site: {
        siteMetadata: { facebook }
      }
    }
  } = props;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>


            <header>
              <Headline title="Contact" theme={theme} />
            </header>


            <p>We love hearing from members of the community! Feel free to reach out to use for any reason, and we should respond back in               1 to 2 business days. Thank you for your patience.
            </p>
            <br/>
            <li> <FaPhone/> <a href={"http://derp.com"}>(201) 555-4200</a></li>
            <li> <FaEnvelope/> <a href="jim@wisdomofjim.com">jim@wisdomofjim.com</a></li>
            <li> <FaBuilding/> <a href="240 E 5th St, New York, New York, 10010">240 E 5th St, New York, New York, 10010</a></li>

            <br/>
            <Contact theme={theme} />
          </Article>
        )}
      </ThemeContext.Consumer>

      <Seo facebook={facebook} />
    </React.Fragment>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
