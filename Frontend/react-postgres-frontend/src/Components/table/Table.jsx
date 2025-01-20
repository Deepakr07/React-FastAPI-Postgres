import "./table.css";
import { Element } from 'react-scroll';
import { useQuery } from 'react-query';

export default function TableSection({ selectedId }) {
  // Fetch data with dynamic selectedId in the URL
  async function fetchCultivatorDetails() {
    const response = await fetch(`http://127.0.0.1:8000/cultivator/farmer-company-cultivators/${selectedId}?id=${selectedId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch options');
    }
    return response.json();
  }

  // Add dynamic query key that includes selectedId to refetch on changes
  const { data, error, isLoading } = useQuery(
    ['cultivatorDetails', selectedId], // Dynamic query key
    fetchCultivatorDetails,
    { enabled: !!selectedId } // Prevent query from running if no selectedId
  );

  // Loading and error handling
  if (isLoading) return <div>Loading cultivator details...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Debugging: log data to check its structure
  console.log("Fetched data: ", data);

  // Handle cases where data is not an array or is empty
  if (!data || !Array.isArray(data.data) || data.data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <Element name="tablesection">
      <div className="table-section">
        <p className="hero-text">
          Cultivator<span className="cultivator-text">Details</span>
        </p>
        <div className="table-container">
          <table border={1}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Company ID</th>
                <th>Name</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((option) => (
                <tr key={option.id}>
                  <td>{option.id}</td>
                  <td>{option.company_id}</td>
                  <td>{option.name}</td>
                  <td>{option.active ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Element>
  );
}
