const people = [
  {
    name: "Rahul",
    age: 27,
    city: "Pune",
    isEmployed: true,
    Profession: "software engineer",
    hasCar: true,
    modeOfTransport: "car",
    studies: ["computer science"],
    hobbies: ["playing chess", "gardening"],
    pets: [
      {
        name: "Max",
        animal: "dog",
        breed: "golden retriever",
        age: 4,
        isVaccinated: true,
        isFullyVaccinated: true,
        favouriteActivities: ["playing fetch in the park"],
      },
    ],
  },
  {
    name: "Ananya",
    age: 30,
    city: "Bangalore",
    isEmployed: false,
    hasCar: false,
    modeOfTransport: "public transport",
    studies: ["computer science", "minor in graphic design"],
    hobbies: ["cooking"],
    pets: [
      {
        name: "Kiwi",
        animal: "Parrot",
        breed: "love bird",
        age: 1,
        isVaccinated: true,
        isFullyVaccinated: false,
        favouriteActivities: ["mimics her voice"],
      },
    ],
  },
  {
    name: "Ramesh",
    age: 45,
    city: "Jaipur",
    isEmployed: true,
    Profession: "software engineer",
    hasCar: true,
    modeOfTransport: "car",
    studies: ["computer science"],
    hobbies: [
      "reading historical fiction",
      "tending to his rose garden",
      "gardening",
    ],
    pets: [
      {
        name: "Bella",
        animal: "cat",
        breed: "persian",
        age: 3,
        isVaccinated: true,
        isFullyVaccinated: true,
        favouriteActivities: ["lounging in the sun"],
      },
      {
        name: "Max",
        animal: "cat",
        breed: "persian",
        age: 3,
        isVaccinated: true,
        isFullyVaccinated: true,
        favouriteActivities: ["lounging in the sun"],
      },
    ],
  },
  {
    name: "Kavya",
    age: 28,
    city: "Chennai",
    isEmployed: false,
    hasCar: false,
    modeOfTransport: "By walk",
    Profession: "dancer",
    studies: [],
    hobbies: ["reading fantasy novel", "binge-watching sci-fi"],
    pets: [
      {
        name: "Snowy",
        animal: "Rabbit",
        breed: "mini lop",
        age: 2,
        isVaccinated: true,
        isFullyVaccinated: false,
        favouriteActivities: [
          "hopping around her backyard",
          "nibbling on carrots",
        ],
      },
    ],
  },
];

// 1.How many individuals are currently employed?
const employmentCount = (people) => {
  return people.filter((person) => person.isEmployed).length;
};

// console.log(employmentCount(people));

// 2.How many people own a car?
const countCarOwners = (people) => {
  return people.filter((person) => person.hasCar).length;
};

// console.log(countCarOwners(people));

// 3.How many pets are fully vaccinated?
const countVaccinated = (people) => {
  return people
    .flatMap((person) => person.pets)
    .filter((pet) => pet.isFullyVaccinated).length;
};

// console.log(countVaccinated(people));

// 4.What are the names of all the pets, and what type of animal is each?
const animalNameAndType = (people) => {
  return people
    .flatMap((person) => person.pets)
    .map((pet) => ({ name: pet.name, animal: pet.animal }));
};

// console.log(animalNameAndType(people));

// 5.Which cities do the individuals live in?
const personAndCity = (people) => {
  return people.map((person) => ({
    name: person.name,
    city: person.city,
  }));
};

// console.log(personAndCity(people));

// 6.How many hobbies are shared across the group? What are they?
const hobbies = (people) => {
  return people.flatMap((person) => person.hobbies).length;
};

// console.log(hobbies(people));

// 7.How many pets belong to people who are currently unemployed?
const countPetsOfUnemployedOf = (people) => {
  return people
    .filter((person) => !person.isEmployed)
    .flatMap((person) => person.pets).length;
};

// console.log(countPetsOfUnemployedOf(people));

// 8.What is the average age of the individuals mentioned in the passage?
const add = (value1, value2) => value1 + value2;

const averageAgeOf = (people) => {
  return people.map((person) => person.age).reduce(add, 0) / people.length;
};

// console.log(averageAgeOf(people));

// 9.How many individuals have studied computer science, and how many of them have pets?
const everyPredicate =
  (...predicates) =>
  (value) =>
    predicates.every((predicate) => predicate(value));

const studiedCs = (person) => person.studies.includes("computer science");

const havePet = (person) => person.pets.length > 0;

const studiedCsAndHavePets = (people) => {
  return people.filter(everyPredicate(studiedCs, havePet)).length;
};

console.log(studiedCsAndHavePets(people));

// 10.How many individuals own more than one pet?
const peopleOwnMoreThanOnePet = (people) => {
  return people.filter((person) => person.pets.length > 1).length;
};

// console.log(peopleOwnMoreThanOnePet(people))

// 11.Which pets are associated with specific favorite activities?
const petsAndActivities = (people) => {
  return people
    .flatMap((person) => person.pets)
    .map((pet) => ({
      name: pet.name,
      favouriteActivities: pet.favouriteActivities,
    }));
};

// console.log(petsAndActivities(people));

// 12.What are the names of all animals that belong to people who live in Bangalore or Chennai?

const petOfPeopleInChennaiOrBangalore = (people) => {
  return people
    .filter((person) => ["Chennai", "Bangalore"].includes(person.city))
    .flatMap((person) => person.pets)
    .map((pet) => pet.name);
};

// console.log(petOfPeopleInChennaiOrBangalore(people));

// 13.How many vaccinated pets belong to people who do not own a car?

const peopleHaveVaccinatedPetsAndDontHaveCar = (people) => {
  return people
    .filter((person) => !person.hasCar)
    .flatMap((person) => person.pets)
    .filter((pet) => pet.isVaccinated).length;
};

// console.log(peopleHaveVaccinatedPetsAndDontHaveCar(people));

// 15.How many individuals have more than two hobbies?
const peopleOfMoreThanTwoHobbies = (people) => {
  return people.filter((person) => person.hobbies.length > 2).length;
};

// console.log(peopleOfMoreThanTwoHobbies(people));

// 17.Which pet is the youngest, and what is its name?
const nameOfYoungestPet = (people) => {
  return people
    .flatMap(({ pets }) => pets)
    .reduce((youngest, pet) => {
      return pet.age < youngest.age ? pet : youngest;
    }).name;
};

// 18. What types of books are mentioned as interests, and who reads them?

// console.log(nameOfYoungestPet(people));

// 19.How many individuals live in cities starting with the letter "B"?
const peopleFromCityWithFirstLetterB = (people) => {
  return people.filter((person) => person.city[0] === "B").length;
};

// console.log(peopleFromCityWithFirstLetterB(people));

// 20.Which individuals do not own any pets?
const peopleDontHavePet = (people) => {
  return people.filter((person) => person.pets.length === 0);
};

// console.log(peopleDontHavePet(people));
