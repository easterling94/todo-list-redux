export const getData = async () => {
   return new Promise ((resolve) => {
      setTimeout(() => {
         resolve(
             [
               {id: 1, statusIsDone: false, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nulla!'},
               {id: 2, statusIsDone: true, text: 'Do groceries'},
               {id: 3, statusIsDone: true, text: 'Iron clothes'}
             ]
         )
      }, 1500)
   })
   
}