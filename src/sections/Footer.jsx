import React from "react";
import "./../asset/css/Footer.css";
import qr from "./../asset/img/QR.png";
function Footer() {
    return (
        <div className="footer">
            <div className="first max-xl:pt-5">
                <div className="about">
                    <p className="h3">About Us</p>
                    <div>
                        <p className="h5">Store addres:</p>
                        <p className="content_final">903, Nguyễn Văn Linh, Châu Phú, An Giang</p>
                    </div>
                    <div>
                        <p className="h5">Phone Number:</p>
                        <p className="content_final">0949-975-771</p>
                    </div>
                    <div>
                        <p className="h5">Business Hours:</p>
                        <p>Mon_Sat 10am to 6pm</p>
                        <p>Sun 11pm to 5pm</p>
                    </div>
                </div>
                <div className="helpbig">
                    <ul className="help">
                        <p className="h3">Help</p>
                        <li>Search</li>
                        <li>Contact us</li>
                        <li>Sizing chart</li>
                        <li>Join our </li>
                    </ul>
                </div>
                <div className="imga">
                    <img src={qr} />
                </div>
            </div>
            <div className="second"></div>
        </div>
    );
}

export default Footer;
