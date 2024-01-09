import React, { useState } from "react"
import $ from "jquery"


export default function EventsForm() {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  function event_category(event) {
    $('.extra').removeClass('open');

    if(event.target.value === "Knowledge Share") {
      $('.extra-knowledge').addClass('open');

    } else if(event.target.value === "Show Stopper") {
      
        $('.extra-show').addClass('open');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    
    const event_category = $('select#event_category').map((_, elem) => (elem.value)).get().join();
    const radio_vals = $('input[type="radio"].additional, input[type="checkbox"].additional') ? $('input.additional:checked').map((_, elem) => (elem.name + ': ' + elem.value)).get().join(', ') : '';
    const other_vals = $('input:not(:placeholder-shown).additional, textarea:not(:placeholder-shown).additional').not('input[type="radio"], input[type="checkbox"]').map((_, elem) => (elem.name + ': ' + elem.value)).get().join(', ');
    const custom_vals = radio_vals + ', ' + other_vals;

    const data = Array.from(e.target.elements).filter((input) => input.name).filter(input => {return input.className !== 'additional';}).reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {})
      
    const lead = {};
    lead['lead'] = data;
    lead['lead']['additional_information'] = custom_vals
    lead['lead']['event_description'] = event_category
    lead['lead_form_id'] = 33432;
      
    $.ajax('https://api.tripleseat.com/v1/leads/create.js?public_key=9fb42246fd29af7f0b1edca5d489349472914b89',
    { data: lead, 
    dataType:'JSONP', 
    crossDomain:true, 
    success: function(data) { 
      if (data.errors !== undefined) {
        $('#error-message').prepend(data.errors);
        console.log(data.errors);
      } else {
        $('body').find('#event_form').hide();
        $('#message').show();
        $('#message').prepend(data.success_message);
      }
    } 
    });
  }
  return (
    <div>
      <h1>Event Partnership with KWENCH Form</h1>
      <form
        onSubmit={handleSubmit}
        method="POST"
        id="event_form"
      >
        <div className="column-container">
          <div>
            <label htmlFor="first_name">First Name <span>* required</span></label>
            <input type="text" name="first_name" id="first_name" required/>
          </div>
          <div>
            <label htmlFor="last_name">Last Name <span>* required</span></label>
            <input type="text" name="last_name" id="last_name" required />
          </div>
        </div>
        <div className="column-container">
          <div>
            <label htmlFor="email_address" className=" ">Email <span>* required</span></label>
            <input type="email_address" name="email_address" id="email_address" required />
          </div>
          <div>
            <label htmlFor="phone_number" className=" ">Phone <span>* required</span></label>
            <input type="tel" name="phone_number" id="phone_number" required />
          </div>
        </div>
        <div>
          <label htmlFor="company" className=" ">Company</label>
          <input type="text" name="company" id="company"  />
        </div>
        <div className="radio-container">
          <p>Are you the lead point of contact for this project?</p>
          <input type="radio" id="contact_yes" className="additional" name="Lead Contact" value="is lead contact"/>
          <label htmlFor="contact_yes">Yes</label>
          <input type="radio" name="Lead Contact" id="contact_no" className="additional"  value="is not lead contact"/>
          <label htmlFor="contact_no">No</label>
          <div className="extra extra-lead">
            <p>Please provide lead contact's name and email</p>
            <div className="column-container">
              <div>
                <label htmlFor="lead_name">Name</label>
                <input type="text" name="Lead Name" className="additional" placeholder="" id="lead_name"/>
              </div>
              <div>
                <label htmlFor="lead_email">Email</label>
                <input type="email_address" className="additional" placeholder="" name="Lead Email" id="lead_email"  />
              </div>
            </div>
          </div>
        </div>
        <div className="single-container">
          <label htmlFor="social_tags" className=" ">Social Tags (seperated by commas)</label>
          <input type="text" name="Socials" className="additional"  placeholder="" id="social_tags"/>
        </div>
        <div className="single-container">
          <p>What is your topic? Please provide a title and brief description.</p>
          <div><label htmlFor="topic_title">Topic Title</label>
          <input type="text" name="Topic Title" className="additional"  placeholder="" id="topic_title"/></div>
          <div><label htmlFor="topic_description">Topic Description</label>
          <textarea rows="3" name="Topic Description" className="additional" placeholder="" id="topic_description" /></div>
        </div>
        <div className="column-container">
          <div>
            <div>
              <label htmlFor="date">Event Date</label>
              <input type="date" name="event_date" id="date"/>
            </div>
            <div>
              <label htmlFor="setup_time">Set Up Time</label>
              <input type="time" className="additional" name="Set-up Time" id="setup_time"/>
            </div>
          </div>
          <div>
          <div><label htmlFor="start_time">Event Start Time</label>
          <input type="time" name="start_time" id="start_time"/></div>
          <div><label htmlFor="end_time">Event End Time</label>
          <input type="time" name="end_time" id="end_time"/></div>
          </div>
        </div>
        <div className="radio-container">
          <p>Is this a member's only or a public event?</p>
          <input type="radio" id="event_members" className="additional" name="Event Audience" value="member's only"/>
          <label htmlFor="event_members">Members only</label>
          <input type="radio" name="Event Audience" id="event_public" className="additional"  value="public event"/>
          <label htmlFor="event_public">Public event</label>
        </div>
        <div className="radio-container">
          <p>Are you interested in bar service or food catering?</p>
          <input type="checkbox" id="bar_service" className="additional" name="Services" value="bar service"/>
          <label htmlFor="bar_service">Bar Service</label>
          <input type="checkbox" id="food_catering" className="additional" name="Services" value="catering"/>
          <label htmlFor="food_catering">Food Catering</label>
        </div>
        <div className="single-container">
          <label htmlFor="other">Is there anything else you want us to know?</label>
          <textarea rows="4" name="Other Info" className="additional"  placeholder="" id="other" />
        </div>
        <div className="single-container">
          <select id="event_category" required className="additional" onChange={event_category}>
            <option value="Lunch and Learn">Book a Lunch and Learn</option>
            <option value="Knowledge Share">Book a Knowledge Share</option>
            <option value="Show Stopper">Book a Show Stopper</option>
            <option value="Don't Know">Don't Know: Book my Event</option>
          </select>
          <div className="extra extra-knowledge">
            <div><label htmlFor="cultural_fit">Why is this a cultural fit for KWENCH?</label>
            <textarea name="Cultural Fit" className="additional"  placeholder="" id="cultural_fit" /></div>
            <div><label htmlFor="duration">Duration</label>
            <input type="text" name="Duration" className="additional"  placeholder="" id="duration" /></div>
            <div className="radio-container">
              <p>Are you prepared to supply promotional assets & manage a ticketing link?</p>
              <input type="radio" id="contact_yes" className="additional" name="Willing to do Ticketing/Promo" value="yes"/>
              <label htmlFor="ticketing_yes">Yes</label>

              <input type="radio" name="Willing to do Ticketing/Promo" id="ticketing_no" className="additional"  value="no"/>
              <label htmlFor="ticketing_no">No</label>

            </div>
          </div>
          <div className="extra extra-show">
           <div><label htmlFor="audience_info">Who is your audience and how will you reach them?</label>
            <textarea name="Audience Info" className="additional"  placeholder="" id="audience_info" /></div>
            <div className="radio-container">
              <p>Which option are you interested in?</p>
              <input type="radio" id="fee_choice_1" className="additional" name="Fee Choice" value="1-50"/>
              <label htmlFor="fee_choice_1">1-50 people with a minimum bar spend of $1000</label>
              <input type="radio" name="Fee Choice" id="fee_choice_2" className="additional"  value="50-100"/>
              <label htmlFor="fee_choice_2">50-100 people with a minimum bar spend of $1700</label>
              <input type="radio" name="Fee Choice" id="fee_choice_3" className="additional"  value="100 above"/>
              <label htmlFor="fee_choice_3">100+ people with a minimum bar spend of $2500</label>
            </div>
            <div className="radio-container">
              <p>Are you prepared to supply promotional assets & manage a ticketing link?</p>
              <input type="radio" id="contact_yes" className="additional" name="Willing to do Ticketing/Promo" value="yes"/>
              <label htmlFor="ticketing_yes">Yes</label>

              <input type="radio" name="Willing to do Ticketing/Promo" id="ticketing_no" className="additional"  value="no"/>
              <label htmlFor="ticketing_no">No</label>
            </div>
          </div>
        </div>
        <div className="radio-container">
          <label htmlFor="gdpr">I consent to providing my data to KWENCH</label>
          <input type="checkbox" name="gdpr_consent_granted" value="1" id="gdpr" required/>
        </div>
          <button className="cta-link" type="submit">Book Event!</button>
          <div id="error-message" className="error-box">
          </div>
        </form>
        <div id="message" className="message-box">
          <a href="https://www.clubkwench.com/" className="cta-link"> Back to KWENCH</a>
        </div>
    </div>
  )
}