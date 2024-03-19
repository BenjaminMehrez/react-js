import { useState } from "react"

export const withFormValidation = (WrappedComponent) => {

    const WithFormValidation = (props) => {

        const [errors, setError] = useState({})

        const validateForm = () => {
            let newErrors = {}
            let isValid = true

            if (!props.formData.name) {
                newErrors.nombre = 'El nombre es obligatorio'
                isValid = false
            }
            if (!props.formData.email) {
                newErrors.email = 'El mail es obligatorio'
                isValid = false
            }
            if (!props.formData.phone) {
                newErrors.phone = 'El telefono es obligatorio'
                isValid = false
            }
            setError(newErrors)
            return isValid
        }

        return (
            <WrappedComponent
                {...props}
                errors={errors}
                validateForm={validateForm}
            />
        )
    }

    return WithFormValidation

}