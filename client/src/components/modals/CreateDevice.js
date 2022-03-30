import classes from './modals.module.css';
import {useContext, useState} from "react";
import {Context} from "../../index";
import {createDevice, fetchDevices, updateDevice} from "../../api/deviceAPI";
import {observer} from "mobx-react-lite";
import {Button, IconButton, Input, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';

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
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number));
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i));
    }

    const getFormData = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('brandId', `${brandId}`);
        formData.append('typeId', `${typeId}`);
        formData.append('info', JSON.stringify(info));

        return formData;
    }

    const addDevice = () => {
        const formData = getFormData();

        createDevice(formData).then((data) => {
            onHide();

            fetchDevices().then((data) => {
                device.setDevices(data.rows);
            })
        })
    }
    const editDevice = () => {
        const formData = getFormData();
        formData.append('id', `${device.selectedDevice.id}`);

        updateDevice(formData).then((data) => {
            onHide();

            fetchDevices().then((data) => {
                device.setDevices(data.rows);
            })
        })
    }

    return (
        <div className={classes.overlay}>
            <div className={classes.container}>
                <form>
                    <div className={classes.row}>
                        <div className={classes.fieldset}>
                            <InputLabel sx={{ marginBottom: '5px',
                                              fontSize: '12px',
                                              lineHeight: '16px'}}>Type:</InputLabel>
                            <Select sx={{ width: '100%' }}
                                onChange={(e) => { setTypeId(parseInt(e.target.value)) }}>
                                {device.types.map((type) => {
                                    return <MenuItem key={type.id} value={type.id}>{type.name}</MenuItem>
                                })}
                            </Select>
                        </div>
                        <div className={classes.fieldset}>
                            <InputLabel sx={{ marginBottom: '5px',
                                fontSize: '12px',
                                lineHeight: '16px'}}>Brand:</InputLabel>
                            <Select sx={{ width: '100%' }}
                                    onChange={(e) => { setBrandId(parseInt(e.target.value)) }}>
                                {device.brands.map((brand) => {
                                    return <MenuItem key={brand.id} value={brand.id}>{brand.name}</MenuItem>
                                })}
                            </Select>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.fieldset}>
                            <TextField sx={{ width: '100%' }} label="Name of device:" variant="outlined" value={name}
                                       onChange={(e) => {
                                           setName(e.target.value)}}/>
                        </div>
                        <div className={classes.fieldset}>
                            <TextField sx={{ width: '100%' }} label="Price of device:" variant="outlined" value={price}
                                       onChange={(e) => {
                                           setPrice(parseInt(e.target.value))
                                       }}/>
                        </div>
                    </div>
                    <label htmlFor="icon-button-file">
                        <Input sx={{display: 'none'}} accept="image/*" id="icon-button-file" type="file"
                               onChange={(e) => { selectFile(e) }}/>
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera/>
                        </IconButton>
                    </label>
                    <div className={classes.optionsBox}>
                        <h4 className={classes.optionsTitle}>Characteristic</h4>
                        { info.map((item) => {
                                return <div className={classes.optionRow} key={item.number}>
                                    <div className={classes.optionFieldset}>
                                        <TextField size="small" placeholder={"Title"}
                                                   variant="outlined" value={item.title}
                                                   onChange={(e) => {
                                                       changeInfo('title', e.target.value, item.number)}}/>
                                    </div>
                                    <div className={classes.optionFieldset}>
                                        <TextField size="small" placeholder={"Description"}
                                                   variant="outlined" value={item.description}
                                                   onChange={(e) => {
                                                       changeInfo('description', e.target.value, item.number)}}/>
                                    </div>
                                    <IconButton aria-label="delete" color="dark" onClick={() => {
                                        removeInfo(item.number)
                                    }}>
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                            }) }
                        <Button sx={{ width: '200px' }} variant={'contained'} color="dark" type={"button"} onClick={() => {
                            addInfo()
                        }}>Add Option</Button>
                    </div>

                </form>
                <div className={classes.btnRow}>
                    {isEdit
                        ? <Button variant={'contained'} color={'success'} size={'large'} onClick={() => {
                            editDevice()
                        }}>Edit</Button>
                        : <Button variant={'contained'} color={'success'} size={'large'} onClick={() => {
                            addDevice()
                        }}>Add</Button>}
                    <Button sx={{ marginLeft: '20px' }} variant={'contained'} size={'large'} onClick={() => {
                        onHide()
                    }}>Exit</Button>
                </div>
            </div>
        </div>
    )
})

export default CreateDevice;