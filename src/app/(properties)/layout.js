"use client";
import "@scss/listings.scss";
import { Field, Formik, Form } from "formik";

export default function ListingsLayout({ children }) {
  return (
    <div className="listings_container">
      <div className="listings_topbar">
        <Formik initialValues={{ keyword: "", district: "", propertyType: "" }}>
          {() => (
            <Form className="listings_topbar-search">
              <Field
                name="keyword"
                placeholder="Search by keywords, districts or streets"
                className="listings_topbar-input listings_topbar-input--keyword"
              />
              <Field
                name="district"
                placeholder="District"
                as="select"
                className="listings_topbar-input"
              >
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>

              <Field
                name="propertyType"
                placeholder="Property Type"
                as="select"
                className="listings_topbar-input"
              >
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>

              <Field
                name="minPrice"
                as="select"
                className="listings_topbar-input"
              >
                <option value="red">1 milion</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>

              <Field
                name="maxPrice"
                as="select"
                className="listings_topbar-input"
              >
                <option value="red">3 milion</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
            </Form>
          )}
        </Formik>
        {/* <input placeholder="Search by keywords, districts or streets" /> */}
      </div>
      <div className="listings_main">
        <div className="listings_posts">{children}</div>
        <div className="listings_sidebar">Filter section</div>
      </div>
    </div>
  );
}
