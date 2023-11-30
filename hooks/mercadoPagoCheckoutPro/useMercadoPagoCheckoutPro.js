import { useEffect } from "react";
import axios from "../../config/clienteAxios";

const useMercadoPagoCheckoutPro = () => {

    useEffect(() => {
        const mp = new window.MercadoPago("TEST-726aed4c-1ae0-46a7-944f-12d114435042");
        const cardForm = mp.cardForm({
            amount: "124",
            iframe: true,
            locale: "es",
            form: {
                id: "form-checkout",
                cardNumber: {
                    id: "form-checkout__cardNumber",
                    placeholder: "Número de tarjeta",
                },
                expirationDate: {
                    id: "form-checkout__expirationDate",
                    placeholder: "MM/YY",
                },
                securityCode: {
                    id: "form-checkout__securityCode",
                    placeholder: "Código de seguridad",
                },
                cardholderName: {
                    id: "form-checkout__cardholderName",
                    placeholder: "Titular de la tarjeta",
                },
                issuer: {
                    id: "form-checkout__issuer",
                    placeholder: "Banco emisor",
                },
                installments: {
                    id: "form-checkout__installments",
                    placeholder: "Parcialidades",
                },
                // identificationType: {
                //     id: "form-checkout__identificationType",
                //     placeholder: "Tipo de documento",
                // },
                // identificationNumber: {
                //     id: "form-checkout__identificationNumber",
                //     placeholder: "Número de documento",
                // },
                // cardholderEmail: {
                //     id: "form-checkout__cardholderEmail",
                //     placeholder: "E-mail",
                // },
            },
            callbacks: {
                onFormMounted: error => {
                    if (error) return console.warn("Form Mounted handling error: ", error);
                    console.log("Form mounted");
                },
                onSubmit: async event => {
                    try {
                        event.preventDefault();
                        const {
                            paymentMethodId: payment_method_id,
                            issuerId: issuer_id,
                            cardholderEmail: email,
                            amount,
                            token,
                            // installments,
                            // identificationNumber,
                            // identificationType,
                        } = cardForm.getCardFormData();

                        const response = await axios.post('/api/activeMemberships/paymentTest', {
                            userId: "65359bf7890925d3cb8b2871",
                            membershipId: "651896b1ca27f707a7fd598c",
                            token,
                            issuer_id,
                            payment_method_id,
                            transaction_amount: Number(amount),
                            installments: 1,
                            description: "Pago de membresia",
                            payer: {
                                email,
                                identification: {
                                    type: "", //identificationType
                                    number: "", // identificationNumber
                                },
                            },
                        })
                        console.log(response.data);
                    } catch (error) {
                        console.log(error);
                    }
                },
                onFetching: (resource) => {
                    console.log("Fetching resource: ", resource);
                    // Animate progress bar
                    const progressBar = document.querySelector(".progress-bar");
                    progressBar.removeAttribute("value");
                    return () => {
                        progressBar.setAttribute("value", "0");
                    };
                }
            },
        });
    }, [])

    return {

    };
}

export default useMercadoPagoCheckoutPro;