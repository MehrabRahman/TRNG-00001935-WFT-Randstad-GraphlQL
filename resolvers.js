const books = [
    {
        title: "Fellowship of the Ring",
        author: "J.R.R. Tolkein"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkein"
    }
]

const resolvers = {
    Query: {
        books: () => books
    },
};

export default resolvers;