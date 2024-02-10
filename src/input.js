import React from 'react';
import classnames from 'classnames';
import styles from './input.module.scss';

export const Input = (
  {
    value = '',
    type = 'text',
    onChange,
    size,
    fullWidth = false,
    disabled,
    label,
    placeholder,
    className,
    ...props
  },
  ref
) => {
  return (
    <div
      className={classnames(
        styles['input-container'],
        fullWidth && styles.input_fullwidth
      )}
    >
      <label className={classnames(fullWidth && styles.input_fullwidth)}>
        {label}
        <input
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          ref={ref}
          className={classnames(
            styles.input,
            size && styles[`input_${size}`],
            fullWidth && styles.input_fullwidth,
            className
          )}
          value={value}
          onChange={(e) => onChange(e)}
          {...props}
        />
      </label>
    </div>
  );
};
