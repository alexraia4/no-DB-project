import './reset.css';
import './App.css';
import Header from './components/Header.js';
import NewOrder from './components/NewOrder.js';
import AllOrders from './components/AllOrders.js';
import Footer from './components/Footer.js';
  


function App() {
  return (
    <div className = "wholePage">
      <Header />  
      <NewOrder />
      <AllOrders />
      <Footer />    
    </div>
  );
}

export default App;
