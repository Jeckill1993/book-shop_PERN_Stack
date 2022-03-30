import classes from './modals.module.css';
import {useContext, useEffect, useState} from "react";
import {createType, updateType} from "../../api/deviceAPI";
import {Context} from "../../index";
import {Button, TextField} from "@mui/material";

const CreateType = ({onHide, isEdit}) => {
    const {device} = useContext(Context);
    const [value, setValue] = useState('');
    const [isError, setError] = useState(false);

    useEffect(() => {
        if (isEdit) setValue(device.selectedType.name);
    },[])


    const addType = () => {
        if (!value.length) {
            setError(true);
            return;
        }
        createType({name: value}).then((data) => {
            device.setTypes(data);
            setValue('');
            onHide();
        });
    }
    const editType = () => {
        if (!value.length) {
            setError(true);
            return;
        }
        updateType({name: value, id: device.selectedType.id}).then((data) => {
            device.setTypes(data);
            setValue('');
            onHide();
        })
    }

    return (
        <div className={classes.overlay}>
            <div className={classes.container}>
                <form>
                    <div className={classes.fieldsetFull}>
                        <TextField sx={{ width: '100%' }} label="Type:" variant="outlined" value={ value }
                                   onChange={ (e) => {
                                       setValue(e.target.value)} } />
                        { isError ? <span className={classes.helper}>The field is required</span> : '' }
                    </div>
                </form>
                <div className={classes.btnRow}>
                    { isEdit
                        ? <Button variant={'contained'} color={'success'} size={'large'} onClick={() => {
                            editType() }}>Edit</Button>
                        : <Button variant={'contained'} color={'success'} size={'large'} onClick={() => {
                            addType() }}>Add</Button>
                        }
                    <Button sx={{ marginLeft: '20px' }} variant={'contained'} size={'large'} onClick={() => {
                        onHide() }}>Exit</Button>
                </div>
            </div>
        </div>

    )
}

export default CreateType;