import "@/styles/globals.css";
import "regenerator-runtime/runtime";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "@/Store";
import React from "react";
import { Router } from "next/router";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		const start = () => {
			setLoading(true);
		};
		const end = () => {
			setLoading(false);
		};
		Router.events.on("routeChangeStart", start);
		Router.events.on("routeChangeComplete", end);
		Router.events.on("routeChangeError", end);
		return () => {
			Router.events.off("routeChangeStart", start);
			Router.events.off("routeChangeComplete", end);
			Router.events.off("routeChangeError", end);
		};
	}, []);

	const toasterOpt = {
		style: {
			padding: "10px",
			color: "#FFFF",
			backgroundColor: "#E43023",
		},
		duration: 1500,
	};

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
					{<Component {...pageProps} loading={loading} />}
					<Toaster toastOptions={toasterOpt} position="bottom-center" />
				</AnimatePresence>
			</PersistGate>
		</Provider>
	);
}
