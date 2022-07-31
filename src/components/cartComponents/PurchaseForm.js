import React, {forwardRef, useRef, useState} from "react";
import LoadingScreen from "../generalComponents/LoadingScreen";
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const PurchaseForm = forwardRef(({cart, total, clear}, ref) => {
    const [idSale, setIdSale] = useState("");
    const [purchaseFulfilled, setPurchaseFulfilled] = useState(false);
    const [loadingPurchase, setLoadingPurchase] = useState(false);
    const [dataRejected, setDataRejected] = useState(false);
    const [username, setUserName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState(0);
    let  [postal, setPostal] = useState(0);

    const finalizePurchase = () => {

        const copyOfCartWithSelectedEntries = cart.map((game) => {return {id: game.id, price: game.price, name: game.name, quantity: game.quantity}});
        setLoadingPurchase(true);
        const salesCollection = collection(db, "sales");
        addDoc(salesCollection, {
            firstName: username, lastName: surname, email: email, country: country, city: city, address: address, phone: phone, postal: postal,
            copyOfCartWithSelectedEntries, date: serverTimestamp(), total: total
        }).then((res) => {
            setIdSale(res.id);
            setPurchaseFulfilled(true);
            clear();
        })
    }

    let nameRef = useRef();let surnameRef= useRef();let emailRef= useRef();let confirmEmailRef = useRef();let countryRef= useRef();let cityRef= useRef();let addressRef= useRef();let phoneRef= useRef();let postalRef= useRef();
    const updateName = (e) => {
        setUserName(e.target.value);
    }
    const updateSurname = (e) => {
        setSurname(e.target.value);
    }
    const updateEmail = (e) => {
        setEmail(e.target.value);
    }
    const updateConfirmEmail = (e) => {
        setConfirmEmail(e.target.value);
    }
    const updateCountry = (e) => {
        setCountry(e.target.value);
    }
    const updateCity = (e) => {
        setCity(e.target.value);
    }
    const updateAddress = (e) => {
        setAddress(e.target.value);
    }
    const updatePhone = (e) => {
        setPhone(parseInt(e.target.value));
    }
    const updatePostal = (e) => {
        setPostal(parseInt(e.target.value));
    }

    const validateAndFinalize = (e) => {
        e.preventDefault();
        //credits to Dhruv Kumar Jha in https://stackoverflow.com/questions/39356826/how-to-check-if-it-a-text-input-has-a-valid-email-format-in-reactjs
        // eslint-disable-next-line
        let checkEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (username === "") {
            nameRef.current.focus();
            setDataRejected(true);
        }
        else if (surname === "") {
            surnameRef.current.focus();
            setDataRejected(true);
        }
        else if (!checkEmail.test(email)) {
            emailRef.current.focus();
            setDataRejected(true);
        }
        else if (confirmEmail !== email) {
            confirmEmailRef.current.focus();
            setDataRejected(true);
        }
        else if (phone <= 0  || isNaN(phone)) {
            phoneRef.current.focus();
            setDataRejected(true);
        }
        else if (postal <= 0 || isNaN(postal)) {
            postalRef.current.focus();
            setDataRejected(true);
        }
        else {
            setDataRejected(false);
            finalizePurchase();
        }
    }
    return <>
        <div ref={ref} className="purchaseFormContainer">
            {purchaseFulfilled ? <>
            <div className="titleOfForm">
                Purchase Fulfilled
            </div>
            <div className="fulfilledMessageContainer">
                <p className="fulfilledMessage">Your purchase ID is {idSale}</p>
            </div></>: loadingPurchase ? <LoadingScreen/> : <>
            <div className="titleOfForm">
                Personal Information
            </div>
            <form className="form" onSubmit={validateAndFinalize}>
                <div className="nameAndSurname">
                    <div className="firstName labelAndInputContainer">
                        <label htmlFor="fname">First Name</label>
                        <input onChange = {(e) => updateName(e)} className="formInput" type="text" id="fname" ref={nameRef} name="firstname" placeholder="John"/>
                    </div>
                    <div className="surname labelAndInputContainer">
                        <label htmlFor="sname">Surname</label>
                        <input onChange = {(e) => updateSurname(e)} className="formInput" type="text" id="sname" ref={surnameRef} name="surname" placeholder="Doe"/>
                    </div>
                </div>
                <div className="emailContainer">
                    <div className="labelAndInputContainer">
                        <label htmlFor="email">Email</label>
                        <input onChange = {(e) => updateEmail(e)} className="formInput" type="text" id="email" ref={emailRef} name="email" placeholder="john@example.com"></input>
                    </div>
                </div>
                <div className="emailContainer confirmEmailContainer">
                    <div className="labelAndInputContainer">
                        <label htmlFor="email">Confirm Email</label>
                        <input onChange = {(e) => updateConfirmEmail(e)} className="formInput" type="text" id="email" ref={confirmEmailRef} name="email" placeholder="john@example.com"></input>
                    </div>
                </div>
                <div className="phoneContainer">
                    <div className="labelAndInputContainer">
                        <label htmlFor="phone">Phone Number</label>
                        <input onChange = {(e) => updatePhone(e)} className="formInput" type="number" id="phone" ref={phoneRef} name="phone" placeholder="+5411094322489"></input>
                    </div>
                </div>
                <div className="address">
                    <div className="place labelAndInputContainer">
                        <label htmlFor="country">Country</label>
                        <input onChange = {(e) => updateCountry(e)} className="formInput" type="text" id="country" ref={countryRef} name="country" placeholder="Argentina"/>
                    </div>
                    <div className="labelAndInputContainer">
                        <label htmlFor="city"> City</label>
                        <input onChange = {(e) => updateCity(e)} className="formInput" type="text" id="city" ref={cityRef} name="city" placeholder="Buenos Aires"/>
                    </div>
                </div>
                <div className="address2">
                    <div className="labelAndInputContainer">
                        <label htmlFor="adr">Address</label>
                        <input onChange = {(e) => updateAddress(e)} className="formInput" type="text" id="adr" ref={addressRef} name="address" placeholder="542 W. 15th Street"/>
                    </div>
                    <div className="labelAndInputContainer">
                        <label htmlFor="postal">Postal Code</label>
                        <input onChange = {(e) => updatePostal(e)} className="formInput" type="number" id="postal" ref={postalRef} name="postal" placeholder="111111"/>
                    </div>
                </div>
                <div className="submitButtonContainer">
                    <div className="submitButtonDiv">
                        <input className="submitButton formInput" type="submit" name="submit" value="Submit"/>
                    </div>
                </div>
                <div className="messageContainer">
                    {dataRejected ? <p className="messageDataNotValid">Some of the data is not valid</p>:<></>}
                </div>
            </form></>}
        </div>
    </>
}); 

export default PurchaseForm;