import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '100% Miễn phí',
    Svg: require('@site/static/img/icons/free.png').default,
    description: (
      <>
        Tất cả mọi khóa học, tài liệu ở <b>Quán Cài Win</b> đều miễn phí cho tất cả mọi người.
        Kể cả người ngoài hành tinh &#58;&#41;
      </>
    ),
  },
  {
    title: 'Người không biết gì về máy tính vẫn có thể',
    Svg: require('@site/static/img/icons/no-laptop.png').default,
    description: (
      <>
        Nếu bạn là người không rành về máy tính, không sao, bạn vẫn sẽ có thể sửa chiếc máy tính của bạn.
        Điều kiện là bạn phải đọc kỹ &#58;&#41;
      </>
    ),
  },
  {
    title: 'Tài liệu mở',
    Svg: require('@site/static/img/icons/puzzle.png').default,
    description: (
      <>
        Tất cả tài liệu đều được chứa ở trên GitHub. Bạn có thể đóng góp để giúp cho
        <b> Quán Cài Win</b> thêm tốt hơn
      </>
    ),
  },

];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} style={{
          width: "200px",
          marginBottom: "0.5rem"
        }} />
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
