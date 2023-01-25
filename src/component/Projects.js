
export function Portfolio() {
  return (
    <section className='card neumorphism-card-big'>
      <h1 className='title'>Portfolio Projects</h1>
      <div className='projects-wrapper'>
        <div className='project neumorphism-card-mid'>
          <div className="name-link-wrapper">
            <a color='blue' href="https://taxtchange-t.netlify.app/" target="_blank" rel="noreferrer">
              <h3>Website</h3>
            </a>
          </div>
          <p className='project-desc'>A Website</p>
          <a className='highlight-link' href="https://taxtchange-t.netlify.app/"
            target="_blank" rel="noreferrer">GitHub</a>
          <div className="tag-wrapper">
            <span className="tag neumorphism-card">react</span>
            <span className="tag neumorphism-card">html</span>
            <span className="tag neumorphism-card">css</span>
            <span className="tag neumorphism-card">javascript</span>
            <span className="tag neumorphism-card">bootstrap</span>
          </div>
        </div>
        <div className='project neumorphism-card-mid'>
          <div className="name-link-wrapper">
            <a href="https://github.com/Rahulqqq/RahulSharma.git.io" target="_blank" rel="noreferrer">
              <h3>rahulsharma.github.io</h3>
            </a>
          </div>

          <p className='project-desc'>Private Webpage</p>
          <a className='highlight-link' href="https://github.com/Rahulqqq/RahulSharma.git.io"
            target="_blank" rel="noreferrer">GitHub</a>
          <div className="tag-wrapper">
            <span className="tag neumorphism-card">react</span>
            <span className="tag neumorphism-card">react-animation</span>
            <span className="tag neumorphism-card">styled-components</span>
            <span className="tag neumorphism-card">sass</span>
          </div>
        </div>

        {/* <--3--> */}
        <div className='project neumorphism-card-mid'>
          <div className="name-link-wrapper">
            <a href="https://automobile-a.netlify.app/" target="_blank" rel="noreferrer">
              <h3>A website</h3>
            </a>
          </div>

          <p className='project-desc'>A Responsive Webpage</p>
          <a className='highlight-link' href="https://automobile-a.netlify.app/"
            target="_blank" rel="noreferrer">GitHub</a>
          <div className="tag-wrapper">
            <span className="tag neumorphism-card">html</span>
            <span className="tag neumorphism-card">css</span>
            <span className="tag neumorphism-card">bootstrap</span>
            
          </div>
        </div>

        <div className='project neumorphism-card-mid'>
          <div className="name-link-wrapper">
            <a href="https://simon-game-c.netlify.app/" target="_blank" rel="noreferrer">
              <h3>A simple game</h3>
            </a>
          </div>

          <p className='project-desc'>Game</p>
          <a className='highlight-link' href="https://simon-game-c.netlify.app/"
            target="_blank" rel="noreferrer">GitHub</a>
          <div className="tag-wrapper">
            <span className="tag neumorphism-card">javascript</span>
            <span className="tag neumorphism-card">jquery</span>
            <span className="tag neumorphism-card">html</span>
            <span className="tag neumorphism-card">css</span>
            <span className="tag neumorphism-card">bootstrap</span>
          </div>
        </div>
      </div>
    </section>
  )
}