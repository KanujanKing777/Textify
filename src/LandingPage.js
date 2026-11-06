import React from 'react';
import {
  ArrowDown,
  ArrowRight,
  BookOpenText,
  Check,
  FileText,
  Image,
  Sparkles,
} from 'lucide-react';
import './LandingPage.css';

const logoUrl = `${process.env.PUBLIC_URL}/favicon.png`;

const features = [
  {
    icon: BookOpenText,
    title: 'Create a blog',
    description: 'Turn a topic into a polished, well-structured blog with suggested images to bring your ideas to life.',
    className: 'feature-lilac',
  },
  {
    icon: FileText,
    title: 'Tell a story',
    description: 'Build a story around your idea and chosen themes, with scenes and visuals to make it memorable.',
    className: 'feature-peach',
  },
  {
    icon: Sparkles,
    title: 'Make a comic',
    description: 'Turn an idea into a sequence of illustrated comic panels with characters, dialogue, and narration.',
    className: 'feature-mint',
  },
];

function LandingPage({ onCreateAccount, onSignIn }) {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <a className="landing-brand" href="#home" aria-label="Textify home">
          <img className="landing-brand-mark" src={logoUrl} alt="" />
          <span>Textify</span>
        </a>
        <nav className="landing-nav" aria-label="Main navigation">
          <a href="#features">What you can do</a>
          <a href="#how-it-works">How it works</a>
        </nav>
        <div className="landing-header-actions">
          <button className="landing-signin" type="button" onClick={onSignIn}>Sign in</button>
          <button className="landing-header-cta" type="button" onClick={onCreateAccount}>
            Get started <ArrowRight size={16} />
          </button>
        </div>
      </header>

      <main id="home">
        <section className="landing-hero">
          <div className="hero-copy">
            <div className="hero-eyebrow"><span className="eyebrow-dot" /> YOUR ALL-IN-ONE AI STUDIO</div>
            <h1>Big ideas deserve<br /> <span>a little help.</span></h1>
            <p className="hero-description">
              Create blogs, stories, and comics from your ideas. Textify brings writing and visuals together in one inspiring place.
            </p>
            <div className="hero-actions">
              <button className="primary-cta" type="button" onClick={onCreateAccount}>
                Create your account <ArrowRight size={18} />
              </button>
              <a className="secondary-cta" href="#features">Explore the studio <ArrowDown size={16} /></a>
            </div>
            <div className="hero-note">
              <span className="note-check"><Check size={13} /></span>
              Your creative space is just a few clicks away
            </div>
          </div>

          <div className="hero-art" aria-label="Preview of the Textify creative workspace">
            <div className="art-sunburst" />
            <div className="art-card art-card-back">
              <div className="back-card-top"><span /><span /><span /></div>
              <div className="back-card-image"><Image size={26} /></div>
            </div>
            <div className="art-card art-card-front">
              <div className="workspace-top">
                <img className="workspace-logo" src={logoUrl} alt="" />
                <span className="workspace-label">YOUR CREATIVE STUDIO</span>
                <span className="workspace-avatar">K</span>
              </div>
              <div className="workspace-content">
                <span className="workspace-kicker">A fresh start</span>
                <h2>What will you<br />create today?</h2>
                <p>One idea can take you anywhere.</p>
                <div className="workspace-input">A little inspiration goes a long way<span><ArrowRight size={14} /></span></div>
                <div className="workspace-tools">
                  <span><BookOpenText size={14} /> Blog</span>
                  <span><FileText size={14} /> Story</span>
                  <span><Sparkles size={14} /> Comic</span>
                </div>
              </div>
            </div>
            <div className="art-sticker sticker-sparkle"><Sparkles size={20} /></div>
            <div className="art-sticker sticker-note"><span>Idea to<br /><b>something</b><br />wonderful ✦</span></div>
            <div className="art-bottom-line">A little help. A lot of possibility.</div>
          </div>
        </section>

        <section className="capabilities-strip" aria-label="Textify capabilities">
          <span>ONE STUDIO, THREE WAYS TO CREATE</span>
          <div className="capability-list">
            <span><BookOpenText size={16} /> Blog</span>
            <span><FileText size={16} /> Story</span>
            <span><Sparkles size={16} /> Comic</span>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading">
            <span className="section-eyebrow">MAKE MORE OF YOUR IDEAS</span>
            <h2>Everything you need to<br />get from <span>idea to done.</span></h2>
            <p>Less hopping between tools. More making things you’re proud of.</p>
          </div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, description, className }, index) => (
              <article className={`feature-card ${className}`} key={title}>
                <div className="feature-topline">
                  <span className="feature-icon"><Icon size={20} /></span>
                  <span className="feature-index">0{index + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="feature-arrow" aria-hidden="true"><ArrowRight size={17} /></span>
              </article>
            ))}
          </div>
        </section>

        <section className="how-section" id="how-it-works">
          <div className="how-copy">
            <span className="section-eyebrow">SIMPLE BY DESIGN</span>
            <h2>Start with a thought.<br /><span>See where it goes.</span></h2>
          </div>
          <div className="how-steps">
            <div className="how-step"><span>01</span><div><h3>Bring your idea</h3><p>Start with a topic, a rough draft, or just a spark of inspiration.</p></div></div>
            <div className="how-step"><span>02</span><div><h3>Choose your format</h3><p>Shape your idea into a blog, a story, or a comic.</p></div></div>
            <div className="how-step"><span>03</span><div><h3>Make it yours</h3><p>Review your creation, refine the result, and share it with the world.</p></div></div>
          </div>
        </section>

        <section className="final-cta">
          <div className="cta-decoration cta-decoration-one" />
          <div className="cta-decoration cta-decoration-two" />
          <div className="cta-content">
            <span className="cta-kicker"><Sparkles size={15} /> YOUR NEXT IDEA IS WAITING</span>
            <h2>Ready when<br />you are.</h2>
            <p>Make room for more creating. Your Textify is one account away.</p>
            <button type="button" onClick={onCreateAccount}>Create your account <ArrowRight size={18} /></button>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <a className="landing-brand" href="#home" aria-label="Textify home">
          <img className="landing-brand-mark" src={logoUrl} alt="" />
          <span>Textify</span>
        </a>
        <span>Made for the ideas you haven’t had yet.</span>
        <button type="button" onClick={onSignIn}>Already have an account? <b>Sign in</b></button>
      </footer>
    </div>
  );
}

export default LandingPage;
