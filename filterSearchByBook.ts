interface Book {
  description?: string;
  id?: number;
  name: string;
}

interface TranslatedBook extends Book {
  language: string;
}

const book1: TranslatedBook = {
  description:
    "A tale with two different ideals filled with opposing symmetry",
  id: 1,
  name: "Tale of Two Cities",
  language: "en"
};

function filterSearchByBook(input: Array<Book>, searchTerm: string) {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!input.length) throw Error("input cannot be empty");

  const regex = new RegExp(searchTerm, "i");

  return input.filter(function(arrayElement) {
    return arrayElement.name.match(regex);
  });
}

const obj1: Book = { name: "Tales of Two Cities" };
const obj2: Book = { name: "The Hatchet" };
const obj3: Book = { name: "The Giver" };

const arrOfLinks: Array<Book> = [obj1, obj2, obj3];

const term: string = "The Giver";

filterSearchByBook(arrOfLinks, term);