import './App.css';
import { HighchartsReact } from 'highcharts-react-official';
import Highcharts from "highcharts/highstock";
require("highcharts/highcharts-more")(Highcharts);
require("highcharts/modules/solid-gauge")(Highcharts);
function Chartbar(){
    
    return(
        <div className="flowchart">
            <div className='parent-1'>
                <div className='leftside-chart'>
                    <div className='toggle'>
                        <h1>T1</h1>
                    </div>
                    <div className='discriction-1'>
                        <p>North Shor</p>
                        <p>& Western Line</p>
                    </div>
                    <div className='data'>
                        <p>POST:<span style={{color:'#FF0000'}}>87.0%</span></p>
                        <p>COT:<span style={{color:'orange'}}>92.9%</span></p>
                    </div>
                    <div className='chart-1'>
                      <li>
                        <Chartbar options={"chartbar1"} highcharts={Highcharts} className="element"/>
                     </li>
                    </div>
                </div>
                <div className='rightside-chart'>
                    
                </div>
            </div>
        </div>
    );
}

export default Chartbar;