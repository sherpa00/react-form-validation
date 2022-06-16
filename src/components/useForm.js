import { useEffect, useState } from "react";

function useForm(submitForm,validateInfo) {
    const [values,setValues] = useState({
        username: '',
        email: '',
        password: '',
        password1: ''
    });

    const [errors, setErrors] = useState({});
    const [ isSubmitting,setSubmitting ] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    useEffect(() => {
        if (Object.keys(errors) == 0 && isSubmitting) {
            submitForm();
            console.log("useEffect triggered")
        }
    },[errors])

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validateInfo(values));
        setSubmitting(true);
        console.log("submitting");
        console.log(errors)
    }

    return {handleChange,values,handleSubmit,errors}
}

export default useForm;