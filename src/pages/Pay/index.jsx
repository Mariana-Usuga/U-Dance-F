/* eslint-disable max-len */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
// import PropTypes from 'prop-types';
// import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPay } from '../../store/actions/payActions';

// const URL_BASE = process.env.REACT_APP_API_URL_BASE || 'http://localhost:8080';
// const URL_BASE = 'http://localhost:8080';

const Pay = () => {
  // const months = [
  //   { id: '1', month: '01', year: '21' },
  //   { id: '2', month: '02', year: '22' },
  //   { id: '3', month: '03', year: '23' },
  //   { id: '4', month: '04', year: '24' },
  //   { id: '5', month: '05', year: '25' },
  //   { id: '6', month: '06', year: '26' },
  //   { id: '7', month: '07', year: '27' },
  //   { id: '8', month: '08', year: '28' },
  //   { id: '9', month: '09', year: '29' },
  //   { id: '10', month: '10', year: '30' },
  //   { id: '11', month: '11', year: '31' },
  //   { id: '12', month: '12', year: '32' },
  //   { id: '13', year: '33' },
  //   { id: '14', year: '34' },
  //   { id: '15', year: '35' },
  //   { id: '16', year: '36' },
  //   { id: '17', year: '37' },
  //   { id: '18', year: '38' },
  //   { id: '19', year: '39' },
  //   { id: '20', year: '40' },
  // ];
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    holdersName: '',
    number: '',
    month: '',
    year: '',
    cvc: '',
  });

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    const newState = { ...form };
    newState[name] = value;
    setForm(newState);
  };

  const sendForm = async (e) => {
    e.preventDefault();

    const paymentData = {
      docType: 'CC',
      docNumber: '10358519',
      value: '20000',
      currency: 'COP',
      description: 'Product Payment',
      cardNumber: form.number,
      cardExpYear: form.year,
      cardExpMonth: form.month,
      cardCVC: form.cvc,
    };
    dispatch(fetchPay(paymentData));
  };
  // min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16
  return (
    <div className="h-screen bg-no-repeat bg-cover
    bg-[url('https://res.cloudinary.com/db3njhxi0/image/upload/v1644781249/U-Dance/Singapore_City_at_Night_hbk8kk.jpg')]"
    >
      <div className="font-serif md:w-6/12 w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700">
        <div className="w-full pt-1 pb-5">
          <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
            <i className="mdi mdi-credit-card-outline text-3xl" />
          </div>
        </div>
        <div className="mb-10">
          <h1 className="text-center font-bold text-xl uppercase">Pay</h1>
        </div>
        <div className="mb-3 flex -mx-2">
          <div className="px-2">
            <label htmlFor="type1" className="flex items-center cursor-pointer">
              <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3" />
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label className="font-bold text-sm mb-2 ml-1">Numero de la tarjeta</label>
          <div>
            <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text" />
          </div>
        </div>
        <div className="mb-3 -mx-2 flex items-end">
          <div className="px-2 w-1/2">
            <label className="font-bold text-sm mb-2 ml-1">Fecha de expedición</label>
            <div>
              <select onChange={handleChange} className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                <option value="01">01 - Enero</option>
                <option value="02">02 - Febrero</option>
                <option value="03">03 - Marzo</option>
                <option value="04">04 - Abril</option>
                <option value="05">05 - Mayo</option>
                <option value="06">06 - Junio</option>
                <option value="07">07 - Julio</option>
                <option value="08">08 - Agosto</option>
                <option value="09">09 - Septiembre</option>
                <option value="10">10 - Octubre</option>
                <option value="11">11 - Noviembre</option>
                <option value="12">12 - Diciembre</option>
              </select>
            </div>
          </div>
          <div className="px-2 w-1/2">
            <select onChange={handleChange} className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
            </select>
          </div>
        </div>
        <div className="mb-10">
          <label className="font-bold text-sm mb-2 ml-1">CVC</label>
          <div>
            <input onChange={handleChange} className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text" />
          </div>
        </div>
        <div>
          <button onClick={sendForm} className="block w-full max-w-xs mx-auto bg-purple-400 hover:bg-purple-600 text-black rounded-2xl px-3 py-3 font-semibold">
            <i className="mdi mdi-lock-outline mr-1" />
            PAY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pay;
