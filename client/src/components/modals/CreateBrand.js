import { useContext, useEffect, useState } from 'react';

import { Button, TextField } from '@mui/material';

import { Context } from '../../index';
import { createBrand, updateBrand } from '../../api/deviceAPI';

import classes from './modals.module.css';


const CreateBrand = ({ onHide, isEdit }) => {
    const { device } = useContext(Context);
    const [value, setValue] = useState('');
    const [isError, setError] = useState(false);

    const selectedBrand = device.selectedBrand.name;

    useEffect(() => {
        if (isEdit) setValue(selectedBrand);
    },[selectedBrand, isEdit]);


    const addBrand = () => {
        if (!value.length) {
            setError(true);
            return;
        }
        createBrand({ name: value }).then((data) => {
            setValue('');
            onHide();
            device.setBrands(data);
        });
    };
    const editBrand = () => {
        if (!value.length) {
            setError(true);
            return;
        }
        updateBrand({ name: value, id: device.selectedBrand.id }).then((data) => {
            setValue('');
            onHide();
            device.setBrands(data);
        });
    };

    return (
        <div className={classes.overlay}>
            <div className={classes.container}>
                <form>
                    <div className={classes.fieldsetFull}>
                        <TextField sx={{ width: '100%' }} label="Brand:" variant="outlined" value={ value }
                            onChange={ (e) => {
                                setValue(e.target.value);} } />
                        { isError ? <span className={classes.helper}>The field is required</span> : '' }
                    </div>
                </form>
                <div className={classes.btnRow}>
                    { isEdit
                        ? <Button variant={'contained'} color={'success'} size={'large'} onClick={() => {
                            editBrand(); }}>Edit</Button>
                        : <Button variant={'contained'} color={'success'} size={'large'} onClick={() => {
                            addBrand(); }}>Add</Button>
                    }
                    <Button sx={{ marginLeft: '20px' }} variant={'contained'} size={'large'} onClick={() => {
                        onHide(); }}>Exit</Button>
                </div>
            </div>
        </div>
    );
};

export default CreateBrand;