// app.js

const App = () => {
    const [age, setAge] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [symptoms, setSymptoms] = React.useState('');
    const [recommendation, setRecommendation] = React.useState('');
  
    const handleRecommendation = () => {
      // Implement your recommendation algorithm here based on age, gender, symptoms, etc.
      // For simplicity, a basic recommendation is provided in this example.
      let basicRecommendation = 'You should consider a general health checkup.';
      
      setRecommendation(basicRecommendation);
    };
  
    return (
      <div className="app">
        <h1>Health Tech Test Recommendation System</h1>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="symptoms">Symptoms:</label>
          <textarea
            id="symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>
        <button onClick={handleRecommendation}>Get Recommendation</button>
        {recommendation && (
          <div className="recommendation">
            <h2>Recommendation:</h2>
            <p>{recommendation}</p>
          </div>
        )}
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById('root'));
  