const proFile = document.querySelector('#mainProfile');

fetch('https://randomuser.me/api/?results=30')
    .then ((resp) => resp.json())
    .then(function (data) {
        let users = data.results;
        return users.map((user) => {

            const mainCard = document.createElement('div');
            const subCard = document.createElement('div');
            const bodyFrame = document.createElement('div');
            const bodyCard = document.createElement('div');
            const cardImg = document.createElement('div');
            const profilePix = document.createElement('img');
            const contentSpan = document.createElement('span');
            const profName = document.createElement('h5');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');

            //Appeding child elements to parent element
            mainCard.appendChild(subCard);
            subCard.append(cardImg, bodyFrame);
            bodyFrame.appendChild(bodyCard);
            cardImg.appendChild(profilePix);
            proFile.appendChild(mainCard);
            

            //Adding classes to elements
            mainCard.classList.add("card", "mb-3", "maincard");
            subCard.classList.add("row", "g-0");
            cardImg.classList.add("col-md-4");
            bodyFrame.classList.add("col-md-8");
            bodyCard.classList.add("card-body");
            profilePix.classList.add("img-fluid", "profileImg");
            profName.classList.add("card-title");
            
            let firstName = user.name.first;
            let lastName = user.name.last;
            let email = user.email;
            let city = user.location.city;
            let nat = user.location.country;

            
            let profile = bodyCard.appendChild(profName);
            let cSpan = bodyCard.appendChild(contentSpan);
            let eMail = bodyCard.appendChild(p1);
            let locC = bodyCard.appendChild(p2);
            let Nationality = bodyCard.appendChild(p3);

            profile.innerHTML = `${firstName} ${lastName}`;
            eMail.innerHTML = `${email}`;
            locC.innerHTML = `City: ${city}`;
            Nationality.innerHTML = `Nationality: ${nat}`;
            cSpan.innerHTML = "Email:"

            let image = cardImg.appendChild(profilePix);
            image.src = user.picture.large;

        });
    })

    .catch(function(error) {
        console.log('error', error);
    });