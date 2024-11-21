import Navbar from "./Navbar"
import zn from './img/l1.png'
import bg from './img/bg1.png'
import './Nozimjon.css'

import c1 from './img/companies/1.png'
import c2 from './img/companies/2.png'
import c3 from './img/companies/3.png'
import c4 from './img/companies/4.png'
import c5 from './img/companies/5.png'
import c6 from './img/companies/6.png'
import c7 from './img/companies/7.png'
import c8 from './img/companies/8.png'

export default function Nozimjon() {
    return(
        <>
            <Navbar />
            <div className="cont">
                        <div className="area flex">
                            <div className="p50 lll">
                                <p className="table1">it works!</p>
                                <p className="bigtxt1">Try Our Business <br /> Ideas to grow <br /> Rapidly</p>
                                <p className="smalltxt1">We understand how desperatly you want to grow in <br /> the business world & our motto is to help you with <br /> practicale idea and plan </p>
                                <div className="flex">
                                    <a className="tp1">Get Started</a>
                                    <a className="flex tp2"><div className="lz"><img src={ zn } alt="lz1" /></div>DEMO VIDIO</a>
                                </div>
                            </div>
                            <div className="p50 ll">
                                <img src={ bg } alt="bg" className="bg" />
                            </div>
                        </div>
            </div>
            <div>
                <div className="flex lggp">
                    <div className="lgplace"><img src={ c1 } alt="c1" /></div>
                    <div className="lgplace"><img src={ c2 } alt="c2" /></div>
                    <div className="lgplace"><img src={ c3 } alt="c3" /></div>
                    <div className="lgplace"><img src={ c4 } alt="c4" /></div>
                </div>
                <div className="flex lggp">
                    <div className="lgplace"><img src={ c5 } alt="c5" /></div>
                    <div className="lgplace"><img src={ c6 } alt="c6" /></div>
                    <div className="lgplace"><img src={ c7 } alt="c7" /></div>
                    <div className="lgplace"><img src={ c8 } alt="c8" /></div>
                </div>
            </div>
        </>
    )
}
