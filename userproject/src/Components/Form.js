import React from 'react';
import { useState } from 'react';




export default function Form(props) {
    const [name, setName] = useState('');
    const [uname, setUname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [street, setStreet] = useState('');
    const [suite, setSuite] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [coname, setConame] = useState('');
    const [catchphrase, setCatchphrase] = useState('');
    const [bs, setBs] = useState('');

    const dataSubmit = (event) => {
        event.preventDefault();
        if (name && uname && email && phone && website && street && suite && city && zipcode && lat && lng && coname && catchphrase && bs) {
            const Adddata = {
                name: name,
                username: uname,
                email: email,
                address: {
                    street: street,
                    suite: suite,
                    city: city,
                    zipcode: zipcode,
                    geo: {
                        lat: lat,
                        lng: lng
                    }
                },
                phone: phone,
                website: website,
                company: {
                    name: coname,
                    catchPhrase: catchphrase,
                    bs: bs
                }

            }
            props.saveData(Adddata)
        }
        else {
            alert("data feild can not be empty")
        }

    }
    return (
        <div>

            <form onSubmit={dataSubmit}>
                Name : <input type='text' name="name" value={name} onChange={(e) => {
                    setName(e.target.value)
                    // console.log(name)
                }}></input>
                UserName : <input type='text' name="username" value={uname} onChange={(e) => {
                    setUname(e.target.value)
                    // console.log(uname)
                }}></input><br /><br />
                Email : <input type='text' name="email" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                    // console.log(email)
                }}></input>
                Phone : <input type='text' name="phone" value={phone} onChange={(e) => {
                    setPhone(e.target.value)
                    // console.log(phone)
                }}></input>
                Website : <input type='text' name="website" value={website} onChange={(e) => {
                    setWebsite(e.target.value)
                    // console.log(website)
                }}></input><br /><br />
                Address :<br />
                Street : <input type='text' name="street" value={street} onChange={(e) => {
                    setStreet(e.target.value)
                    // console.log(street)
                }}></input>
                Suite : <input type='text' name="suite" value={suite} onChange={(e) => {
                    setSuite(e.target.value)
                    // console.log(suite)
                }}></input>
                City : <input type='text' name="city" value={city} onChange={(e) => {
                    setCity(e.target.value)
                    // console.log(city)
                }}></input>
                Zipcode : <input type='text' name="zipcode" value={zipcode} onChange={(e) => {
                    setZipcode(e.target.value)
                    // console.log(zipcode)
                }}></input><br /><br />
                Geolocation : <br />
                Lat : <input type='text' name="lat" value={lat} onChange={(e) => {
                    setLat(e.target.value)
                    // console.log(lat)
                }}></input>
                Lng : <input type='text' name="lng" value={lng} onChange={(e) => {
                    setLng(e.target.value)
                    // console.log(lng)
                }}></input>
                <br /><br />

                Company : <br />
                Name : <input type='text' name="coname" value={coname} onChange={(e) => {
                    setConame(e.target.value)
                    // console.log(coname)
                }}></input>
                CatchPhrase : <input type='text' name="catphrase" value={catchphrase} onChange={(e) => {
                    setCatchphrase(e.target.value)
                    // console.log(catchphrase)
                }}></input>
                BS : <input type='text' name="bs" value={bs} onChange={(e) => {
                    setBs(e.target.value)
                    // console.log(bs)
                }}></input><br /><br /><br />
                {/* <input type='button' name="btnadd" value="Add"></input> */}
                <button type="submit">Add User </button>
                <button type="cancel" onClick={props.Cancel}>Cancel</button>


            </form>

        </div>
    )
}
