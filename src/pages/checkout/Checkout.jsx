import React from "react";
import { Link } from "react-router-dom";
const Checkout = () => {
	return (
		<>
			<div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
				<div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
					<div className="relative">
						<div className="absolute">
							<div className="">
							<h1 className="my-4 text-gray-800 font-bold text-4xl">
      Hurry! Your order is done.
    </h1>
    <p className="my-2 text-gray-800 text-lg">
      Don't worry, we provide cash on delivery. You pay when you're satisfied with our product.
    </p>

								<Link to="/">
									<button className="btn btn-primary animate__animated animate__jello animate__infinite">Take me there</button>
								</Link>
							</div>
						</div>
						<div>
							<img src="https://i.gifer.com/6ob.gif"/>
						</div>
					</div>
				</div>
				<div>
				<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="200"
    height="200"
    className="animate__animated animate__wobble animate__swing animate__infinite"
  >
    <circle cx="256" cy="256" r="256" fill="#4caf50" />
    <path
      fill="#fff"
      d="M387.435 157.61l-22.297-22.297c-5.858-5.858-15.355-5.858-21.213 0L222.5 268.286l-74.242-74.243c-5.858-5.858-15.355-5.858-21.213 0l-22.297 22.297c-5.858 5.858-5.858 15.355 0 21.213l96.157 96.157c5.858 5.858 15.355 5.858 21.213 0l185.786-185.786c5.857-5.858 5.857-15.355-.001-21.213zM256 490.286c-124.617 0-226.286-101.669-226.286-226.286S131.383 37.714 256 37.714 482.286 139.383 482.286 264 380.617 490.286 256 490.286z"
    />
  </svg>
				</div>
			</div>
		</>
	);
};

export default Checkout;




// import React, { useState, useEffect } from "react";
// import Loader from "../../components/loader/Loader";
// import { CheckoutForm } from "../../components";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import "./stripe.css";
// // Make sure to call loadStripe outside of a component’s render to avoid
// // recreating the Stripe object on every render.
// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
// //Redux
// import { useSelector, useDispatch } from "react-redux";
// import { calculateSubtotal, calculateTotalQuantity } from "../../redux/slice/cartSlice";
// import { formatPrice } from "../../utils/formatPrice";

// const Checkout = () => {
// 	// Redux states
// 	const { cartItems, totalQuantity, totalAmount } = useSelector((store) => store.cart);
// 	const { shippingAddress, billingAddress } = useSelector((store) => store.checkout);
// 	const { email } = useSelector((store) => store.auth);
// 	const dispatch = useDispatch();
// 	useEffect(() => {
// 		dispatch(calculateSubtotal());
// 		dispatch(calculateTotalQuantity());
// 	}, [dispatch, cartItems]);

// 	// local States
// 	const [clientSecret, setClientSecret] = useState("");

// 	const description = `Payment of ${formatPrice(totalAmount)} from ${email}`;
// 	useEffect(() => {
// 		// Create PaymentIntent as soon as the page loads
// 		fetch("https://ecom-stripe-server.onrender.com/create-payment-intent", {
// 			method: "POST",
// 			headers: { "Content-Type": "application/json" },
// 			body: JSON.stringify({
// 				items: cartItems,
// 				userEmail: email,
// 				shippingAddress,
// 				billingAddress,
// 				description,
// 			}),
// 		})
// 			.then((res) => res.json())
// 			.then((data) => setClientSecret(data.clientSecret));
// 	}, []);

// 	const appearance = {
// 		theme: "stripe",
// 	};
// 	const options = {
// 		clientSecret,
// 		appearance,
// 	};
// 	return (
// 		<main>
// 			{/* {!clientSecret && <h3 className="text-2xl text-red-500">{message} </h3>} */}
// 			{!clientSecret && <Loader />}
// 			<div>
// 				{clientSecret && (
// 					<Elements options={options} stripe={stripePromise}>
// 						<CheckoutForm />
// 					</Elements>
// 				)}
// 			</div>
// 		</main>
// 	);
// };

// export default Checkout;
