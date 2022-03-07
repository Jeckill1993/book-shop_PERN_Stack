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

    return (
        <div>
            <form>
                <input type={'text'} placeholder={'Enter brand'} value={value}
                    onChange={ (e) => {setValue(e.target.value)} }/>
            </form>
            <div>
                {isEdit
                    ? <button onClick={() => {onHide()}}>Edit</button>
                    : <button onClick={() => {addBrand()}}>Add</button>}
                <button onClick={() => {onHide()}}>Exit</button>
            </div>
        </div>
    )
}

export default CreateBrand;