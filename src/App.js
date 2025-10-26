import logo from './logo.svg';
import CounterApp from './quizcomponents/CounterApp';
import ProfileCard from './quizcomponents/ProfileCard';
import './App.css';


function App() {
  const styles = {
    appHeader: {
       backgroundColor: '#375695',
         minHeight: '100vh'
    }
  };
  return (
    <div className="App">
      
        <header style={styles.appHeader}>
        <CounterApp />
      <ProfileCard name="Wassam" age={21} profession="Student" />
        </header>
    </div>
  );
}

export default App;
