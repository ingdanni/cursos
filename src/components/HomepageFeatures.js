import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Android',
    Svg: require('../../static/img/android-4.svg').default,
    description: (
      <>
        Desarrollo de aplicaciones Android con Kotlin.
      </>
    ),
  },
  {
    title: 'Flutter',
    Svg: require('../../static/img/Flutter.svg').default,
    description: (
      <>
        Desarrollo multiplataforma para Android y iOS con Flutter.
      </>
    ),
  },
  // {
  //   title: 'Diseño web',
  //   Svg: require('../../static/img/html5.svg').default,
  //   description: (
  //     <>
  //       Diseño web con HTML5 y CSS3.
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
