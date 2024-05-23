import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function getBooks() {
  return prisma.book.findMany();
}

export function getBookById(id) {
  return prisma.book.findUnique({
    where: { id: parseInt(id) },
  });
}

export function createBook(book) {
  return prisma.book.create({ data: book });
}

export function updateBook(id, book) {
  return prisma.book.update({
    where: { id: parseInt(id) },
    data: book,
  });
}

export function deleteBook(id) {
  return prisma.book.delete({
    where: { id: parseInt(id) },
  });
}
