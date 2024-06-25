import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Slideshow from "../components/Slideshow"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'


const Index = () => (
  <Layout>
     <div className="home">

        <div className="opening-screen">
          <img className="opening-img" src='/images/aak_d210822__WEB.jpg' alt='KWENCH logo'/>
        </div>

        <div className='links subnav-links'>
        <a className='page-link' href='/#culture'>/ culture</a>
        <a className='page-link' href='/#events'>/ private events</a>
        <a className='page-link' href='/#space'>/ the space</a>
        <a className='page-link' href='/#membership'>/ membership</a>
        <a className='page-link' href='/#contact'>/ contact</a>
        </div>

      <div className="background">
        <section className="hero">
          <h1>
            We are a full-service work & culture club for creative, ambitious
            thinkers & doers who seek more.
          </h1>
          <img className="H" role="presentation" src="/images/group-51.svg"/>
        </section>
        <section className="happy">
          <div className="orange-background"></div>
          <div className="img-container">
            <div className="right-side">
              <div className="wrapper'">
                <div className="content">
                  <h2>KWENCH facilitates happiness. </h2>
                  <p>We value respect, integrity and kindness. Our flexible, unique
                    co-working spaces, events and services support balanced, happy
                    humans that lead engaged and inspired lives. We have created KWENCH
                    as a place to seek Knowledge, Wellness, Experiences, Novelty,
                    Curiosity and Connection to foster Healthy and Happy
                    lives. </p><br />

                    <p>
                    Our space includes creative studios, private offices and open
                    workspaces, fitness facilities, workshops, events, lectures, art
                    installations, meditation, food and drink - all in one
                    place.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img className="W" role="presentation" src="/images/path-130.svg" />
          </section>
        <section id="culture" className="culture">
          <div className="section-heading">
            <h2>Events @ KWENCH</h2>
            <p>
              KWENCH hosts, promotes and supports all sorts of events, experiences, happenings, culture-makers and shakers in our space and beyond.
            </p>
          </div>
          <div className="outer-container">

            <ul className="event-categories">
              <li className="cat-fitness">
                <a href="/activity">
                  <h3>Fitness & Health</h3>
                </a>
              </li>
              <li className="cat-learn">
                <a href="https://www.eventbrite.com/cc/workshops-meetups-3398169">
                  <h3>Workshops & Meetups</h3>
                </a>
              </li>
              <li className="cat-events">
                <a href="https://www.eventbrite.com/cc/events-3399219">
                  <h3>Events</h3>
                </a>
              </li>
            </ul>

          </div>
        </section>
        <section id="space" className="space">
            <div className="flex">
              <div className="slide red">
                <div className='red-background'>
                  <div className='container'>
                    <div className='content'>
                    <h2>The Space</h2>
                    <p>
                      Originally built to house Victoria’s streetcars, our newly
                      renovated club is over 25,000 sqf of creative coworking and event
                      space for KWENCH members and the public.
                    </p>
                    </div>
                  </div>
                </div>
                  </div>
                  <Slideshow
                    slides = {
                      [
                        {
                          url: '/images/1-kwench.jpg',
                          alt: ''
                        },
                        {
                          url: '/images/2-kwench-2.jpg',
                          alt: ''
                        },
                        {
                          url: '/images/3-kwench.jpg',
                          alt: ''
                        },
                        {
                          url: '/images/4-kwench.jpg',
                          alt: ''
                        },
                        {
                          url: '/images/5-kwench.jpg',
                          alt: ''
                        },
                        {
                          url: '/images/6-kwench.jpg',
                          alt: ''
                        },
                        {
                          url: '/images/7-kwench.jpg',
                          alt: ''
                        },
                        {
                          url: '/images/8-kwench.jpg',
                          alt: ''
                        },
                        {
                          url: '/images/9-kwench.jpg',
                          alt: ''
                        },
                        {
                          url: '/images/10-kwench.jpg',
                          alt: ''
                        },
                        {
                          url: '/images/11-kwench.jpg',
                          alt: ''
                        },
                        {
                          url: '/images/12-kwench.jpg',
                          alt: ''
                        },
                        {
                          url: '/images/13-kwench.jpg',
                          alt: ''
                        },
                        {
                          url: '/images/14-kwench.jpg',
                          alt: ''
                        },
                      ]
                    }
                />
            </div>
            <img className='C' role="presentation" src='/images/Kwench_web_letters-07.png'/>
          </section>
        <section id='membership' className='membership'>
          <div className='section-heading'>
            <h2>Membership</h2>
            <p>We are a community of creative, ambitious professionals sharing
              unique workspaces and new experiences. Our memberships are flexible
              and include everything you expect, and some you
              wouldn’t:
            </p>
            <ul className="key-features">
              <li>Furnished turn-key professional workspaces</li>
              <li>Shared social desks, personal dedicated <br />
                  desks & private offices</li>
              <li>Height-adjustable desks</li>
              <li>Fully integrated workspace technology</li>
              <li>Fibre internet </li>
              <li>Event spaces</li>
              <li>Fitness classes</li>
              <li>Mail service</li>
              <li>Meditation room & library</li>
              <li>Kitchen & dining areas</li>
              <li>Lockers, showers & changerooms</li>
              <li>Bicycle storage</li>
              <li>Coffee, tea, <br/>& sparkling water</li>
              <li>Printing</li>
              <li>Workshops & lectures</li>
              <li>Bookable boardrooms </li>
              <li>Administrative facilities</li>
              <li>On-site licensed bar</li>
              <li>Social & cultural events</li>
              <li>Private phone booths</li>
              <li>Security</li>
              <li><em>& an awesome community</em></li>
            </ul>
          </div>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            <h2>Memberships</h2>
            <p>Choose a type of membership to view a sheet with all the info!</p>
            <div className="membership-options">
              <a href="https://www.canva.com/design/DAGGwsiF5M0/akimLGuPDRhRDJgeA7o1ng/view?utm_content=DAGGwsiF5M0&utm_campaign=designshare&utm_medium=link&utm_source=editor" className="btn btn-membership">Hot Desk <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
              <a href="https://www.canva.com/design/DAGGwelzJgY/bMa6J19AmcbUbYTK7GDXqA/view?utm_content=DAGGwelzJgY&utm_campaign=designshare&utm_medium=link&utm_source=editor" className="btn btn-membership">Boardrooms <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </a>
              <a href="https://www.canva.com/design/DAGGwQM6YeY/nqHDD1QfWasXXzAhQ713GA/view?utm_content=DAGGwQM6YeY&utm_campaign=designshare&utm_medium=link&utm_source=editor/" className="btn btn-membership">Dedicated Desk <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
              <a href="https://www.canva.com/design/DAGGwW-nZEc/rwFPPmmr_6H1EW3izzuHfQ/view?utm_content=DAGGwW-nZEc&utm_campaign=designshare&utm_medium=link&utm_source=editor" className="btn btn-membership">Corporate <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
              <a href="https://www.canva.com/design/DAGGwUTq_jU/BLrXmAzT2lz-pLRxmzyKWg/view?utm_content=DAGGwUTq_jU&utm_campaign=designshare&utm_medium=link&utm_source=editor" className="btn btn-membership">Virtual Mailbox <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
              <a href="https://www.canva.com/design/DAGGwUH5r5w/61P997-LVIHmV2tApyqMDw/view?utm_content=DAGGwUH5r5w&utm_campaign=designshare&utm_medium=link&utm_source=editor" className="btn btn-membership">Add-Ons <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
            </div>
          </div>
        <img className='H' role="presentation" src='/images/Kwench_web_letters-01.png'/>
      </section> 

        <section id='events' className='private'>
          <div className='wrapper'>
            <div className="desktop-photo">
              <img role="presentation" src='/images/private-events-image-v2.jpg' />
            </div>
            <div className='content'>
              <h2>Private Events & Meetings</h2>
              <p className='quote'>
                  Be it for a multi-day conference, film screening, book launch, board meeting, workshop, office party or off site strategy session, KWENCH is ready to welcome you to the most unique event and meeting spaces in the city.
              </p>
              <a className="pdf-link" href="/file/KWENCH-Event-Deck-2024.pdf" target="_blank">Download Our Events & Meeting Room Brochure</a>
              <p>
              <a className="cta-link sm-link" href="https://kwench.typeform.com/to/zTVuNJvC" target="_blank">Book a boardroom (1-15 attendees)</a>
              <a className="cta-link sm-link" href="https://clubkwench.tripleseat.com/party_request/20852" target="_blank">Book a private event (16+ attendees)</a></p>
            </div>
          </div>
          
          <img className='W' role="presentation" src='/images/Kwench_web_letters-04.png'/>
        </section>
        <section id="seen-in" className="seen-in">
          <div className="">
            <img
            src="/images/as-seen-logos2@2x.jpg"
            alt="logos of Douglas,Frame, Nuvo, The Spaces, Wallpaper, We Heart, Western Living Magazine" />

          </div>
        </section>
        <section id="contact" className="map">
          <div className="left-side">
            <div className="container">
              <div className="content">
                <h2>Let's get in touch</h2>
                <p className="address">
                  <b>KWENCH</b><br/>
                  2031 Store Street <br />
                  Victoria BC, V8T 5L9<br />
                  Canada
                </p>
                <p className="contact">
                  <a href="tel:250-385-0352">250-385-0352</a><br/>
                  <a href="mailto:hello@clubkwench.com">hello@clubkwench.com</a>

                </p>

                <a href="https://www.instagram.com/kwenchcultureclub/" className="instagram-icon" title="instagram" target="_blank"><i className="icon-social-instagram fs-24" wiid="C323"></i></a>
                <a href="https://www.facebook.com/clubkwench/" className="facebook-icon" title="facebook" target="_blank"><i className="icon-social-facebook fs-24" wiid="C328"></i></a>

                <div className="footer-sign-up">
                  <p>Want to keep up to date with what's happening at the club? <a className="sign-up" target="_blank" href="https://view.flodesk.com/pages/6435cc5b71c069faf7824cc3">Click to sign-up for our newsletter!</a></p>
                </div>
                

                <p>We acknowledge and give thanks to the Lekwungen People of the Songhees and Esquimalt Nations on whose territory we live and
                work </p>
                {/*<p><a className="health-safety" target="_blank" href="https://kwench.spaces.nexudus.com/files/KWENCH_HealthSafety_May28.pdf">Read our Health & Safety Plan here</a></p>
                */}
                

              </div>
            </div>
          </div>
          <iframe className='map-image' src="https://snazzymaps.com/embed/123112" width="100%" height="600px" style={{ border: '0' }} title="Map of Kwench location"></iframe>
          <img className='H' role="presentation" src='/images/Kwench_web_letters-03.png'/>
        </section>
      </div>
      </div>
    </Layout>
)
export const Head = () => <Seo title="Home" />
export default Index