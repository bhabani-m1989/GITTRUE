var collection={
    "2548":{
      "album":"Bon Jovi rocks",
      "artist":"Bon Jovi",
      "tracks":[
          "let it be me",
          "i will see you again"
      ]  
    },
    "2468":{
      "album":"mumbai rockers",
      "artist":" Jaspreet",
      "tracks":[
          "teri toh yaad satawe"
      ]  
    },
      "2478":{
      "artist":" Jaspreet",
      "tracks":[]
    },
       "2498":{
      "albums":" Jagga Number 1"
    },
}

var collectionCopy= JSON.parse(JSON.stringify(collection));

//console.log(collectionCopy)
//console.log(collection[2548].track)

function updateRecords(id,prop,value)
{
   if( prop=="album" || prop=="artist")
   {
       collection[id][prop]=value;
   }
   else if(prop=="tracks")
   {
       collection[id][prop].push(value);
   }
   else
   {
       
   }
   return collection;
}

updateRecords("2548","tracks","dum maro dum")


