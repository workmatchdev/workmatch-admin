import Head from 'next/head'
import useMercadoPagoCheckoutPro from '@/hooks/mercadoPagoCheckoutPro/useMercadoPagoCheckoutPro';

const MercadoPagoForm = () => {

    useMercadoPagoCheckoutPro();

    return (
        <div className='generalContainer'>
            <Head>
                <script src="https://sdk.mercadopago.com/js/v2"></script>
            </Head>
            <style jsx>{`
                #form-checkout {
                    display: flex;
                    flex-direction: column;
                    max-width: 600px;
                }
                #form-checkout__installments{
                    visibility: hidden;
                    height: 0;
                }
                .container {
                    height: 18px;
                    display: inline-block;
                    border: 1px solid #ccc;
                    border-radius: 2px;
                    padding: 0px 20px;
                    margin-bottom: 1rem;
                    height: 2rem;
                }
                .generalContainer{
                    padding: 2rem;
                }
                input, select{
                    margin-bottom: 1rem;
                    border: 1px solid #ccc;
                    outline: none;
                    margin-bottom: 1rem;
                    height: 2rem;
                    padding: 0px 20px;
                }
                .submitButton{
                    background: blue;
                    padding: 0.5rem;
                    color: #fff;
                    border-radius: 0.2rem;
                }
            `}</style>

            <form id="form-checkout">
                <div id="form-checkout__cardNumber" className="container"></div>
                <div id="form-checkout__expirationDate" className="container"></div>
                <div id="form-checkout__securityCode" className="container"></div>
                <input type="text" id="form-checkout__cardholderName" />
                <select id="form-checkout__issuer"></select>
                <select id="form-checkout__installments"></select>
                {/* <select id="form-checkout__identificationType"></select>sds */}
                {/* <input type="text" id="form-checkout__identificationNumber" /> */}
                {/* <input type="email" id="form-checkout__cardholderEmail" /> */}

                <button type="submit" id="form-checkout__submit" className='submitButton'>Pagar</button>
                <progress value="0" className="progress-bar">Carregando...</progress>
            </form>
        </div>
    );
}

export default MercadoPagoForm;