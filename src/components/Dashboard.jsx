import React, { useState } from "react";
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

  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    description: "",
    amount: "",
    category: "",
    status: "pending",
  });

  const handleInputChange = (e) => {
    setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    setExpenses([...expenses, newExpense]);
    setNewExpense({ description: "", amount: "", category: "", status: "pending" });
  };

  const handleApprove = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index].status = "approved";
    setExpenses(updatedExpenses);
  };

  const handleReject = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index].status = "rejected";
    setExpenses(updatedExpenses);
  };

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
        <PendingApprovals amount={expenses.filter((exp) => exp.status === "pending").length} />
      </div>
      <div style={styles.chartsContainer}>
        <div style={styles.chart}>
          <MonthlyExpensesChart data={monthlyExpensesData} />
        </div>
        <div style={styles.pieChart}>
          <ExpensesByCategoryChart data={categoryExpensesData} />
        </div>
      </div>

      <div style={styles.expenseForm}>
        <h2>Submit Expense</h2>
        <form onSubmit={handleExpenseSubmit}>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newExpense.description}
            onChange={handleInputChange}
            style={styles.input}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={newExpense.amount}
            onChange={handleInputChange}
            style={styles.input}
          />
          <select
            name="category"
            value={newExpense.category}
            onChange={handleInputChange}
            style={styles.input}
          >
            <option value="">Select Category</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
            <option value="Supplies">Supplies</option>
          </select>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>

      <div style={styles.expenseList}>
        <h2>Expense Approvals</h2>
        {expenses.map((expense, index) => (
          <div key={index} style={styles.expenseItem}>
            <p>Description: {expense.description}</p>
            <p>Amount: ${expense.amount}</p>
            <p>Category: {expense.category}</p>
            <p>Status: {expense.status}</p>
            {expense.status === "pending" && (
              <div>
                <button onClick={() => handleApprove(index)} style={styles.approveButton}>Approve</button>
                <button onClick={() => handleReject(index)} style={styles.rejectButton}>Reject</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  // ... (previous styles)
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

  expenseForm: {
    marginTop: "20px",
    border: "1px solid #E2E8F0",
    borderRadius: "8px",
    padding: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #E2E8F0",
    borderRadius: "4px",
  },
  button: {
    backgroundColor: "#48BB78",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  expenseList: {
    marginTop: "20px",
    border: "1px solid #E2E8F0",
    borderRadius: "8px",
    padding: "20px",
  },
  expenseItem: {
    borderBottom: "1px solid #E2E8F0",
    padding: "10px",
  },
  approveButton: {
    backgroundColor: "green",
    color: "white",
    padding: "5px 10px",
    marginRight: "5px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  rejectButton: {
    backgroundColor: "red",
    color: "white",
    padding: "5px 10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Dashboard;