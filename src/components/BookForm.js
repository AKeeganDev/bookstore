const BookForm = () => (
  <form action="submit">
    <label htmlFor="title">
      <input type="text" name="title" id="title" placeholder="Add Title..." />
    </label>
    <label htmlFor="title">
      <input type="text" name="author" id="author" placeholder="Add Author..." />
    </label>
    <button onClick={(e) => { e.preventDefault(); }} type="submit">Add Book</button>
  </form>
);

export default BookForm;
