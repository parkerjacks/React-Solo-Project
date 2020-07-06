function yearButtons(){ 
    let x = 1850 
    let y = 1900  
    let z = []
    for (i=0; i< 5; i++) { 
        x += 10
        z.push(x) 
        
    } 
    return z

} 

yearButtons()

