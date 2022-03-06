import classes from './modals.module.css';

const CreateDevice = ({show, onHide, isEdit}) => {
    return (
        <div>
            <form></form>
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