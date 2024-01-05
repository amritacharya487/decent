// src/components/Dashboard.js
import React from 'react';
import { Link, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import PatientsList from './PatientsList';
import PatientDetails from './PatientDetails';

const Dashboard = () => {
  return (
    <Router>
      <div>
        {/* Navigation links */}
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/patients">Patients</Link>
            </li>
          </ul>
        </nav>

        <hr />

        {/* Routes */}
        <Route exact path="/dashboard" component={Home} />
        <Route path="/dashboard/patients" component={Patients} />

        {/* Redirect to dashboard by default */}
        <Redirect from="/" to="/dashboard" />
      </div>
    </Router>
  );
};

const Home = () => (
  <div>
    <h2>Welcome to the Dashboard!</h2>
  </div>
);

const Patients = ({ match }) => (
  <div>
    <h2>Patients</h2>
    <Route exact path={match.path} component={PatientsList} />
    <Route path={`${match.path}/:patientId`} component={PatientDetails} />
  </div>
);

export default Dashboard;
