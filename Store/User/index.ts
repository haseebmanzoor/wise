import { buildSlice } from "@thecodingmachine/redux-toolkit-wrapper";
import SetUserAction from "./SetUserAction";

const sliceInitialState = {
	user: null,
};

export default buildSlice("userr", [SetUserAction], sliceInitialState).reducer;
