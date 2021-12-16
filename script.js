let navItem = document.querySelectorAll(".nav-items");
let items = document.querySelectorAll(".items");



navItem.forEach(function (el)
{
    el.addEventListener("click", function ()
    {
        document.querySelector(".active").classList.remove("active");
        el.classList.add("active");

        let temp = el.dataset.target;
        console.log(temp);

        items.forEach(function (el)
        {
            let x = el.dataset.item;
            el.classList.add("hidden");
            el.classList.remove("show");

            if (x == temp || temp == "all")
            {
                el.classList.add("show");
                el.classList.remove("hidden");
            }
        })
    })
    })