function reverse(str){
    // add whatever parameters you deem necessary - good luck!
   
        if(str.length <= 1) return str;
        console.log(str)
        return reverse(str.slice(1)) + str[0];
    
  }
  
  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'

  console.log(reverse('awesome'))