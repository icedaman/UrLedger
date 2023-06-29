
export const MainContainer = () => {
  return (
    <div className="mx-96">
      <h1 className='text-sky-400/100 text-5xl'>Search</h1>
      <input className="border-4 py-2 px-8 mt-6 rounded-lg border-green-600" />

      <div className="flex flex-row text-sky-400/100 mt-16 mb-6 border-4 border-rose-500 text-left text-2xl">
        <div className="basis-1/4 md:basis-1/5 w-48 py-4 px-4">#</div>
        <div className="basis-1/4 md:basis-2/5 w-48 py-4 px-4">Name</div>
        <div className="basis-1/2 md:basis-2/5 w-48 py-4 px-4">Symbol</div>
        <div className="basis-1/2 md:basis-2/5 w-48 py-4 px-4">Price</div>
        <div className="basis-1/2 md:basis-1/5 w-48 py-4 px-4">ATH</div>
      </div>

      <div className="flex flex-row text-slate-100 border-4 border-lime-500 text-left text-2xl">
        <div className="basis-1/4 md:basis-1/5 w-48 py-4 px-4">6</div>
        <div className="basis-1/4 md:basis-2/5 w-48 py-4 px-4">Cardano</div>
        <div className="basis-1/2 md:basis-2/5 w-48 py-4 px-4">ADA</div>
        <div className="basis-1/2 md:basis-2/5 w-48 py-4 px-4">0.28 $</div>
        <div className="basis-1/2 md:basis-1/5 w-48 py-4 px-4">3.10 $</div>
      </div>

      
    </div>
  )
}
