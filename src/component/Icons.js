import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faLinkedinIn, faGithub, faWhatsapp, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

export function Icons(props) {
    return (
      <div className={props.type}>
        <a className="social-link linkedin" aria-label="My LinkedIn" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rahul-sharma-in/">
          <svg viewBox="0 0 200 200" className="circle">
            <circle cx="100" cy="100" r="80" fill='null' />
          </svg>
          <div className='social'>
            <FontAwesomeIcon icon={faLinkedinIn} className="social-svg" />
          </div>
          <span className="label">LinkedIn</span>
        </a>
        <a className="social-link email" aria-label="My E-Mail" href="mailto:pt.rahulsharma67@gmail.com">
          <svg viewBox="0 0 200 200" className="circle">
            <circle cx="100" cy="100" r="80" fill='null' />
          </svg>
          <div className='social'>
            <FontAwesomeIcon icon={faEnvelope} className="social-svg" />
          </div>
          <span className="label">E-Mail</span>
        </a>
        <a className="social-link github" aria-label="My Github" target="_blank" rel="noreferrer" href="https://github.com/Rahulqqq">
          <svg viewBox="0 0 200 200" className="circle">
            <circle cx="100" cy="100" r="80" fill='null' />
          </svg>
          <div className='social'>
            <FontAwesomeIcon icon={faGithub} className="social-svg" />
          </div>
          <span className="label">Github</span>
        </a>
        <a className="social-link stackoverflow" aria-label="My StackOverflow" target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/20069671/rahul-sharma">
          <svg viewBox="0 0 200 200" className="circle">
            <circle cx="100" cy="100" r="80" fill='null' />
          </svg>
          <div className='social'>
            <FontAwesomeIcon icon={faStackOverflow} className="social-svg" />
          </div>
          <span className="label">StackOverflow</span>
        </a>
        <a className="social-link telegram" aria-label="My Telegram" target="_blank" rel="noreferrer" href="https://t.me/rahul_sharma_67">
          <svg viewBox="0 0 200 200" className="circle">
            <circle cx="100" cy="100" r="80" fill='null' />
          </svg>
          <div className='social'>
            <FontAwesomeIcon icon={faTelegram} className="social-svg" />
          </div>
          <span className="label">Telegram</span>
        </a>
        <a className="social-link whatsapp" aria-label="My Whatsapp" target="_blank" rel="noreferrer" href="https://wa.me/+919630322001">
          <svg viewBox="0 0 200 200" className="circle">
            <circle cx="100" cy="100" r="80" fill='null' />
          </svg>
          <div className='social'>
            <FontAwesomeIcon icon={faWhatsapp} className="social-svg" />
          </div>
          <span className="label">Whatsapp</span>
        </a>
      </div> 
    )
}