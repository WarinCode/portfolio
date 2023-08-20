// * import React
import { useState, useEffect } from "react"

// * import style
// import "/src/style/css/footer.css"
import "/src/style/scss/_footer.scss"

function Footer() {
  const [year, setYear] = useState(0);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
      <footer>
        <span className="footer-container">
          <p>&copy; Copyright {year}</p>
        </span>
      </footer>
  );
}

export default Footer;
