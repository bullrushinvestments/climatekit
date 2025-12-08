import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Spinner } from '@chakra-ui/react';

interface Test {
  id: string;
  title: string;
  description: string;
}

interface WriteTestsProps {
  onSubmit: (test: Test) => void;
  loading?: boolean;
  error?: string | null;
}

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required')
});

const WriteTests: React.FC<WriteTestsProps> = ({ onSubmit, loading, error }) => {
  const [testId, setTestId] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: { title: '', description: '' },
    validationSchema,
    onSubmit: (values) => {
      if (!testId) return;
      onSubmit({ id: testId, ...values });
    }
  });

  React.useEffect(() => {
    setTestId(Math.random().toString(36).substring(2, 15));
  }, []);

  return (
    <div className="p-4">
      {loading ? (
        <Spinner />
      ) : error ? (
        <div role="alert" aria-live="assertive" className="bg-red-100 border-l-4 border-red-500 p-4 mb-4">
          {error}
        </div>
      ) : (
        <>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                className={`w-full px-3 py-2 border ${
                  formik.touched.title && formik.errors.title ? 'border-red-500' : ''
                }`}
              />
              {formik.touched.title && formik.errors.title ? (
                <div className="text-sm text-red-600">{formik.errors.title}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                className={`w-full px-3 py-2 border ${
                  formik.touched.description && formik.errors.description ? 'border-red-500' : ''
                }`}
              />
              {formik.touched.description && formik.errors.description ? (
                <div className="text-sm text-red-600">{formik.errors.description}</div>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
              className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                formik.isSubmitting ? 'cursor-not-allowed' : ''
              }`}
            >
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Spinner } from '@chakra-ui/react';

interface Test {
  id: string;
  title: string;
  description: string;
}

interface WriteTestsProps {
  onSubmit: (test: Test) => void;
  loading?: boolean;
  error?: string | null;
}

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required')
});

const WriteTests: React.FC<WriteTestsProps> = ({ onSubmit, loading, error }) => {
  const [testId, setTestId] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: { title: '', description: '' },
    validationSchema,
    onSubmit: (values) => {
      if (!testId) return;
      onSubmit({ id: testId, ...values });
    }
  });

  React.useEffect(() => {
    setTestId(Math.random().toString(36).substring(2, 15));
  }, []);

  return (
    <div className="p-4">
      {loading ? (
        <Spinner />
      ) : error ? (
        <div role="alert" aria-live="assertive" className="bg-red-100 border-l-4 border-red-500 p-4 mb-4">
          {error}
        </div>
      ) : (
        <>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                className={`w-full px-3 py-2 border ${
                  formik.touched.title && formik.errors.title ? 'border-red-500' : ''
                }`}
              />
              {formik.touched.title && formik.errors.title ? (
                <div className="text-sm text-red-600">{formik.errors.title}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                className={`w-full px-3 py-2 border ${
                  formik.touched.description && formik.errors.description ? 'border-red-500' : ''
                }`}
              />
              {formik.touched.description && formik.errors.description ? (
                <div className="text-sm text-red-600">{formik.errors.description}</div>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
              className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                formik.isSubmitting ? 'cursor-not-allowed' : ''
              }`}
            >
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default WriteTests;