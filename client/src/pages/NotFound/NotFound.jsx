import React from 'react'
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import styles from './NotFound.module.scss'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <Container className={styles.notFound}>
            <h1 className={styles.title}>Страница не найдена</h1>
            <Button containerClassName={styles.button} onClick={() => navigate('/')}>На главную</Button>
        </Container>
    )
}

export default NotFound
