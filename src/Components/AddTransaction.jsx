import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../Context/index";

const AddTransaction = ({ isOpen, onClose }) => {
  const { formData, setFormData, value, setValue, handleFormSubmit } =
    useContext(GlobalContext);

  const handleFormChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody display={"flex"} flexDirection={"column"} gap={"4"}>
            <FormControl>
              <FormLabel>Enter Description</FormLabel>
              <Input
                type="text"
                placeholder="Enter transaction description"
                name="description"
                onChange={handleFormChange}
                autoComplete="off"
                spellCheck="false"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter Amount</FormLabel>
              <Input
                type="number"
                placeholder="Enter transaction amount"
                name="amount"
                onChange={handleFormChange}
              />
            </FormControl>
            <RadioGroup mt={"5"} value={value} onChange={setValue}>
              <Radio
                checked={formData.type === "income"}
                colorScheme="blue"
                name="type"
                onChange={handleFormChange}
                value="income"
              >
                Income
              </Radio>
              <Radio
                checked={formData.type === "expense"}
                ml={"3"}
                onChange={handleFormChange}
                colorScheme="red"
                name="type"
                value="expense"
              >
                Expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              background={"red.500"}
              _hover={{
                background: "red.600",
              }}
              color={"gray.50"}
              mr={"4"}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              _hover={{
                background: "green.500",
              }}
              background={"green.400"}
              color={"gray.50"}
              type="submit"
              onClick={onClose}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default AddTransaction;
