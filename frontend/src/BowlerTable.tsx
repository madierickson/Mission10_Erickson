import { useEffect, useState } from 'react';

interface Bowler {
  bowlerID: number;
  bowlerFirstName: string;
  bowlerMiddleInit?: string;
  bowlerLastName: string;
  bowlerAddress?: string;
  bowlerCity?: string;
  bowlerState?: string;
  bowlerZip?: string;
  bowlerPhoneNumber?: string;
  team: {
    teamName: string;
  };
}

const BowlersTable = () => {
  const [bowlers, setBowlers] = useState<Bowler[]>([]);

  useEffect(() => {
    fetch('http://localhost:5121/api/bowlers') // Adjust if using a different port
      .then((response) => response.json())
      .then((data) => {
        // Filter for only Marlins and Sharks teams
        const filteredBowlers = data.filter(
          (b: Bowler) =>
            b.team.teamName === 'Marlins' || b.team.teamName === 'Sharks'
        );
        setBowlers(filteredBowlers);
      })
      .catch((error) => console.error('Error fetching bowlers:', error));
  }, []);

  return (
    <div>
      <h2>Bowlers List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((b) => (
            <tr key={b.bowlerID}>
              <td>{`${b.bowlerFirstName} ${b.bowlerMiddleInit ?? ''} ${b.bowlerLastName}`}</td>
              <td>{b.team.teamName}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BowlersTable;
