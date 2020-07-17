import React from 'react'

function CustomerInput({field, type, placeholder}) {

    return (
        <div>
            <input
            {...field}
            type={type}
            placeholder={placeholder}
            >
            </input>
        </div>
    )
}

export default CustomerInput
