import React, { useState } from "react"

const Form = props => {
    console.log("props", props);
    const [person, setPerson] = useState({ name: "", email:"", role:""});
   
    const handleCHanges = e => {
        console.log(person);
        setPerson({ ...person, [e.target.name]: e.target.value });
    };
    
    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(person);
        setPerson({ name: "", email: "", role: ""});
    };

    return(
        <form onSubmit = {submitForm}>
            <label htmlFor="person">Name</label>
            <input
                id="name"
                type="text"
                name="name"
                onChange={handleCHanges}
                value={person.title}
            />
            <label htmlFor="person">Email</label>
            <textarea
                id="person"
                name="email"
                onChange={handleCHanges}
                value={person.email}
            />
            <label htmlFor="person">role</label>
            <textarea
                id="person"
                name="role"
                onChange={handleCHanges}
                value={person.role}
            />
            <button type="submit">Add Person</button>
         </form>
    );
};

export default Form;