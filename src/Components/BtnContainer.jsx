function BtnContainer({onButtonClick}){
  let Buttons=['C',1,2,3,4,5,6,7,8,9,0,'=','+', '-', '*', '/'];

  return <div className='buttons-container'>
    {Buttons.map((btn) => (
       <button className='btn' onClick={()=>onButtonClick(btn)}>{btn}</button>
    ))}
</div>
}

export default BtnContainer;