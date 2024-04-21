import { Formik, Field, ErrorMessage } from "formik";

const initialValues = {
  agreeToTerms: false,
  country: "",
};

const MyForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, handleChange, handleBlur, errors, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              type="checkbox"
              name="agreeToTerms"
              checked={values.agreeToTerms}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="agreeToTerms">Agree to terms</label>
            <ErrorMessage
              name="agreeToTerms"
              component="div"
              className="error"
            />
          </div>
          <div>
            <Field
              as="select"
              name="country"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Select a country</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="CA">Canada</option>
            </Field>
            <ErrorMessage name="country" component="div" className="error" />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default MyForm;
