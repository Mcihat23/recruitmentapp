import axios from "axios";

export function fetchUsers() {
  return (dispatch) => {
    dispatch({
      type: "FETCH_USERS",
      payload: axios
        .get(`https://recruitbackend.herokuapp.com/v2/posts`)
        .then((res) => res.data),
    });
  };
}
