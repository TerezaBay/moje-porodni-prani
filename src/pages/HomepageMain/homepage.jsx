import React from 'react';
import './style.css';
import { home } from '../../texts/homeTexts.js';
import { serviceTexts } from '../../texts/serviceTexts.js';
import { articleTexts } from '../../texts/articleTexts.js';
import { sectionTexts } from '../../texts/sectionTexts.js';
import { titleTexts } from '../../texts/titleTexts.js';

import SectionQuote from '../../components/SectionQuote/section.jsx';
import Title from '../../components/Title/title.jsx';
import ArtPreview from '../../components/ArtPreview/preview.jsx';
import Service from '../../components/Service/service.jsx';
import Author from '../../components/Author/author.jsx';
import StyledLink from '../../components/StyledLink/styledLink.jsx';

const HomepageMain = () => (
  <>
    <SectionQuote text={sectionTexts.section1} />

    <main id="main" className="homepage_main">
      <section className="services-section">
        <Title titleClass="title-div" titleText={titleTexts.titleText1} />
        <div className="service_container">
          {serviceTexts.map((service, i) => (
            <Service
              key={i}
              icon={service.icon}
              label={service.label}
              text={service.text}
            />
          ))}
        </div>
        <p className="main_emphasized-text">{home.emphaText}</p>
      </section>

      <section className="section_preview">
        <h2 className="preview_title">{home.previewTitle}</h2>
        <div className="preview_container">
          {articleTexts.map((article) => (
            <ArtPreview
              key={article.artTitle}
              title={article.artTitle}
              img={article.artImg}
              text={article.artPerex}
            />
          ))}
        </div>
        <SectionQuote text={sectionTexts.section2} />
        <StyledLink
          text={home.button2Text}
          url={home.button2Url}
          type="transparent"
        />
      </section>

      <section id="authors" className="section_authors">
        <Title
          titleClass="title-div title-div_short"
          titleText={titleTexts.titleText2}
        />
        <div className="authors_container">
          {home.authors.map((author, i) => (
            <Author
              key={i}
              img={author.authorsImg}
              name={author.authorsName}
              text={author.authorsText}
            />
          ))}
        </div>
      </section>
    </main>
  </>
);

export default HomepageMain;
