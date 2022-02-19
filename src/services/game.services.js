import { notification } from "antd";
import axios from "axios";

export const getBoard = (level) => {
  return axios
    .get(`https://sugoku.herokuapp.com/board?difficulty=${level}`)
    .then(({ data, status }) => {
      return data.board;
    })
    .catch((err) => {
      notification.error({
        message: "Error",
        description: "Something went wrong while getting board",
      });
    });
};

export const validateBoard = (board) => {
  return axios
    .post(`https://sugoku.herokuapp.com/validate`, board)
    .then(({ data, status }) => {
      return data.board;
    })
    .catch((err) => {
      notification.error({
        message: "Error",
        description: "Something went wrong while getting board",
      });
    });
};

export const solveBoard = (board) => {
  return axios
    .post(`https://sugoku.herokuapp.com/solve`, board)
    .then(({ data, status }) => {
      return data.board;
    })
    .catch((err) => {
      notification.error({
        message: "Error",
        description: "Something went wrong while getting board",
      });
    });
};
