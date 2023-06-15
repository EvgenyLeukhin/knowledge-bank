---
title: Formik и uip
sidebar_position: 9
---

## Formik + yup example

### 1. Install packages

```yarn add formik yup```

---

### 2. Imports

```tsx
import { useFormik } from 'formik';
import * as Yup from 'yup';
```

---

### 3. Form template

```tsx
// values state
const [formValues, setFormValues] = useState<TFormNativeValues>(
  formNativeEmptyValues,
);

// loading state
const [formLoading, setFormLoading] = useState<boolean>(true);

  // request immitation
useEffect(() => {
  setTimeout(() => {
    setFormValues(formNativeServerValues);
    setFormLoading(false);
  }, 1000);
}, []);

  const formik = useFormik({
    // enableReinitialize
    enableReinitialize: true,

    // initial values
    initialValues: formValues,

    // validationSchema
    validationSchema: Yup.object({
      // name
      name: Yup.string()
        .min(6, 'must be min 6 characters')
        .max(20, 'must be max 20 characters')
        .required('name is required'),

      // password
      password: Yup.string()
        .min(6, 'must be min 6 characters')
        .max(15, 'must be max 15 characters')
        .required('password is required'),
    }),

    // formik handleSubmit
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm,
    // setFieldValue,
    values: {
      name,
      password,
    },
  } = formik;

  // onResetForm
  const onResetForm = () => {
    resetForm({
      values: formNativeEmptyValues,
      touched: {},
      errors: {},
    });
  };

  // validation errors
  const notValid: Record<keyof TFormNativeValues, string | boolean | undefined
  > = {
    name: formik.touched.name && formik.errors.name,
    password: formik.touched.password && formik.errors.password,
  };

  const valid: Record<keyof TFormNativeValues, string | boolean | undefined> = {
    name: formik.touched.name && !formik.errors.name,
    password: formik.touched.password && !formik.errors.password,
  };

<form method='post' onSubmit={handleSubmit}>
  {/* name */}
  <input
    id='name'
    type='text'
    name='name'
    placeholder='Enter name'
    onBlur={handleBlur}
    onChange={handleChange}
    value={name}
  />

  {/* password validation message */}
  {notValid.name ? <p>{formik.errors.name}</p> : null}

  {/* password */}
  <input
    id='password'
    type='password'
    name='password'
    placeholder='Enter password'
    onBlur={handleBlur}
    onChange={handleChange}
    value={password}
  />

  {/* password validation message */}
  {notValid.password ? <p>{formik.errors.password}</p> : null}


  {/* buttons */}
  <button type='submit'>Send</button>
  <button type='reset' onClick={onResetForm}>Reset</button>
</form>
```
