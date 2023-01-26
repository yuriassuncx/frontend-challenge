import { Basket } from "./components/Basket";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex justify-end">
        <Header />
      </div>
      <Main />
      <Footer />
      <Basket />
    </div>
  )
}

