var Nuyie = function(total_players, players_in_each_match){

  this.total  = total_players;
  this.match  = players_in_each_match;
  this.gap    = this.total - this.match;
  this.cursor = 1; // first player
  this.first  = true;

  this.validate = function(cursor){
    if(cursor > this.total){
      return cursor % this.total;
    }
    return cursor;
  }

  this.next = function(){
    // check valid gap
    if(this.gap < 0){
      return null;
    }

    // update next match cursor
    // do not shift in first match
    if(this.first){
      this.first = false;
    }
    else {
      this.cursor += this.gap;
      this.cursor = this.validate(this.cursor);
    }

    // build players list
    let players = [];
    for(let i=0; i<this.match; i++){
      let cur = this.validate(this.cursor+i);
      players.push(cur);
    }
    return players.sort();
  }
}
