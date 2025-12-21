import axios from "axios";

const API_URL = "https://6874ce63dd06792b9c954fc7.mockapi.io/api/v1/users";

export const fetchUsers = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};
