import type { LinksFunction } from "@remix-run/node";
import { redirect, type MetaFunction } from "@remix-run/node";
import { createBook, deleteBook } from "../utils/book";
import CreateForm from "~/components/CreateForm";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Book Store in Remix js" },
    { name: "description", content: "Welcome to Book store!" },
  ];
};

export async function action({ request }: { request: any }) {
  const formData = await request.formData();
  const bookData = Object.fromEntries(formData);
  await createBook(bookData);
  return redirect("/books");
}

export default function Index() {
  return (
    <div className="books container-fluid">
      <h1 className="text-center mt-3">Book Store</h1>
      <Link to="/books">View books</Link>
      <CreateForm />
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

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
    },
  ];
};
