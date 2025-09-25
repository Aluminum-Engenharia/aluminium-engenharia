import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Quote from './pages/quote/Quote';

function App() {
  useEffect(() => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
      || window.innerWidth <= 768
      || window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      document.documentElement.style.setProperty("--navbar-visibility", "flex");
    }

    const onScroll = () => {
      if (isMobile) return;

      if (window.scrollY > (window.screen.height - 140)) {
        document.documentElement.style.setProperty("--navbar-visibility", "flex");
      } else {
        document.documentElement.style.setProperty("--navbar-visibility", "none");
      }
    }

    window.addEventListener("scroll", onScroll);

    const timeout = setTimeout(() => {
      const animates = document.querySelectorAll(".animate");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add("go");
            // observer.unobserve(entry.target); // se quiser rodar apenas uma vez
          }
        });
      });
      animates.forEach(animate => observer.observe(animate));
    }, 1000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeout);
    }
  }, []);

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quote" element={<Quote />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
       {/* rota "coringa" para qualquer caminho não encontrado */}
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>

  )
}

export default App
