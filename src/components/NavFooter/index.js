import React from 'react'
import './footer.css'
import home from "../../assets/images/home.png";
import voucher from "../../assets/images/voucher.png";
import wallet from "../../assets/images/wallet.png";
import settings from "../../assets/images/settings.png";

export default function FixedNavFooter() {
  return (
    <footer className="footer">
      <div className="nav-container">
            <div className="nav-item">
              <img src={home} alt="icon1" />
              <p>Home</p>
            </div>
            <div className="nav-item">
              <img src={voucher} alt="icon2" />
              <p>Voucher</p>
            </div>
            <div className="nav-item">
              <img src={wallet} alt="icon3" />
              <p>Wallet</p>
            </div>
            <div className="nav-item">
              <img src={settings} alt="icon4" />
              <p>Settings</p>
            </div>
          </div>
    </footer>
  )
}
