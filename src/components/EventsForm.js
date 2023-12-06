import React, { useState } from "react"
import jsonp from 'fetch-jsonp';

export default function EventsForm() {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const finalFormEndpoint = e.target.action;
    const data =
      Array.from(e.target.elements)
      .filter((input) => input.name)
      .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {})

      const lead = new Array();
      lead['lead'] = data;
      lead['lead_form_id'] = 33624;
      
        
    fetch(finalFormEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lead),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => {
        setMessage("We'll be in touch soon.");
        setStatus('success');
      })
      .catch((err) => {
        setMessage(err.toString());
        setStatus('error');
      });
  }
  return (
    <div>
      <h1>Contact form</h1>
      <form
        action='https://api.tripleseat.com/v1/leads/create.js?public_key=9fb42246fd29af7f0b1edca5d489349472914b89'
        onSubmit={handleSubmit}
        method="POST"
      >
          <div>
            <label>First Name</label>
            <input type="text" name="first_name" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" name="last_name" />
          </div>

          <div>
            <label>Email</label>
            <input type="text" name="email_address" />
          </div>
          <div>
            <label>Phone</label>
            <input type="text" name="phone_number"  />
          </div>

          <button type="submit">Send message</button>
        </form>
    </div>
  )
}