 window.onload = function() {
    canvas = document.getElementById( "canvasJogo" );
  contexto = canvas.getContext( "2d" );
  document.addEventListener("keydown", pressionaTecla );
   setInterval( jogo, 1000 / 15 );
  }
  
  posX = posY = 10;
  tamGride = capacidadeCauda = 20;
  pontoX = pontoY = 15;
  velX = velY = 0;
  trilha = [];
  cauda = 5;
  
  function jogo() {
      posX += velX;
      posY += velY;
       if ( posX < 0 )
          posX = capacidadeCauda - 1;
       if(posX > capacidadeCauda - 1 )
          posX = 0;
       if (posY < 0 )
          posY = capacidadeCauda - 1;
       if (posY > capacidadeCauda - 1 )
          posY = 0;
      contexto.fillStyle = "black";
      contexto.fillRect( 0, 0, canvas.width, canvas.height );
      contexto.fillStyle = "lime";
      for ( var i = 0; i < trilha.length; i++ ) {
          contexto.fillRect( trilha[ i ].x * tamGride, trilha[ i ].y *tamGride, tamGride -2, tamGride -2 );
          if ( trilha [ i ].x== posX && trilha[ i ].y == posY )
          cauda = 5;
      }
      trilha.push ( { x: posX, y: posY } );
      while ( trilha.length > cauda )
       trilha.shift();
  
       if ( pontoX == posX && pontoY == posY ) {
           cauda++;
           pontoX = Math.floor( Math.random() * capacidadeCauda );
           pontoY = Math.floor( Math.random() * capacidadeCauda );
       }
  
       contexto.fillStyle = "red";
       contexto.fillRect( pontoX * tamGride, pontoY * tamGride, tamGride - 2, tamGride - 2 );
  }
  function pressionaTecla( evt ) {
      switch( evt.keyCode ) {
            case 37:
            velX = -1;
            velY = 0;
            break;
            case 38:
            velX = 0;
            velY = -1;
            break;
            case 39:
            velX = 1;
            velY = 0;
            break;
            case 40:
            velX = 0;
            velY = 1;
            break;
  
      }
  }
  