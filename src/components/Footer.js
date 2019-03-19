import React from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="site-footer">
        <p>
          crafted with <span className="footer-heart">&hearts;</span> by{' '}
          <Link to={prefixLink('/')} className="footer-brand">
            meadow<span className="footer-brand-emphasis">lab</span>
          </Link>
        </p>
      </footer>
    )
  }
}
