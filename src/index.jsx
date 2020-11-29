import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { home } from './texts/homeTexts.js';
import { articleTexts } from './texts/articleTexts.js';
import { routes } from './links.js';
import './index.html';
import './style.css';

import Navbar from './components/Navbar/navbar.jsx';
import Footer from './components/Footer/footer.jsx';
import Article from './components/Article/article.jsx';
import ScrollToTop from './components/ScrollToTop/scrollToTop.jsx';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Switch>
        {articleTexts.map((article, i) => (
          <Route key={i} path={article.artUrl}>
            <Article
              {...article}
              nextUrl={
                i + 1 < articleTexts.length ? articleTexts[i + 1].artUrl : null
              }
              prevUrl={i > 0 ? articleTexts[i - 1].artUrl : null}
            />
          </Route>
        ))}
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>

      <Footer copyrightText={home.footerCopyright} links={home.footerLinks} />
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
