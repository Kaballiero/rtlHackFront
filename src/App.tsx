import {
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import styles from './App.module.scss';
import Main from './page/Main/Main';

function App() {
  return (
    <div className={styles.App}>
     <Routes>
        <Route path="*" Component={Main}/>
     </Routes>
    </div>
  );
}

export default App;
