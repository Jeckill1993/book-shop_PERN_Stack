import classes from './modals.module.css';
import {useContext, useState} from "react";
import {Context} from "../../index";
import {createBrand, fetchBrands} from "../../api/deviceAPI";

const CreateBrand = ({onHide, isEdit}) => {
    const {device} = useContext(Context);
    const [value, setValue] = useState('');


    const addBrand = () => {
        createBrand({name: value}).then((data) => {
            setValue('');
            onHide();

            fetchBrands().then((data) => {
                device.setBrands(data);
            });
        })
    }
    const editBrand = () => {
        onHide();
    }

    return (
        <div className={classes.modalOverlay}>
            <div className={classes.modalContainer}>
                <form>
                    <div className={classes.modalFieldsetFull}>
                        <input className={classes.modalField} type={'text'} placeholder={'Enter brand'} value={value}
                               onChange={ (e) => {setValue(e.target.value)} }/>
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