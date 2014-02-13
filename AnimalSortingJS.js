/**
 * @author Benedetta Riva
 */
/* The purpose of this program is to create a list of Animals with specific properties, and from that list create two new lists.
 * 
 * (In order to practice...) I made four lists in total (based on two different values of the animals). 
 * I created two lists for "type" value of the objects (the ZooAnimals)
 * and two other lists for the boolean: "IsFriendly" value for the ZooAnimals. 
 * 
 * Below is my ZooAnimals array of objects:
 */
				var ZooAnimals = [{
					"animal" : "Giraffe",
					"type" : "mammal", 
					"BloodTemp" : "warm",
					"IsFriendly" : true
				}, {
					"animal" : "tiger",
					"type" : "mammal", 
					"BloodTemp" : "warm",
					"IsFriendly" : false
				}, {
					"animal" : "snake",
					"type" : "reptile", 
					"BloodTemp" : "cold",
					"IsFriendly" : false
				}, {
					"animal" : "gecko",
					"type" : "reptile",
					"BloodTemp" : "cold",
					"IsFriendly" : true
				}, {
					"animal" : "crocodile", 
					"type" : "reptile",
					"BloodTemp" : "cold",
					"IsFriendly" : false
				}, {
					"animal" : "chimpanzee", 
					"type" : "mammal", 
					"BloodTemp" : "warm",
					"IsFriendly" : true
				}];
				console.log(ZooAnimals);


			// These are the first lists I will sort my animals into:
			
				var ZooMammals = [];
				var ZooReptiles = [];
							
			// var i=0 means create a box in memory and label it - this is the start condition
			// the next bit: i<6 is the end condition
			// and this is the operation: i++. "++" is shorthand for add one / increment
			
			//For this list I used the i<6 end condition - for the second lists below I used the .length [function?/operation?]
			
			
				for(var  i=0; i<6; i++){

					var currentAnimal = ZooAnimals[i];

			// If the "type" value of the currentAnimal is equal to "mammal" (== means the same as, while = means assign)...
			
					if (currentAnimal.type == "mammal") {

						console.log(currentAnimal);

			// ...Add the currentAnimal to my ZooMammals list (because the currentAnimal is "mammal")
						
						ZooMammals.push(currentAnimal);

					} else {
			// otherwise, add the currentAnimal to the ZooReptiles list
						
						ZooReptiles.push(currentAnimal);

					}  //This is the end of my if/else statement

					} //This is the end of my for loop
					
					console.log("finished mammal/reptile lists");
					console.log(ZooMammals);
					console.log(ZooReptiles);
					
		
		// I decided to make another list to sort the ZooAnimals depending on whether they are friendly or not (I'm referring to the ZooAnimal objects'
		// property IsFriendly: true/false - which is a boolean.)
		
		// These are the lists I will sort the ZooAnimals into: 
		
					var FriendlyAnimals = [];
					var UnfriendlyAnimals = [];
					
		// Note that in this case I used the ZooAnimals.length [function/property?] - for sake of trying both (although the .length option is
		//  preferable as the computer can do the counting for you...)
					
					for(var  i=0; i<ZooAnimals.length; i++){
							
					var currentAnimal = ZooAnimals[i];
			
			if (currentAnimal.IsFriendly == true) {

						console.log(currentAnimal);

		// Because the animal is friendly (answers true to the IsFriendly boolean), add the currentAnimal to my FriendlyAnimals list
						
						FriendlyAnimals.push(currentAnimal);

					} else {
		// otherwise, add the currentAnimal to the UnfriendlyAnimals list
						
						UnfriendlyAnimals.push(currentAnimal);

					}  //This is the end of my if/else statement

					} //This is the end of my for loop
					
					console.log("finished friendly/unfriendly list");
					console.log(FriendlyAnimals);
					console.log(UnfriendlyAnimals);
				
				//FIRST COMMIT
				
				