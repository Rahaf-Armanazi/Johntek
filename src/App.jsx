import Header from './components/Header/Header';
import Home from './pages/Home/Home'; // استيراد المكون
import './App.css';

export default function App() {

  return (
    <div >
      {/* <h1>رسم دالة الجيب باستخدام React</h1> */}
      <Home />
      <Header/>
    </div>
  );
};
