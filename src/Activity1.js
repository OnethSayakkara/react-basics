function Activity1(){

    var count = 0;

  function increase(){
    count = count + 1;
    console.log(count);

  }

    return(
        <div className='mt-5 ml-10 space-y-4'>

        <h1 className="text-3xl">Activity 1- part A</h1>

      <h1 >counter : {count}</h1>

      <button className='px-3 py-2 bg-amber-400 rounded-md' onClick={increase}>Increse</button>
        </div>
    )
}

export default Activity1;