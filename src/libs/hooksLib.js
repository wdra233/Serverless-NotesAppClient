import { useState } from "react";

export function useFormFields(initialState) {
    const [fields, setValues] = useState(initialState);

    return [
        fields,
        function(event) {
            setValues({
                ...fields,
                // event.target.id comes from controlId
                // tricky part here, event.target.id will override the fields member if any match
                [event.target.id]: event.target.value
            });
        }
    ];
}