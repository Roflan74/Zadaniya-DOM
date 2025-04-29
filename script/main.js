// Задание 1
{
    const testText = document.querySelector(".test-text");

    testText.innerHTML = "Привет, <b>мир!</b> Меня зовут <i>Андрей</i>.";
    testText.style.backgroundColor = "#00d0ff";
    testText.style.color = "#0800ff";
    testText.style.border = "3px solid black";
}

// Задание 2
{
    const email = document.getElementById("email");
    const remember = document.getElementById("remember");
    const btn = document.getElementById("btn1");

    email.setAttribute("value", "mail@mail.ru");
    email.setAttribute("readonly", "");
    remember.setAttribute("checked", "");
    btn.setAttribute("value", "Войти");
}

// Задание 3
{
    const midisLink = document.createElement("a");

    midisLink.innerText = "Ссылка на сайт";
    midisLink.setAttribute("href", "https://midis.ru");
    midisLink.setAttribute("target", "_blank");
    midisLink.classList.add("hover-effect");

    const block = document.getElementById("block");
    block.append(midisLink);
}

// Задание 4
{
    const btn = document.getElementById("btn2");
    const baloon = document.querySelector(".baloon");

    btn.addEventListener("click", function() {
        baloon.classList.add("baloon-move");
    });
}