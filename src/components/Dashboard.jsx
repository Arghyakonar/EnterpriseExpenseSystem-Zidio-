import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const monthlyExpensesData = [500, 800, 1200, 1500, 2000];
  const categoryExpensesData = [30, 40, 30];

  const TotalExpenses = ({ amount }) => {
    return (
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Total Expenses</h2>
        <p style={styles.cardAmount}>${amount}</p>
      </div>
    );
  };

  const PendingApprovals = ({ amount }) => {
    return (
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Pending Approvals</h2>
        <p style={styles.cardAmount}>${amount}</p>
      </div>
    );
  };

  const MonthlyExpensesChart = ({ data }) => {
    const chartData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          label: "Monthly Expenses",
          data: data,
          backgroundColor: "#63B3ED",
        },
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Monthly Expenses",
        },
      },
    };

    return <Bar options={options} data={chartData} />;
  };

  const ExpensesByCategoryChart = ({ data }) => {
    const chartData = {
      labels: ["Travel", "Food", "Supplies"],
      datasets: [
        {
          label: "Expenses by Category",
          data: data,
          backgroundColor: ["#F6AD55", "#48BB78", "#E53E3E"],
          hoverOffset: 4,
        },
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "right",
        },
        title: {
          display: true,
          text: "Expenses by Category",
        },
      },
    };

    return <Pie data={chartData} options={options} />;
  };

  return (
    <div style={styles.container}>
      <div style={styles.topCards}>
        <TotalExpenses amount={5000} />
        <PendingApprovals amount={1200} />
      </div>
      <div style={styles.chartsContainer}>
        <div style={styles.chart}>
          <MonthlyExpensesChart data={monthlyExpensesData} />
        </div>
        <div style={styles.pieChart}>
          <ExpensesByCategoryChart data={categoryExpensesData} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "sans-serif",
  },
  topCards: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  card: {
    border: "1px solid #E2E8F0",
    borderRadius: "8px",
    padding: "20px",
    width: "48%",
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
    marginBottom: "10px",
  },
  cardAmount: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  chartsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chart: {
    width: "40%",
    border: "1px solid #E2E8F0",
    borderRadius: "8px",
    padding: "20px",
  },
  pieChart: {
    width: "40%",
    border: "1px solid #E2E8F0",
    borderRadius: "8px",
    padding: "20px",
  },
};

export default Dashboard;