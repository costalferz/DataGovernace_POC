import { axiosInstance } from "../../axiosInstance";

export const auth = async (username, password) => {
  return axiosInstance
    .post("/v1/auth/Ad/verify", {
      UserName: username,
      PassWord: password,
    })
    .then((response) => {
      if (response.status === 200) {
        // Router.replace("/scores");
        return response.data;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log("fetch error : ", err);
      return false;
    });
};

export const getStudentData = async (studentId) => {
  return axiosInstance
    .get("/v2/profile/std/info", {
      params: {
        id: studentId,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        // Router.replace("/scores");
        return response.data;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log("fetch error : ", err);
      return false;
    });
  // try {
  //   let result = await axios.get(
  //     `https://restapi.tu.ac.th/api/v2/profile/std/info/?id=${studentId}`,
  //     {
  //       headers: {
  // "Content-Type": "application/json",
  // "Application-Key": import.meta.env.VITE_TU_API_TOKEN,
  //       },
  //     }
  //   );
  //   return result.data;
  // } catch (err) {
  //   personalData.value.haveData = false;
  // }
};
