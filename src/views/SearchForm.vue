<template>
    <main>
        <form class="search-form-container" id="form1" name="form1">
            <select name="subject" id="subject" class="pill">
                <option value="" selected="selected">City</option>
            </select>
            <select name="topic" id="topic" class="pill">
                <option value="" selected="selected">Square meters</option>
            </select>
            <select name="chapter" id="chapter" class="pill">
                <option value="" selected="selected">Min price</option>
            </select>
            <select name="estateType" id="estateType" class="pill">
                <option value="" selected="selected">Estate type</option>
            </select>
            <select name="nRooms" id="nRooms" class="pill">
                <option value="" selected="selected">Number of rooms</option>
            </select>
            <select name="maxPrice" id="maxPrice" class="pill">
                <option value="" selected="selected">Max price</option>
            </select>
            <select name="actionType" id="actionType" class="pill">
                <option value="" selected="selected">Action type</option>
            </select>
            <select name="nBaths" id="nBaths" class="pill">
                <option value="" selected="selected">Number of baths</option>
            </select>
            <router-link to="/search/results">
                <input class="big-button" type="submit" value="Submit">
            </router-link>
        </form>
    </main>
    <footer>
    </footer>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'SearchForm',
  components: {
  }
}

var subjectObject = {
  'Front-end': {
    HTML: ['Links', 'Images', 'Tables', 'Lists'],
    CSS: ['Borders', 'Margins', 'Backgrounds', 'Float'],
    JavaScript: ['Variables', 'Operators', 'Functions', 'Conditions']
  },
  'Back-end': {
    PHP: ['Variables', 'Strings', 'Arrays'],
    SQL: ['SELECT', 'UPDATE', 'DELETE']
  }
}
window.onload = function () {
  var subjectSel = document.getElementById('subject')
  var topicSel = document.getElementById('topic')
  var chapterSel = document.getElementById('chapter')
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x)
  }
  subjectSel.onchange = function () {
    // empty Chapters- and Topics- dropdowns
    chapterSel.length = 1
    topicSel.length = 1
    // display correct values
    for (var y in subjectObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y)
    }
  }
  topicSel.onchange = function () {
    // empty Chapters dropdown
    chapterSel.length = 1
    // display correct values
    var z = subjectObject[subjectSel.value][this.value]
    for (var i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i])
    }
  }
}
</script>
