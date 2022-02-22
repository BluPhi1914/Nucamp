import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function SidebarFooter() {
    return (
        <footer className="sidebarfooter">
            <div className="container">
                <div className="row">
                    <div className="col-6-sm-3 text-center">
                        <h5>Contact Links</h5>
                        <IconContext.Provider value={{ color: '#B76E79', size: 25 }}>
                            <a className="btn btn-social-icon btn-instagram" href="http://instagram.com"><FaIcons.FaInstagram /></a>{' '}
                            <a className="btn btn-social-icon btn-facebook" href="http://facebook.com"><FaIcons.FaFacebook /></a>{' '}
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com"><FaIcons.FaTwitter /></a>{' '}
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com"><FaIcons.FaYoutube /></a>
                        </IconContext.Provider>
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel: 123-456-7890"><FaIcons.FaPhone />1-234-567-8902</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@NuCamp.com"><FaIcons.FaEnvelope />notArealEmail@email.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default SidebarFooter;

