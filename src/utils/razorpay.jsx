// export const loadRazorpay = (src = "https://checkout.razorpay.com/v1/checkout.js") => {
//   return new Promise((resolve) => {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = () => resolve(true);
//     script.onerror = () => resolve(false);
//     document.body.appendChild(script);
//   });
// };

// export const openRazorpayPayment = async ({ amount, name, description, onSuccess }) => {
//   const loaded = await loadRazorpay();
//   if (!loaded) return alert("Razorpay SDK failed to load.");

//   const options = {
//     key: import.meta.env.VITE_RAZORPAY_KEY,
//     amount: amount * 100, // in paisa
//     currency: "INR",
//     name: "TravelSun",
//     description,
//     image: "/logo.png",
//     handler: function (response) {
//       const bookingDetails = {
//         orderId: response.razorpay_payment_id,
//         name,
//         amount,
//         date: new Date().toLocaleString(),
//       };
//       localStorage.setItem("lastBooking", JSON.stringify(bookingDetails));
//       onSuccess(bookingDetails);
//     },
//     theme: { color: "#14b8a6" },
//   };

//   const paymentObject = new window.Razorpay(options);
//   paymentObject.open();
// };


export const loadRazorpay = (src = "https://checkout.razorpay.com/v1/checkout.js") => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
};

export const openRazorpayPayment = async ({ amount, name, description, onSuccess }) => {
    const loaded = await loadRazorpay();
    if (!loaded) return alert("Razorpay SDK failed to load.");

    const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: amount * 100, // in paisa
        currency: "INR",
        name: "TravelSun",
        description,
        image: "/logo.png",
        handler: function (response) {
            const bookingDetails = {
                orderId: response.razorpay_payment_id,
                name,
                amount,
                date: new Date().toLocaleString(),
            };
            localStorage.setItem("lastBooking", JSON.stringify(bookingDetails));
            onSuccess(bookingDetails);
        },
        theme: { color: "#14b8a6" },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
};
