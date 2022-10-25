import logo from './logo.svg';
import './App.css';
import Videos from './Component/video'
import AllIcons from './Component/icons'


function App() {
  return (
    <div className=''>
      <div className='flex border-b-2 grid grid-cols-3 w-3/4'>
        <div className='col col-start-1 col-end-3 w-full h-full'>
          <Videos />
        </div>
        <div className='w-1/4 mt-0 lg:mt-16'>
          <AllIcons />
        </div>
        <div>

        </div>
      </div>
      <div className=''>
        <div className='flex mt-12 ml-4 '>
          <img src='https://png.pngtree.com/png-clipart/20200801/ourmid/pngtree-black-ring-png-image_2319165.png' className='w-12 ' />
          <div className='ml-8'>
            <p className='text-xs md:text-base'>fan_Duet_VIP <span className='text-slate-300'>fanduet</span></p>
            <p className='text-xs md:text-base'>original sound-fan duet</p>
          </div>
          <button className="w-20 h-8 text-xs md:text-base md:w-32 md:h-12 ml-12 sm:ml-48  md:ml-68 lg:ml-96  bg-transparent hover:bg-red-300 text-red-300 font-semibold hover:text-white py-2 px-4 border border-red-300 hover:border-transparent rounded">
            Follow
          </button>
        </div>
        <div className='grid grid-cols-3 '>
          <div className='h-full col col-start-1 col-end-3 w-full h-full'>
            <Videos />
          </div>
          <div className='mt-10 lg:mt-40'>
            <AllIcons />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
