import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const ExpenseView = ({ type, data }) => {
  return (
    <Box
      flex={1}
      w={"full"}
      background={"gray.100"}
      mr={"4"}
      mt={"4"}
      mb={"8"}
      p={"5"}
      border={"1px solid"}
      pb={"4"}
      borderColor={"gray.200"}
      borderRadius={"12"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading
          size={"md"}
          color={type === "income" ? "green.400" : "red.400"}
        >
          {type === "income" ? "Income" : "Expense"}
        </Heading>
      </Flex>
      {data.map((item) => (
        <div key={item.id}>
          <Flex
            bg={item.type === "income" ? "blue.50" : "red.50"}
            mt={"4"}
            justifyContent={"space-between"}
            alignItems={"center"}
            border={"1px solid"}
            borderColor={item.type === "income" ? "blue.100" : "red.100"}
            p={"4"}
            borderRadius={"8"}
          >
            <Flex alignItems={"center"} justifyContent={"center"}>
              <Text ml={"3"} fontWeight={"bold"} color={"gray.600"}>
                {item.description}
              </Text>
            </Flex>
            <Text>{item.amount}</Text>
          </Flex>
        </div>
      ))}
    </Box>
  );
};

export default ExpenseView;
