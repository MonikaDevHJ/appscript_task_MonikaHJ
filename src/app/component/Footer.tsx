import React from "react";
import styles from "../styles/Footer.module.css";
import amex from "../../../public/assets/amex.svg";
import applepay from "../../../public/assets/applepay.svg";
import goglepay from "../../../public/assets/goglepay.svg";
import OPay from "../../../public/assets/OPay.svg";
import paypal from "../../../public/assets/paypal.svg";
import Image from "next/image";
import Insta from "../../../public/assets/Insta.svg"
import linkedIN from "../../../public/assets/linkedIN.svg"
import us from "../../../public/assets/us.svg"

const Footer = () => {
    return (
        <div className={styles.footer}>
            {/* ---------- First Row ---------- */}
            <div className={styles.container}>
                {/* Column 1 */}
                <div className={styles.column}>
                    <h3 className={styles.title}>BE THE FIRST TO KNOW</h3>
                    <p className={styles.subtitle}>Sign up from meta use</p>
                    <div className={styles.subscribe}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={styles.input}
                        />
                        <button className={styles.button}>Subscribe</button>
                    </div>
                </div>

                {/* Column 2 */}
                <div className={styles.column}>
                    <h3 className={styles.title}>Contact Us</h3>
                    <p className={styles.text}>+8296612973</p>
                    <p className={styles.text}>monikhj7@gmail.com</p>

                    <p className={styles.text}>  <Image src={us} alt="Phone Pay" /> USD</p>
                    <p className={styles.text}>
                        Transaction will be completed in and Euro currency is available on
                        hover
                    </p>
                </div>
            </div>

            {/* ---------- Horizontal Divider ---------- */}
            <hr className={styles.divider} />

            {/* ---------- Second Row ---------- */}
            <div className={styles.container}>
                {/* Column 1: Meeta Use */}
                <div className={styles.column}>
                    <h3 className={styles.title}>Meeta Use</h3>
                    <p className={styles.text}>About Us</p>
                    <p className={styles.text}>Stories</p>
                    <p className={styles.text}>Artisians</p>
                    <p className={styles.text}>Boutiques</p>
                    <p className={styles.text}>Contact US</p>
                    <p className={styles.text}>EU Complian Docs</p>
                </div>

                {/* Column 2: QUICK LINKS */}
                <div className={styles.column}>
                    <h3 className={styles.title}>QUICK LINKS</h3>
                    <p className={styles.text}>Order and Shipping</p>
                    <p className={styles.text}>Join and Login Seller</p>
                    <p className={styles.text}>Payment and Pricing</p>
                    <p className={styles.text}>Return & Refund</p>
                    <p className={styles.text}>FAQs</p>
                    <p className={styles.text}>Privacy & Policy</p>
                    <p className={styles.text}>Terms & Conditions</p>
                </div>

                {/* Column 3: FOLLOW US + Payment */}
                <div className={styles.column}>
                    <h3 className={styles.title}>FOLLOW US</h3>
                    <Image src={Insta} alt="Phone Pay" />
                    <Image src={linkedIN} alt="Phone Pay" />

                    <p className={styles.text}>Meet Muse Accept</p>
                    <div className={styles.paymentIcons}>
                        <Image src={amex} alt="Phone Pay" />
                        <Image src={applepay} alt="Google Pay" />
                        <Image src={goglepay} alt="Paypal" />
                        <Image src={OPay} alt="Paypal" />
                        <Image src={paypal} alt="Paytm" />
                    </div>
                </div>
            </div>

            {/* ---------- Footer Copy ---------- */}
            <p className={styles.copy}>© 2025 YourCompany. All rights reserved.</p>
        </div>
    );
};

export default Footer;
