var nav = document.getElementById('myNav'); // Identify targets


      window.addEventListener('scroll', function(event) { // To listen for event
          event.preventDefault();
      
          if (window.scrollY <= 150) { // Set scroll amount
              nav.style.backgroundColor = 'transparent'; // or default color
              document.getElementById("mwHead").classList.remove("d-block")
              document.getElementById("mwHead").classList.add("d-none");
          } else {
              nav.style.backgroundColor = 'var(--dark1)';
              document.getElementById("mwHead").classList.remove("d-none");
              document.getElementById("mwHead").classList.add("d-block");
              
          }
      });

