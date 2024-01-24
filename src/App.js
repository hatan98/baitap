import Header from "./Header.jsx"
import UserProfile from './UserProfile.jsx'
import ProductList  from "./ProductList.jsx";
import LoginForm from "./LoginForm.jsx"
import './App.css';
// Use with loader
const propsTan={
  fullname:'Lê Phạm Hà Tân',
  email:'tan@gamil.com',
  src:'tan'
}
const propslist=[
  {
    id:1,
    name:'kem đánh răng',
    cost:50000
  },
  {
    id:2,
    name:'sửa rửa mặt',
    cost:100000
  },
  {
    id:3,
    name:'bàn chải',
    cost:30000
  }
]


function App() {
  return (
    <div className="App">
      <Header/>
      <UserProfile props={propsTan} />
      <ProductList list={propslist} />
      <LoginForm />
    </div>
  );
}

export default App;
