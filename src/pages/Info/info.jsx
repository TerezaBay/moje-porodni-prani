import React from 'react';
import './style.css';
import { titleTexts } from '../../texts/titleTexts.js';
import { articleTexts } from '../../texts/articleTexts.js';
import { sectionTexts } from '../../texts/sectionTexts.js';

import Header from '../../components/Header/header.jsx';
import SectionQuote from '../../components/SectionQuote/section.jsx';
import Title from '../../components/Title/title.jsx';
import ArtPreview from '../../components/ArtPreview/preview.jsx';
import StyledLink from '../../components/StyledLink/index.jsx';
import Footer from '../../components/Footer/index.jsx';

const Info = () => (
  <>
    <main className="info_main">
      <Title titleClass="title-div" titleText={titleTexts.titleText3} />
      <section className="articles_container">
        {articleTexts.map((article, i) => (
          <ArtPreview
            key={i}
            title={article.artTitle}
            img={article.artImg}
            text={article.artPerex}
            url={article.artUrl}
          />
        ))}
      </section>
    </main>
  </>
);

export default Info;
