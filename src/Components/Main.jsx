import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import Summary from "./Summary";
import ExpenseView from "./ExpenseView";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../Context";
const Main = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    totalExpense,
    setTotalExpense,
    setTotalIncome,
    totalIncome,
    allTransactions,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransactions.forEach((transaction) => {
      transaction.type === "income"
        ? (income = income + parseFloat(transaction.amount))
        : (expense = expense + parseFloat(transaction.amount));
    });
    setTotalExpense(expense);
    setTotalIncome(income);
  }, [allTransactions]);

  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex textAlign={"center"} justifyContent={"space-between"} mt={"5"}>
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          My Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button
            _hover={{ bg: "blue.600" }}
            bg={"blue.400"}
            color={"white"}
            ml={"4"}
            onClick={onOpen}
          >
            Add New Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary
        isOpen={isOpen}
        onClose={onClose}
        totalExpense={totalExpense}
        totalIncome={totalIncome}
      />
      <Flex
        width={"full"}
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <ExpenseView
          data={allTransactions.filter((item) => item.type === "expense")}
          type="expense"
        />
        <ExpenseView
          data={allTransactions.filter((item) => item.type === "income")}
          type="income"
        />
      </Flex>
    </Flex>
  );
};

export default Main;
