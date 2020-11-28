import React from 'react';
import './style.css';
import { titleTexts } from '../../texts/titleTexts.js';
import { articleTexts } from '../../texts/articleTexts.js';
import { sectionTexts } from '../../texts/sectionTexts.js';
import { picLinkTexts } from '../../texts/piclinkTexts.js';

import SectionQuote from '../../components/SectionQuote/section.jsx';
import Title from '../../components/Title/title.jsx';
import ArtPreview from '../../components/ArtPreview/preview.jsx';
import PicLink from '../../components/PicLink/picLink';

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

      <SectionQuote text={sectionTexts.section3} />
      <Title
        titleClass="title-div title-div_short"
        titleText={titleTexts.titleText4}
      />
      <section className="picLink_container">
        {picLinkTexts.map((link, i) => (
          <PicLink
            key={i}
            title={link.linkTitle}
            img={link.linkImg}
            text={link.linkText}
            url={link.linkUrl}
            type={link.type}
          />
        ))}
      </section>
    </main>
  </>
);

export default Info;
