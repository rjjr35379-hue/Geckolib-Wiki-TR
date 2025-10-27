import type {ReactNode} from "react";
import ImagePath from "@site/static/img/geckolib-banner.png";
import styles from './styles.module.css';

export default function BannerImage(): ReactNode {
  return (
    <img src={ImagePath}  alt={"GeckoLib Logo"} className={styles.bannerImage}/>
  )
}