import axios from "axios";
import useSWR from "swr";
// const fetcher = (url) => axios.get(url).then((res) => res.data.collegeDetails);
export const useUsers = (user) => {
    console.log("user in users",user)
//   const { data, error } = useSWR(`/api/college/users/students`, fetcher);
//   console.log("data",data)
//   return {
//     colleges: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
return{ data : "one"}
};
