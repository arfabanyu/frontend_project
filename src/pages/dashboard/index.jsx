import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Card from "../components/card";
import TransactionList from "../components/transactionList";
import NotificationCard from "../components/notificationCard";
import React from "react";
import { FaMoneyBillWave, FaArrowDown, FaArrowUp } from "react-icons/fa";

const Dashboard = () => {
  const transactions = [
    { id: 1, description: "Salary", amount: 5000 },
    { id: 2, description: "Rent", amount: -1200 },
    { id: 3, description: "Freelance", amount: 800 },
    { id: 4, description: "Groceries", amount: -150 },
    { id: 5, description: "Investment", amount: 1200 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        {/* Ringkasan Keuangan */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.05 }} className="shadow-lg">
            <Card title="Income" amount={5000} icon={<FaArrowUp className="text-white text-2xl" />} color="bg-green-500" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="shadow-lg">
            <Card title="Expense" amount={1200} icon={<FaArrowDown className="text-white text-2xl" />} color="bg-red-500" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="shadow-lg">
            <Card title="Balance" amount={3800} icon={<FaMoneyBillWave className="text-white text-2xl" />} color="bg-blue-500" />
          </motion.div>
        </div>

        {/* Transaksi & Grafik */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Daftar Transaksi */}
          <motion.div className="bg-white p-5 rounded-lg shadow-lg h-[300px] overflow-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <h3 className="text-lg font-bold text-gray-700 mb-4">Recent Transactions</h3>
            <TransactionList transactions={transactions} />
          </motion.div>

          {/* Placeholder Grafik */}
          <motion.div className="bg-white p-5 rounded-lg shadow-lg flex items-center justify-center min-h-[300px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
            <p className="text-gray-500">[Chart Placeholder]</p>
          </motion.div>
        </div>

        {/* Notifikasi */}
        <motion.div className="p-6" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
          <NotificationCard message="New transaction added!" type="success" />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
