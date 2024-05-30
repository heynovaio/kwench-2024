import React, { useEffect } from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"


const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = () => {
      if(window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "45138129",
          formId: "1be1855a-b760-4ed3-bfc5-43a343834d03",
          target: '#hubspot-form'
        });
      }
    };
    document.body.appendChild(script);
}, []);

return (
    <Layout>
      <div className="container" style={{ maxWidth: '800px', margin: '2em auto'}}>
      <div id="hubspot-form"></div>
      </div>
    </Layout>
  );
}

/**
 * Head export to define metadata for the page
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Contact Us" />
export default Contact