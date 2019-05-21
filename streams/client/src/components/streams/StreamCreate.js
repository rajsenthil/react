import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
    renderInput({input, label, meta}) {
        console.log(meta)
        const className = `field ${meta.error && meta.touched ? 'error': ''}`
        return (            
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                <div className="ui error message">
                    <div className="header">{meta.touched ? meta.error : ''}</div>
                </div>
            </div>
        );
    }

    onSubmit(formValues) {
        console.log(formValues)
    }

    valueChange(e){        
        console.log(e)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field 
                    name="title" 
                    component={this.renderInput} 
                    label="Enter Title" 
                />
                <Field 
                    name="description" 
                    component={this.renderInput} 
                    label="Enter Description" 
                />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'Enter the title'
    }

    if (!formValues.description) {
        errors.description = 'Enter the Description'
    }

    return errors;
}

export default reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate);