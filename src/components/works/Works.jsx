// pages/index.js
import React, { useState, useEffect } from 'react';
import LinkService from '../../../../backend/services/LinkService';
import styles from "../../styles/gridb.module.css";
import specific from "../../styles/colorsNdSize.module.css";

const linkService = new LinkService('http://localhost:3000/portfolio'); // Update the URL as needed
console.log(linkService,"-------------------");
export default function Works() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
      async function fetchLinks() {
          try {
              const links = await linkService.getAllLinks();
              setLinks(links);
          } catch (error) {
              console.error('Error fetching links:', error);
          }
      }

      fetchLinks();
  }, []);

    return (
      <div
        className={`xxx`}
        style={{ marginTop: "80px", outline: "2px solid blueviolet",backgroundColor: "gray",color:"black"}}
      >
      
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
                    </li>
                ))}

             
            </ul>
       
      </div>
    );
  }
  