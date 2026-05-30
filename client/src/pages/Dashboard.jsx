import "./Dashboard.css";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>
          Welcome, <span>{user?.name}</span> 👋
        </h1>

        <p>
          Continue your placement preparation journey with AI-powered tools.
        </p>
      </div>

      <div className="cards-container">
        <div className="card">
          <div className="card-icon">🎤</div>
          <h3>Mock Interview</h3>
          <p>
            Practice real interview questions with AI-generated feedback.
          </p>
          <button>Start Interview</button>
        </div>

        <div className="card">
          <div className="card-icon">📄</div>
          <h3>Resume Analyzer</h3>
          <p>
            Upload your resume and get instant AI suggestions.
          </p>
          <button>Analyze Resume</button>
        </div>

        <div className="card">
          <div className="card-icon">🧠</div>
          <h3>Aptitude Tests</h3>
          <p>
            Improve logical reasoning, aptitude and verbal skills.
          </p>
          <button>Start Test</button>
        </div>

        <div className="card">
          <div className="card-icon">📊</div>
          <h3>Interview History</h3>
          <p>
            Track your performance and review previous interviews.
          </p>
          <button>View History</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;