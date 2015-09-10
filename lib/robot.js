'use strict';


function Robot() {
  // implement your solution here!
  this.orient = function(direction){
    var directions = [ 'east', 'west', 'north', 'south' ];
    if(directions.indexOf(direction) >= 0){
      this.bearing = direction;
    } 
    else{
      throw new Error("Invalid Robot Bearing");
    }
  }

  this.turnRight = function(){
    this.bearing //because in test, we called this.orient, the return of that is this.bearing and we can just say this.bearing
    if(this.bearing == 'north'){
      this.bearing = 'east';
    }
    else if(this.bearing == 'east'){
      this.bearing = 'south';
    }
    else if(this.bearing == 'south'){
      this.bearing = 'west';
    }
    else if(this.bearing == 'west'){
      this.bearing = 'north';
    }
  }

  this.turnLeft = function(){
    this.bearing
    if(this.bearing == 'north'){
      this.bearing = 'west';
    }
    else if(this.bearing == 'west'){
      this.bearing = 'south';
    }
    else if(this.bearing == 'south'){
      this.bearing = 'east';
    }
    else if(this.bearing == 'east'){
      this.bearing = 'north';
    }
  }

  this.advance = function(){
    var x = this.coordinates[0]
    var y = this.coordinates[1] 
    this.bearing
    if(this.bearing == 'north'){
      this.coordinates = [x,y+1];
    }
    else if(this.bearing == 'east'){
      this.coordinates = [x+1,y];
    }
    else if(this.bearing == 'south'){
      this.coordinates = [x, y-1];
    }
    else if(this.bearing == 'west'){
      this.coordinates = [x-1, y];
    }
  }

  this.at = function(num1,num2){
    this.coordinates = [num1,num2];
  }

  this.instructions = function(letters){
    var letters_array = letters.split('')
    var instructions_array = letters_array.map(function(letter){
      if(letter == 'L'){
// Why do I have to put return here? I thought return will stop the whole function.
        return 'turnLeft';
      }
      else if(letter == 'R'){
        return 'turnRight';
      }
      else if(letter == 'A'){
        return 'advance';
      }
    })
    return instructions_array
  }
  this.place = function(placement){
    var x = placement['x']
    var y = placement['y']
    this.direction = placement['direction']
    this.at(x,y)
  }
  this.evaluate = function(letters){
    var instructions = this.instructions(letters)
    var that = this //bound it to put into .map so we can have this.
    instructions.map(function(command){
      var direction = that.direction
      that.orient(direction)

      if(command == 'turnRight'){
        that.turnRight();
        that.direction = that.bearing
      }
      else if(command == 'turnLeft'){
        that.turnLeft();
        that.direction = that.bearing
      }
      else if(command == 'advance'){
        that.advance();
        that.direction = that.bearing
      }
    })
  }
}


