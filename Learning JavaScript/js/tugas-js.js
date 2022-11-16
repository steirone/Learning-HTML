const obj = [];
obj[0] = {
    name: "Monica",
    gender: "female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: ["Yellow","Pink","White","Purple"],
    isHavePet: true,
    education: [
        
        {
            name: "SD 01",
            city: "Jakarta",
            graduate: 2016,
        },
        {
            name: "SMP 02",
            city: "Jakarta",
            graduate: 2019,
        },
        {
            name: "SMA 01",
            city: "Tangerang",
        },
    ],
    favoriteRestaurant: ["Bento","Sushi","Pancake","Eggy","Tempura","Padang","Tteok"],

};
obj[1] = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: ["Blue","Black","Grey"],
    isHavePet: false,
    education: [
        
        {
            name: "SD 02",
            city: "Jakarta",
            graduate: 2010,
        },
        {
            name: "SMP 03",
            city: "Jakarta",
            graduate: 2013,
        },
        {
            name: "SMA 01",
            city: "Surabaya",
            graduate: 2016,
        },
        {
            name: "Universitas Maju",
            city: "Tangerang",
        },
    ],
    favoriteRestaurant: ["Tempura","Bento","Sushi","Pancake","Padang","Katsu","Geprek","Pancake","Eggy"],

};

console.log(obj[0]);
console.log(obj[1]);
console.log(obj[1].name + " " + obj[1].education[2].name + " " + obj[1].education[2].city + " " + obj[1].favoriteRestaurant[5]);