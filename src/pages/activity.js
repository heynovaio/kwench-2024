import React from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Script } from "gatsby"

const Activity = () => {
return (
    <Layout>
    <div className="container" style={{ maxWidth: '800px', margin: '2em auto' }}>
        <h1>Book a Class</h1>
        <Script src="https://widgets.mindbodyonline.com/javascripts/healcode.js" type="text/javascript" />
        <healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="002052424231" data-widget-version="1" ></healcode-widget>
      </div>
    </Layout>
  );
}

/**
 * Head export to define metadata for the page
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Activity Calendar" />
export default Activity