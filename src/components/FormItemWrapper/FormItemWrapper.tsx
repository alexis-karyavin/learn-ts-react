import { ReactNode } from 'react';
import styles from './FormItemWrapper.module.css';

interface PropsFormItemWrapper {
  children: ReactNode;
}

function FormItemWrapper({ children }: PropsFormItemWrapper) {
  return <div className={styles.formItemWrapper}>{children}</div>;
}

export default FormItemWrapper;
