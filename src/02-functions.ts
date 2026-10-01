import {Friend, Colleague, ColleagueHistory, EmailContact} from './myTypes'
import{ friends,colleagues} from './01-basics'

//Function older
function older(f: Friend ){
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) { // Inferred return type
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

//function add Colleague
function addColleague(
    cs: Colleague[],
    name:string,
    department: string,
    email:string

): void {
    const highest = highestExtension(cs);
    const nextExtension = highest.contact.extension + 1;

// function new Colleague    
const newColleague = {
        name : name,
        department :department,
        contact: {
            email :email,
            extension: nextExtension
        }   
    };
    cs.push(newColleague);
}

// function sortColleagues(
//   colleagues: Colleague[],
//   sorter: (c1: Colleague, c2: Colleague) => number
// ): EmailContact[] {
//   const sorted = colleagues.sort(sorter); // Colleague[] inferred
//   const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
//   return result 
// }

// console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
// console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

//The type for the second argument of ‘sortColleagues’ is a callback (function) 
// that takes two Colleague objects and returns a numeric value computed from comparing them. 
// SortColleagues uses the callback to sort the array of colleagues. The two console.log statements 
// test the new function. The first one provides a callback that sorts colleagues by extension number, 
// and the second one uses the length of a colleague’s name as the sorting criteria. 
// Run the script to see the results.

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max? : number
): EmailContact[] {
  let end = colleagues.length;
  if (max !== undefined) {
     end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
}
// Test invocations
console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW


addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

//function find Friends
function findFriends (
    friends: Friend[],
    c4: (friend: Friend) => boolean
): string[] {
    return friends.filter(c4).map((friend)=> `${friend.name} (${friend.age})`);
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));

// function findFriends(
//     friends: Friend[],
//     sorter: (f1: Friend, f2: Friend) => string
// ): Friend[] {
//     const sorted = friends.sort(sorter);
//     const result: Friend[] = sorted.map((fr) => ({name: fr.name, age: fr.age}));
//     return result;
// }

// function sortColleagues(
//   colleagues: Colleague[],
//   sorter: (c1: Colleague, c2: Colleague) => number
// ): EmailContact[] {
//   const sorted = colleagues.sort(sorter); // Colleague[] inferred
//   const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
//   return result 
// }

//function addInterest
function addInterest(
    friend: Friend, interest: string): string[] {
    if (!friend.interests) {
        friend.interests = [];
    }
    friend.interests.push(interest);
    return friend.interests;
}

console.log(addInterest(friends[1], 'Politics'));



