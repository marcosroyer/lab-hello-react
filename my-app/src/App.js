import './App.css';
import Card from './Components/Card'
import ironLogo from './images/logo.png'
import menuTop from './images/menu-top-xs.png'


//const ironLogo = 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png'
//const menuTop = './sr'
const iconeUm = 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png'
const iconeDois = 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png'
const iconeTres = 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png'
const iconeQuatro = 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png'

const firstExpl = 'React makes it painless to create interactive UIs.'
const secondExpl = 'Build encapsulated components that manage their state.'
const thirdExpl = "A set of immutable values are passed to the component's."
const fourthExpl = 'Statically-type, designed to run on modern browsers.'

function App() {
  return (
    <div className="App">
      <div id="main">
        <nav id="menu">
          <img src={ironLogo} alt='iron logo' className='img-nav'/>
          <img src={menuTop} alt='menu top' className='img-menu'/>
        </nav>  
        <h1>Say hello to ReactJs</h1>
        <p id="subline">You will learn how to use the most popular frontend library,
        and become a super Ninja developer.</p>
        <button><span>Awesome!</span></button>
      </div>
      
      
      <div className='faixa'>
        <Card src={iconeUm} alt='primeiro ícone' title='Declarative' explanation={firstExpl} />
        <Card src={iconeDois} alt='segundo ícone' title='Components' explanation={secondExpl} />
        <Card src={iconeTres} alt='terceiro ícone' title='Single-Way' explanation={thirdExpl} />
        <Card src={iconeQuatro} alt='quarto ícone' title='JSX' explanation={fourthExpl} />
      </div>
    </div>
  );
}

export default App;
