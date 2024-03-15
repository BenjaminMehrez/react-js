import { useState } from "react"
import { withFormValidation } from "./withFormValidation"
import { Form } from "./Form"


const FormWithValidation = withFormValidation(Form)

export const FormContainer = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: ''
    })

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <FormWithValidation formData={formData} onChange={onChange} />
        </>
    )
}