import Header from './components/header/Header';

const App = () => {
  const isAuth = false;
    if(isAuth){ 
        return <Header/>
    } 
    return (
        <h1>404 ошибка!</h1>
    )
};

export default App;
