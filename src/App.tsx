import AppRoutes from './components/AppRoutes/AppRoutes';
import Header from './components/Header/Header';



const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;