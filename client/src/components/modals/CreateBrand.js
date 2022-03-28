import classes from './modals.module.css';
import {useContext, useState} from "react";
import {Context} from "../../index";
import {createBrand, updateBrand, fetchBrands} from "../../api/deviceAPI";


const CreateBrand = ({onHide, isEdit}) => {
    const {device} = useContext(Context);
    const [value, setValue] = useState('');
    const [isError, setError] = useState(false);

    const addBrand = () => {
        if (!value.length) {
            setError(true);
            return;
        }
        createBrand({name: value}).then((data) => {
            setValue('');
            onHide();
            device.setBrands(data);
        })
    }
    const editBrand = () => {
        if (!value.length) {
            setError(true);
            return;
        }
        updateBrand({name: value, id: device.selectedBrand.id}).then((data) => {
            setValue('');
            onHide();
            device.setBrands(data);
        })
    }

    return (
        <div className={classes.modalOverlay}>
            <div className={classes.modalContainer}>
                <form>
                    <div className={classes.modalFieldsetFull}>
                        <input className={classes.modalField} type={'text'} placeholder={'Enter brand'}
                               value={isEdit ? device.selectedBrand.value: value}
                               onChange={ (e) => {setValue(e.target.value)} }/>
                        { isError ? <span className={classes.helper}>The field is required</span> : '' }
                    </div>
                </form>
                <div className={classes.modalBtnRow}>
                    {isEdit
                        ? <button className={classes.modalSecondaryBtn} onClick={() => {editBrand()}}>Edit</button>
                        : <button className={classes.modalSecondaryBtn} onClick={() => {addBrand()}}>Add</button>}
                    <button className={classes.modalPrimaryBtn} onClick={() => {onHide()}}>Exit</button>
                </div>
            </div>
        </div>
    )
}

export default CreateBrand;