import { useEffect, useState } from "react";
import { formatCurrency } from "../utils/exchange";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function TransactionHistory() {
  const [history, setHistory] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 5;
  
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  const navigate = useNavigate();


const mode = useSelector((state: RootState) => state.theme.mode)
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('conversions') || '[]');
    setHistory(stored);
    setFiltered(stored);
  }, []);

  useEffect(() => {
    if (!search) {
      setFiltered(history);
    } else {
      setFiltered(
        history.filter(
          (conv) =>
            conv.fromCurrency.toLowerCase().includes(search.toLowerCase()) ||
            conv.toCurrency.toLowerCase().includes(search.toLowerCase()) ||
            conv.amount.toString().includes(search) ||
            conv.result.toString().includes(search)
        )
      );
    }
  }, [search, history]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-5 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
      >
        ← Back to Converter
      </button>
      <h2 className={`text-3xl font-bold mb-6 text-gray-700 ${mode === "dark" ? "text-white" : "text-gray-700"}`}>Last 5 Conversions</h2>
      <input
        type="text"
        placeholder="Search by amount, currency, or result..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={`mb-6 w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            mode === "dark" ? "bg-gray-900 text-white placeholder-gray-400" : "bg-white text-gray-900 placeholder-gray-500"
        }`}
        />
      {filtered.length === 0 ? (
        <div className="text-gray-400 text-center">No conversions found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 bg-gray-100">Date</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 bg-gray-100">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 bg-gray-100">From</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 bg-gray-100">To</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 bg-gray-100">Result</th>
              </tr>
            </thead>
            <tbody>
                {paginated.map((conv, idx) => (
                    <tr key={idx} className="border-t border-gray-100 hover:bg-blue-50 transition">
                    <td className="px-6 py-4 text-xs text-gray-500">{new Date(conv.data).toLocaleString()}</td>
                    <td className="px-6 py-4 font-semibold text-blue-700">{conv.amount}</td>
                    <td className="px-6 py-4">{conv.fromCurrency}</td>
                    <td className="px-6 py-4">{conv.toCurrency}</td>
                    <td className="px-6 py-4 font-semibold text-green-700">{formatCurrency(conv.result)}</td>
                    </tr>
                ))}
            </tbody>
            
          </table>
            <div className="flex justify-center items-center gap-4 mt-4">
                <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
                >
                    Previous
                </button>
                <span className={`text-sm text-gray-600 ${mode === "dark" ? "text-white" : "text-gray-700"}`}>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
      )}
    </div>
  );
}