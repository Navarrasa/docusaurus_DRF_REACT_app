import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil de Utilizar',
    Svg: require('@site/static/img/interface.svg').default,
    description: (
      <>
        Este React App é fácil de utilizar, com uma interface intuitiva e
        amigável. Você pode navegar facilmente entre as páginas e acessar as
        suas funcionalidades.
      </>
    ),
  },
  {
    title: 'Foca naquilo que importa',
    Svg: require('@site/static/img/crud.svg').default,
    description: (
      <>
        Este aplicativo ajuda principalmente a desenvolver operações CRUD eficientes para
        professores e alunos. Você pode criar, ler, atualizar e excluir dados de 
        forma rápida e fácil.
      </>
    ),
  },
  {
    title: 'Suporte com React',
    Svg: require('@site/static/img/django_react.svg').default,
    description: (
      <>
        Este aplicativo é construído com React, uma biblioteca JavaScript popular
        para construção de interfaces de usuário. Você pode aproveitar
        todos os recursos e benefícios do React para desenvolver aplicativos
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
