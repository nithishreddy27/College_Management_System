import axios from "axios";
import useSWR from "swr";
const fetcher = (url) => axios.get(url).then((res) => res.data.collegeDetails);
export const useColleges = (user) => {
  const { data, error } = useSWR(`/api/students`, fetcher);
  console.log("data",data)
  return {
    colleges: data,
    isLoading: !error && !data,
    isError: error,
  };
};
