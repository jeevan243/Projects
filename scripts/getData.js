

async function getData(url) {

    //taking url in parameter to make it more dynamic
    try {

        let responce = await fetch(url)
        let stream = await responce.json();

        // let data = stream.meals;
        return stream.meals
        // console.log(stream.meals)

    } catch (er) {
        console.log(er);
    }

}

//// append data to certain required location

function appendData(data, location) {

    data.map((ele) => {


        let div = document.createElement("div");

        let img = document.createElement("img");

        img.src = ele.strMealThumb;

        let title = document.createElement("h3");
        title.textContent = ele.strMeal;


        let receipe = document.createElement("p");
        receipe.textContent = ele.strInstructions;



        div.append(img, title, receipe);
        location.append(div);
    })
}

export { getData, appendData };