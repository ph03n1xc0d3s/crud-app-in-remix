import { Form } from "@remix-run/react";

export default function CreateForm() {
  return (
    <div className="formContainer d-flex justify-content-center">
      <Form method="post" autoComplete="off" className="w-50">
        <label htmlFor="bookname" className="form-label">
          Book Name
        </label>
        <input type="text" className="form-control" id="bookname" name="name"/>
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea className="form-control" id="author" name="description"></textarea>
        <label htmlFor="author" className="form-label">
          Author Name
        </label>
        <input type="text" className="form-control" id="author" name="author"/>
        <button className="mt-3 btn btn-primary btn-sm" type="submit">
          Create
        </button>
      </Form>
    </div>
  );
}
