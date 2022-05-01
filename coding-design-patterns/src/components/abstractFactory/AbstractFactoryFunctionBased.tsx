import React, { useState } from "react";





// https://bobbyhadz.com/blog/typescript-new-expression-whose-target-lacks-construct-signature

interface IUserFunction {
  this: any;
  name: string;
  new (say: () => void): typeof UserFunction;
}


function UserFunction(this: any, name: string) {
    this.name = name;
    this.say = function () {
      return console.log("this is cool", this.name);
  };
}


class UserFactoryClass {
  create: (name: string) => any;

  constructor() {
    this.create = function (name: string) {
      return  new (UserFunction as any) (name);
    }
  }

}



const AbstractFactoryFunctionBased: React.FC <any>= (props) => {
  
  let newUserItemOne = new UserFactoryClass();
  // console.log("Function Based new user item", newUserItemOne)
  let newUserList = [newUserItemOne.create("dingo")];
  let bingo = newUserItemOne.create("bingo");
  bingo.say()


  return ( 
    <>
      <h1>AbstractFactory Starter 1</h1>

    </>
  );
}
export default AbstractFactoryFunctionBased;