
import './App.css'
import Footer from './Component/Footer/Footer'
import Navber from './Component/Navbar/Navber'

function App() {

  return (
    <>
     <Navber></Navber>
      
      
     <div className='container mx-auto'>
      <div className='grid grid-cols-3 gap-5'>
          <div className='p-7 bg-pink-500 rounded-md my-8 flex flex-col justify-center items-center text-white h-[180px]'>
            <h1 className='font-bold text-xl'>Panding</h1>
            <p className='font-semibold text-lg'>0</p>
          </div>
          <div className='p-7 bg-blue-500 rounded-md my-8 flex flex-col justify-center items-center text-white h-[180px]'>
            <h1 className='font-bold text-xl'>Submited</h1>
            <p className='font-semibold text-lg'>0</p>
          </div>
          <div className='p-7 bg-green-700 rounded-md my-8 flex flex-col justify-center items-center text-white h-[180px]'>
            <h1 className='font-bold text-xl'>Reviwed</h1>
            <p className='font-semibold text-lg'>0</p>
          </div>
      </div>
     </div>



     <Footer></Footer>
    </>
  )
}

export default App
