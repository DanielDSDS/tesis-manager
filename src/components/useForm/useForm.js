const useForm = (fields, proxy) => {
    const [state, setState] = useState(fields);

    const handleChange = ({ target }) => {
        setState({
            ...state,
            [target.name]: target.value
        })
        console.log(state);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/${proxy}`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(state)
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
    }

    return ({
        state,
        hanldeSubmit,
        handleChange
    })
}

export default useForm;