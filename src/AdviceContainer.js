function AdviceContainer({advice, fetchData}){

  return(
    <div>
      {advice && (
        <div className="container">
          <h3>{advice} </h3>
          <button className='button' onClick={() => fetchData()}> More Advice </button>
        </div>
      )}
    </div>
  )

}

export default AdviceContainer