import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import { home } from './texts/homeTexts.js';
import { articleTexts } from './texts/articleTexts.js';
import { routes } from './links.js';
import './index.html';
import './style.css';

import Navbar from './components/Navbar/navbar.jsx';
import Footer from './components/Footer/footer.jsx';
import Article from './components/Article/article.jsx';
import ScrollToTop from './components/ScrollToTop/scrollToTop.jsx';
import { FormContextProvider } from './utils/formContext.jsx';

const App = () => {

  return (
    <FormContextProvider>
      <Router>
        <ScrollToTop />
        <Navbar />

        <Switch>
          {articleTexts.map((article, i) => (
            <Route key={i} path={article.artUrl}>
              <Article
                {...article}
                nextUrl={
                  i + 1 < articleTexts.length
                    ? articleTexts[i + 1].artUrl
                    : null
                }
                prevUrl={i > 0 ? articleTexts[i - 1].artUrl : null}
              />
            </Route>
          ))}
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>

        <Footer
          copyrightText={home.footerCopyright}
          creditsText={home.footerCredits}
        />
      </Router>
    </FormContextProvider>
  );
};

render(<App />, document.querySelector('#app'));
