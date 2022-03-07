import classes from './modals.module.css';
import {useContext, useState} from "react";
import {Context} from "../../index";

const CreateDevice = ({onHide, isEdit}) => {
    const {device} = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [brand, setBrand] = useState('');
    const [type, setType] = useState('');
    const [info, setInfo] = useState([]);

    const selectFile = (e) => {
        setFile(e.target.files[0]);
    }

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}]);
    }
    const removeIndo = (number) => {
        setInfo(info.filter(i => i.number !== number));
    }
    const changeInfo = (key, value, number) => {

    }

    return (
        <div>
            <form>
                <input type={"text"} placeholder={"Enter name of device"} value={name}
                       onChange={ (e) => {setName(e.target.value)} }/>
                <input type={"text"} placeholder={"Enter price of device"} value={price}
                       onChange={ (e) => {setPrice(parseInt(e.target.value))} }/>
                <input type={"file"}
                       onChange={ selectFile }/>
                <select onClick={ (e) => {
                    device.setSelectedType(e.target.value);
                } }>
                    {device.types.map((type) => {
                        return <option key={type.id} value={type.name}>{type.name}</option>
                    })}
                </select>
                <select onClick={ (e) => {
                    device.setSelectedBrand(e.target.value);
                } }>
                    {device.brands.map((brand) => {
                        return <option key={brand.id} value={brand.name}>{brand.name}</option>
                    })}
                </select>
            </form>
            <div>
                {isEdit
                    ? <button onClick={ () => {onHide()} }>Edit</button>
                    : <button onClick={ () => {onHide()} }>Add</button>}
                <button onClick={ () => {onHide()} }>Exit</button>
            </div>
        </div>
    )
}

export default CreateDevice;