function solve(){
  let homework = 5; // propose that you dont have homeworks. Change the value if you have.
  let presence = 0; // propose you are remote. Change the value if you are not.
  console.log(` _____________________________________________ `);
  console.log(`| Mid exam | Final exam | Homework | Presence |`);
  console.log(` ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ `);
  for(let i = 0; i <= 300; i++)
      for(let j = 0; j <= 300; j++){
          if(i*0.45 + j*0.55 + homework + presence > 239){
              console.log(`|    ${i}    |    ${j}    |    ${homework}    |    ${presence}    |`);
          }
      }
}

solve();