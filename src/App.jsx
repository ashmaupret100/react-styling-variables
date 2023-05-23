import "./App.css";

function App() {
  const bookHeading = "Your Books";
  const book1 = [" Kafka On The Shore ", "Murakami "];
  const book2 = ["Siddhartha ", "Hermann Hesse"];
  const book3 = ["The Cather In The Rye", "J.D. Salinger"];
  return (
    <>
      <header>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </header>
      <main>
        <h1>{bookHeading}</h1>
        <div className="book-wrapper">
          <div className="book-box">
            <div className="book-image">
              <img
                src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fscadconnector.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fkafka2.jpeg&tbnid=YBhHtoAQrSULmM&vet=12ahUKEwi73oaQwor_AhUmJGIAHStyBoMQMygPegUIARCcAg..i&imgrefurl=https%3A%2F%2Fscadconnector.com%2F2021%2F04%2F21%2Fstuff-you-should-read-kafka-on-the-shore-by-haruki-murakami%2F&docid=gMIHm762s3yLkM&w=1024&h=768&q=kafka%20on%20the%20shore&ved=2ahUKEwi73oaQwor_AhUmJGIAHStyBoMQMygPegUIARCcAg"
                alt=""
              />
            </div>
            Name: {book1[0]}
            Author: {book1[1]}
          </div>
          <div className="book-box">
            <div className="book-image">
              <img
                src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fscadconnector.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fkafka2.jpeg&tbnid=YBhHtoAQrSULmM&vet=12ahUKEwi73oaQwor_AhUmJGIAHStyBoMQMygPegUIARCcAg..i&imgrefurl=https%3A%2F%2Fscadconnector.com%2F2021%2F04%2F21%2Fstuff-you-should-read-kafka-on-the-shore-by-haruki-murakami%2F&docid=gMIHm762s3yLkM&w=1024&h=768&q=kafka%20on%20the%20shore&ved=2ahUKEwi73oaQwor_AhUmJGIAHStyBoMQMygPegUIARCcAg"
                alt=""
              />
            </div>
            Name: {book2[0]}
            Author: {book2[1]}
          </div>
          <div className="book-box">
            <div className="book-image">
              <img
                src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fscadconnector.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fkafka2.jpeg&tbnid=YBhHtoAQrSULmM&vet=12ahUKEwi73oaQwor_AhUmJGIAHStyBoMQMygPegUIARCcAg..i&imgrefurl=https%3A%2F%2Fscadconnector.com%2F2021%2F04%2F21%2Fstuff-you-should-read-kafka-on-the-shore-by-haruki-murakami%2F&docid=gMIHm762s3yLkM&w=1024&h=768&q=kafka%20on%20the%20shore&ved=2ahUKEwi73oaQwor_AhUmJGIAHStyBoMQMygPegUIARCcAg"
                alt=""
              />
            </div>
            Name: {book3[0]}
            Author: {book3[1]}
          </div>
        </div>
        <button>Add Books</button>
      </main>
      <footer>
        <ul>
          <li>Privacy Policy</li>
          <li>Liscense and Terms </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
