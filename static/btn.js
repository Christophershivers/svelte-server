document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelectorAll('.nin-ripple');
   
    
    button.forEach(btn => {
      btn.addEventListener('click', function (e) {
        let x = e.clientX - e.target.getBoundingClientRect().left;
        let y = e.clientY - e.target.getBoundingClientRect().top;
        const isAttribute = btn.hasAttribute('data-ripple-color')
        const dataSet = btn.dataset.rippleColor
        const red = '#D1485F'
        const blue = '#386BC0'
        const dark = '#302B2B'
        const green = '#139C49'
        const yellow = '#D9991A'
       
        let ripples = document.createElement('span');
        ripples.classList.add('nin-span-ripple');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);
        if(isAttribute){
            if(dataSet == 'red'){
                const ripple = this.querySelectorAll('.nin-span-ripple');
                console.log(ripple)
                ripple.forEach(rip =>{
                    rip.style.background= red;
                })
            }if(dataSet == 'blue'){
                const ripple = this.querySelectorAll('.nin-span-ripple');
                console.log(ripple)
                ripple.forEach(rip =>{
                    rip.style.background= blue;
                })
            }if(dataSet == 'dark'){
                const ripple = this.querySelectorAll('.nin-span-ripple');
                console.log(ripple)
                ripple.forEach(rip =>{
                    rip.style.background= dark;
                })
            }if(dataSet == 'green'){
                const ripple = this.querySelectorAll('.nin-span-ripple');
                console.log(ripple)
                ripple.forEach(rip =>{
                    rip.style.background= green;
                })
            }if(dataSet == 'yellow'){
                const ripple = this.querySelectorAll('.nin-span-ripple');
                console.log(ripple)
                ripple.forEach(rip =>{
                    rip.style.background= yellow;
                })
            }
        }
        setTimeout(() => {
          ripples.remove();
        }, 1000);
      });
    });

  });




