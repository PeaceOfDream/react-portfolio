import React from 'react'
import { ContentItem } from '../components/contentItem/ContentItem';
import { contacts } from '../helpers/contactsList';

export const ContactsPage = () => {

  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          {contacts.map((contact) => (
            <ContentItem key={contact.title} title={contact.title} desc={contact.desc} />
          ))}
        </ul>
      </div>
    </main>
  );
}
