//get form

document.getElementById('loan-form').addEventListener('submit',function(e) {
    
    //hide results
    document.getElementById('results').style.display='none';
    //show loader
    document.getElementById('loader').style.display='block';

     setTimeout(calculateResults,500);

    e.preventDefault(); 
})

//calculate results
function calculateResults(){
    console.log('calculating...');
    


    //get ui variables
    const amount= document.getElementById('amount');
    const interest= document.getElementById('interest');
    const years= document.getElementById('years');
    const monthlyPayment= document.getElementById('monthly-payment');
    const totalPayment= document.getElementById('total-payment');
    const totalInterest= document.getElementById('total-interest');



   const principal = parseFloat(amount.value);
   const calculatedInterest = parseFloat(interest.value)/100/12;
   const calculatedPayments = parseFloat(years.value)*12;


   //coputing the payments
   const x=Math.pow(1+calculatedInterest,calculatedPayments);
   const monthly = (principal*x*calculatedInterest)/(x-1); 

   if(isFinite(monthly)){
       monthlyPayment.value =monthly.toFixed(2);
       totalPayment.value =(monthly*calculatedPayments).toFixed(2);
       totalInterest.value =((monthly*calculatedPayments)-principal).toFixed(2);
   
      ///show results
       document.getElementById('results').style.display='block';
           
       //hide loader

       document.getElementById('loader').style.display='none';

    }else{
       showError('Please check your numbers');
   }


}

  function showError(error){
    ///show hide results
    document.getElementById('results').style.display='none';
    
    //hide loader

    document.getElementById('loader').style.display='none';

      const errorDiv = document.createElement('div');

      //to insert into dom we have to grab the parent element
      const card= document.querySelector('.card');
      const heading= document.querySelector('.heading');

      
      //add class
      errorDiv.className= 'alert alert-danger';

      errorDiv.appendChild(document.createTextNode(error));


      //insert error above heading
      card.insertBefore(errorDiv,heading); 

      setTimeout(clearError,3000);

  }

  function clearError(){
      document.querySelector('.alert').remove();
  }