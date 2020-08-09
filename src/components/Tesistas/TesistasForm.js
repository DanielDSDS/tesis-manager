import { React } from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select';
import useForm from '../useForm/useForm';


const TesistasForm = () => {
    const proxy = 'tesistas'
    const {handleChange,handleSubmit,values} = useForm({},proxy)

    return (
        <div>
            
        </div>
    )
}

export default TesistasForm