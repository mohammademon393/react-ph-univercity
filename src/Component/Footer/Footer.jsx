import React from 'react';

const Footer = () => {
    return (
      <div className='bg-black'>
        <footer className="footer container mx-auto sm:footer-horizontal bg-neutral text-neutral-content p-10 justify-between">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav>
            <h6 className="footer-title">Contect</h6>
            <a className="link link-hover">WhatApps</a>
            <a className="link link-hover">Facebook</a>
            <a className="link link-hover">Instragram</a>
            <a className="link link-hover">E-mail</a>
          </nav>
        </footer>
      </div>
    );
};

export default Footer;