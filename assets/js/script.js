(() => {
    'use strict';

    const btns = document.querySelectorAll('.tooltip button');
    const form = document.querySelector('form');

    btns.forEach((bt, i) => {
        const input = document.querySelectorAll('.result');

        bt.addEventListener('click', () => {
            input[i].select();
            input[i].setSelectionRange(0, 99999);
            navigator.clipboard.writeText(input[i].value);
            
            const tooltip = document.querySelectorAll(".tooltip__text");
            tooltip[i].innerHTML = "Copiado: " + input[i].value;
        });

        bt.addEventListener('mouseout', () => {
            const tooltip = document.querySelector(".tooltip__text");
            tooltip.innerHTML = "Copiar para a área de transferência";
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const getValue = document.getElementById('thisInsertInput').value;
        const setValueLink = document.getElementById('thisLinkInput');
        const setValueJSON = document.getElementById('thisJSONInput');

        let getValueWithoutAccent = getValue.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

        getValueWithoutAccent = getValueWithoutAccent.replace(/[^a-zA-Z0-9 ]/g, "");

        let getValueLink = getValueWithoutAccent.replace(/\s+/g, '-');

        let getValueJSON = getValueWithoutAccent.replace(/\s+/g, '_');

        setValueLink.value = getValueLink;

        setValueJSON.value = "page_" + getValueJSON;
        
    });
})();

