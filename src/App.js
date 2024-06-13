import { BrowserRouter as Router } from "react-router-dom";
import { AppLayout } from "./App.style";
import { GlobalStyle } from "./GlobalStyle.style";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRoutes from "./components/routes/Routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <AppLayout>
          <Header />

          <AppRoutes />

          <Footer />
        </AppLayout>
      </Router>
    </>
  );
}

export default App;
