function getId(id) {
    return document.getElementById(id);
}

function getClass(a, b) {
    return document.getElementsByClassName(a)[b];
}
getId('redag').onclick = function() {
    getId('box6').style.display = 'block';
    getId('box7').style.display = 'none';
    let box4 = getId('box4').innerHTML;
    console.log(box4);
    getId('myText').value = box4;
}
getId('save').onclick = function() {
    let box = getId('myText').value;
    getId('box4').innerHTML = box;
}
getId('styl').onclick = function() {
    getId('box7').style.display = 'block';
    getId('box6').style.display = 'none';
}
let styleText = document.forms['styleText'];
for (let i = 0; i < styleText.length; i++) {
    styleText.elements[i].addEventListener('click', function() {
        getId('box4').style.fontSize = this.value;
    })
}
let radioButton = document.querySelectorAll('input[type="radio"]');
console.log(radioButton);
for (let i = 0; i < radioButton.length; i++) {
    radioButton[i].addEventListener('click', function() {
        let viL = radioButton[i].value;
        console.log(viL);
        getId('box4').style.fontSize = viL;
    });
}
let forma = document.forms['forma'];
forma.TextX.onchange = function() {
    for (let i = 0; i < forma.TextX.length; i++) {
        if (forma.TextX.options[i].selected) {
            getId('box4').style.fontFamily = this.value;
        }
    }
}
getId('boldFont').onclick = function() {
    if (this.checked) {
        getId('box4').style.fontWeight = 'bold';
    } else {
        getId('box4').style.fontWeight = 'normal';
    }
}
getId('cursiveFont').onclick = function() {
    if (this.checked) {
        getId('box4').style.fontStyle = 'italic';
    } else {
        getId('box4').style.fontStyle = 'normal';
    }
}
getId('textCol').onclick = function() {
    getId('colFont').style.display = 'flex';
    console.log(getId('colFont').children);
    for (let i = 0; i < getId('colFont').children.length; i++) {
        getId('colFont').children[i].onclick = function() {
            getId('box4').style.color = this.id;
            getId('colFont').style.display = 'none';
        }
    }
}
getId('bgCol').onclick = function() {
    getId('colFont').style.display = 'flex';
    for (let i = 0; i < getId('colFont').children.length; i++) {
        getId('colFont').children[i].onclick = function() {
            getId('box4').style.backgroundColor = this.id;
            getId('colFont').style.display = 'none';

        }
    }
}
getId('add').addEventListener('click', function() {
    getId('box1').style.display = 'none';
    getId('box5').style.display = 'none';
    getId('box4').style.display = 'none';
    getId('table_list_container').style.display = 'block';
});

getId('radio_list').addEventListener('change', function() {
    getId('create_list').style.display = 'block';
    getId('create_table').style.display = 'none';
});

getId('radio_table').addEventListener('change', function() {
    getId('create_table').style.display = 'block';
    getId('create_list').style.display = 'none';
});

getId('create_list_button').addEventListener('click', function(event) {
    event.preventDefault();

    const number = +getId('elem_number').value;
    const marker = getId('list_marker').value;
    const ul = document.createElement('ul');

    ul.style.listStyleType = marker;
    ul.style.width = '50px';
    ul.style.marginLeft = '30px';

    for (let i = 1; i < number + 1; i++) {
        const li = document.createElement('li');
        li.innerHTML = 'Text' + i;
        ul.appendChild(li);
    }

    const container = document.createElement('div');
    container.appendChild(ul);

    const textValue = getId('myText').value;
    const ulDOM = container.innerHTML;

    getId('myText').value = textValue + '\n' + ulDOM;
    getId('box4').style.display = "block";
    getId('box5').style.display = "block";
    getId('box1').style.display = "block";
    getId('table_list_container').style.display = "none";
});


getId('create_table').addEventListener('submit', function(event) { 
    event.preventDefault(); 
    let rows = +getId('rows').value; 
    let columns = +getId('columns').value; 
    let cellWidth = getId('cellWidth').value; 
    let cellHeight = getId('cellHeight').value; 
    let borderWidth = getId('borderWidth').value; 
    const table = document.createElement('table');
    table.style.border = borderWidth + "px " + getId("typeBorder").value + " " + getId("getColor").value; 
    for (let i = 1; i < rows + 1; i++) { 
        const tr = document.createElement('tr'); 
        for (let i = 1; i < columns + 1; i++) { 
            const td = document.createElement('td');
            td.style.width = cellWidth + "px";
            td.style.height = cellHeight + "px";
            tr.appendChild(td); 
            const border = borderWidth + "px " + getId("typeBorder").value + " " + getId("getColor").value;
            td.style.border = border;
        }
        table.appendChild(tr); 
    } const container = document.createElement('div');
    container.appendChild(table); 
    const textValue = getId('myText').value; 
    const tableDOM = container.innerHTML;
    getId('myText').value = textValue + '\n' + tableDOM;
    getId('box4').style.display = "block";
    getId('box5').style.display = "block";
    getId('box1').style.display = "block";
    getId('table_list_container').style.display = "none"; 
});