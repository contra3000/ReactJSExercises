
import React, { useEffect, useState } from "react";
import { ContactForm } from "../pure/forms/contactForm";
import { Contact } from "../../models/contact.class";
import { ContactComponent } from "../pure/contact";

export const ContactList = (props) => {
    
    const defaultContact1 = new Contact('Name 1', 'LastName 1', 'email1@loquesea.com', false);
    const defaultContact2 = new Contact('Name 2', 'LastName 2', 'email2@loquesea.com', false);
    const defaultContact3 = new Contact('Name 3', 'LastName 3', 'email3@loquesea.com', false);
    const defaultContact4 = new Contact('Name 4', 'LastName 4', 'email4@loquesea.com', false);

    // Estado del componente
    const [contacts, setContacts] = useState([defaultContact1, defaultContact2, defaultContact3, defaultContact4]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Contact state modified');
        setLoading(false);
        return () => {
            console.log('ContactList is going to unmount...');
        }
    }, [contacts])

    function conectContact(contact){
        console.log('Conect this contact', contact);
        // changing contact.conected
        [...contacts][(contacts.indexOf(contact))].conected = ![...contacts][(contacts.indexOf(contact))].conected
        // updating the iteration
        setContacts([...contacts]);
    }

    function removeContact(contact){
        console.log('Delete this contact', contact);
        // deleting contact
        const tempContacts = [...contacts];
        tempContacts.splice((contacts.indexOf(contact)), 1);
        // updating the iteration
        setContacts(tempContacts);
    }

    function addContact(contact){
        console.log('Adding this contact', contact);
        // adding contact
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        // updating the iteration
        setContacts(tempContacts);
    }

    return (
    <div>
        <div className="col-12">
            <div className="card">
                <div className="card-header p-3">
                    <h5>
                        Your Contacts: 
                    </h5>
                </div>
                <div className="card-body p-3" data-mbd-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">First name</th>
                                <th scope="col">Last name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Conected</th>
                            </tr>
                        </thead>
                        <tbody>
                            { contacts.map((contact, index) => {
                                return (<ContactComponent 
                                key={index} 
                                contact={contact} 
                                conect={conectContact}
                                remove={removeContact}
                                ></ContactComponent>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
                <ContactForm add={addContact}></ContactForm>
        </div>
    </div>
    );
};
