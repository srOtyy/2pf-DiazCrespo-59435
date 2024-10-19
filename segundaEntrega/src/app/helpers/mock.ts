import { IUser,ICourse } from "../shared/interface" 

export const coursesList:ICourse[] = [
    {
      "name": "Python",
      "id": "1b1b",
      "category":"Programación"
    },
    {
      "name": "Java",
      "id": "2c1c",
      "category":"Programaión"
    },
    {
      "name": "C++",
      "id": "2c1b",
      "category":"Programación"
    },
    {
      "name": "UX/UI",
      "id": "11fg",
      "category":"Diseño"
    },
    {
      "name": "C#",
      "id": "4ftv",
      "category":"Programación"
    },
    {
      "name": "SQL",
      "id": "y0q0",
      "category":"Base de datos"
    },
] 
export const userList:IUser[] = [
      {
        "name":"Octavio Diaz Crespo",
        "email":"mail@outlook.com",
        "rol":"alumno",
        "id":"12fc",
        "courses": [
          "java",
          "python",
          "C"
        ]
      },
      {
        "name": "Nahuel DCc",
        "email": "4044@outlook.com",
        "rol":"alumno",
        "id": "22aa",
        "courses": [
          "java",
          "python",
          "C"
        ]
      },
      {
        "id": "1gd3",
        "name": "Federico Fuentes",
        "email": "ff15@outlook.com",
        "rol":"alumno",
        "courses": [
          "java"
        ]
      },
      {
        "id": "dd14",
        "name": "Juno Yoqono",
        "email": "junoyoqono@outlook.com",
        "rol":"alumno",
        "courses": [
          "java","SQL"
        ]
      },
      {
        "id": "a5f2",
        "name": "Ambar Gri",
        "email": "gri@outlook.com",
        "rol":"alumno",
        "courses": [
          "C++","C#"
        ]
      },
      {
        "id": "6g7t",
        "name": "Bri Bee",
        "email": "dobleB@outlook.com",
        "rol":"alumno",
        "courses": [
          "C++","SQL"
        ]
      }
] 