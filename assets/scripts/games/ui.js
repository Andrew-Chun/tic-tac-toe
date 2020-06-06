const newGameSuccess = function (responseData) {
  console.log(responseData)
  $('#game').html(`
    <div class="container" id="board">
        <div class="row">
          <div class="col-4 box" id="1">1</div>
          <div class="col-4 box" id="2">2</div>
          <div class="col-4 box" id="3">3</div>
          <div class="col-4 box" id="4">4</div>
          <div class="col-4 box" id="5">5</div>
          <div class="col-4 box" id="6">6</div>
          <div class="col-4 box" id="7">7</div>
          <div class="col-4 box" id="8">8</div>
          <div class="col-4 box" id="9">9</div>
        </div>
      </div>
  `)
}

const newGameFailure = function () {
  console.log('New game failed to load...')
}

module.exports = {
  newGameSuccess,
  newGameFailure
}
