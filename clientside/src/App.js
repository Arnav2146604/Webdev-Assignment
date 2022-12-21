import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import StudentPage from './components/student';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TeacherPage from './components/teacher';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentPage/>}/>
          <Route path="/teacher" element={<TeacherPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
