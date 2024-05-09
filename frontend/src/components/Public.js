import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Dan D. Repairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful Piasa City, Dan D. Repairs provides a trained
          staff ready to meet your tech repair needs.
        </p>
        <address className="public__addr">
          Dan D. Repairs
          <br />
          251 Piasa Drive
          <br />
          Piasa City, AA 1234
          <br />
          <a href="tel:+25155555555">(251) 555-5555</a>
        </address>
        <br />
        <p>Owner: Dan Dajach</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
