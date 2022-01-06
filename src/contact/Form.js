import React, { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import emailjs from 'emailjs-com'

function Form() {
  const [alert, setAlert] = useState({
    name: { state: false, text: 'Name is required' },
    email: { state: false, text: 'Email is required' },
    subject: { state: false, text: 'Subject is required' },
    message: { state: false, text: 'Message is required' },
  })
  const [message, setMessage] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const submitHanlde = (e) => {
    e.preventDefault()
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let validation = 0
    if (!message.name) {
      validation += 1
      setAlert((alert) => {
        return { ...alert, name: { ...alert.name, state: true } }
      })
    }
    if (!message.email) {
      validation += 1
      setAlert((alert) => {
        return { ...alert, email: { text: 'Email is Required', state: true } }
      })
    } else if (!message.email.match(mailformat)) {
      validation += 1
      setAlert((alert) => {
        return {
          ...alert,
          email: {
            text: 'Entered value does not match email format',
            state: true,
          },
        }
      })
    }
    if (!message.subject) {
      validation += 1
      setAlert((alert) => {
        return {
          ...alert,
          subject: {
            ...alert.subject,
            state: true,
          },
        }
      })
    }
    if (!message.message) {
      validation += 1
      setAlert((alert) => {
        return {
          ...alert,
          message: {
            ...alert.message,
            state: true,
          },
        }
      })
    }
    if (validation === 0) {
      emailjs
        .sendForm(
          'service_vrlc55m',
          'template_7jecsz7',
          e.target,
          'user_ZdI1L1z76pZCiNvRMxZnX',
        )
        .then(
          (result) => {
            window.alert('mail has been sent')
            console.log('sent')
            setMessage({
              name: '',
              email: '',
              subject: '',
              message: '',
            })
          },
          (error) => {
            console.log(error.text)
          },
        )
    }
  }
  return (
    <div className="form-cont">
      <form onSubmit={submitHanlde}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            columnGap: '30px',
          }}
        >
          <div className="input-cont">
            <input
              type="text"
              name="name"
              placeholder="YOUR NAME"
              value={message.name}
              onChange={(e) => setMessage({ ...message, name: e.target.value })}
            />
            <p className="alert">{alert.name.state ? alert.name.text : ' '}</p>
          </div>
          <div className="input-cont">
            <input
              type="text"
              name="email"
              placeholder="YOUR EMAIL"
              value={message.email}
              onChange={(e) =>
                setMessage({ ...message, email: e.target.value })
              }
            />
            <p className="alert">
              {alert.email.state ? alert.email.text : ' '}
            </p>
          </div>
        </div>
        <div className="input-cont">
          <input
            type="text"
            name="subject"
            placeholder="YOUR SUBJECT"
            value={message.subject}
            onChange={(e) =>
              setMessage({ ...message, subject: e.target.value })
            }
          />
          <p className="alert">
            {alert.subject.state ? alert.subject.text : ' '}
          </p>
        </div>
        <div className="input-cont">
          <textarea
            name="message"
            placeholder="YOUR MESSAGE"
            value={message.message}
            onChange={(e) =>
              setMessage({ ...message, message: e.target.value })
            }
          />
          <p className="alert">
            {alert.message.state ? alert.message.text : ' '}
          </p>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            padding: '0',
            marginTop: '-30px',
          }}
        >
          <div className="btn-cont">
            <div className="cool-btn">
              <span className="btn-text">send message </span>
              <span className="btn-icon" style={{ fontSize: '20px' }}>
                <FaPaperPlane />
              </span>
            </div>
          </div>
        </button>
      </form>
    </div>
  )
}

export default Form
