
    const text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
      console.log(text[employees]);
      console.log(typeof(text));

      const obj =JSON.parse(text);
      console.log(typeof(obj));
      console.log(obj);

      //Parcours de la liste des employés 

      for (employee of obj. employees) {
          console.log (`Employé.e : ${employee.firstname} ${employee.lastname}`);
          
      }
    