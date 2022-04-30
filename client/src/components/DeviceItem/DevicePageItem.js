import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button, TextareaAutosize, TextField } from '@mui/material';

import { addReviewOfDevice } from '../../api/deviceAPI';

import { Context } from '../../index';

import classes from './DeviceItem.module.css';



const DevicePageItem = ({ device }) => {
    const { user } = useContext(Context);
    const { id } = useParams();

    const userId = user.user.id;
    
    const [isOpen, setIsOpen] = useState(false);
    
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState('');

    function submitHandler() {
        const formData = {
            'rating': `${rating}`,
            'description': `${description}`,
            'deviceId': `${id}`,
            'userId': `${userId}`,
        };

        addReviewOfDevice(formData).then((data) => {
            setIsOpen(false);
        });
    }

    return (
        <div className={classes.devicePageItem}>
            <div className={'wrapper min'}>
                <div className={classes.devicePageInfo}>
                    <div className={classes.devicePageImage}>
                        <img src={process.env.REACT_APP_CLIENT_API + device.img} alt={'device'}/>
                    </div>
                    <div className={classes.devicePageText}>
                        <h1 className={classes.devicePageName}>{device.name}</h1>
                        <div className={classes.devicePagePrice}><span>Price - </span>{device.price}</div>
                        <div>{device.rating}</div>
                        <button className={classes.devicePageBtn}>Add to Basket</button>

                    </div>
                </div>
                <div>
                    <h2>Device's Information</h2>
                    <ul className={classes.devicePageDescription}>
                        {device.info.map((option) => {
                            const { title, description } = option;
                            return <li key={title}>
                                <div>{title}</div>
                                <div>{description}</div>
                            </li>;
                        })}
                    </ul>
                </div>
                <div>
                    <h2>Reviews</h2>
                    <div className={classes.row}>
                        <ul className={classes.reviewsList}>
                            {device.review.map((item) => {
                                const { userId, description, rating } = item;
                                return <li key={userId} className={classes.reviewItem}>
                                    <div className={classes.reviewAuthor}>
                                        <div className={classes.reviewImage}>
                                            <img src="" alt=""/>
                                        </div>
                                        <span>{userId}</span>
                                    </div>
                                    <div>
                                        <p className={classes.reviewText}>{description}</p>
                                        <span>{rating}</span>
                                    </div>
                                </li>;
                            })}
                        </ul>
                        <p onClick={() => { setIsOpen(true); }}>Send review about the product</p>
                    </div>
                </div>
            </div>
            {isOpen
                ? <div className={classes.modal}>
                    <div className={classes.overlay} onClick={() => { setIsOpen(false); }} />
                    <div className={classes.window}>
                        <form>
                            <div className={classes.fieldsetFull}>
                                <TextField sx={{ width: '100%' }} label="Brand:" variant="outlined" value={ rating }
                                    onChange={ (e) => {
                                        setRating(parseInt(e.target.value));} } />
                            </div>
                            <div className={classes.fieldsetFull}>
                                <TextareaAutosize
                                    aria-label="Review's description"
                                    minRows={3}
                                    placeholder="Review's description"
                                    sx={{ width: '100%' }}
                                    onChange={(e) => { setDescription(e.target.value); }}
                                />
                            </div>
                        </form>
                        <div className={classes.btnRow}>
                            <Button variant={'contained'} color={'success'} size={'large'} onClick={() => {
                                submitHandler(); }}>Add</Button>
                            <Button sx={{ marginLeft: '20px' }} variant={'contained'} size={'large'} onClick={() => {
                                setIsOpen(false); }}>Cancel</Button>
                        </div>
                    </div>
                </div>
                : ''}
        </div>
    );
};

export default DevicePageItem;