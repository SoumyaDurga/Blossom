let plus_btns = document.querySelectorAll('#plus-button');
let minus_btns = document.querySelectorAll('#minus-button');
let qty_inputs = document.querySelectorAll('#quantity');

   plus_btns.forEach(btn=>{
       btn.addEventListener('click', ()=>{
           qty_inputs.forEach(qty=>{
                    qty.value++
           })
       })
    })
    minus_btns.forEach(btn=>{
       btn.addEventListener('click', ()=>{
            qty_inputs.forEach(qty=>{
                if(qty.value > 1){
                    qty.value--
                 }
                  else{
                     qty.value=0;
                 }
            })
        })
    })

