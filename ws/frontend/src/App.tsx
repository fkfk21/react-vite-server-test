import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '@/app/page';
import Test from '@/app/test/page';
import NotFoundPage from '@/component/not_found';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<Test />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
