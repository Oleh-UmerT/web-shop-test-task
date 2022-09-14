import { useState, useEffect } from "react";
import '../styles/Order.css'

export default function Order() {
    const [step, setStep] = useState(1)

    return (
        <div>
            <form onSubmit={(data) => console.log(data)}>
                <ul className="lineBlock">
                    <li className={step === 1 ? 'activeLine' : ''}>Personal Info</li>
                    <li className={step === 2 ? 'activeLine' : ''}>Card Details</li>
                    <li className={step === 3 ? 'activeLine' : ''}>Address</li>
                </ul>
                <div className={step === 1 ? 'activeBlock' : 'none'}>
                    <input type="text" name="fname" placeholder="First Name" />
                    <input type="text" name="lname" placeholder="Last Name" />
                    <input type="text" name="phone" placeholder="Phone" />
                    <input type='button' name="next" value='Next Step' onClick={() => setStep((prev) => prev + 1)} />
                </div>
                <div className={step === 2 ? 'activeBlock' : 'none'}>
                    <h1>Add Your Card</h1>
                    <div>
                        <label htmlFor="CCHolderName">Card Holder`s Name</label>
                        <input type='text' name="CCHolderName" title="Holder`s First and Last Name"/>
                    </div>
                    <div>
                        <label htmlFor="CCNumber">Card Number</label>
                        <input type="text" name="CCNumber" autoComplete="off" maxLength="16" pattern="\d{16}" title="Credit card number"/>
                    </div>
                    <div>
                        <label>Card Expire Date:</label>
                        <div>
                            <select name="CCExpMon">
                                <option value='01'>01</option>
                                <option value='02'>02</option>
                                <option value='03'>03</option>
                                <option value='04'>04</option>
                                <option value='05'>05</option>
                                <option value='06'>06</option>
                                <option value='07'>07</option>
                                <option value='08'>08</option>
                                <option value='09'>09</option>
                                <option value='10'>10</option>
                                <option value='11'>11</option>
                                <option value='12'>12</option>
                            </select>
                        </div>
                        <div>
                            <select name="CCExpYear">
                                <option value='2023'>2023</option>
                                <option value='2024'>2024</option>
                                <option value='2025'>2025</option>
                            </select>
                        </div>
                        <div>
                            <input type="password" name="CVV" autoComplete="off" maxLength="3" pattern="\d{3}" title="Three digits at back of your card" placeholder="CVV" />
                        </div>
                    </div>
                    <input type='button' name="prev" value='Previous Step' onClick={() => setStep((prev) => prev - 1)} />
                    <input type='button' name="next" value='Next Step' onClick={() => setStep((prev) => prev + 1)} />
                </div>
                <div className={step === 3 ? 'activeBlock' : 'none'}>
                    <h2>Enter Address</h2>
                    <input type='text' name="address" placeholder="Address" />
                    <input type='button' name="prev" value='Previous Step' onClick={() => setStep((prev) => prev - 1)} />
                    <button type="submit">Submit</button>
                    
                </div>
            </form>
        </div>
    )
}