import React from "react";


// https://bobbyhadz.com/blog/typescript-new-expression-whose-target-lacks-construct-signature


class UserClass {
  name: string;
  say: () => void;

  constructor(name: string) {
    this.name = name;
    this.say = function () {
      console.log(`My name is ${this.name}`);
    }
  }
}

class UserFactoryClass {
  create: (name: string) => any;
 
  constructor() {
    this.create = function (name: string) {
      return  new (UserClass as any) (name);
    }
  }
}

// let newUserItemOne = new UserFactoryClass();
// let newUserList = [newUserItemOne.create("nick")];
// console.log(newUserList[0].say());





const AbstractFactoryClassBased: React.FC <any>= (props) => {
  
  let newUserItemOne = new UserFactoryClass();

  let newUserList = [newUserItemOne.create(props.name)];
  console.log("Here", newUserList[0]);

  return ( 
    <>
      <h1>AbstractFactory AbstractFactoryClassBased</h1>

    </>
  );
}
export default AbstractFactoryClassBased;