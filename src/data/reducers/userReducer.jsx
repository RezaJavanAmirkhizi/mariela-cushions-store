const userReducer = (user = [], action) => {
	if (action.type === "SET_USER_INFO") {
		return action.payload;
	} else {
		return user;
	}
};

export default userReducer;
