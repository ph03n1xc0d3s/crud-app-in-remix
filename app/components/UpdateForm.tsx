import { useState } from "react";
import { Form } from "@remix-run/react";

export default function UpdateBookForm({
    book,
}: {
    book: any;
}) {
    const [title, setTitle] = useState(book.name);
    const [author, setAuthor] = useState(book.author);
    const [description, setDescription] = useState(book.description);
    return (
        <div className="overlay">
            <button type="button" className="btn btn-primary btn-md" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Open update modal
            </button>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update book - {book.name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form method="patch" action={"/books?id=" + book.id}>
                                <label className="form-label" htmlFor="name">Book Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                    className="form-control"
                                />
                                <br />
                                <label className="form-label" htmlFor="description">Description</label>
                                <input
                                    type="text"
                                    id="description"
                                    name="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                    className="form-control"
                                />
                                <br />
                                <label className="form-label" htmlFor="author">Author</label>
                                <input
                                    type="text"
                                    id="author"
                                    name="author"
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    required
                                    className="form-control"
                                />
                                <br />
                                <button className="btn btn-primary btn-sm mx-2" type="submit">Update</button>
                            </Form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
