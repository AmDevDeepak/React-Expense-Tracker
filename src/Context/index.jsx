import { createContext, useState } from "react";

export const GlobalContext = createContext(null);
export const GlobalState = ({ children }) => {
  const [formData, setFormData] = useState({
    type: "income",
    amount: 0,
    description: "",
  });
  const [value, setValue] = useState("expense");
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransactions, setAllTransactions] = useState([]);

  const handleFormSubmit = (formData) => {
    if (
      formData.description.trim() === "" ||
      formData.amount === 0 ||
      !formData.amount
    ) {
      return;
    }
    setAllTransactions([...allTransactions, { ...formData, id: Date.now() }]);
  };

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        value,
        setValue,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        allTransactions,
        setAllTransactions,
        handleFormSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
