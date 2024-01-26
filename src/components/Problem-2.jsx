import React, { useEffect } from 'react';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = PROXY_URL + 'https://contact.mediusware.com/api';


const Problem2 = () => {

    useEffect(function(){
        const fetchContacts = async () => {
            const response = await fetch(`${BASE_URL}/contacts/?format=json`)
            const data = await response.json()
            console.log(data)
        }
        fetchContacts()
    }, [])

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                <button className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>
                
            </div>
        </div>
    );
};

export default Problem2;