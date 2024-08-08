document.getElementById('create').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const race = document.getElementById('race').value;
    const characterClass = document.getElementById('class').value;
    
    // Создание строки для отображения персонажа
    const characterInfo = `
        <h3>${name}</h3>
        <p><strong>Race:</strong> ${race}</p>
        <p><strong>Class:</strong> ${characterClass}</p>
    `;
    
    // Отображение персонажа
    document.getElementById('character-display').innerHTML = characterInfo;
});
