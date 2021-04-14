import './App.css';
import Profile from './Profile/Profile'


function App() {
  const fullName="Intissar Zeguina"
  const bio="I'am 31 years old i have a master degree in the information system engineering"
  const pro="Full stack developper"
  const alertMe = () =>{
alert('Zéguina Intissar')
  }
  return (
    <div className="App">
     <Profile  name={fullName} biographie={bio} pro={pro} alert={alertMe}><img src="profile.jpg" alt="image"/></Profile>
    </div>
  );
}


export default App;
