import React from 'react';
import './style.css';

import SectionQuote from '../SectionQuote/section.jsx';
import Title from '../Title/title.jsx';
import StyledLink from '../StyledLink/index.jsx';

const Article = ({ artTitle, artImg, artPerex, artBody, prevUrl, nextUrl }) => (
  <>
    <main className="article_main">
      <Title titleClass="title-div_short" titleText={artTitle} />
      <SectionQuote text={artPerex} />
      <div className="article_container">
        <img
          className="article_image"
          src={`/assets/articles/${artImg}.jpg`}
          alt="fotka miminka"
        />
        <div>
          <div
            className="article_body"
            dangerouslySetInnerHTML={{ __html: artBody }}
          ></div>
          <div className="article_buttons">
            {prevUrl && (
              <StyledLink text="Předchozí článek" url={prevUrl} type="yellow" />
            )}
            {nextUrl && (
              <StyledLink text="Následující článek" url={nextUrl} type="grey" />
            )}
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Article;
