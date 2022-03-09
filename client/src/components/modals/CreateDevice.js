import classes from './modals.module.css';
import {useContext, useState} from "react";
import {Context} from "../../index";
import {createDevice, fetchDevices} from "../../api/deviceAPI";
import {observer} from "mobx-react-lite";

const CreateDevice = observer(({onHide, isEdit}) => {
    const {device} = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [brandId, setBrandId] = useState(0);
    const [typeId, setTypeId] = useState(0);
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
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i));
    }

    const addDevice = () => {

        const formData = {
            'name': name,
            'price': `${price}`,
            'img': file,
            'brandId': `${brandId}`,
            'typeId': `${typeId}`,
            'info': JSON.stringify(info),
        }

        // const formData = new FormData();
        // formData.append('name', name);
        // formData.append('price', `${price}`);
        // formData.append('img', file);
        // formData.append('brandId', `${brandId}`);
        // formData.append('typeId', `${typeId}`);
        // formData.append('info', JSON.stringify(info));

        createDevice(formData).then((data) => {

            onHide();
            fetchDevices().then((data) => {
                device.setDevices(data);
            })
        })
    }

    return (
        <div>
            <form>
                <div>
                    <select onClick={ (e) => {
                        setTypeId(parseInt(e.target.value));
                    } }>
                        {device.types.map((type) => {
                            return <option key={type.id} value={type.id}>{type.name}</option>
                        })}
                    </select>
                    <select onClick={ (e) => {
                        setBrandId(parseInt(e.target.value));
                    } }>
                        {device.brands.map((brand) => {
                            return <option key={brand.id} value={brand.id}>{brand.name}</option>
                        })}
                    </select>
                </div>
                <input type={"text"} placeholder={"Enter name of device"} value={name}
                       onChange={ (e) => {setName(e.target.value)} }/>
                <input type={"text"} placeholder={"Enter price of device"} value={price}
                       onChange={ (e) => {setPrice(parseInt(e.target.value))} }/>
                <input type={"file"} onChange={ selectFile }/>
                <div>
                    <h3>Characteristic</h3>
                    {
                        info.map((item) => {
                            return <div key={item.number}>
                                <input type={"text"} value={item.title} onChange={ (e) => {
                                    changeInfo('title', e.target.value, item.number)} } />
                                <input type={"text"} value={item.description} onChange={ (e) => {
                                    changeInfo('description', e.target.value, item.number)} }/>
                                <button onClick={ () => {removeIndo(item.number)} }>Delete The Option</button>
                            </div>
                        })
                    }
                    <button type={"button"} onClick={ () => {addInfo()} }>Add Option</button>
                </div>

            </form>
            <div>
                {isEdit
                    ? <button onClick={ () => {onHide()} }>Edit</button>
                    : <button onClick={ () => {addDevice()} }>Add</button>}
                <button onClick={ () => {onHide()} }>Exit</button>
            </div>
        </div>
    )
})

export default CreateDevice;