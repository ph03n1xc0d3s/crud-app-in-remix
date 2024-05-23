import { useState } from "react";
import { Form, json, redirect, useLoaderData } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import UpdateForm from "~/components/UpdateForm";
import { deleteBook, getBooks, updateBook } from "~/utils/book";

export async function loader() {
    const books = await getBooks();
    return json(books);
}

interface Book {
    id: number;
    name: string;
    author: string;
    description: string;
}

export default function Book() {
    const books: Book[] = useLoaderData();
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    const handleUpdateClick = (book: any) => {
        setSelectedBook(book);
        setShowUpdateForm(true);
    };
    return (
        <div className="books">
            <h1 className="text-center mt-3">Books Listed</h1>
            <div className="p-3 m-3">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Book Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Author Name</th>
                            <th scope="col" colSpan={2}>
                                Action
                            </th>
                        </tr>
                    </thead>
                    {books.map((book) => (
                        <tbody>
                            <tr>
                                <th scope="row">{book.id}</th>
                                <td>{book.name}</td>
                                <td>{book.description}</td>
                                <td>{book.author}</td>
                                <td>
                                    <Form method="delete" action={"/books?id=" + book.id}>
                                        <button className="btn btn-danger btn-sm" type="submit">
                                            Delete
                                        </button>
                                    </Form>
                                </td>
                                <td>
                                    <button className="btn btn-secondary btn-sm" onClick={() => handleUpdateClick(book)}>Update</button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
                {showUpdateForm && (
                    <UpdateForm
                        book={selectedBook}
                    />
                )}
            </div>
            <script
                src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
                integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
                crossOrigin="anonymous"
            ></script>{" "}
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
                integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
                crossOrigin="anonymous"
            ></script>
        </div>
    );
}

export async function action({ request }: { request: any }) {
    if (request.method === "DELETE") {
        const url = new URL(request.url);
        const bookID = url.searchParams.get("id");
        await deleteBook(bookID);
        return redirect("/books");
    } else if (request.method === "PATCH") {
        const url = new URL(request.url);
        const bookId = url.searchParams.get("id");
        const formData = await request.formData();
        const bookData = Object.fromEntries(formData);
        await updateBook(bookId, bookData);
        return redirect('/books');
    }
}

export const links: LinksFunction = () => {
    return [
        {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
        },
    ];
};
