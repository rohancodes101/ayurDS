
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import NavBar from './components/NavBar';
// import KnowYourHealth from './components/KnowYourHealth';
// import HomePage from './components/HomePage';
// import Resources from './components/Resources';
// import HealthPrediction from './components/HealthPrediction';

// function App() {
//   return (
//     <Router>
//       <NavBar />
      
//       {/* Routing */}
//       <Routes>
//         {/* Main Page */}
//         <Route path="/" element={
//           <HomePage/>
//         } />
        
//         {/* KNOWN YOUR HEALTH Page */}
//         <Route path="/knowyourhealth" element={
//           <KnowYourHealth />
//         } />
//         <Route path="/resources" element={
//           <Resources />
//         } />
        
//         <Route path="/healthprediction" element={
//           <HealthPrediction />
//         } />
//       </Routes>
//     </Router>
//   );
// }

// export default App;











import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import KnowYourHealth from './components/KnowYourHealth';
import HomePage from './components/HomePage';
import Resources from './components/Resources';
import HealthPrediction from './components/HealthPrediction';
import KnowMyHealth from './components/KnowMyHealth';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/knowyourhealth" element={<KnowYourHealth />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/knowmyhealth" element={<KnowMyHealth />} />
      </Routes>
    </Router>
  );
}

export default App;
