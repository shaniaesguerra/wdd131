const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

//get chapter list by a function and store it in the variable
// or initializes variable as an empty array if the function call
// returns 'null' or 'undefined'
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});


//Focus on the input area
input.focus();

//creating a click event listener for the ADD Chapter button
button.addEventListener('click', function () {
    if (input.value.trim() !== '') {

        displayList(input.value);
        chaptersArray.push(input.value); //add chapter to array
        setChapterList(); // update local storage with new array

        //clean up input for the user
        input.value = '';
        input.focus();
    }
    else {
        //focus on the input
        input.focus();
    }
});

/*---------------------------------------------------------------------------------------------------------- 
Function: displayList(item)
Purpose: builds a chapter list and calls a delete function to remove a chapter in both
        the array and the local Storage
Description: Has one arguement, "item" which is the input where the user types in their desired
        chapter of the Book of Mormon.
------------------------------------------------------------------------------------------------------------*/
function displayList(item) {
    //create an li element
    const li = document.createElement('li');

    //create a button
    const deleteButton = document.createElement('button');

    //populate li element with input value
    li.textContent = item;

    //populate button textContent with an X
    deleteButton.textContent = '❌';

    //append li element with button
    li.append(deleteButton);

    //append li element to the unordered list in the HTML 
    list.append(li);

    //creating a click event listener for the DELETE button
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // function to remove chapter from array and the localStorage
        input.focus();
    });
}


/*---------------------------------------------------------------------------------------------------------- 
Function: setChapterList()
Purpose: sets the localStorage item that you named and stringifies the array
Description: no arguements
------------------------------------------------------------------------------------------------------------*/
function setChapterList() {
    localStorage.setItem('chapterList', JSON.stringify(chaptersArray));
}


/*---------------------------------------------------------------------------------------------------------- 
Function: getChapterList()
Purpose: gets the localStorage item and returns to an awaiting array
Description: no arguements
------------------------------------------------------------------------------------------------------------*/
function getChapterList() {
    return JSON.parse(localStorage.getItem('chapterList'));
}

/*---------------------------------------------------------------------------------------------------------- 
Function: deleteChapter(chapter)
Purpose: deletes a chapter in the array and updates the local Storage item
Description: Has one argument called 'chapter', which is the arrray of chapters
------------------------------------------------------------------------------------------------------------*/
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // get rid of the last character
    chaptersArray = chaptersArray.filter(item => item !== chapter); // return everything except the chapter to be removed
    setChapterList();
}

