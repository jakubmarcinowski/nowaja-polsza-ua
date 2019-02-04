import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './article-preview.module.css';

export default ({ article }) => {
  return (
    <div className={styles.preview}>
      {typeof article.heroImage === 'undefined' ? <div>no image</div> : <Img alt="" fluid={article.heroImage.fluid} />}
      <h3 className={styles.previewTitle}>
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <small>{article.publishDate}</small>
      <div
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html
        }}
      />
    </div>
  );
};
