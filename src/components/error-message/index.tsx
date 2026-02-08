import type {ReactNode} from "react";
import styles from './styles.module.css';

export default function ErrorMessage(children): ReactNode {
  return (
    <blockquote className={styles.errorMessage}>
      {children.children}
    </blockquote>
  )
}