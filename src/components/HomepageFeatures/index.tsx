import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Open-Source',
    Svg: require('@site/static/img/opensource1.svg').default,
    description: (
      <>
        We work on awesome OpenSource hardware and software solutions
      </>
    ),
  },
  {
    title: 'Documentation',
    Svg: require('@site/static/img/documentation.svg').default,
    description: (
      <>
        Each project comes with detailed and easy-to-follow documentation
      </>
    ),
  },
  {
    title: 'Software',
    Svg: require('@site/static/img/software.svg').default,
    description: (
      <>
        Free software tools and example codes with the hardware are cherry on the top
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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

