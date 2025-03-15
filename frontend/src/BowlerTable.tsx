import { useEffect, useState } from 'react';

interface Bowler {
  bowlerID: number;
  bowlerFirstName: string;
  bowlerMiddleInit?: string;
  bowlerLastName: string;
  teamName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phoneNumber: string;
}

const BowlerTable = () => {
  const [bowlers, setBowlers] = useState<Bowler[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/bowlers') // Adjust based on backend port
      .then((response) => response.json())
      .then((data) => setBowlers(data));
  }, []);

  return (
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
            <td>
              {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
            </td>
            <td>{b.teamName}</td>
            <td>{b.address}</td>
            <td>{b.city}</td>
            <td>{b.state}</td>
            <td>{b.zip}</td>
            <td>{b.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BowlerTable;
