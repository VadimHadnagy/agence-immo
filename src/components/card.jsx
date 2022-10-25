import '../css/card.css';
import pic1 from '../img/pic1.png';
import pic2 from '../img/pic2.png';
import pic3 from '../img/pic3.png';
import pic4 from '../img/pic4.png';
import pic5 from '../img/pic5.png';
import pic6 from '../img/pic6.png';

export default function CardImmo() {
    return (
        <div className="container-card">
            <div className="card">
                <img src={pic1} alt="" />
                <h3>1450 Cloudroft Drop</h3>
                <p id='deshouse'>Illinois / Chicago</p>
                <p id='price'>$250,000</p>
                <div className='separate1'></div>
                <ul>
                    <li id='deletepoint'>3400 Sq Ft</li>
                    <li>2 Bedroom</li>
                    <li>1 Bathroom</li>
                </ul>
            </div>
            <div className="card">
                <img src={pic2} alt="" />
                <h3>140 Small Village</h3>
                <p id='deshouse'>Missouris / Kansas City</p>
                <p id='price'>$200,000</p>
                <div className='separate1'></div>
                <ul>
                    <li id='deletepoint'>3400 Sq Ft</li>
                    <li>2 Bedroom</li>
                    <li>1 Bathroom</li>
                </ul>
            </div>
            <div className="card">
                <img src={pic3} alt="" />
                <h3>1250 Lake House</h3>
                <p id='deshouse'>Colorado / Denver</p>
                <p id='price'>$339,000</p>
                <div className='separate1'></div>
                <ul>
                    <li id='deletepoint'>3400 Sq Ft</li>
                    <li>2 Bedroom</li>
                    <li>1 Bathroom</li>
                </ul>
            </div>
                <div className="card">
                <img src={pic4} alt="" />
                <h3>1450 Cloudroft Drop</h3>
                <p id='deshouse'>Illinois / Chicago</p>
                <p id='price'>$250,000</p>
                <div className='separate1'></div>
                <ul>
                    <li id='deletepoint'>3400 Sq Ft</li>
                    <li>2 Bedroom</li>
                    <li>1 Bathroom</li>
                </ul>
            </div>
            <div className="card">
                <img src={pic5} alt="" />
                <h3>140 Small Village</h3>
                <p id='deshouse'>Missouris / Kansas City</p>
                <p id='price'>$200,000</p>
                <div className='separate1'></div>
                <ul>
                    <li id='deletepoint'>3400 Sq Ft</li>
                    <li>2 Bedroom</li>
                    <li>1 Bathroom</li>
                </ul>
            </div>
            <div className="card">
                <img src={pic5} alt="" />
                <h3>1250 Lake House</h3>
                <p id='deshouse'>Illinois / Chicago</p>
                <p id='price'>$339,000</p>
                <div className='separate1'></div>
                <ul>
                    <li id='deletepoint'>3400 Sq Ft</li>
                    <li>2 Bedroom</li>
                    <li>1 Bathroom</li>
                </ul>
            </div>
        </div>
    )
}