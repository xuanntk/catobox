import React from "react";
import "./../asset/css/Footer.css";
import qr from "./../asset/img/QR.png";
function Footer() {
    return (
        <div className="footer">
            <div className="first">
                <div className="about">
                    <h3>About Us</h3>
                    <div>
                        <h5>Store addres:</h5>
                        <p>903, Nguyễn Văn Linh, Châu Phú, An Giang</p>
                    </div>
                    <div>
                        <h5>Phone Number:</h5>
                        <p>0949-975-771</p>
                    </div>
                    <div>
                        <h5>Business Hours:</h5>
                        <p>Mon_Sat 10am to 6pm</p>
                        <p>Sun 11pm to 5pm</p>
                    </div>
                </div>
                <div className="helpbig">
                    <ul className="help">
                        <h3>Help</h3>
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
