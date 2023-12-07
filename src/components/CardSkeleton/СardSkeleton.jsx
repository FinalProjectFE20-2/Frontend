import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from "./CardSkeleton.module.scss"

const CardSkeleton = () => (
  <ContentLoader
  className={styles.grid}
    speed={4}
    width={236}
    height={445}
    viewBox="0 0 236 445"
    backgroundColor="#9296E9"
    foregroundColor="#ecebeb">
    <rect x="331" y="180" rx="0" ry="0" width="1" height="0" />
    <rect x="332" y="180" rx="0" ry="0" width="1" height="0" />
    <rect x="256" y="129" rx="0" ry="0" width="87" height="1" />
    <rect x="0" y="255" rx="10" ry="10" width="235" height="30" />
    <rect x="0" y="292" rx="10" ry="10" width="40" height="24" />
    <rect x="0" y="327" rx="10" ry="10" width="235" height="54" />
    <rect x="68" y="438" rx="0" ry="0" width="0" height="1" />
    <rect x="0" y="406" rx="10" ry="10" width="93" height="35" />
    <rect x="188" y="397" rx="0" ry="0" width="47" height="46" />
    <rect x="0" y="0" rx="0" ry="0" width="235" height="235" />
  </ContentLoader>
);

export default CardSkeleton;
