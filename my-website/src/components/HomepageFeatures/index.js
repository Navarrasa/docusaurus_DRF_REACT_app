import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Importação estática do authors.yml
const Authors = require('@site/blog/authors.yml').default || require('@site/blog/authors.yml');

// Definir o FeatureList com base nos autores
const FeatureList = Object.values(Authors).map((author) => ({
  title: author.name,
  image_url: author.image_url,
  description: (
    <>
      {author.title} <br />
      <a
        href={`https://linkedin.com/in/${author.socials.linkedin.replace(/\s/g, '-').toLowerCase()}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>{' '}
      |{' '}
      <a href={author.url} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </>
  ),
}));

function Feature({ image_url, title, description }) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <img
          src={image_url}
          alt={title}
          className={styles.featureImage}
          style={{ width: '150px', height: '150px', borderRadius: '50%' }}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}