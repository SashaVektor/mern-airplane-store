import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import styles from '../components/Planes/Plane.module.scss'
import { Spinner } from '../components/Spinner/Spinner';
import { getPlane } from '../redux/planes/planeSlice';

const PlanePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { plane, isLoading } = useSelector(state => state.planeSlice);

  useEffect(() => {
    dispatch(getPlane(id))
  }, [dispatch, id])

  if (isLoading) {
    return <Spinner />
  }

  return plane && (
    <Container className={styles.planeContainer}>
      <div className={styles.descContent}>
        <Button onClick={() => navigate(-1)} isBackButton={true}>Назад</Button>
        <h1 className={styles.planePageTitle}>{plane.name}</h1>
        <div className={styles.planePagePrice}>{plane.price} $</div>
        <Button containerClassName={styles.buyBtnContainer}
          onClick={() => navigate('/order')}
        >Оформить заказ</Button>
        <p className={styles.descText}>{plane.description}</p>
      </div>
      <div className={styles.imageContent}>
        <img className={styles.planePageImg} src={plane.planeImage} alt='' />
      </div>
    </Container>
  )
}

export default PlanePage
