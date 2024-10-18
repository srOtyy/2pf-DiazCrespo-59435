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
        "name":"Octavio",
        "email":"oty2013@outlook.com",
        "rol":"alumno",
        "id":"12fc",
        "courses": [
          "java",
          "python",
          "C"
        ]
      },
      {
        "name": "Octavio Nahuel",
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
        "name": "Oty",
        "email": "ttttt@outlook.com",
        "rol":"alumno",
        "courses": [
          "java"
        ]
      },
      {
        "id": "dd14",
        "name": "Yoqo",
        "email": "a@outlook.com",
        "rol":"alumno",
        "courses": [
          "java","Angular"
        ]
      },
      {
        "id": "a5f2",
        "name": "Nahu",
        "email": "brc@outlook.com",
        "rol":"alumno",
        "courses": [
          "C++","Angular"
        ]
      },
      {
        "id": "6g7t",
        "name": "Pepe",
        "email": "brc@outlook.com",
        "rol":"alumno",
        "courses": [
          "C++","Angular"
        ]
      },
      {
        "id": "31s7",
        "name": "egro",
        "email": "brc@outlook.com",
        "rol":"alumno",
        "courses": [
          "C++","Angular"
        ]
      }
] 