import './App.css';
import db from '../graphqlproject/db.ts';

function App() {
  return (
    <div>
      <header>
        <h1><span className="heading-for-fun">Very Unnofficial </span>Carbon Emissions Disclosures Database</h1>
        <p>Made with TypeScript, React and GraphQL.</p>
      </header>
      <section>
          <p>Another project you may like: <a href="https://awesun-solar-visualiser.vercel.app/" target="_blank" rel="noopener noreferrer">Awesun Solar Visualizer</a>.</p>
        </section>
      <main>

        <section>
          <h2>Company Details</h2>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Disclosures</th>
              </tr>
            </thead>
            <tbody>
              {db.company.map(company => (
                <tr key={company.id}>
                  <td>{company.title}</td>
                  <td>{company.disclosure.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section>
          <h2>Agency Information</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>metricspublicallyavailable</th>
              </tr>
            </thead>
            <tbody>
              {db.agency.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.metricspublicallyavailable ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2>Score Data</h2>
          <table>
            <thead>
              <tr>
                <th>Rating Agency</th>
                <th>Rating</th>
                <th>Content</th>
                <th>Date</th>

              </tr>
            </thead>
            <tbody>
              {db.score.map(review => {
                const agency = db.agency.find(agency => agency.id === review.agency_id);

                return (
                  <tr key={review.id}>
                    <td>{agency ? agency.name : 'Unknown Agency'}</td>
                    <td>{review.rating}/10</td>
                    <td>{review.content}</td>
                    <td>{review.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default App;