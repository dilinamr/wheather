import hot from './assets/hot.jpg'
import cold from './assets/cold.jpg'
import cloud from './assets/cloud.png'


function App() {
  return (
    <div className="app" style={{backgroundImage:`url(${hot})`}}>
<div className='overlay'>
<div className='container'>
  <div className='section section__inputs'>
<input type='text' name='city' placeholder='Enter City' />
 <button>F</button>
  </div>

  <div className='section section__temperature'>
    <div className='icon'>
      <h3>London</h3>
      <img className='imgcloud' src={cloud} alt='wheather'/>
      <h3>cloudy</h3>
    </div>
    <div className='temperature'>
      <h1>34 °C</h1>
    </div>
  </div>


  {/* bottom description */}
</div>
</div>
    </div>
   
  );
}

export default App;
