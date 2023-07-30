// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
function capitalizeAuthorName(authorName) {
    // Capitalize the author's name
    return authorName.charAt(0).toUpperCase() + authorName.slice(1);
}

function filterBooks(books) {
    // Filter out books published before 2010
    const filteredBooks = books.filter(book => book.publication_year >= 2010);
    //
    return filteredBooks;
}

function main() {
    // Sample list of books (replace with your own data)
    const books = [
        {
            title: 'Web_Development',
            author: 'Hitesh_Choudhary',
            publication_year: 2005
        },
        {
            title: 'Data_Science',
            author: 'Anurag_Sir',
            publication_year: 2015
        },
        {
            title: 'DSA',
            author: 'Akash',
            publication_year: 2012
        },
        {
            title: 'Networking',
            author: 'Sanket',
            publication_year: 2003
        }
    ];

    // Filter books published before 2010
    const filteredBooks = filterBooks(books);

    // Capitalize author names in the filtered books
    for (const book of filteredBooks) {
        book.author = capitalizeAuthorName(book.author);
    }

    // Print the final result
    console.log("Filtered Books:");
    for (const book of filteredBooks) {
        console.log(`Title: ${book.title}, Author: ${book.author}, Publication Year: ${book.publication_year}`);
    }
}

main();
