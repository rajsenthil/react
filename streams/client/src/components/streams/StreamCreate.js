import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
    renderInput({input}) {
        return (            
            <input {...input} />
        )
    }

    handleTitleChange() {
        console.log("Title changed");
    }


    handleDescChange() {
        console.log("Description changed");
    }

    render() {
        return (
            <form>
                <Field name="title" component={this.renderInput} />
                <Field name="description" component={this.renderInput} />
            </form>
        );
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);