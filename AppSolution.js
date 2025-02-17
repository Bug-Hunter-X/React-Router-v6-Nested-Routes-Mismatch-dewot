```javascript
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
          <Route path="/about/details" element={<AboutDetails/>}/>
        </Route>
        <Route path='*' element={<Navigate to ='/' replace/>}/>
      </Routes>
    </BrowserRouter>
  );
}

function Home(){
  return(
    <div>Home</div>
  );
}

function About(){
  return(
    <div>About</div>
  );
}

function AboutDetails(){
  return(
    <div>AboutDetails</div>
  );
}

export default App;
```