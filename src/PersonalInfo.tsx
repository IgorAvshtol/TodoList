import React from 'react';
import {Field, Form, Formik} from 'formik';
import './ProfilInfo.css'


export function PersonalInfo() {


    return <div>

        <Formik

            initialValues={{firstName: "", lastName: "", Astronaut: "", President: "", Sportsmen: ""}}
            validate={values => {
                const errors = {firstName: "", lastName: ""};
                if (!values.firstName) {
                    errors.firstName = 'Field is required';
                }
                if (!values.lastName) {
                    errors.lastName = 'Field is required';
                }
                return {}
            }
            }

            onSubmit={(values, {setSubmitting}) => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false)
            }}

        >
            {({isSubmitting, errors}) => (
                <Form>
                    <div>
                        <b>First Name</b>: <Field type="firstName" name="firstName"/>
                        {errors.firstName ? <div className="error">{errors.firstName}</div> : null}
                    </div>
                    <div>
                        <b>Last Name</b>: <Field type="lastName" name="lastName"/>
                        {errors.lastName ? <div className="error">{errors.lastName}</div> : null}
                    </div>
                    <div>
                        <Field type="checkbox" name="Astronaut"/> <b>Astronaut</b>
                        <Field type="checkbox" name="President"/> <b>President</b>
                        <Field type="checkbox" name="Sportsmen"/> <b>Sportsmen</b>
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Save
                    </button>
                </Form>
            )}
        </Formik>
    </div>
}


