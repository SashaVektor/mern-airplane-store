import React from 'react'
import Container from '../Container/Container'
import waweImage from '../../assets/wave.svg'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.header}>
            <Container className={styles.content}>
            <h1 className={styles.title}>{`Путешествуйте с \n Комфортом`}</h1>
            <p className={styles.desc}>{`С нашей компанией вы забудете обо всем, кроме \n высокого уровня путешествий`}</p>
            </Container>
            <img src={waweImage} alt="" className={styles.wave}/>
        </div>
    )
}

export default Header
