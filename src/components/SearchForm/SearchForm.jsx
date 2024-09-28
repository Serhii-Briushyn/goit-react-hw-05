import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import styles from "./SearchForm.module.css";

const SearchForm = ({ onSearch }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    if (values.query.trim() === "") {
      toast.error("Please enter a search term");
      return;
    }
    onSearch(values.query.trim());
  };

  return (
    <div className={styles.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form className={styles.form}>
            <Field
              className={styles.input}
              name="query"
              type="text"
              placeholder="Search..."
            />
            <button className={styles.button} type="submit">
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchForm;
