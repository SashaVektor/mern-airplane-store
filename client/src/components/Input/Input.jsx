import React from 'react';
import styles from './Input.module.scss'

const Input = ({
    type = "text",
    name = "",
    containerClassName = "",
    placeholder = "",
    onChange = () => null,
    error = "",
}) => {
    return (
        <div className={`${styles.container} ${containerClassName}`}>
            <input type={type} name={name}
                className={styles.input} placeholder={placeholder} onChange={onChange}
            />
            {error && <span>{error}</span>}
        </div>
    )
}

export default Input
