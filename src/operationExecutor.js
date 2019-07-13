'use strict';

class OperationExecutor {
  constructor() {
    this.state = {
      0: this.firstTaskExecute.bind(this),
      1: this.secondTaskExecute.bind(this),
      2: this.thirdTaskExecute.bind(this),
      3: this.fourthTaskExecute.bind(this),
      4: this.fifthTaskExecute.bind(this),
      5: this.sixthTaskExecute.bind(this),
      6: this.seventhTaskExecute.bind(this),
      7: this.eighthTaskExecute.bind(this),
      8: this.ninthTaskExecute.bind(this),
      9: this.tenthTaskExecute.bind(this),
    };
  }

  /**
   * Execute some transformation of incoming arg
   * @param actionType – type of transformation
   * @param arg – incoming arg
   * @returns object with result
   */
  execute(actionType, arg) {
    return this.state[actionType](arg);
  }

  /**
   * First task of homework
   * @param arg – object with value that you should clone
   * arg = { obj1: { ... } }
   * @returns object that contains source object and his modified clone
   */
  firstTaskExecute(arg) {
      let target = {"obj1": {}};
      for (let key in arg.obj1) {
        if(key !== "relatives") {
          target.obj1[key] = arg.obj1[key];
        }
      }
      target.obj1.relatives = [];
      let arr = arg.obj1.relatives;
      arr.forEach(function(item, i, arr){
          target.obj1.relatives[i] = {...arr[i]};
      });

      /*console.log("result:");
      console.log(target);
      target["obj1"]["firstName"] = "Petr";
      target["obj1"]["lastName"] = "Fedorov";
      target.obj1.relatives[1].firstName = "Angarapurna";
      console.log("new result:");
      console.log(target);
      console.log("old object:");
      console.log(arg);*/

      return target /* variable with result */;
  }

  /**
   * Second task of homework
   * @param arg – object with values that you should combine
   * arg = { obj1: { ... }, obj2: { ... } }
   * @returns object that contains source objects and their combined and modified clone
   */
  secondTaskExecute(arg) {
      let target = {"obj1": {}};

      target.obj1 = Object.assign(target.obj1, arg.obj1, arg.obj2);

/*
      console.log("result:");
      console.log(target);
      target["obj1"]["a"] = 888;
      target["obj1"]["d"] = 999;
      console.log("new result:");
      console.log(target);
      console.log("old object:");
      console.log(arg);
*/

      return target /* variable with result */;
  }

  /**
   * Third task of homework
   * @param arg – object with value that you should modify
   * arg = { obj1: { ... } }
   * @returns object that contains modified source object
   */
  thirdTaskExecute(arg) {
      let target = {"obj1": {}};

      for (let key in arg["obj1"]) {
          if(key !== "relatives") {
              target["obj1"][key] = arg["obj1"][key];
          }
      }
      target["obj1"]["relatives"] = [];
      let arr = arg["obj1"]["relatives"];
      arr.forEach((item, i, arr) => {
          target["obj1"]["relatives"][i] = {};
          Object.assign(target["obj1"]["relatives"][i], arr[i]);
          target["obj1"]["relatives"][i]["gender"] = "female";
      });

       /*console.log("result:");
      console.log(target);
      target["obj1"]["firstName"] = "Petr";
      target["obj1"]["lastName"] = "Fedorov";
      target["obj1"]["relatives"][1]["firstName"] = "Angarapurna";
      target["obj1"]["relatives"][2]["gender"] = "male";
      console.log("new result:");
      console.log(target);
      console.log("old object:");
      console.log(arg);*/

    return target /* variable with result */;
  }

  /**
   * Fourth task of homework
   * @param arg – object with value that contains relatives
   * arg = { obj1: { ... relatives: [ ... ] ... } }
   * @returns object that contains array of string with female relatives
   */
  fourthTaskExecute(arg) {
      let target = ``;
      let arr = arg.obj1.relatives;
      arr.forEach((item, i, arr) => {
          target += `<p>Доброе утро, ${arr[i]["firstName"]}!</p>`;
      });

      /*let a = document.getElementsByClassName("task_3")[0];
      let b = a.querySelector(".task__description");
       b.innerHTML += target;*/

    return target /* variable with result */;
  }

  /**
   * Fifth task of homework
   * @param arg – object which contains new color of the button and the class of it
   * arg = { color: '...', className: '...' }
   * @returns string which contains the class of the button and current color
   */
  fifthTaskExecute(arg) {
      let cl = arg.className;
      let col = arg.color;
      let elem = document.getElementsByClassName(cl)[0];
      elem.style.backgroundColor = col;
      return '';
  }

  /**
   * Sixth task of homework
   * @param arg – object with values that you should handle
   * arg = { obj1: { ... } }
   * @returns object that contains array of items that match the hostname on which the application is running
   */
  sixthTaskExecute(arg) {
    let target = {"hostNames": []};
    let myhost = window.location.hostname;
    let arr = arg.hostNames;
    let j = 0;
    arr.forEach( (item, i, arr) => {
       if(arr[i] === myhost){
           target.hostNames[j] = arr[i];
           j++;
       }
    });
    return target;
  }

  /**
   * Seventh task of homework
   * @param arg – object which contains simple key-value pairs
   * arg = { obj1: { key: value } }
   * @returns obj that contains swap pairs ('value: key')
   */
  seventhTaskExecute(arg) {
    let target = {};
      for (let key in arg) {
          target[arg[key]] = key;
      }

      /*console.log("old object:");
      console.log(arg);*/

    return target;
  }

  /**
   * Eighth task of homework
   * @param arg – object which contains two array
   * arg = { obj1: { ... } }
   * @returns obj that built using array's values
   */
  eighthTaskExecute(arg) {
      let arr = arg["arr1"].concat(arg["arr2"]);
      let target = {};
      arr.forEach((item, i, arr) => {
       if(i%2 === 0){
           if( arr[i+1] !== undefined) {
               target[item] = arr[i + 1];
           }
           else{
               target[item] = null;
           }
       }
    });
    return target;
  }

  /**
   * Ninth task of homework
   * @param arg – object which contains array of users
   * arg = { obj1: { users: [...] } }
   * @returns obj that contains pairs id: obj with this id
   */
  ninthTaskExecute(arg) {
    let arr = arg.users;
    let target = {};
    arr.forEach((item,i,arr) => {
       target[item.id] = item;
    });
    return target;
  }

  /**
   * Tenth task of homework
   * @param arg – object which contains class of item and empty array
   * arg = { obj1: { ... } }
   * @returns obj that contains the array with info about children of the node
   */
  tenthTaskExecute(arg) {
    let clname = arg["className"];
    let elem = document.getElementsByClassName(clname)[0];
    let childs = elem.children;
    for(let i=0; i < childs.length; i++){
        arg["childrenInfo"][i] = {"tag": childs[i].tagName, "class": childs[i].classList};
    }

    return arg;
  }
}

export default OperationExecutor;
