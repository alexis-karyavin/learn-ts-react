import { InputHTMLAttributes } from 'react';

import styles from './Input.module.css';
import cn from 'classnames';

interface PropsInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function Input({
  value,
  type = 'text',
  onChange,
  className,
  label,
  placeholder = ''
}: PropsInput) {
  return (
    <>
      {label && <label className={styles.inputLabel}>{label}</label>}
      <input
        className={cn(styles.input, className)}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;
