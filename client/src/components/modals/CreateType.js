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
        <div>
            <form>
                <input type={'text'} placeholder={'Enter type'} value={value}
                       onChange={ (e) => {setValue(e.target.value)} } />
            </form>
            <div>
                {isEdit
                    ? <button onClick={ () => {onHide()} }>Edit</button>
                    : <button onClick={ () => {addType()} }>Add</button>}
                <button onClick={ () => {onHide()} }>Exit</button>
            </div>
        </div>
    )
}

export default CreateType;