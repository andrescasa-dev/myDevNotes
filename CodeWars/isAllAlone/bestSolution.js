function allAlone(house) {
  function flood(y,x) {
    if ( house[y][x]==='o' )
      return false;
    else if ( house[y][x]!=='#' ) {
      house[y][x] = '#';
      return flood(y-1,x) && flood(y+1,x) && flood(y,x-1) && flood(y,x+1) ;
    } else
      return true;
  }
  const y = house.findIndex( line => line.includes('X') ), x = house[y].indexOf('X');
  return flood(y,x);
}