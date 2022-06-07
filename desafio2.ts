enum Profissao {
    Atriz,
    Padeiro
}

interface Person {
    name: string;
    age:number;
    profession : Profissao;
}

let pessoa1 = {} as Person;

pessoa1.name = "maria";
pessoa1.age = 29;
pessoa1.profession = Profissao.Atriz

let pessoa2 = {} as Person;
pessoa2.name = "roberto";
pessoa2.age = 19;
pessoa2.profession = Profissao.Padeiro

let pessoa3 = {
    name: "laura",
    age: 32,
    profession: Profissao.Atriz
} as Person;

let pessoa4 = {
    name : "carlos",
    age : 19,
    profession : Profissao.Padeiro
} as Person