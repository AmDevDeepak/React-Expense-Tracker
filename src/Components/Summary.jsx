import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import AddTransaction from "./AddTransaction";
import ChartComponent from "./Chart";

const Summary = ({ isOpen, onClose, totalExpense, totalIncome }) => {
  return (
    <Box
      p={"6"}
      border={"1px solid"}
      borderColor={"gray.100"}
      overflow={"hidden"}
      borderRadius={"10"}
      background={"gray.100"}
      display={"flex"}
      mt={"3"}
    >
      <Flex
        w={"full"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <Flex
          flex={1}
          w={"full"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          ml={"-20"}
          mr={"2"}
          mt={"5"}
        >
          <Heading size={"md"} mb={"4"} color={"gray.600"}>
            Balance is {totalIncome - totalExpense}
          </Heading>
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.300"}
            borderRadius={"8"}
            w={"full"}
            border={"1px solid"}
            borderColor={"gray.100"}
            padding={"4"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"gray.700"}>&#8377; {totalIncome}</Heading>
              <Text color={"gray.600"}>Total Income</Text>
            </Flex>
          </Flex>
          <Flex
            padding={"4"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            w={"full"}
            borderRadius={"8"}
            bg={"gray.200"}
            border={"1px solid"}
            borderColor={"gray.100"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"gray.700"}>&#8377; {totalExpense}</Heading>
              <Text color={"gray.600"}>Total Expense</Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          flex={1}
          mt={"10"}
          ml={"-90px"}
          mr={"5"}
          width={"300px"}
          height={"300px"}
          display={"felx"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {/* <Heading> */}
          <ChartComponent expense={totalExpense} income={totalIncome} />
          {/* </Heading> */}
        </Box>
      </Flex>
      <AddTransaction onClose={onClose} isOpen={isOpen} />
    </Box>
  );
};

export default Summary;
