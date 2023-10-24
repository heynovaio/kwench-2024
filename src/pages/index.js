import * as React from "react"
import Layout from "../components/layout"
import ImageCta from "../components/ImageCta"
import BoxList from "../components/BoxList"
import Slideshow from "../components/Slideshow"
import ColumnText from "../components/ColumnText"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="intro container">
      We are looking for collaborators <br />— people with ideas or knowledge to share; who want to make an impact; and who want to create communities.
      <a className="cta-link" href="/">Become a Cultural Event Partner</a>
    </div>

    <section className="container">
      <h2>Your partnership with KWENCH includes:</h2>

      <BoxList
        one={'Access to our members, who represent a range of business owners, creatives, and entrepreneurs who are always looking to level up the way they work — from revenue generation to lifestyle, people and culture.'}
        two={'The amplification of your event through our channels (our newsletter of over 1000 subscribers, our 5K followers on social, and over 450 members).'}
        three={'A stylish, accessible, full-service event space that has been designed specifically for groups to meet with comfort and convenience.'}
        four={'Cultural positioning that raises the profile of your event.'}
      />
    </section>

    <section style={{textAlign: 'center'}}>
      <h2>Event Partnerships We Offer</h2>

      {/* bg colours can be either 'pink', 'red' or 'yellow' */}
      <ImageCta
        title={'Lunch & Learn'}
        content={'Share your professional advice through some laser-sharp training in this hour-long session for the KWENCH community. Lunch & Learn hosts almost always generate new work and leave with greater awareness of their company.'}
        fee={'Fee: Free'}
        image={'/images/image-lunchlearn.png'}
        direction={'left'}
        bg={'red'}
        link={""}
      />
      <ColumnText
        column1={
          <>
          <strong>What You’ll Get:</strong>
          <ul>
            <li>1-hour of free space to host a pre-registered group from the KWENCH community.</li>
            <li>Typically held in the Knowledge Boardroom featuring a large conference table, ergonomic seating, flooded with natural light and a credenza for in-room coffee and catering service.</li>
            <li>Capacity: 16</li>
          </ul>
          </>
        }
        column2={
          <>
          <strong>What We Ask of You:</strong>
          <ul>
            <li>Avoid pitching — this is a learning event, not a sales pitch. Your topic needs to connect with and inform the audience.</li>
            <li>Promotional assets: 1 social post + 1 event post</li>
            <li>We recommend you provide light lunch or snacks for the group… it’s not required but no one learns on an empty stomach!</li>
          </ul>
          </>
        }
      />
      <a className="cta-link" href="">Book a Lunch & Learn</a>

      <ImageCta
        title={'Knowledge Share'}
        content={'A big idea, a new launch, or business insight that you want to bring to a larger audience. This is not a pitch but a fine-tuned exploration that will generate opportunity, exposure and influence for you and your company.'}
        fee={'Fee: Hourly fee, price to be determined'}
        image={'/images/image-knowledgeshare.png'}
        direction={'right'}
        bg={'pink'}
        link={""}
      />
      <ColumnText
        column1={
          <>
          <strong>What You’ll Get:</strong>
          <ul>
            <li>Typically held in the Experience Room, a comfortable space that is closed from the rest of the club, with a capacity of up to 80 people or 56 seated.</li>
          </ul>
          </>
        }
        column2={
          <>
          <strong>What We Ask of You:</strong>
          <ul>
            <li>Promotional assets: 1 social post + 1 event post</li>
            <li>Manage a ticketing link and share the list with KWENCH</li>
          </ul>
          </>
        }
      />

      <a className="cta-link" href="">Book a Knowledge Share</a>

      <ImageCta
        title={'Show Stopper'}
        content={'An electic mix of headline events that attract large, highly engaged audiences. From alternative offerings to talks featuring prominent keynote speakers, they are all ambitious culture-shaping events that bring something new to life.'}
        image={'/images/image-showstopper.png'}
        direction={'left'}
        bg={'yellow'}
        link={""}
        fee={
          <>Fee Options:
            <ul>
              <li>Free with a guaranteed audience of over 100 people or a minimum bar spend of $1000</li>
              <li>A fixed fee of $850-$1050 depending on requirements</li>
            </ul>
          </>
          }
      />
      <ColumnText
        column1={
          <>
          <strong>What You’ll Get:</strong>
          <ul>
            <li>A comfortable, spacious, well-lit space that holds up 250 people</li>
            <li>Availability: Monday to Saturday evenings from 5.30-11pm </li>
            <li>Creative and logistical support from KWENCH for bringing your vision to life</li>
          </ul>
          </>
        }
        column2={
          <>
          <strong>What We Ask of You:</strong>
          <ul>
            <li>Promotion strategy</li>
            <li>Promotional assets: 1 social post + 1 event post</li>
            <li>Manage a ticketing link and share the list with KWENCH</li>
          </ul>
          </>
        }
      />

       <a className="cta-link" href="">Book a Show Stopper</a>
    </section>
   
   <section className="container">
    <Slideshow
        slides = {
          [
            {
              url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
              caption: 'First Slide',
              alt: 'First slide'
            },
            {
              url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
              caption: 'Third Slide'
            },
          ]
        }
      />
    </section>

    <section className="container">   
      <h2>How to become a Cultural Partner</h2>
      <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
        <p>
        <strong>Step 1:</strong><br />
        Find out what opportunities we offer for you to host or co-host an event at KWENCH (above!). </p>

        <p><strong>Step 2:</strong><br />
       Align your event idea with one of our event types. Prepare a few notes about why your event is the right fit for KWENCH. (Eg. What is the offer or idea? Who is it for/Who would benefit from it? How does it align with KWENCH values and contribute to the club’s culture?).</p>

       <p><strong>Step 3:</strong><br />
        Get in touch with our cultural coordinator through the links below. </p>
      </div>  
        <a className="cta-link" style={{marginBottom: '20px'}} href="">Become a Cultural Event Partner</a>
        <a className="cta-link" style={{marginTop: '20px'}} href="">Talk to a Human</a>
    </section>
  </Layout>
)

/**
 * Head export to define metadata for the page
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />
export default IndexPage