import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Nav Bar */}
      <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">ExpenseWise</h1>
          <ul className="flex space-x-4">
            <li>
              <Link to="/login" className="text-gray-700 hover:text-indigo-600">
                Login
              </Link>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-indigo-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-indigo-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-indigo-50 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-indigo-800 mb-4">
            Streamline Your Enterprise Expenses
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Take control of your spending with our powerful expense management
            system. Simplify tracking, approval, and reporting, all in one
            place.
          </p>
          {/* <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 text-xl">
            Request a Demo
          </button> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-indigo-800 mb-8 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard title="Real-time Tracking" description="Monitor expenses as they happen with our intuitive dashboard." />
            <FeatureCard title="Automated Reporting" description="Generate detailed expense reports effortlessly." />
            <FeatureCard title="Approval Workflows" description="Streamline expense approvals with customizable workflows." />
          </div>
        </div>
      </section>

      <section className="bg-indigo-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">
            Ready to Transform Your Expense Management?
          </h2>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 text-xl">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 text-center text-white">
        <p>&copy; {new Date().getFullYear()} ExpenseWise. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Component for reusable feature cards
const FeatureCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-indigo-800 mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);


export default Homepage;