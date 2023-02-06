import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPlanes } from '../../redux/planes/planesSlice';
import { Spinner } from '../Spinner/Spinner';
import Container from '../Container/Container';
import PlaneItem from './PlaneItem';
import { Link } from 'react-router-dom';
import styles from './Plane.module.scss'
import { paths } from '../../paths';
import Button from '../Button/Button';
import { useSortPlanes } from '../../hooks/useSortPlanes';

const Planes = () => {
    const dispatch = useDispatch();
    const { planes, isLoading } = useSelector(state => state.planesSlice);
    const {isDescSort, setDescSort, sortedPlanes} = useSortPlanes(planes || []);

    useEffect(() => {
        dispatch(getPlanes())
    }, [dispatch])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div>
            <div className={styles.sort}>
                <Container className={styles.planesHeader}>
                    <Button className={styles.sortBtn}
                    onClick={() => setDescSort(!isDescSort)}
                    >Сортировать по цене {`${isDescSort ? 'desc' : 'asc'}`} </Button>
                    <Link
                        to={paths.createPlane}
                        className={styles.createPlaneBtn}
                        >Добавить самолёт</Link>
                </Container>
            </div>
            <Container className={styles.planesGrid}>
                {sortedPlanes && sortedPlanes.map(plane => <PlaneItem key={plane._id} {...plane} />)}
            </Container>
        </div>
    )
}

export default Planes
