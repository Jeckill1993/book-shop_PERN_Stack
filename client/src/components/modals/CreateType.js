import classes from './modals.module.css';

const CreateType = ({show, onHide, isEdit}) => {
    return (
        <div>
            <form>
                <input type={'text'} placeholder={'Enter type'}/>
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

export default CreateType;