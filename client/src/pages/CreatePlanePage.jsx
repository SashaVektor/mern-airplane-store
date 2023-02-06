import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import Input from '../components/Input/Input';
import styles from '../components/Planes/Plane.module.scss';
import { paths } from '../paths';
import { createPlane } from '../redux/planes/planeSlice';

const CreatePlanePage = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const {errors} = useSelector(state => state.planeSlice);
const [name, setName] = useState('');
const [price, setPrice] = useState(0);
const [description, setDescription] = useState('')
const [capacity, setCapacity] = useState('')
const [image, setImage] = useState(null)

const handleCreatePlane = useCallback(() => {
    const formData = new FormData();
    formData.append('name', name)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('capacity',capacity)
    formData.append('planeImage', image)

    dispatch(createPlane(formData)).then(res => {
        if(!res.error) {
            navigate(`${paths.plane}/${res.payload._id}`, {replace: true})
        }
    })
}, [capacity, description, image, name, price])
  return (
    <Container className={styles.createPlane}>
        <Button 
        onClick={() => navigate(-1)}
        isBackButton={true}
        containerClassName={styles.backButtonContainer}
        >Назад</Button>
        <form className={styles.form}>
            <h1 className={styles.createTitle}>Создать самолёт</h1>
            <Input 
            value={name}
            name='name'
            placeholder='Название самолёта'
            error={errors && errors.name && errors.name.message}
            onChange={e => setName(e.target.value)}
            />
            <Input 
            value={price}
            name='price'
            placeholder='Цена'
            type='number'
            error={errors && errors.price && errors.price.message}
            onChange={e => setPrice(e.target.value)}
            />
            <Input 
            value={description}
            name='description'
            placeholder='Описание'
            error={errors && errors.description && errors.description.message}
            onChange={e => setDescription(e.target.value)}
            />
            <Input 
            value={capacity}
            name='capacity'
            placeholder='Вместимость'
            error={errors && errors.capacity && errors.capacity.message}
            onChange={e => setCapacity(e.target.value)}
            />
             <Input 
            name='planeImage'
            type='file'
            error={errors && errors.image && errors.image.message}
            onChange={e => setImage(e.target.files[0])}
            />
            <Button containerClassName={styles.buttonContainer} onClick={handleCreatePlane}>Создать</Button>
        </form>
    </Container>
  )
}

export default CreatePlanePage
