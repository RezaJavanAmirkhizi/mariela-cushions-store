const setUserInfo = (user) => {
	return {
		type: "SET_USER_INFO",
		payload: user,
	};
};

export default setUserInfo;
