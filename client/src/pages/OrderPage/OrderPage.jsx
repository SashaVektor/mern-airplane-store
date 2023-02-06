import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import styles from './OrderPage.module.scss'

const OrderPage = () => {
    const navigate = useNavigate();
    const { plane } = useSelector(state => state.planeSlice);
  return (
    <Container className={styles.order}>
        <h1 className={styles.title}>Ваш {plane.name} будет в ближайшее время</h1>
        <p className={styles.desc}>К оплате {plane.price} $ </p>
        <img className={styles.img} alt='' src={plane.planeImage}></img>
        <Button containerClassName={styles.button} onClick={() => navigate('/')}>На главную</Button>
    </Container>
  )
}

export default OrderPage
