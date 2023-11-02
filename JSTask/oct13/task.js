// 1. Declare an empty array;

    const arr=[];
    console.log(arr);

// 2. Declare an array with more than 5 number of elements

    const array=[1,2,3,4,5,6];
    console.log(array)

// 3. Find the length of your array

    console.log(array.length)

 // 4. Get the first item, the middle item and the last item of the array
 
    console.log(array[0],array[1],array[2])

// 5. Declare an array called mixedDataTypes, put different data types in the array
//    and find the length of the array. The array size should be greater than 5

    const mixedDataTypes= [1,'niha',8,true,'shabin','F'];
    const result=mixedDataTypes.length;
    console.log(result)
// 6. Declare an array variable name IT Companies and assign initial values Facebook,
//     Google, Microsoft, Apple, IBM, Oracle and Amazon
 const ITCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']
// 7. Print the array using console.log()  
    console.log(ITCompanies)
// 8. Print the number of companies in the array
    console.log(ITCompanies.length)
// 9. Print the first company, middle and last company
    console.log(ITCompanies[0],ITCompanies[3],ITCompanies[6])
// 10. Print out each company
    console.log(ITCompanies[0]) 
    console.log(ITCompanies[1]) 
    console.log(ITCompanies[2]) 
    console.log(ITCompanies[3]) 
    console.log(ITCompanies[4]) 
    console.log(ITCompanies[5]) 
    console.log(ITCompanies[6]) 

// 10. Change each company name to uppercase one by one and print them out

const company1=ITCompanies[0].toUpperCase()
console.log(company1) 
const company2=ITCompanies[1].toUpperCase()
console.log(company2) 
const company3=ITCompanies[2].toUpperCase()
console.log(company3)
const company4=ITCompanies[3].toUpperCase()
console.log(company4)
const company5=ITCompanies[4].toUpperCase()
console.log(company5)
const company6=ITCompanies[5].toUpperCase()
console.log(company6)

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple,
//     IBM,Oracle and Amazon are big IT companies.

    const arr1=['Facebook, Google, Microsoft, Apple,IBM,Oracle and Amazon are big IT companies.']
    console.log(arr1)

// 13. Check if a certain company exists in the ITCompanies array. If it exist 
//      return the company else return a company is not found

const arr2 =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
    const company = arr2[0];

    function checkComapnyExist(companyName){
    if (company.includes(companyName))
    {
       return 'company exist'
    }
    else
    {
        return 'company is not found'
    }

    }

    console.log(checkComapnyExist('IBM'));

//14. Filter out companies which have more than one 'o' without the filter method



//15. Sort the array using sort() method

    const sortedArray=arr2.sort();
    console.log(sortedArray)

//16. Reverse the array using reverse() method

     const reverseArray=arr2.reverse();
     console.log(reverseArray)

// 17. Slice out the first 3 companies from the array
const arr3 =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
    const sliceFirst=arr3.slice(0,3)
        console.log(sliceFirst)

// 18. Slice out the last 3 companies from the array

        const sliceLast=arr3.slice(4,7)
        console.log(sliceLast);

//19. Slice out the middle IT company or companies from the array

        const sliceMiddle=arr3.slice(2,5)
        console.log(sliceMiddle);

// 20. Remove the first IT company from the array

    const arr33 =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
        arr33.shift()
        console.log(arr33);

// 21. Remove the middle IT company or companies from the array
 
    const arr44 =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
    arr44.shift()
    arr44.shift()
    console.log(arr44)
    console.log('arr44')

// 22. Remove the last IT company from the array
        const arr11 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
        arr11.pop();
        console.log(arr11);

// // 23. Remove all IT companies
const arr00 =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//  const deleteCompany= arr00.splice(6,7)
delete arr00[0];
console.log(arr00)

