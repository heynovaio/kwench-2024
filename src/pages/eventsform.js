import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import EventsForm from "../components/EventsForm"

const FormPage = () => (
<Layout>
  <EventsForm />
</Layout>
)

/**
 * Head export to define metadata for the page
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Book an Event" />
export default FormPage