function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var draggedElement = document.getElementById(data);

  // Check if the drop target is a groupbox and append the dragged element
  if (ev.target.classList.contains('groupbox')) {
    ev.target.appendChild(draggedElement);

    // Change the background color of the box to orange if the image with id="pic" is dropped in #box
    if (ev.target.id === 'box' && data === 'pic') {
      ev.target.style.backgroundColor = 'green';
    }
    else if (ev.target.id == 'box2' && data == 'drag2') {
      ev.target.style.backgroundColor = 'green';
    }
    else if (ev.target.id == 'box3' && data == 'drag3') {
      ev.target.style.backgroundColor = 'green';
    }
    else if (ev.target.id == 'box4' && data == 'drag4') {
      ev.target.style.backgroundColor = 'green';
    }
    else if (ev.target.id == 'box5' && data == 'drag5') {
      ev.target.style.backgroundColor = 'green';
    }
    else if (ev.target.id == 'box6' && data == 'drag6') {
      ev.target.style.backgroundColor = 'green';
    }
    else if (ev.target.id == 'box7' && data == 'drag7') {
      ev.target.style.backgroundColor = 'green';
    }
    else if (ev.target.id == 'box8' && data == 'drag8') {
      ev.target.style.backgroundColor = 'green';
    }
    else if (ev.target.id == 'box9' && data == 'drag9') {
      ev.target.style.backgroundColor = 'green';
    }
    else if (ev.target.id == 'box10' && data == 'drag10') {
      ev.target.style.backgroundColor = 'green';
    }
    else {
      ev.target.style.backgroundColor = 'orange';
    }
  }
}

// Add event listeners to all groupbox elements
document.querySelectorAll('.groupbox').forEach(box => {
  box.addEventListener('drop', drop);
  box.addEventListener('dragover', allowDrop);
});
