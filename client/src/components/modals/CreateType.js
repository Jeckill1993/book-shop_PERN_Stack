import classes from './modals.module.css';
import {useContext, useEffect, useState} from "react";
import {createType, updateType} from "../../api/deviceAPI";
import {Context} from "../../index";

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
        <div className={classes.modalOverlay}>
            <div className={classes.modalContainer}>
                <form>
                    <div className={classes.modalFieldsetFull}>
                        <input className={classes.modalField} type={'text'} placeholder={'Enter type'}
                               value={ value }
                               onChange={ (e) => {setValue(e.target.value)} } />
                        { isError ? <span className={classes.helper}>The field is required</span> : '' }
                    </div>
                </form>
                <div className={classes.modalBtnRow}>
                    {isEdit
                        ? <button className={classes.modalSecondaryBtn} onClick={ () => {editType()} }>Edit</button>
                        : <button className={classes.modalSecondaryBtn} onClick={ () => {addType()} }>Add</button>}
                    <button className={classes.modalPrimaryBtn} onClick={ () => {onHide()} }>Exit</button>
                </div>
            </div>
        </div>

    )
}

export default CreateType;