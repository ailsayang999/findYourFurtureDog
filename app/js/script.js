let dogPic = document.querySelector('.dogPic')
let button = document.querySelector('.btn')


button.addEventListener('click', function () {
  axios.get('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
      console.log(response)
      let picture = response.data.message
      console.log(picture)
      dogPic.src = picture
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
})



