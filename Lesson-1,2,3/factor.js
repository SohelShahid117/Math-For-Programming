let n = 12;
for(let i =1 ;i<=n;i++){
    console.log(i);
    if(n%i==0){
        let factor1 = i;
        let factor2 = n/i;
        console.log(`factor of ${n} from loop-${i} is : `,factor1,factor2);
        if(factor1>factor2){
            break;
        }
    }
}