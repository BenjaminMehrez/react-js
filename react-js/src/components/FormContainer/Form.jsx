export const Form = ({ formData, errors, validateForm, onChange }) => {

    const handleSubmit = (event) => {
        event.preventDefault()

        if (validateForm()) {
            console.log('enviar formulario');
        }
    }

    return (
        <center>
            <form onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    placeholder="ingresa el nombre"
                    onChange={(e) => onChange(e)}
                    value={formData.nombre}
                />
                {errors && errors.nombre && <span>{errors.nombre}</span>}

                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    placeholder="ingresa el email"
                    onChange={(e) => onChange(e)}
                    value={formData.email}
                />
                {errors && errors.email && <span>{errors.email}</span>}

                <button type="submit">Enviar</button>
            </form>
        </center>

    )
}
