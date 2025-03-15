import React, { useEffect, useState } from 'react';
import './App.css';
import BowlerTable from './BowlerTable'; // Import the BowlerTable component
import Header from './header'; // Import the Header component


const App: React.FC = () => {
  // State to hold the list of bowlers
  const [bowlers, setBowlers] = useState<any[]>([]);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchBowlers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/bowlers'); // Adjust the backend API URL
        const data = await response.json();
        setBowlers(data); // Set the data to the state
      } catch (error) {
        console.error('Error fetching bowler data:', error);
      }
    };

    fetchBowlers();
  }, []);

  return (
    <div className="App">
      <Header /> {/* Render the Header component */}
      <BowlerTable bowlers={bowlers} /> {/* Render the BowlerTable component */}
    </div>
  );
};

export default App;
