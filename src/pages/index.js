import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Slideshow from "../components/Slideshow"


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
            <a className="book-a-tour" href="/tour">/  Book a Tour</a>
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
          <a href="https://www.clubkwench.com/events?page=1&categoryId=1194330140">
            <h3>Fitness & Health</h3>
          </a>
        </li>
        <li className="cat-learn">
          <a href="https://www.clubkwench.com/events?page=1&categoryId=1194383194">
            <h3>Workshops & Meetups</h3>
          </a>
        </li>
        <li className="cat-events">
          <a href="https://www.clubkwench.com/events?page=1&categoryId=1195441248&pastEvents=false">
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
              <a className='book-a-tour' href="{% Url Tour, Index %}">/ Book a Tour</a>
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
      <a className='book-a-tour' href="/tour">/  Book a Tour</a>
    </div>

  {/* <h3>SOCIAL</h3>
  <div className='table green'>
    <div className='row'>
      <div className='wrapper'>
        <div className='container'>
          <h4>High 5</h4>
          <p>Hot desk access 5 days/month Mon-Fri 8am-6pm</p>
          <p>Boardroom credits not included with membership, available to purchase</p>
          <p>Hot desk access, access to fitness classes, access to book boardrooms, +more</p>
        </div>
        <p className='cost'>$175+taxes</p>
      </div>
    </div>
    <div className='row'>
      <div className='wrapper'>
        <div className='container'>
          <h4>Hustle</h4>
          <p>Hot desk access Mon-Fri 8am-6pm</p>
          <p>$350 worth of boardroom credits per month</p>
          <p>Hot desk access, 2 fitness classes/week, KWENCH Slack community, +more</p>
        </div>
        <p className='cost'>$350+taxes</p>
      </div>
    </div>
    <div className='row'>
      <div className='wrapper'>
        <div className='container'>
          <h4>House</h4>
          <p>Hot desk access 24/7</p>
          <p>$350 worth of boardroom credits per month</p>
          <p>24/7 hot desk access, 2 fitness classes/week, KWENCH Slack community, +more</p>
        </div>
        <p className='cost'>$450+taxes</p>
      </div>
    </div>
    <div className='row'>
      <div className='wrapper'>
        <div className='container'>
          <h4>Corporate Hustle</h4>
          <p>Up to 5 team members at a time, transferrable hot desk access Mon- Fri 8am-6pm</p>
          <p>$600 worth of boardroom credits per month</p>
          <p>Transferrable Hot desk access, 2 fitness classes/week, KWENCH Slack community, +more</p>
        </div>
        <p className='cost'>Monthly: $1750+taxes<br />Annually: $21,000+taxes</p>
      </div>
    </div>
    <div className='row'>
      <div className='wrapper'>
        <div className='container'>
          <h4>Corporate House</h4>
          <p>Up to 5 team members at a time, transferrable hot desk access 24/7</p>
          <p>$600 worth of boardroom credits per month</p>
          <p>Transferrable 24/7 hot desk access, 2 fitness classes/week, KWENCH Slack community, +more</p>
        </div>
        <p className='cost'>Monthly: $2250+taxes<br />Annually:$27,000+taxes</p>
      </div>
    </div>
  </div>
  <h3>DEDICATED</h3>
  <div className='table black'>
    <div className='row'>
      <div className='wrapper'>
        <div className='container'>
          <h4>Resident</h4>
          <p>24/7 key fob access</p>
          <p>$400 worth of boardroom credits per month</p>
          <p>Height adjustable desk, file cabinet, desk chair, 2 fitness classes/week, KWENCH Slack community, +more</p>
        </div>
        <p className='cost'>$625+taxes</p>
      </div>
    </div>
    <div className='row'>
      <div className='wrapper'>
        <div className='container'>
          <h4>Resident+</h4>
          <p>24/7 key fob access</p>
          <p>$400 worth of boardroom credits per month</p>
          <p>Large L-shaped height adjustable desk, file cabinet, desk chair, 2 fitness classes/week, KWENCH Slack community, +more</p>
        </div>
        <p className='cost'>$775+taxes</p>
      </div>
    </div>
    <div className='row'>
      <div className='wrapper'>
        <div className='container'>
          <h4>Private office</h4>
          <p>24/7 key fob access</p>
          <p>Boardroom credits varies based on office capacity</p>
          <p>Private office, fully furnished with height adjustable desks, file cabinets, desk chairs, fitness classes, KWENCH Slack community, +more</p>
        </div>
        <p className='cost'>Please inquire for private office pricing</p>
      </div>
    </div>
  </div>

  <div className='padding'>
    <div className='flex yellow'>
       <div className='item'>
        <h3>Day Pass</h3>
        <ul>
          <li>Access to Communal Workspace</li>
          <li>Access to Day-use Lockers</li>
          <li>High Speed Internet Access</li>
          <li>Access to Private Phone Booths</li>
          <li>Access to Shared Kitchen</li>
          <li>Complimentary Coffee & Tea</li>
          <li>Access to Library</li>
        </ul>
        <span className="price">$45/day + taxes</span>
      </div>
      <div className='item'>
        <h3>Club Membership</h3>
        <ul>
          <li>Mail & Front Desk Service</li>
          <li>High Speed Internet Access</li>
          <li>Access to book Boardrooms (2 hr booking minimum)</li>
          <li>Evening Club/Bar Access</li>
          <li>Event Priority/Members Discount</li>
        </ul>
        <span className="price">Annual: $800<br />+$45 Sign-up fee + taxes</span>
      </div>
    </div>
  </div>*/}
  <img className='H' role="presentation" src='/images/Kwench_web_letters-01.png'/>
</section> 

  <section id='events' className='private'>
  <div className='wrapper'>
      <div className='content'>
      <img className='desktop-photo' role="presentation" src='/images/private-events-image-v2.jpg'/>
      <h2>Private Events & Meetings</h2>
      <p className='quote'>
          Be it for a multi-day conference, film screening, book launch, board meeting, workshop, office party or off site strategy session, KWENCH is ready to welcome you to the most unique event and meeting spaces in the city.
      </p>
      <a className="pdf-link" href="https://kwench.spaces.nexudus.com//files/2024 KWENCH Event Deck (1)_compressed (1).pdf" target="_blank">Download Our Events & Meeting Room Brochure</a>
      <p>
          <a target="_blank" className="btn-event book-a-tour" href="https://clubkwench.tripleseat.com/party_request/20852">/ Book an event - over 16 pp</a>
          <a target="_blank" className='book-a-tour btn-boardroom' href="https://38twp7ziy86.typeform.com/to/klYYPBcw">/ Book a boardroom - 16 pp and under</a>
      </p>
      </div>
  </div>
  
  <img className='mobile-photo' role="presentation" src='/images/PRIVATE-EVENTS-IMAGE.jpg'/>
  <img className='W' role="presentation" src='/images/Kwench_web_letters-04.png'/>
  </section>
  <section id="seen-in" className="seen-in">
    <div className="">
      <img
      src="https://kwench.spaces.nexudus.com/images/as-seen-logos2.jpg"
      srcSet="https://kwench.spaces.nexudus.com/images/as-seen-logos2@2x.jpg 2x"
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
            <p>Want to keep up to date with what's happening at the club? <a className="sign-up" target="_blank" href="https://view.flodesk.com/pages/6435cc5b71c069faf7824cc3">Click HERE</a> to sign-up for our newsletter!</p>
          </div>
          

          <p>We acknowledge and give thanks to the Lekwungen People of the Songhees and Esquimalt Nations on whose territory we live and
          work </p>
          {/*<p><a className="health-safety" target="_blank" href="https://kwench.spaces.nexudus.com/files/KWENCH_HealthSafety_May28.pdf">Read our Health & Safety Plan here</a></p>
          */}
          

        </div>
      </div>
    </div>
    <div className="map-image">
      {/* <LocationMap /> */}
    </div>
    <img className='H' role="presentation" src='/images/Kwench_web_letters-03.png'/>
  </section>
</div>
</div>
    </Layout>
)
export const Head = () => <Seo title="Home" />
export default Index