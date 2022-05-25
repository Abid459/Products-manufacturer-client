import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function App() {
    // form validation rules 
    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Title is required'),
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last name is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    // user state for form
    const [user, setUser] = useState(null);

    // effect runs on component mount
    useEffect(() => {
        // simulate async api call with set timeout
        setTimeout(() => setUser({ title: 'Mr', firstName: 'Frank', lastName: 'Murphy' }), 1000);
    }, []);

    // effect runs when user state is updated
    useEffect(() => {
        // reset form with user data
        reset(user);
    }, [user]);

    function onSubmit(data) {
        // display form data on submit
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }

    return (
        <div className="card m-3">
            <h5 className="card-header">React Hook Form - Reset Form with Default Values Example</h5>
            <div className="card-body">
                {user &&
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-row">
                            <div className="form-group col">
                                <label>Title</label>
                                <select name="title" {...register('title')} className={`form-control ${errors.title ? 'is-invalid' : ''}`}>
                                    <option value=""></option>
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Miss">Miss</option>
                                    <option value="Ms">Ms</option>
                                </select>
                                <div className="invalid-feedback">{errors.title?.message}</div>
                            </div>
                            <div className="form-group col-5">
                                <label>First Name</label>
                                <input name="firstName" type="text" {...register('firstName')} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
                                <div className="invalid-feedback">{errors.firstName?.message}</div>
                            </div>
                            <div className="form-group col-5">
                                <label>Last Name</label>
                                <input name="lastName" type="text" {...register('lastName')} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
                                <div className="invalid-feedback">{errors.lastName?.message}</div>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-1">Submit</button>
                            <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button>
                        </div>
                    </form>
                }
                {!user &&
                    <div className="text-center p-3">
                        <span className="spinner-border spinner-border-lg align-center"></span>
                    </div>
                }
            </div>
        </div>
    )
}

export { App };