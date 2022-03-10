import classes from './modals.module.css';
import {useContext, useState} from "react";
import {createType, fetchTypes} from "../../api/deviceAPI";
import {Context} from "../../index";

const CreateType = ({onHide, isEdit}) => {
    const {device} = useContext(Context);
    const [value, setValue] = useState('');


    const addType = () => {
        createType({name: value}).then((data) => {
            setValue('');
            onHide();

            fetchTypes().then((data) => {
                device.setTypes(data);
            });
        })
    }

    return (
        <div className={classes.modalOverlay}>
            <div className={classes.modalContainer}>
                <form>
                    <div className={classes.modalFieldsetFull}>
                        <input className={classes.modalField} type={'text'} placeholder={'Enter type'} value={value}
                               onChange={ (e) => {setValue(e.target.value)} } />
                    </div>
                </form>
                <div className={classes.modalBtnRow}>
                    {isEdit
                        ? <button className={classes.modalSecondaryBtn} onClick={ () => {onHide()} }>Edit</button>
                        : <button className={classes.modalSecondaryBtn} onClick={ () => {addType()} }>Add</button>}
                    <button className={classes.modalPrimaryBtn} onClick={ () => {onHide()} }>Exit</button>
                </div>
            </div>
        </div>

    )
}

export default CreateType;